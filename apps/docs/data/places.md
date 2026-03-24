---
title: Places
description: Country-sharded static place data for selectors and address flows.
order: 35
tags: places, cities, selectors, reference
---

# Places

The place dataset is designed for country → place selectors without forcing your app to load worldwide city data up front.

Unlike the lightweight `cities` array, place data is:

- loaded asynchronously
- split by country
- distilled for website use
- fully static and bundled with the package

## What is included

Each country shard contains:

- administrative seats
- populated places with `population >= 5000`

The current dataset metadata is available through `getPlacesDatasetMeta()`.

## Import

```ts
import {
  getPlacesByCountry,
  getPlacesDatasetMeta,
  searchPlacesByCountry,
} from "/data";
```

## Examples

### Load one country

```ts
const maltaPlaces = await getPlacesByCountry("MT");

maltaPlaces.slice(0, 5).map((place) => place.name);
// ["Valletta", "Birkirkara", "Qormi", ...]
```

### Search inside one country

```ts
const results = await searchPlacesByCountry("US", "new york");

results.map((place) => place.name);
// ["New York City", ...]
```

### Inspect dataset size

```ts
const meta = getPlacesDatasetMeta();

console.log(meta.totalPlaces);   // 127718
console.log(meta.countryCount);  // 198
console.log(meta.minPopulation); // 5000
console.log(meta.countries.US);  // { count: ..., bytes: ... }
```

## Shape returned to your app

The loader hydrates compact shard data back into normal `City` objects:

```ts
interface City {
  geonameId?: number;
  name: string;
  country: string;
  state?: string;
  stateCode?: string;
  population?: number;
  lat: number;
  lon: number;
  timezone?: string;
  capital?: boolean;
  capitalLevel?: 0 | 1 | 2 | 3 | 4;
  capitalTypes?: CityCapitalType[];
}
```

## Related

- [Cities](/data/cities/) for the lightweight bundled `cities` array
- [States](/data/states/) for administrative-division metadata
