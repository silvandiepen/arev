# @arevs/maps

World map and country SVG map helpers for geographic UIs.

## Install

```bash
npm install @arevs/maps
```

## What it includes

- `getWorldMapSvg()`
- `highlightCountries()`
- `colorizeWorldMap()`
- `worldMapCountries`
- `getCountryMapData()`
- `getCountrySvg()`
- `getCountrySubdivisionMapUrl()`
- `latLonToMapPoint()`

## Usage

```ts
import {
  getWorldMapSvg,
  highlightCountries,
  getCountrySvg,
  getCountrySubdivisionMapUrl,
} from "@arevs/maps";

const worldSvg = getWorldMapSvg();
const highlighted = highlightCountries(["MT", "IT", "FR"]);
const maltaSvg = getCountrySvg("MT");
const usStatesUrl = getCountrySubdivisionMapUrl("US");
```

## When to use this package

Use `@arevs/maps` when you need map rendering helpers without installing the broader geography or all-in-one package.

Docs: <https://arevdata.com/maps/>  
Repository: <https://github.com/silvandiepen/arev>
