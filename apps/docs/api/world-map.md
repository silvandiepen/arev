---
title: World Map Endpoint
description: Retrieve a rendered SVG world map payload with optional highlighting and color overrides.
order: 80
tags: api, endpoint, maps
---

# `GET /maps/world`

Returns a rendered SVG world map string together with highlight metadata.

## Expects

Query parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `highlight` | `CODE:#hex,...` | Highlight one or more countries, for example `MT:#ff6b6b,JP:#4dabf7`. |
| `fill` | hex color | Base fill for non-highlighted countries. |
| `stroke` | hex color | Stroke color for borders. |
| `hoverFill` | hex color | Hover fill color. |

## Returns

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

## Examples

```bash
curl "https://api.arevdata.com/maps/world"
curl "https://api.arevdata.com/maps/world?highlight=MT:%23ff6b6b,JP:%234dabf7"
curl "https://api.arevdata.com/maps/world?fill=%23f8f5ef&stroke=%23d0c7b8&hoverFill=%23ffb703"
```

## Related docs

- [World Map](/maps/world-map/)
