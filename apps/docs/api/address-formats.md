---
title: Address Formats Endpoint
description: Retrieve the full address-format dataset keyed by country code.
order: 30
tags: api, endpoint, address-formats
---

# `GET /address-formats`

Returns the full address-format dataset keyed by country code.

## Expects

No query parameters and no request body.

## Returns

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

## Example

```bash
curl "https://api.arevdata.com/address-formats"
```

## Related docs

- [Address Formats](/data/address-formats/)
