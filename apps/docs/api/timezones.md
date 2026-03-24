---
title: Timezones Endpoint
description: Look up IANA timezone records by country, exact zone name, or search.
order: 70
tags: api, endpoint, timezones
---

# `GET /timezones`

Lists IANA timezone mappings, with support for country lookup, exact zone lookup, and search.

## Expects

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `country` | ISO alpha-2 | Filter to all timezone records that overlap a country or territory code. |
| `zone` | IANA timezone name | Resolve a single timezone such as `Europe/Malta`. |
| `q` | `string` | Free-text search across zone names, territory names, comments, and display labels. |
| `limit` | positive integer | Cap the number of returned records. |

## Returns

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

## Examples

```bash
curl "https://api.arevdata.com/timezones?country=MT"
curl "https://api.arevdata.com/timezones?zone=Europe/Malta"
curl "https://api.arevdata.com/timezones?q=zurich&limit=5"
```

## Related docs

- [Timezones](/astronomy/timezones/)
