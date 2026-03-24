---
title: Timezones
description: IANA timezone mappings with country lookups, representative coordinates, and map-ready coverage data.
order: 20
tags: timezones, iana, time, reference
---

# Timezones

`arevdata` now includes a timezone mapping layer derived from the IANA Time Zone Database, so you can resolve timezones by country, territories by timezone, and map-ready timezone coverage without shipping your own lookup tables.

## Live timezone explorer

<div>
  <arev-timezone-demo></arev-timezone-demo>
</div>

## Import

```ts
import {
  timezones,
  getTimezoneByName,
  getTimezonesByCountry,
  getPrimaryTimezoneByCountry,
  getCountriesByTimezone,
  getMappableCountryCodesByTimezone,
  searchTimezones,
} from "/data";

import type { Timezone, TimezoneTerritory } from "/data";
```

## What is included

### `timezones`

The full `zone1970.tab` mapping from the IANA timezone database, with representative coordinates and ISO territory links.

```ts
interface Timezone {
  name: string;                 // "Europe/Malta"
  region: string;               // "Europe"
  subregions: string[];         // []
  location: string;             // "Malta"
  displayName: string;          // "Malta"
  countryCodes: string[];       // ["MT"]
  territories: TimezoneTerritory[];
  mappableCountryCodes: string[]; // Country/territory codes available in the bundled map dataset
  latitude: number;
  longitude: number;
  comment?: string;
}

interface TimezoneTerritory {
  code: string;                 // "MT"
  name: string;                 // "Malta"
  flag: string;                 // "🇲🇹"
  mappable: boolean;
  recognized?: boolean;
  continent?: string;
}
```

## Helper functions

### `getTimezonesByCountry(code)`

Returns all timezones that overlap a country or territory.

```ts
import { getTimezonesByCountry } from "/data";

getTimezonesByCountry("US").map((zone) => zone.name);
// ["America/New_York", "America/Detroit", ...]

getTimezonesByCountry("MT").map((zone) => zone.name);
// ["Europe/Malta"]
```

### `getPrimaryTimezoneByCountry(code)`

Returns the first IANA entry for a country or territory, useful when you need a single default timezone.

```ts
import { getPrimaryTimezoneByCountry } from "/data";

getPrimaryTimezoneByCountry("MT")?.name;
// "Europe/Malta"
```

### `getTimezoneByName(name)`

Looks up a timezone by its IANA identifier.

```ts
import { getTimezoneByName } from "/data";

const zone = getTimezoneByName("Europe/Zurich");
zone?.territories.map((territory) => territory.code);
// ["CH", "DE", "LI"]
```

### `getCountriesByTimezone(name)`

Returns the countries and territories that overlap a timezone.

```ts
import { getCountriesByTimezone } from "/data";

getCountriesByTimezone("Asia/Dubai").map((territory) => territory.name);
// ["United Arab Emirates", "Oman", "Réunion", "Seychelles", "French Southern Territories"]
```

### `getMappableCountryCodesByTimezone(name)`

Returns the subset of timezone territory codes that can be highlighted with the bundled world-map dataset.

```ts
import {
  getMappableCountryCodesByTimezone,
  highlightCountries,
} from "/data";

const codes = getMappableCountryCodesByTimezone("Europe/Zurich");

const svg = highlightCountries(
  codes.map((code) => ({
    code,
    fill: "#e97132",
  })),
  {
    fill: "#efe9dd",
    hoverFill: "#f59e0b",
  }
);
```

### `searchTimezones(query)`

Searches across IANA names, display labels, comments, country codes, and country names.

```ts
import { searchTimezones } from "/data";

searchTimezones("malta").map((zone) => zone.name);
// ["Europe/Malta"]

searchTimezones("dubai").map((zone) => zone.name);
// ["Asia/Dubai"]
```

## API access

The hosted API exposes the same dataset at [`/timezones`](/api/timezones/).

```bash
curl "https://api.arevdata.com/timezones?country=MT"
curl "https://api.arevdata.com/timezones?zone=Europe/Malta"
curl "https://api.arevdata.com/timezones?q=zurich&limit=5"
```

## Source

This timezone layer is derived from the official IANA Time Zone Database:

- `tzdata2026a`
- `zone1970.tab`
- `iso3166.tab`

That means the dataset follows canonical IANA timezone identifiers and IANA's own country-to-timezone grouping.
