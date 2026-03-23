---
title: arev
description: Typed world geography datasets, lookup helpers, and map utilities for JavaScript and TypeScript.
menuChildren: true
tags: documentation, geography, data
---

# arev

Typed world geography data for JavaScript and TypeScript.

`arev` packages countries, phone codes, cities, states, currencies, languages, geography data, flags, and SVG map helpers into one reusable library with typed exports and lookup utilities.

## Install

```bash
npm install arev
```

## Quick start

```ts
import {
  countries,
  getCountryByCode,
  getCountryFlag,
  phoneCountryCodes,
} from "arev";

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

- [Countries](countries.md) for ISO codes, capitals, continents, currencies, and flag emoji
- [Phone country codes](phone-codes.md) for international dialling selectors and shared prefixes
- [Cities](cities.md) for capitals, coordinates, population, and search helpers
- [States, provinces, and divisions](states.md) for subnational administrative data
- [Continents and currencies](continents-currencies.md) for continent metadata and ISO 4217 currency lookups
- [Languages](languages.md) for language catalogs, locale variants, and official-language mappings
- [Geography](geography.md) for centroids, bounds, neighbours, climate data, and geo-game utilities
- [Flags](flags.md) for SVG and PNG URLs, colour palettes, and similar-flag groups
- [World map](world-map.md) for SVG rendering and country highlighting
- [Country maps](country-maps.md) for standalone country SVG output and map-point helpers

## What this library is good at

- Powering country, language, currency, and phone-code selectors
- Building geography games and quiz mechanics
- Looking up capitals, neighbours, climate zones, and map geometry
- Rendering world maps and country SVGs without another mapping stack

## Package links

- Repository: <https://github.com/silvandiepen/arev>
- Docs site output: generated from this `docs/` folder with `girk`
- API base: <https://api.arevdata.com>
