---
title: Country by Code Endpoint
description: Retrieve a single country record by ISO alpha-2 code.
order: 41
tags: api, endpoint, countries
---

# `GET /countries/:alpha2`

Fetches a single country by ISO 3166-1 alpha-2 code.

## Expects

Path parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `alpha2` | ISO alpha-2 | Country code such as `MT` or `JP`. |

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized naming language. Defaults to `en`. |

## Returns

```json
{
  "data": {
    "alpha2": "MT",
    "name": "Malta",
    "continent": "Europe",
    "recognized": true
  }
}
```

## Examples

```bash
curl "https://api.arevdata.com/countries/MT"
curl "https://api.arevdata.com/countries/JP?lang=ja"
```

## Related docs

- [Countries](/data/countries/)
