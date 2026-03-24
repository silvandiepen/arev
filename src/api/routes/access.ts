import {
  createApiKeySignup,
  requestApiKeyUpgrade,
  verifyApiKeySignup,
} from "../access.js";
import type { ApiEnv } from "../env.js";

export function handleAccessSignup(request: Request, env: ApiEnv | undefined): Promise<Response> {
  return createApiKeySignup(request, env);
}

export function handleAccessVerify(request: Request, env: ApiEnv | undefined): Promise<Response> {
  return verifyApiKeySignup(request, env);
}

export function handleAccessUpgradeRequest(
  request: Request,
  env: ApiEnv | undefined
): Promise<Response> {
  return requestApiKeyUpgrade(request, env);
}
