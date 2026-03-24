---
title: Health Endpoint
description: Uptime and worker diagnostics for the hosted arevdata API.
order: 10
tags: api, endpoint, health
---

# `GET /health`

Lightweight healthcheck for uptime probes and worker diagnostics.

## Expects

No query parameters and no request body.

## Returns

```json
{
  "data": {
    "status": "ok"
  }
}
```

## Example

```bash
curl "https://api.arevdata.com/health"
```
