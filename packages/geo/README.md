# @arevs/geo

Geographic datasets and lookup helpers for countries, cities, states, languages, phone codes, currencies, timezones, and geography metadata.

## Install

```bash
npm install @arevs/geo
```

## What it includes

- Countries and continents
- Cities and states/provinces
- Phone country codes
- IANA timezone mappings
- Currencies
- Languages and translations
- Country geography and geo comparison helpers

## Usage

```ts
import {
  countries,
  cities,
  states,
  timezones,
  getCountryByCode,
  getCitiesByCountry,
  getStatesByCountry,
  getTimezonesByCountry,
  getGeoHints,
} from "@arevs/geo";

const malta = getCountryByCode("MT");
const citiesInMalta = getCitiesByCountry("MT");
const statesInUsa = getStatesByCountry("US");
const usTimezones = getTimezonesByCountry("US");
const hints = getGeoHints("MT", "IT");
```

## When to use this package

Use `@arevs/geo` when you need structured geography data without pulling in maps, astronomy, space, or the larger all-in-one `@arevs/data` surface.

Docs: <https://arevdata.com/data/>  
Repository: <https://github.com/silvandiepen/arev>
