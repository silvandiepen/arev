---
title: API Reference
description: HTTP endpoint reference for the hosted arevdata API, with query parameters, examples, and related feature docs.
order: 15
tags: api, http, reference
---

# API Reference

The hosted API exposes the package datasets and rendering helpers over straightforward JSON endpoints.

## Base URL

```txt
https://api.arevdata.com
```

## Response format

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

## Live endpoint test

<div>
  <arev-api-playground></arev-api-playground>
</div>

## Access policy

The hosted API is intentionally capped.

- Anonymous access is heavily rate-limited and capped per day.
- Free API keys are available through email verification and have higher limits than anonymous access.
- Higher tiers are manual and must be requested separately.
- Installing the `arevdata` package remains the unlimited path for full dataset access. The npm package is not rate-limited because it does not depend on the hosted API.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Healthcheck for uptime and worker diagnostics. |
| `GET` | `/meta` | Dataset counts, supported languages, and route inventory. |
| `POST` | `/access/signup` | Request a free API key by email. |
| `GET` | `/access/verify?token=...` | Verify the emailed signup token and receive a free API key. |
| `POST` | `/access/request-upgrade` | Request a higher API tier for an existing use case. |
| `GET` | `/address-formats` | All address-format records keyed by country. |
| `GET` | `/address-formats/:alpha2` | A single address-format record by alpha-2 country code. |
| `GET` | `/countries` | Country collection with filtering. |
| `GET` | `/countries/:alpha2` | Single country record by alpha-2 code. |
| `GET` | `/cities` | City collection with search and filters. |
| `GET` | `/cities/capital/:alpha2` | Capital city record for a country. |
| `GET` | `/phone-codes` | Phone-code mappings with lookup and search. |
| `GET` | `/timezones` | IANA timezone mappings with lookup and search. |
| `GET` | `/maps/world` | Rendered SVG world map payload. |
| `GET` | `/astronomy` | Moon-phase and season snapshot for a date. |

### `GET /health`

Lightweight healthcheck for uptime probes and worker diagnostics.

```bash
curl https://api.arevdata.com/health
```

```json
{
  "data": {
    "status": "ok"
  }
}
```

### `GET /meta`

Returns dataset counts, supported languages, and the published route list.

Related docs: [Homepage](/), [Data & Assets](/data/), [Astronomy & Time](/astronomy/)

```bash
curl https://api.arevdata.com/meta
```

Response fields:

```json
{
  "data": {
    "name": "arev",
    "supportedLanguages": ["..."],
    "resources": {
      "countries": 196,
      "addressFormats": 196,
      "phoneCodes": 248,
      "timezones": 312,
      "cities": 270,
      "states": 5027,
      "moonPhases": 8
    },
    "routes": [
      "/health",
      "/meta",
      "/access/signup",
      "/access/verify",
      "/access/request-upgrade",
      "/address-formats",
      "/address-formats/:alpha2",
      "/countries",
      "/countries/:alpha2",
      "/cities",
      "/cities/capital/:alpha2",
      "/phone-codes",
      "/timezones",
      "/maps/world",
      "/astronomy"
    ]
  }
}
```

### `POST /access/signup`

Creates a free-tier signup request and sends a verification email.

Notes:

- Email addresses with `+` aliases are rejected.
- This endpoint is rate-limited aggressively.
- The API key is not emailed directly. The email contains a verification link, and the key is revealed once on verification.

Request body:

```json
{
  "email": "you@example.com"
}
```

Example:

```bash
curl "https://api.arevdata.com/access/signup" \
  -X POST \
  -H "content-type: application/json" \
  -d '{"email":"you@example.com"}'
```

### `GET /access/verify?token=...`

Verifies a signup token and returns a new free-tier API key.

Example:

```bash
curl "https://api.arevdata.com/access/verify?token=TOKEN_FROM_EMAIL"
```

Response shape:

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

### `POST /access/request-upgrade`

Submits a manual review request for a higher API tier.

Request body:

```json
{
  "email": "you@example.com",
  "tier": "higher",
  "reason": "Public app, commercial use, or other justification."
}
```

Example:

```bash
curl "https://api.arevdata.com/access/request-upgrade" \
  -X POST \
  -H "content-type: application/json" \
  -d '{"email":"you@example.com","tier":"higher","reason":"Public production app serving many users."}'
```

### `GET /address-formats`

Returns the full address-format dataset keyed by country code.

Related docs: [Address Formats](/data/address-formats/)

Examples:

```bash
curl "https://api.arevdata.com/address-formats"
```

Response shape:

```json
{
  "data": [
    {
      "countryCode": "MT",
      "format": "%N%n%O%n%A%n%Z %C",
      "required": ["A", "C", "N", "Z"]
    }
  ],
  "meta": {
    "count": 196
  }
}
```

### `GET /address-formats/:alpha2`

Returns a single address-format record for the requested country.

Related docs: [Address Formats](/data/address-formats/)

Examples:

```bash
curl "https://api.arevdata.com/address-formats/MT"
curl "https://api.arevdata.com/address-formats/JP"
```

### `GET /countries`

Lists countries, with optional language, recognition, and continent filtering.

