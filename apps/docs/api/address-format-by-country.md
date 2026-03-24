---
title: Address Format by Country Endpoint
description: Retrieve a single address-format record by ISO alpha-2 country code.
order: 31
tags: api, endpoint, address-formats
---

# `GET /address-formats/:alpha2`

Returns a single address-format record for the requested country.

## Expects

Path parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `alpha2` | ISO alpha-2 | Country code such as `MT` or `JP`. |

## Returns

```json
{
  "data": {
    "countryCode": "MT",
    "format": "%N%n%O%n%A%n%Z %C",
    "required": ["A", "C", "N", "Z"]
  }
}
```

## Example

```bash
curl "https://api.arevdata.com/address-formats/MT"
curl "https://api.arevdata.com/address-formats/JP"
```

## Related docs

- [Address Formats](/data/address-formats/)
