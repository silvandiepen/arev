---
title: Astronomy Endpoint
description: Retrieve moon-phase and hemisphere-aware season data for a given date.
order: 90
tags: api, endpoint, astronomy
---

# `GET /astronomy`

Returns a moon-phase snapshot and hemisphere-aware season information for a given date.

## Expects

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | ISO-8601 date string | Defaults to the current date and time. |
| `hemisphere` | `north \| south` | Season hemisphere. Defaults to `north`. |

## Returns

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

## Examples

```bash
curl "https://api.arevdata.com/astronomy"
curl "https://api.arevdata.com/astronomy?date=2026-06-21T12:00:00.000Z"
curl "https://api.arevdata.com/astronomy?date=2026-06-21T12:00:00.000Z&hemisphere=south"
```

## Related docs

- [Sun & Moon Data](/astronomy/sun-moon/)
