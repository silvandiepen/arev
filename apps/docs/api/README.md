---
title: API Overview
description: Overview of the hosted arevdata HTTP endpoints, with links to detailed request and response docs.
archive: articles
archiveTitle: Explore the API reference
menuChildren: true
order: 15
tags: api, http, reference
---

# API Overview

The hosted API exposes the package datasets and rendering helpers over straightforward JSON endpoints.

## Base URL

```txt
https://api.arevdata.com
```

## Common response format

Successful responses use a `data` envelope and may include `meta`:

```json
{
  "data": [],
  "meta": {
    "count": 0
  }
}
```

Errors use an `error` object:

```json
{
  "error": {
    "code": "invalid_query",
    "message": "limit must be a positive integer"
  }
}
```

## API access

Hosted access is intentionally capped. For API keys, authentication headers, signup flow, and upgrade requests, see [API Access](/api/access/).

## Endpoints

| Method | Path | Overview | Details |
|--------|------|----------|---------|
| `GET` | `/health` | Healthcheck for uptime and worker diagnostics. | [Health](/api/health/) |
| `GET` | `/meta` | Dataset counts, supported languages, and route inventory. | [Meta](/api/meta/) |
| `POST` | `/access/signup` | Start the free API key signup flow by email. | [Signup](/api/access/signup/) |
| `GET` | `/access/verify?token=...` | Verify the emailed token and reveal a free API key. | [Verify](/api/access/verify/) |
| `POST` | `/access/request-upgrade` | Submit a manual review request for a higher tier. | [Request Upgrade](/api/access/request-upgrade/) |
| `GET` | `/address-formats` | Full address-format dataset keyed by country. | [Address Formats](/api/address-formats/) |
| `GET` | `/address-formats/:alpha2` | Single address-format record by alpha-2 country code. | [Address Format by Country](/api/address-format-by-country/) |
| `GET` | `/countries` | Country collection with localization and filters. | [Countries](/api/countries/) |
| `GET` | `/countries/:alpha2` | Single country record by alpha-2 code. | [Country by Code](/api/country-by-code/) |
| `GET` | `/cities` | City collection with search, filtering, and limits. | [Cities](/api/cities/) |
| `GET` | `/cities/capital/:alpha2` | Capital city record for a country. | [Capital City](/api/capital-city/) |
| `GET` | `/phone-codes` | Phone-code mappings with lookup and search. | [Phone Codes](/api/phone-codes/) |
| `GET` | `/timezones` | IANA timezone mappings with lookup and search. | [Timezones](/api/timezones/) |
| `GET` | `/maps/world` | JSON response containing a rendered SVG world map. | [World Map](/api/world-map/) |
| `GET` | `/astronomy` | Moon-phase and hemisphere-aware season snapshot for a date. | [Astronomy](/api/astronomy/) |

## Notes

- Every endpoint above has its own page with request inputs, examples, and response shapes.
- All routes support `OPTIONS`.
- `POST` is only supported for `/access/signup` and `/access/request-upgrade`.
- JSON endpoints include CORS headers for browser-based demos and integrations.
- Collection endpoints that return arrays may include `meta.count`.
- Requests that exceed burst or daily limits return `429` with `Retry-After`.
