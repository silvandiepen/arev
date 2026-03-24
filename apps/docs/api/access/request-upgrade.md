---
title: Request Upgrade Endpoint
description: Submit a manual review request for a higher arevdata API access tier.
order: 30
tags: api, access, upgrade
---

# `POST /access/request-upgrade`

Submits a manual review request for a higher API tier.

No API key is required for this endpoint.

## Expects

Request body:

```json
{
  "email": "you@example.com",
  "tier": "higher",
  "reason": "Public app, commercial use, or other justification."
}
```

Rules:

- `email` must be valid.
- `reason` must be at least 10 characters.
- `tier` defaults to `"higher"` when omitted.

## Returns

```json
{
  "data": {
    "status": "pending",
    "tier": "higher",
    "message": "Your upgrade request has been submitted."
  }
}
```

## Example

```bash
curl "https://api.arevdata.com/access/request-upgrade" \
  -X POST \
  -H "content-type: application/json" \
  -d '{"email":"you@example.com","tier":"higher","reason":"Public production app serving many users."}'
```

## Related docs

- [API Access](/api/access/)
