---
title: States, Provinces & Administrative Divisions
description: Subnational administrative datasets and lookup helpers by country, code, and type.
order: 40
tags: states, provinces, reference
---

# States, Provinces & Administrative Divisions

The `states` array contains 5,000+ administrative divisions across every country in the dataset. It is backed by ISO 3166-2 subdivision data, normalized into a consistent set of types such as states, provinces, territories, districts, municipalities, counties, and regions.

## Import

```ts
import {
  states,
  getStatesByCountry,
  getStateByCode,
  getStatesByType,
} from "/data";
import type { State, StateType } from "/data";
```

## Data shape

```ts
interface State {
  name: string;      // "California"
  code: string;      // "CA" — subdivision code within the country
  country: string;   // "US" — ISO 3166-1 alpha-2 country code
  type: StateType;   // "state" | "province" | "district" | ...
}

type StateType =
  | "state"
  | "province"
  | "territory"
  | "autonomous region"
  | "district"
  | "department"
  | "region"
  | "county"
  | "emirate"
  | "canton"
  | "municipality"
  | "prefecture"
  | "governorate"
  | "parish"
  | "city"
  | "division"
  | "atoll"
  | "island";
```

## Examples

### All divisions for a country

```ts
import { getStatesByCountry } from "/data";

getStatesByCountry("US").length; // 57
getStatesByCountry("CH").length; // 26
getStatesByCountry("JP").length; // 47
getStatesByCountry("MT").length; // 68
```

### Look up a specific division by code

```ts
import { getStateByCode } from "/data";

getStateByCode("CA", "US");
// { name: "California", code: "CA", country: "US", type: "state" }

getStateByCode("ON", "CA");
// { name: "Ontario", code: "ON", country: "CA", type: "province" }

getStateByCode("ZZ", "US"); // undefined
```

### Filter by normalized division type

```ts
import { getStatesByType } from "/data";

const provinces = getStatesByType("province");
const cantons = getStatesByType("canton");
const municipalities = getStatesByType("municipality");
const territories = getStatesByType("territory");
```

### Build a country-aware subdivision selector

```ts
import { getStatesByCountry } from "/data";

function getSubdivisionOptions(countryCode: string) {
  return getStatesByCountry(countryCode).map((division) => ({
    value: division.code,
    label: division.name,
  }));
}
```

## Coverage

Every entry in `countries` has matching subdivision data.

Representative counts:

| Country | Count | Typical types |
|---------|------:|---------------|
| 🇺🇸 United States | 57 | states, district, territories |
| 🇨🇦 Canada | 13 | provinces, territories |
| 🇦🇺 Australia | 8 | states, territories |
| 🇨🇳 China | 34 | provinces, municipalities, autonomous regions |
| 🇫🇷 France | 131 | regions, departments, territories |
| 🇬🇧 United Kingdom | 239 | counties, districts, municipalities, territories |
| 🇯🇵 Japan | 47 | prefectures |
| 🇲🇹 Malta | 68 | municipalities |
| 🇨🇭 Switzerland | 26 | cantons |
| 🇽🇰 Kosovo | 7 | districts |

## Related

- [Countries](/data/countries/) — the `country` field uses alpha-2 codes from `countries`
- [Cities](/data/cities/) — the `state` field in each `City` can be aligned with entries here
