import type { ApiEnv, D1DatabaseBinding, RateLimitBinding } from "./env.js";
import { error } from "./response.js";

const ANON_DAILY_LIMIT = 100;
const FREE_API_KEY_DAILY_LIMIT = 2500;
const SIGNUP_DAILY_LIMIT = 3;
const UPGRADE_REQUEST_DAILY_LIMIT = 2;
const SIGNUP_TOKEN_TTL_MS = 1000 * 60 * 30;

type RouteClass = "api" | "maps" | "signup";

interface ApiKeyRecord {
  id: string;
  email: string;
  key_id: string;
  key_hash: string;
  tier: string;
  status: string;
  daily_limit: number;
}

interface SignupRecord {
  id: string;
  email: string;
  verification_token_hash: string;
  verification_token_expires_at: string;
  status: string;
}

function getCorsHeaders(): Record<string, string> {
  return {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "content-type, authorization, x-api-key",
  };
}

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function getRouteClass(pathname: string): RouteClass {
  if (pathname.startsWith("/access/")) {
    return "signup";
  }

  if (pathname === "/maps/world") {
    return "maps";
  }

  return "api";
}

function getClientId(request: Request): string {
  const forwardedIp = request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  if (forwardedIp && forwardedIp.length > 0) {
    return forwardedIp;
  }

  return "anonymous";
}

function getApiKeyFromRequest(request: Request): string | undefined {
  const explicit = request.headers.get("x-api-key")?.trim();
  if (explicit) {
    return explicit;
  }

  const authorization = request.headers.get("authorization")?.trim();
  if (!authorization) {
    return undefined;
  }

  const [scheme, token] = authorization.split(/\s+/, 2);
  if (scheme?.toLowerCase() === "bearer" && token) {
    return token.trim();
  }

  return undefined;
}

function getTodayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

function getVerifyUrl(request: Request, token: string, env: ApiEnv): string {
  const origin = env.PUBLIC_API_ORIGIN?.trim() || new URL(request.url).origin;
  return `${origin}/access/verify?token=${encodeURIComponent(token)}`;
}

function isAllowedSignupEmail(email: string): boolean {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return false;
  }

  const [localPart] = email.split("@", 1);
  return !localPart.includes("+");
}

function getRetryHeaders(seconds: number): Record<string, string> {
  return {
    "retry-after": String(seconds),
  };
}

function getThrottleResponse(message: string, retryAfterSeconds: number): Response {
  return error(429, "rate_limited", message, {
    headers: getRetryHeaders(retryAfterSeconds),
  });
}

function getApiKeyConfigError(): Response {
  return error(503, "api_keys_unavailable", "API key access is not configured");
}

function getSignupConfigError(message: string): Response {
  return error(503, "signup_unavailable", message);
}

function getResendConfig(env: ApiEnv): {
  apiKey: string;
  from: string;
  replyTo?: string;
  adminTo: string;
} | null {
  const apiKey = env.RESEND_API_KEY?.trim();
  const from = env.ACCESS_EMAIL_FROM?.trim();
  const adminTo = env.ACCESS_EMAIL_ADMIN_TO?.trim();
  const replyTo = env.ACCESS_EMAIL_REPLY_TO?.trim();

  if (!apiKey || !from || !adminTo) {
    return null;
  }

  return {
    apiKey,
    from,
    adminTo,
    ...(replyTo ? { replyTo } : {}),
  };
}

async function sendResendEmail(
  env: ApiEnv,
  message: {
    to: string | string[];
    subject: string;
    text: string;
    html: string;
    replyTo?: string;
  }
): Promise<Response | null> {
  const config = getResendConfig(env);
  if (!config) {
    return getSignupConfigError("Resend email delivery is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${config.apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: Array.isArray(message.to) ? message.to : [message.to],
      subject: message.subject,
      text: message.text,
      html: message.html,
      ...(message.replyTo ?? config.replyTo
        ? { reply_to: [message.replyTo ?? config.replyTo].filter(Boolean) }
        : {}),
    }),
  });

  if (response.ok) {
    return null;
  }

  return getSignupConfigError("Resend email delivery failed");
}

