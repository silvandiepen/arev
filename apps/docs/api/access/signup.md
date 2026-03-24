---
title: Signup Endpoint
description: Start the free arevdata API key signup flow.
order: 10
tags: api, access, signup
---

# `POST /access/signup`

Creates a free-tier signup request and sends a verification email.

No API key is required for this endpoint.

## Expects

Request body:

```json
{
  "email": "you@example.com"
}
```

Rules:

- `email` must be a valid email address.
- The local part must not include a `+` alias.

## Returns

```json
{
  "data": {
    "status": "pending",
    "tier": "free",
    "message": "Check your email for the verification link."
  }
}
```

## Example

```bash
curl "https://api.arevdata.com/access/signup" \
  -X POST \
  -H "content-type: application/json" \
  -d '{"email":"you@example.com"}'
```

## Related docs

- [API Access](/api/access/)
