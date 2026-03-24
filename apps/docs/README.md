---
title: arev
description: Typed world geography datasets, lookup helpers, and map utilities for JavaScript and TypeScript.
menuChildren: true
tags: documentation, geography, data
---

# arev

Typed world geography data for JavaScript and TypeScript.

`arev` packages countries, phone codes, cities, states, currencies, languages, geography data, flags, and SVG map helpers into one reusable library with typed exports and lookup utilities.

It now also includes a lightweight astronomy layer for moon phases, hemisphere-aware seasons, curated Solar System reference data, notable stars, and Milky Way metadata.

The hosted API is intentionally rate-limited. For unlimited access to the datasets, use the npm package directly.

## Install

```bash
npm install @arevs/data
```

Focused packages are also available when you do not need the full aggregate install:

- `@arevs/geo`
- `@arevs/flags`
- `@arevs/places`
- `@arevs/maps`
- `@arevs/astronomy`
- `@arevs/space`
- `@arevs/core`
- `@arevs/utils`

## Quick start

```ts
import {
  countries,
  getCountryByCode,
  getCountryFlag,
  phoneCountryCodes,
} from "@arevs/data";

console.log(countries.length);

const malta = getCountryByCode("MT");
console.log(malta?.name);
console.log(getCountryFlag("MT"));

const pickerOptions = phoneCountryCodes.map((entry) => ({
  value: entry.phoneCode,
  label: `${entry.flag} ${entry.country} (${entry.phoneCode})`,
}));
```

## Live demos

<div>
  <arev-dataset-stats></arev-dataset-stats>
</div>

<div>
  <arev-api-playground></arev-api-playground>
</div>

## Reference

- [API Overview](/api/) for the hosted HTTP endpoints and links to the detailed endpoint pages
- [Data & Assets](/data/) for countries, cities, states, languages, currencies, phone codes, and flags
- [Geography & Maps](/maps/) for geography records, geo utilities, world maps, and country maps
- [Astronomy & Time](/astronomy/) for moon phases, seasons, planets, moons, stars, and Milky Way reference data

## What this library is good at

- Powering country, language, currency, and phone-code selectors
- Building geography games and quiz mechanics
- Looking up capitals, neighbours, climate zones, and map geometry
- Rendering world maps and country SVGs without another mapping stack

## Package links

- Repository: <https://github.com/silvandiepen/arev>
- Docs site output: generated from this `apps/docs/` folder with `girk`
- API base: <https://api.arevdata.com>
- npm scope: <https://www.npmjs.com/org/arevs>
