export interface RateLimitResult {
  success: boolean;
}

export interface RateLimitBinding {
  limit(options: { key: string }): Promise<RateLimitResult>;
}

export interface D1Statement {
  bind(...values: unknown[]): D1Statement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run(): Promise<unknown>;
}

export interface D1DatabaseBinding {
  prepare(query: string): D1Statement;
}

export interface ApiEnv {
  API_ACCESS_DB?: D1DatabaseBinding;
  ANON_API_RATE_LIMITER?: RateLimitBinding;
  ANON_MAPS_RATE_LIMITER?: RateLimitBinding;
  API_KEY_API_RATE_LIMITER?: RateLimitBinding;
  API_KEY_MAPS_RATE_LIMITER?: RateLimitBinding;
  SIGNUP_RATE_LIMITER?: RateLimitBinding;
  RESEND_API_KEY?: string;
  ACCESS_EMAIL_FROM?: string;
  ACCESS_EMAIL_REPLY_TO?: string;
  ACCESS_EMAIL_ADMIN_TO?: string;
  PUBLIC_API_ORIGIN?: string;
  ADMIN_ACCESS_TOKEN?: string;
}
