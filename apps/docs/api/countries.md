---
title: Countries Endpoint
description: List country records with optional localization and filters.
order: 40
tags: api, endpoint, countries
---

# `GET /countries`

Lists countries, with optional language, recognition, and continent filtering.

## Expects

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized country naming language. Defaults to `en`. |
| `recognized` | `true \| false` | Filter to recognized or non-recognized states. |
| `continent` | continent name | One of `Africa`, `Antarctica`, `Asia`, `Europe`, `North America`, `Oceania`, `South America`. |

## Returns

```json
{
  "data": [
    {
      "alpha2": "MT",
      "name": "Malta",
      "continent": "Europe",
      "recognized": true
    }
  ],
  "meta": {
    "count": 1
  }
}
```

## Examples

```bash
curl "https://api.arevdata.com/countries"
curl "https://api.arevdata.com/countries?continent=Europe"
curl "https://api.arevdata.com/countries?recognized=true&lang=fr"
```

## Related docs

- [Countries](/data/countries/)
- [Continents & Currencies](/data/continents-currencies/)
