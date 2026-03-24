---
title: arev
description: Typed world geography datasets, lookup helpers, and map utilities for JavaScript and TypeScript.
menuChildren: true
tags: documentation, geography, data
---

# arev

Typed world geography data for JavaScript and TypeScript.

`arev` packages countries, phone codes, cities, states, currencies, languages, geography data, flags, and SVG map helpers into one reusable library with typed exports and lookup utilities.

It now also includes a lightweight astronomy layer for moon phases and hemisphere-aware seasons.

## Install

```bash
npm install arevdata
```

## Quick start

```ts
import {
  countries,
  getCountryByCode,
  getCountryFlag,
  phoneCountryCodes,
} from "arevdata";

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

- [API Reference](/api/) for the hosted HTTP endpoints, query parameters, and response examples
- [Data & Assets](/data/) for countries, cities, states, languages, currencies, phone codes, and flags
- [Geography & Maps](/maps/) for geography records, geo utilities, world maps, and country maps
- [Astronomy & Time](/astronomy/) for moon phases and hemisphere-aware season data

## What this library is good at

- Powering country, language, currency, and phone-code selectors
- Building geography games and quiz mechanics
- Looking up capitals, neighbours, climate zones, and map geometry
- Rendering world maps and country SVGs without another mapping stack

## Package links

- Repository: <https://github.com/silvandiepen/arev>
- Docs site output: generated from this `docs/` folder with `girk`
- API base: <https://api.arevdata.com>
