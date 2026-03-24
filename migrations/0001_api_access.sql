CREATE TABLE IF NOT EXISTS api_key_signups (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  verification_token_hash TEXT NOT NULL,
  verification_token_expires_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  api_key_id TEXT,
  verified_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS api_keys (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  key_id TEXT NOT NULL UNIQUE,
  key_hash TEXT NOT NULL UNIQUE,
  tier TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  daily_limit INTEGER NOT NULL,
  created_at TEXT NOT NULL,
  last_used_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_api_keys_email ON api_keys(email);
CREATE INDEX IF NOT EXISTS idx_api_keys_status ON api_keys(status);

CREATE TABLE IF NOT EXISTS api_usage_daily (
  subject_type TEXT NOT NULL,
  subject_id TEXT NOT NULL,
  usage_date TEXT NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (subject_type, subject_id, usage_date)
);

CREATE TABLE IF NOT EXISTS api_key_upgrade_requests (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  requested_tier TEXT NOT NULL,
  reason TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_upgrade_requests_email
  ON api_key_upgrade_requests(email);
