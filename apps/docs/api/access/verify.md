---
title: Verify Endpoint
description: Verify a free-key signup token and reveal the new arevdata API key.
order: 20
tags: api, access, verify
---

# `GET /access/verify`

Verifies a signup token and returns a new free-tier API key.

No API key is required for this endpoint.

## Expects

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `token` | string | Verification token from the signup email. Required. |

## Returns

```json
{
  "data": {
    "status": "verified",
    "tier": "free",
    "email": "you@example.com",
    "apiKey": "arev_live_...",
    "dailyLimit": 2500
  }
}
```

## Example

```bash
curl "https://api.arevdata.com/access/verify?token=TOKEN_FROM_EMAIL"
```

## Related docs

- [API Access](/api/access/)