async function sha256Hex(value: string): Promise<string> {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function toBase64Url(bytes: Uint8Array): string {
  const binary = String.fromCharCode(...bytes);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function randomToken(byteLength: number): string {
  const bytes = crypto.getRandomValues(new Uint8Array(byteLength));
  return toBase64Url(bytes);
}

function createApiKeySecret(): { keyId: string; apiKey: string } {
  const keyId = randomToken(9);
  const secret = randomToken(24);
  return {
    keyId,
    apiKey: `arev_live_${keyId}.${secret}`,
  };
}

function extractKeyId(apiKey: string): string | undefined {
  const match = /^arev_live_([A-Za-z0-9_-]+)\.[A-Za-z0-9_-]+$/.exec(apiKey.trim());
  return match?.[1];
}

async function enforceBindingLimit(
  binding: RateLimitBinding | undefined,
  key: string,
  message: string,
  retryAfterSeconds: number
): Promise<Response | null> {
  if (!binding) {
    return null;
  }

  const result = await binding.limit({ key });
  if (result.success) {
    return null;
  }

  return getThrottleResponse(message, retryAfterSeconds);
}

async function getApiKeyRecord(
  db: D1DatabaseBinding,
  keyId: string
): Promise<ApiKeyRecord | null> {
  return db
    .prepare(
      `SELECT id, email, key_id, key_hash, tier, status, daily_limit
       FROM api_keys
       WHERE key_id = ?1
       LIMIT 1`
    )
    .bind(keyId)
    .first<ApiKeyRecord>();
}

async function getSignupRecordByToken(
  db: D1DatabaseBinding,
  tokenHash: string
): Promise<SignupRecord | null> {
  return db
    .prepare(
      `SELECT id, email, verification_token_hash, verification_token_expires_at, status
       FROM api_key_signups
       WHERE verification_token_hash = ?1
       LIMIT 1`
    )
    .bind(tokenHash)
    .first<SignupRecord>();
}

async function getUsageCount(
  db: D1DatabaseBinding,
  subjectType: string,
  subjectId: string,
  usageDate: string
): Promise<number> {
  const row = await db
    .prepare(
      `SELECT request_count
       FROM api_usage_daily
       WHERE subject_type = ?1 AND subject_id = ?2 AND usage_date = ?3
       LIMIT 1`
    )
    .bind(subjectType, subjectId, usageDate)
    .first<{ request_count: number }>();

  return row?.request_count ?? 0;
}

async function setUsageCount(
  db: D1DatabaseBinding,
  subjectType: string,
  subjectId: string,
  usageDate: string,
  requestCount: number
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO api_usage_daily (subject_type, subject_id, usage_date, request_count)
       VALUES (?1, ?2, ?3, ?4)
       ON CONFLICT(subject_type, subject_id, usage_date)
       DO UPDATE SET request_count = excluded.request_count`
    )
    .bind(subjectType, subjectId, usageDate, requestCount)
    .run();
}

async function incrementUsageCount(
  db: D1DatabaseBinding,
  subjectType: string,
  subjectId: string,
  usageDate: string
): Promise<number> {
  const nextCount = (await getUsageCount(db, subjectType, subjectId, usageDate)) + 1;
  await setUsageCount(db, subjectType, subjectId, usageDate, nextCount);
  return nextCount;
}

async function touchApiKeyUsage(db: D1DatabaseBinding, keyId: string, timestamp: string): Promise<void> {
  await db
    .prepare(
      `UPDATE api_keys
       SET last_used_at = ?2
       WHERE key_id = ?1`
    )
    .bind(keyId, timestamp)
    .run();
}

async function authenticateApiKey(
  db: D1DatabaseBinding,
  apiKey: string
): Promise<ApiKeyRecord | null> {
  const keyId = extractKeyId(apiKey);
  if (!keyId) {
    return null;
  }

  const record = await getApiKeyRecord(db, keyId);
  if (!record || record.status !== "active") {
    return null;
  }

  const providedHash = await sha256Hex(apiKey);
  if (providedHash !== record.key_hash) {
    return null;
  }

  return record;
}

async function dispatchSignupEmail(
  request: Request,
  email: string,
  token: string,
  env: ApiEnv
): Promise<Response | null> {
  const verifyUrl = getVerifyUrl(request, token, env);
  return sendResendEmail(env, {
    to: email,
    subject: "Confirm your arevdata free API key request",
    text: [
      "Confirm your email to create your arevdata free API key.",
      "",
      verifyUrl,
      "",
      "This link expires in 30 minutes.",
    ].join("\n"),
    html: `<p>Confirm your email to create your arevdata free API key.</p><p><a href="${verifyUrl}">${verifyUrl}</a></p><p>This link expires in 30 minutes.</p>`,
  });
}

async function createSignupRequestRecord(
  db: D1DatabaseBinding,
  email: string,
  tokenHash: string,
  expiresAt: string,
  timestamp: string
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO api_key_signups (
         id,
         email,
         verification_token_hash,
         verification_token_expires_at,
         status,
         created_at,
         updated_at
       )
       VALUES (?1, ?2, ?3, ?4, 'pending', ?5, ?5)
       ON CONFLICT(email)
       DO UPDATE SET
         verification_token_hash = excluded.verification_token_hash,
         verification_token_expires_at = excluded.verification_token_expires_at,
         status = 'pending',
         updated_at = excluded.updated_at`
    )
    .bind(crypto.randomUUID(), email, tokenHash, expiresAt, timestamp)
    .run();
}

async function rotateExistingKeys(db: D1DatabaseBinding, email: string, timestamp: string): Promise<void> {
  await db
    .prepare(
      `UPDATE api_keys
       SET status = 'rotated', last_used_at = COALESCE(last_used_at, ?2)
       WHERE email = ?1 AND status = 'active'`
    )
    .bind(email, timestamp)
    .run();
}

async function createApiKeyRecord(
  db: D1DatabaseBinding,
  email: string,
  timestamp: string
): Promise<{ apiKey: string; keyId: string }> {
  await rotateExistingKeys(db, email, timestamp);

  const { keyId, apiKey } = createApiKeySecret();
  const keyHash = await sha256Hex(apiKey);

  await db
    .prepare(
      `INSERT INTO api_keys (
         id,
         email,
         key_id,
         key_hash,
         tier,
         status,
         daily_limit,
         created_at,
         last_used_at
       )
       VALUES (?1, ?2, ?3, ?4, 'free', 'active', ?5, ?6, NULL)`
    )
    .bind(crypto.randomUUID(), email, keyId, keyHash, FREE_API_KEY_DAILY_LIMIT, timestamp)
    .run();

  return { apiKey, keyId };
}

async function markSignupVerified(
  db: D1DatabaseBinding,
  signupId: string,
  keyId: string,
  timestamp: string
): Promise<void> {
  await db
    .prepare(
      `UPDATE api_key_signups
       SET status = 'verified',
           verified_at = ?2,
           api_key_id = ?3,
           updated_at = ?2
       WHERE id = ?1`
    )
    .bind(signupId, timestamp, keyId)
    .run();
}

export async function applyAccessControl(
  request: Request,
  env: ApiEnv | undefined
): Promise<Response | null> {
  if (request.method === "OPTIONS") {
    return null;
  }

  const apiEnv = env ?? {};
  const pathname = normalizePathname(new URL(request.url).pathname);
  const routeClass = getRouteClass(pathname);

  if (routeClass === "signup") {
    return null;
  }

  const clientId = getClientId(request);
  const db = apiEnv.API_ACCESS_DB;
  const apiKey = getApiKeyFromRequest(request);

  if (apiKey) {
    if (!db) {
      return getApiKeyConfigError();
    }

    const record = await authenticateApiKey(db, apiKey);
    if (!record) {
      return error(401, "invalid_api_key", "Invalid API key");
    }

    const bindingLimit = await enforceBindingLimit(
      routeClass === "maps" ? apiEnv.API_KEY_MAPS_RATE_LIMITER : apiEnv.API_KEY_API_RATE_LIMITER,
      `${record.key_id}:${routeClass}`,
      "API key rate limit exceeded",
      60
    );
    if (bindingLimit) {
      return bindingLimit;
    }

    const nextCount = await incrementUsageCount(db, "api_key", record.key_id, getTodayKey());
    if (nextCount > record.daily_limit) {
      return getThrottleResponse("API key daily limit exceeded", 86400);
    }

    await touchApiKeyUsage(db, record.key_id, new Date().toISOString());
    return null;
  }

  const bindingLimit = await enforceBindingLimit(
    routeClass === "maps" ? apiEnv.ANON_MAPS_RATE_LIMITER : apiEnv.ANON_API_RATE_LIMITER,
    `${clientId}:${routeClass}`,
    "Anonymous rate limit exceeded",
    60
  );
  if (bindingLimit) {
    return bindingLimit;
  }

  if (!db) {
    return null;
  }

  const nextCount = await incrementUsageCount(db, "anon", clientId, getTodayKey());
  if (nextCount > ANON_DAILY_LIMIT) {
    return getThrottleResponse("Anonymous daily limit exceeded", 86400);
  }

  return null;
}

export async function createApiKeySignup(
  request: Request,
  env: ApiEnv | undefined
): Promise<Response> {
  const apiEnv = env ?? {};
  const db = apiEnv.API_ACCESS_DB;
  if (!db) {
    return getSignupConfigError("API key signup requires a D1 database binding");
  }

  const clientId = getClientId(request);
  const rateLimited = await enforceBindingLimit(
    apiEnv.SIGNUP_RATE_LIMITER,
    clientId,
    "Signup rate limit exceeded",
    60
  );
  if (rateLimited) {
    return rateLimited;
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return error(400, "invalid_body", "Request body must be valid JSON");
  }

  const email = typeof body === "object" && body !== null && "email" in body
    ? String((body as { email: unknown }).email).trim().toLowerCase()
    : "";

  if (!isAllowedSignupEmail(email)) {
    return error(
      400,
      "invalid_body",
      "email must be valid and must not include a plus alias"
    );
  }

  const signupCount = await incrementUsageCount(db, "signup", clientId, getTodayKey());
  if (signupCount > SIGNUP_DAILY_LIMIT) {
    return getThrottleResponse("Signup daily limit exceeded", 86400);
  }

  const token = randomToken(24);
  const tokenHash = await sha256Hex(token);
  const timestamp = new Date().toISOString();
  const expiresAt = new Date(Date.now() + SIGNUP_TOKEN_TTL_MS).toISOString();

  await createSignupRequestRecord(db, email, tokenHash, expiresAt, timestamp);

  const emailError = await dispatchSignupEmail(request, email, token, apiEnv);
  if (emailError) {
    return emailError;
  }

  return new Response(
    JSON.stringify({
      data: {
        status: "pending",
        tier: "free",
        message: "Check your email for the verification link.",
      },
    }),
    {
      status: 200,
      headers: getCorsHeaders(),
    }
  );
}

export async function verifyApiKeySignup(
  request: Request,
  env: ApiEnv | undefined
): Promise<Response> {
  const apiEnv = env ?? {};
  const db = apiEnv.API_ACCESS_DB;
  if (!db) {
    return getSignupConfigError("API key signup requires a D1 database binding");
  }

  const token = new URL(request.url).searchParams.get("token")?.trim();
  if (!token) {
    return error(400, "invalid_query", "token is required");
  }

  const tokenHash = await sha256Hex(token);
  const signup = await getSignupRecordByToken(db, tokenHash);

  if (!signup || signup.status !== "pending") {
    return error(404, "not_found", "Signup token not found");
  }

  if (new Date(signup.verification_token_expires_at).getTime() < Date.now()) {
    return error(410, "expired_token", "Signup token has expired");
  }

  const timestamp = new Date().toISOString();
  const { apiKey, keyId } = await createApiKeyRecord(db, signup.email, timestamp);
  await markSignupVerified(db, signup.id, keyId, timestamp);

  return new Response(
    JSON.stringify({
      data: {
        status: "verified",
        tier: "free",
        email: signup.email,
        apiKey,
        dailyLimit: FREE_API_KEY_DAILY_LIMIT,
      },
    }),
    {
      status: 200,
      headers: getCorsHeaders(),
    }
  );
}

export async function requestApiKeyUpgrade(
  request: Request,
  env: ApiEnv | undefined
): Promise<Response> {
  const apiEnv = env ?? {};
  const db = apiEnv.API_ACCESS_DB;
  if (!db) {
    return getSignupConfigError("Upgrade requests require a D1 database binding");
  }

  const clientId = getClientId(request);
  const rateLimited = await enforceBindingLimit(
    apiEnv.SIGNUP_RATE_LIMITER,
    `${clientId}:upgrade`,
    "Upgrade request rate limit exceeded",
    60
  );
  if (rateLimited) {
    return rateLimited;
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return error(400, "invalid_body", "Request body must be valid JSON");
  }

  const email = typeof body === "object" && body !== null && "email" in body
    ? String((body as { email: unknown }).email).trim().toLowerCase()
    : "";
  const reason = typeof body === "object" && body !== null && "reason" in body
    ? String((body as { reason: unknown }).reason).trim()
    : "";
  const requestedTier = typeof body === "object" && body !== null && "tier" in body
    ? String((body as { tier: unknown }).tier).trim().toLowerCase()
    : "higher";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return error(400, "invalid_body", "email must be a valid email address");
  }

  if (reason.length < 10) {
    return error(400, "invalid_body", "reason must be at least 10 characters");
  }

  const requestCount = await incrementUsageCount(db, "upgrade_request", clientId, getTodayKey());
  if (requestCount > UPGRADE_REQUEST_DAILY_LIMIT) {
    return getThrottleResponse("Upgrade request daily limit exceeded", 86400);
  }

  const timestamp = new Date().toISOString();
  await db
    .prepare(
      `INSERT INTO api_key_upgrade_requests (
         id,
         email,
         requested_tier,
         reason,
         status,
         created_at
       )
       VALUES (?1, ?2, ?3, ?4, 'pending', ?5)`
    )
    .bind(crypto.randomUUID(), email, requestedTier, reason, timestamp)
    .run();

  const resendConfig = getResendConfig(apiEnv);
  if (!resendConfig) {
    return getSignupConfigError("Resend email delivery is not configured");
  }

  const emailResponse = await sendResendEmail(apiEnv, {
    to: resendConfig.adminTo,
    subject: `arevdata API upgrade request: ${requestedTier}`,
    text: [
      "A new API upgrade request has been submitted.",
      "",
      `Email: ${email}`,
      `Requested tier: ${requestedTier}`,
      `Submitted at: ${timestamp}`,
      "",
      "Reason:",
      reason,
    ].join("\n"),
    html: [
      "<p>A new API upgrade request has been submitted.</p>",
      `<p><strong>Email:</strong> ${email}<br />`,
      `<strong>Requested tier:</strong> ${requestedTier}<br />`,
      `<strong>Submitted at:</strong> ${timestamp}</p>`,
      `<p><strong>Reason:</strong></p><p>${reason.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />")}</p>`,
    ].join(""),
    replyTo: email,
  });

  if (emailResponse) {
    return emailResponse;
  }

  return new Response(
    JSON.stringify({
      data: {
        status: "pending",
        tier: requestedTier,
        message: "Your upgrade request has been submitted.",
      },
    }),
    {
      status: 200,
      headers: getCorsHeaders(),
    }
  );
}
