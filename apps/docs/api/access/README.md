---
title: API Access
description: API keys, hosted access limits, authentication headers, and the free-key signup flow for arevdata.
archive: articles
archiveTitle: Explore API access docs
menuChildren: true
order: 5
tags: api, access, auth
---

# API Access

The hosted API supports anonymous access and optional API-key-authenticated access.

For unlimited use of the datasets, install `@arevs/data` directly instead of relying on the hosted API.

## Authentication

Send your API key using either header:

```http
x-api-key: arev_live_...
Authorization: Bearer arev_live_...
```

## Access tiers

| Access type | Daily limit | Notes |
|-------------|-------------|-------|
| Anonymous | `100` requests per day | Intended for demos, testing, and light usage. |
| Free API key | `2500` requests per day | Available after email verification. |
| Higher tier | Manual review | Requested through the upgrade endpoint. |

Burst rate limits are also enforced. If a request exceeds burst or daily limits, the API returns `429` and includes `Retry-After`.

## Free API key flow

1. Call [`POST /access/signup`](/api/access/signup/) with your email address.
2. Open the verification link from the email within 30 minutes.
3. Call [`GET /access/verify`](/api/access/verify/) using that token to reveal the new API key.

Notes:

- Email addresses using `+` aliases are rejected for free-key signup.
- Verifying a new signup rotates any previously active key for the same email.
- The API key is revealed by the verify endpoint, not sent directly in the email.

## Upgrade flow

If you need a higher tier for production or commercial use, submit [`POST /access/request-upgrade`](/api/access/request-upgrade/) with your email, requested tier, and a clear reason.

## Access endpoints

- [Signup](/api/access/signup/)
- [Verify](/api/access/verify/)
- [Request Upgrade](/api/access/request-upgrade/)
