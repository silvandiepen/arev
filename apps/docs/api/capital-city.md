---
title: Capital City Endpoint
description: Retrieve the capital city record for a country.
order: 51
tags: api, endpoint, cities
---

# `GET /cities/capital/:alpha2`

Returns the capital city record for a country.

## Expects

Path parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `alpha2` | ISO alpha-2 | Country code such as `MT` or `BR`. |

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized city naming language. Defaults to `en`. |

## Returns

```json
{
  "data": {
    "name": "Valletta",
    "country": "MT",
    "capital": true
  }
}
```

## Examples

```bash
curl "https://api.arevdata.com/cities/capital/MT"
curl "https://api.arevdata.com/cities/capital/BR?lang=pt"
```

## Related docs

- [Cities](/data/cities/)
- [Countries](/data/countries/)