Related docs: [Countries](/data/countries/), [Continents & Currencies](/data/continents-currencies/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized country naming language. Defaults to `en`. |
| `recognized` | `true \| false` | Filter to recognized or non-recognized states. |
| `continent` | continent name | One of `Africa`, `Antarctica`, `Asia`, `Europe`, `North America`, `Oceania`, `South America`. |

Examples:

```bash
curl "https://api.arevdata.com/countries"
curl "https://api.arevdata.com/countries?continent=Europe"
curl "https://api.arevdata.com/countries?recognized=true&lang=fr"
```

### `GET /countries/:alpha2`

Fetches a single country by ISO 3166-1 alpha-2 code.

Related docs: [Countries](/data/countries/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized naming language. Defaults to `en`. |

Examples:

```bash
curl "https://api.arevdata.com/countries/MT"
curl "https://api.arevdata.com/countries/JP?lang=ja"
```

### `GET /cities`

Searches or filters city records.

Related docs: [Cities](/data/cities/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized city naming language. Defaults to `en`. |
| `q` | `string` | Free-text city search. |
| `country` | ISO alpha-2 | Restrict to a country code such as `MT` or `JP`. |
| `sort` | `population` | Sort matching results by descending population. |
| `limit` | positive integer | Cap the number of returned records. |

Examples:

```bash
curl "https://api.arevdata.com/cities?q=Valletta"
curl "https://api.arevdata.com/cities?country=US&sort=population&limit=10"
curl "https://api.arevdata.com/cities?q=San&country=MX&limit=5"
```

### `GET /cities/capital/:alpha2`

Returns the capital city record for a country.

Related docs: [Cities](/data/cities/), [Countries](/data/countries/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized city naming language. Defaults to `en`. |

Examples:

```bash
curl "https://api.arevdata.com/cities/capital/MT"
curl "https://api.arevdata.com/cities/capital/BR?lang=pt"
```

### `GET /phone-codes`

Lists phone-code mappings, with support for country lookup, shared dialing code lookup, and fuzzy search.

Related docs: [Phone Country Codes](/data/phone-codes/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `country` | ISO alpha-2 | Resolve a single country mapping. |
| `phoneCode` | string | Filter by a calling code such as `+1` or `356`. |
| `q` | `string` | Free-text match against country name, ISO code, or digits. |
| `limit` | positive integer | Cap the number of returned records. |

Examples:

```bash
curl "https://api.arevdata.com/phone-codes?country=MT"
curl "https://api.arevdata.com/phone-codes?phoneCode=%2B1"
curl "https://api.arevdata.com/phone-codes?q=malta"
```

### `GET /timezones`

Lists IANA timezone mappings, with support for country lookup, exact zone lookup, and search.

Related docs: [Timezones](/astronomy/timezones/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `country` | ISO alpha-2 | Filter to all timezone records that overlap a country or territory code. |
| `zone` | IANA timezone name | Resolve a single timezone such as `Europe/Malta`. |
| `q` | `string` | Free-text search across zone names, territory names, comments, and display labels. |
| `limit` | positive integer | Cap the number of returned records. |

Examples:

```bash
curl "https://api.arevdata.com/timezones?country=MT"
curl "https://api.arevdata.com/timezones?zone=Europe/Malta"
curl "https://api.arevdata.com/timezones?q=zurich&limit=5"
```

Response shape:

```json
{
  "data": [
    {
      "name": "Europe/Malta",
      "displayName": "Malta",
      "countryCodes": ["MT"],
      "mappableCountryCodes": ["MT"],
      "latitude": 35.9,
      "longitude": 14.5
    }
  ],
  "meta": {
    "count": 1
  }
}
```

### `GET /maps/world`

Returns a rendered SVG world map string together with highlight metadata.

Related docs: [World Map](/maps/world-map/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `highlight` | `CODE:#hex,...` | Highlight one or more countries, for example `MT:#ff6b6b,JP:#4dabf7`. |
| `fill` | hex color | Base fill for non-highlighted countries. |
| `stroke` | hex color | Stroke color for borders. |
| `hoverFill` | hex color | Hover fill color. |

Examples:

```bash
curl "https://api.arevdata.com/maps/world"
curl "https://api.arevdata.com/maps/world?highlight=MT:%23ff6b6b,JP:%234dabf7"
curl "https://api.arevdata.com/maps/world?fill=%23f8f5ef&stroke=%23d0c7b8&hoverFill=%23ffb703"
```

Response shape:

```json
{
  "data": {
    "svg": "<svg>...</svg>",
    "highlightCount": 2,
    "highlights": [
      {
        "code": "MT",
        "fill": "#ff6b6b",
        "label": "Malta"
      }
    ]
  }
}
```

### `GET /astronomy`

Returns a moon-phase snapshot and hemisphere-aware season information for a given date.

Related docs: [Sun & Moon Data](/astronomy/sun-moon/)

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | ISO-8601 date string | Defaults to the current date/time. |
| `hemisphere` | `north \| south` | Season hemisphere. Defaults to `north`. |

Examples:

```bash
curl "https://api.arevdata.com/astronomy"
curl "https://api.arevdata.com/astronomy?date=2026-06-21T12:00:00.000Z"
curl "https://api.arevdata.com/astronomy?date=2026-06-21T12:00:00.000Z&hemisphere=south"
```

Response shape:

```json
{
  "data": {
    "date": "2026-06-21T12:00:00.000Z",
    "hemisphere": "south",
    "moon": {
      "key": "waxing-gibbous",
      "name": "Waxing Gibbous"
    },
    "sun": {
      "season": {
        "name": "winter",
        "hemisphere": "south",
        "label": "Winter (Southern Hemisphere)"
      }
    }
  }
}
```

## Notes

- The currently available endpoints are exactly the routes listed in the table above and in `GET /meta`.
- All endpoints support `GET` and `OPTIONS`.
- `POST` is additionally supported for `/access/signup` and `/access/request-upgrade`.
- JSON endpoints include CORS headers for browser-based demos.
- Collection endpoints that return arrays may include `meta.count`.
- Requests that exceed burst or daily limits return `429` with `Retry-After`.
