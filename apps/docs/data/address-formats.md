---
title: Address Formats
description: Country-specific address templates, required fields, labels, and postal-code patterns.
order: 16
tags: addresses, postal, formatting
---

# Address Formats

`arevdata` includes normalized postal address metadata for every bundled country. The data is based on Google's public address metadata, with a generic fallback for countries the upstream dataset does not cover.

## Import

```ts
import {
  addressFormats,
  getAddressFormatByCountry,
  formatAddress,
} from "/data";
import type {
  AddressInput,
  CountryAddressFormat,
} from "/data";
```

## Data shape

```ts
interface CountryAddressFormat {
  alpha2: string;
  format: string;
  latinFormat?: string;
  usedFields: AddressField[];
  requiredFields: AddressField[];
  uppercaseFields: AddressField[];
  postalCodePattern?: string;
  postalCodeExamples?: string[];
  postalCodePrefix?: string;
  postalCodeType: "postal" | "zip" | "pin" | "eircode";
  administrativeAreaType:
    | "province"
    | "state"
    | "county"
    | "department"
    | "district"
    | "do_si"
    | "emirate"
    | "island"
    | "oblast"
    | "parish"
    | "prefecture"
    | "region";
  localityType: "city" | "district" | "post_town" | "suburb";
  dependentLocalityType: "district" | "neighborhood" | "suburb" | "townland";
}
```

## Template tokens

```ts
type AddressField =
  | "recipient"
  | "organization"
  | "streetAddress"
  | "dependentLocality"
  | "locality"
  | "administrativeArea"
  | "postalCode"
  | "sortingCode";
```

The underlying `format` string uses `%N`, `%O`, `%A`, `%D`, `%C`, `%S`, `%Z`, `%X`, and `%n` tokens from Google's postal metadata.

## Examples

### Get the US address format

```ts
const us = getAddressFormatByCountry("US");

console.log(us?.postalCodeType); // "zip"
console.log(us?.requiredFields);
// ["streetAddress", "locality", "administrativeArea", "postalCode"]
```

### Format an address

```ts
const address: AddressInput = {
  recipient: "Ada Lovelace",
  streetAddress: "1600 Amphitheatre Pkwy",
  locality: "Mountain View",
  administrativeArea: "CA",
  postalCode: "94043",
};

console.log(formatAddress(address, "US"));
// Ada Lovelace
// 1600 Amphitheatre Pkwy
// MOUNTAIN VIEW, CA 94043
```

### Prefer a latin-script template

```ts
console.log(
  formatAddress(
    {
      recipient: "Yamada Taro",
      streetAddress: "1-2-3 Jingumae",
      administrativeArea: "Tokyo",
      postalCode: "150-0001",
    },
    "JP",
    { latin: true }
  )
);
```

## Related

- [Countries](/data/countries/) — ISO country records and core country lookup helpers
- [States & provinces](/data/states/) — subdivision data you can pair with address forms
- [Cities](/data/cities/) — major city coordinates and search helpers
