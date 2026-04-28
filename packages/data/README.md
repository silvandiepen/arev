# @arevs/data

The all-in-one package for the full `@arevs/*` data surface.

## Install

```bash
npm install @arevs/data
```

## What it includes

- Countries, cities, states, currencies, continents, and languages
- Phone codes and timezones
- Flag metadata and asset URLs
- Country-sharded place selector helpers
- World map and country map helpers
- Moon phase and season helpers
- Curated planets, moons, stars, galaxies, and Milky Way data
- Shared geography utilities

## Usage

```ts
import {
  countries,
  flagData,
  getCountryByCode,
  getFlagSvgUrl,
  getPlacesByCountry,
  getWorldMapSvg,
  getMoonPhase,
  planets,
} from "@arevs/data";

const malta = getCountryByCode("MT");
const flagUrl = getFlagSvgUrl("MT");
const places = await getPlacesByCountry("MT");
const worldMap = getWorldMapSvg();
const moonPhase = getMoonPhase(new Date());
```

## Focused imports

`@arevs/data` keeps the aggregate API, but also exposes compatibility subpaths for common large datasets.

```ts
import { allLanguages } from "@arevs/data/geo/languages/data";
import { countries } from "@arevs/data/geo/countries";
import { worldMapCountries } from "@arevs/data/maps/world-map";
```

## Focused packages

- `@arevs/geo`
- `@arevs/flags`
- `@arevs/places`
- `@arevs/maps`
- `@arevs/astronomy`
- `@arevs/space`

Docs: <https://arevdata.com>  
Repository: <https://github.com/silvandiepen/arev>
