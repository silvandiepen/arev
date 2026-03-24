# @arevs/places

Country-sharded place selector data for cities and other populated places, designed for location pickers without loading the whole world at once.

## Install

```bash
npm install @arevs/places
```

## What it includes

- `getPlacesByCountry()`
- `searchPlacesByCountry()`
- `getPlacesDatasetMeta()`

## Usage

```ts
import {
  getPlacesByCountry,
  searchPlacesByCountry,
  getPlacesDatasetMeta,
} from "@arevs/places";

const nlPlaces = await getPlacesByCountry("NL");
const searchResults = await searchPlacesByCountry("US", "San");
const meta = getPlacesDatasetMeta();
```

## Why this package exists

`@arevs/places` keeps the place selector dataset split by country so consumers do not load a global place blob just to populate one country picker.

Docs: <https://arevdata.com/data/places/>  
Repository: <https://github.com/silvandiepen/arev>
