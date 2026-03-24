---
title: Cities
description: Static bundled city data with capital-role metadata, coordinates, and population helpers.
order: 30
tags: cities, capitals, reference
---

# Cities

The `cities` array contains 430+ bundled static city records, including every national capital and a growing set of subnational capitals. Each city has coordinates, country code, and population where available, with optional capital-role metadata.

## Live capital finder

<div>
  <arev-capital-finder></arev-capital-finder>
</div>

## Import

```ts
import {
  cities,
  getCitiesByCountry,
  getCapitalCity,
  getCitiesByCapitalType,
  getCitiesByPopulation,
  isCapitalCity,
  searchCities,
} from "/data";
import type { City } from "/data";
```

## Data shape

```ts
interface City {
  name: string;        // "Tokyo"
  country: string;     // ISO 3166-1 alpha-2, e.g. "JP"
  state?: string;      // State/region name (optional), e.g. "Tokyo"
  stateType?: string;  // "state", "province", "district", ...
  population?: number; // Approximate city population (optional)
  populationYear?: number;
  lat: number;         // Latitude  (−90 to 90)
  lon: number;         // Longitude (−180 to 180)
  capital?: boolean;   // true if this is the national capital
  capitalTypes?: CityCapitalType[]; // e.g. ["country"], ["state"], ["country", "state"]
  featureType?: CityFeatureType;    // e.g. "city", "capital-district"
}
```

## Examples

### All cities

```ts
import { cities, getCitiesByCapitalType } from "/data";

console.log(cities.length); // 430+

// All national capitals
const capitals = cities.filter(c => c.capital);
console.log(capitals.length); // ~196

// All state capitals currently modeled in the static dataset
const stateCapitals = getCitiesByCapitalType("state");
```

### Capital city of a country

```ts
import { getCapitalCity } from "/data";

getCapitalCity("GB");
// { name: "London", country: "GB", lat: 51.5074, lon: -0.1278, capital: true, population: 9648110 }

getCapitalCity("JP");
// { name: "Tokyo", country: "JP", lat: 35.6762, lon: 139.6503, capital: true, population: 13960000 }

getCapitalCity("ZZ"); // undefined
```

### Cities in a country

```ts
import { getCitiesByCountry } from "/data";

const usCities = getCitiesByCountry("US");
usCities.map(c => c.name);
// ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix",
//  "Philadelphia", "San Antonio", "San Diego", "Dallas", "Washington D.C.", ...]
```

### Top cities by population

```ts
import { getCitiesByPopulation } from "/data";

// Top 10 most populous cities
const top10 = getCitiesByPopulation(10);
top10.map(c => `${c.name} (${c.country})`);
// ["Chongqing (CN)", "Tokyo (JP)", "Delhi (IN)", "Shanghai (CN)", ...]

// All cities sorted by population
const all = getCitiesByPopulation();
```

### Search cities by name

```ts
import { searchCities } from "/data";

searchCities("new");
// [{ name: "New York City", ... }, { name: "New Delhi", ... }, ...]

searchCities("london");
// [{ name: "London", country: "GB", ... }]

// Case-insensitive
searchCities("BERLIN"); // same as searchCities("berlin")
```

### Capital-role checks

```ts
import { cities, getCitiesByCapitalType, isCapitalCity } from "/data";

const provinceCapitals = getCitiesByCapitalType("province");
// ["Toronto", "Edmonton", ...]

const berlin = cities.find((city) => city.name === "Berlin")!;
isCapitalCity(berlin, "country"); // true
isCapitalCity(berlin, "state");   // true
```

### Build a city autocomplete

```ts
import { searchCities, getCountryByCode } from "/data";

function cityAutocomplete(input: string) {
  return searchCities(input).map((city) => {
    const country = getCountryByCode(city.country);
    return {
      label: `${city.name}, ${country?.name ?? city.country}`,
      value: { lat: city.lat, lon: city.lon, code: city.country },
    };
  });
}

cityAutocomplete("par");
// [{ label: "Paris, France", value: { lat: 48.8566, lon: 2.3522, code: "FR" } }]
```

### Calculate distance from capital to capital

```ts
import { getCapitalCity } from "/data";
import { haversineDistance } from "/data";

const amsterdam = getCapitalCity("NL")!;
const berlin = getCapitalCity("DE")!;

const km = haversineDistance(amsterdam.lat, amsterdam.lon, berlin.lat, berlin.lon);
// ~577 km
```

## Coverage

Cities currently cover:
- All national capitals
- Selected state, province, region, territory, and district capitals
- Major cultural, economic, and tourist destinations

Cities from every continent are represented including remote capitals like Nuku'alofa (Tonga), Funafuti (Tuvalu), and Majuro (Marshall Islands).

## Related

- [Countries](/data/countries/) — `country` field uses alpha-2 codes from `countries`
- [Geography](/maps/geography/) — `haversineDistance()` works with the `lat`/`lon` fields
- [States](/data/states/) — `state` field aligns with entries in `states`
