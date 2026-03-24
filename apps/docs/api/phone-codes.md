---
title: Phone Codes Endpoint
description: Look up phone-code mappings by country, dialling code, or free-text search.
order: 60
tags: api, endpoint, phone-codes
---

# `GET /phone-codes`

Lists phone-code mappings, with support for country lookup, shared dialling code lookup, and fuzzy search.

## Expects

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `country` | ISO alpha-2 | Resolve a single country mapping. |
| `phoneCode` | `string` | Filter by a calling code such as `+1` or `356`. |
| `q` | `string` | Free-text match against country name, ISO code, or digits. |
| `limit` | positive integer | Cap the number of returned records. |

## Returns

```json
{
  "data": [
    {
      "code": "MT",
      "country": "Malta",
      "phoneCode": "+356"
    }
  ],
  "meta": {
    "count": 1
  }
}
```

## Examples

```bash
curl "https://api.arevdata.com/phone-codes?country=MT"
curl "https://api.arevdata.com/phone-codes?phoneCode=%2B1"
curl "https://api.arevdata.com/phone-codes?q=malta"
```

## Related docs

- [Phone Country Codes](/data/phone-codes/)
