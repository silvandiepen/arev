---
title: Cities Endpoint
description: Search or filter city records from the hosted arevdata API.
order: 50
tags: api, endpoint, cities
---

# `GET /cities`

Searches or filters city records.

## Expects

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | `string` | Localized city naming language. Defaults to `en`. |
| `q` | `string` | Free-text city search. |
| `country` | ISO alpha-2 | Restrict to a country code such as `MT` or `JP`. |
| `sort` | `population` | Sort matching results by descending population. |
| `limit` | positive integer | Cap the number of returned records. |

When no query parameters are provided, the endpoint returns the full city dataset.

## Returns

```json
{
  "data": [
    {
      "name": "Valletta",
      "country": "MT",
      "capital": true,
      "capitalTypes": ["country"],
      "population": 5827
    }
  ],
  "meta": {
    "count": 1
  }
}
```

## Examples

```bash
curl "https://api.arevdata.com/cities?q=Valletta"
curl "https://api.arevdata.com/cities?country=US&sort=population&limit=10"
curl "https://api.arevdata.com/cities?q=San&country=MX&limit=5"
```

## Related docs

- [Cities](/data/cities/)
