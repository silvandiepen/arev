---
title: Meta Endpoint
description: Dataset counts, supported languages, and published route inventory for the hosted API.
order: 20
tags: api, endpoint, metadata
---

# `GET /meta`

Returns dataset counts, supported languages, and the published route list.

## Expects

No query parameters and no request body.

## Returns

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
      "moonPhases": 8,
      "planets": 8,
      "moons": 12,
      "stars": 10,
      "galaxies": 1
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

## Example

```bash
curl "https://api.arevdata.com/meta"
```

## Related docs

- [Homepage](/)
- [Data & Assets](/data/)
- [Astronomy & Time](/astronomy/)
