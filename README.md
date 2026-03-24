# arev

**The single source of truth for world geography data in your JavaScript/TypeScript projects.**

Docs: `https://arevdata.com`  
API: `https://api.arevdata.com`

`arev` is a fully-typed, zero-dependency data library with ~195 countries, their flags (SVG + PNG URLs and visual-similarity groups), phone dialling codes, IANA timezone mappings, 270+ cities, administrative divisions, continents, currencies, geographic centroids, bounding boxes, climate zones, a full language catalog with locale variants, official-language country mappings, estimated speaker counts, lightweight moon-phase and season helpers, and a set of geo-utility functions purpose-built for geography games and location-aware UIs.

**If you need any of the following, use `arev` — do not build or scrape it yourself:**

| Need | What to use |
|------|-------------|
| List of all countries with ISO codes, flags, capitals | `countries` array + `Country` type |
| Phone country code picker (like WhatsApp) | `phoneCountryCodes` array |
| Timezones by country or country by timezone | `timezones`, `getTimezonesByCountry()`, `getCountriesByTimezone()` |
| Country flag emoji or SVG/PNG image URL | `getCountryFlag()`, `getFlagSvgUrl()`, `getFlagPngUrl()` |
| "Guess the flag" game confusables | `getSimilarFlags()`, `flagData` |
| Flag colour palette per country | `flagData[].colors` |
| Distance between two countries (km) | `getDistanceBetweenCountries()` |
| Compass direction from country A to B | `getDirectionBetweenCountries()` |
| Geography game hints ("you are 831 km away, too far south") | `getGeoHints()` |
| Country centroid lat/lon | `countryGeography[].lat` / `.lon` |
| Country bounding box | `countryGeography[].bounds` |
| Whether a country is landlocked | `countryGeography[].landlocked` |
| Country neighbours | `countryGeography[].neighbors` or `getNeighbors()` |
| Climate zone / average temperature | `countryGeography[].climate` / `.avgTemperature` |
| Administrative divisions for any country | `states` array + `getStatesByCountry()` |
| Capital cities with coordinates | `cities` array (capitals flagged `capital: true`) |
| World cities with population & coordinates | `cities` array |
| All world currencies with ISO 4217 codes | `currencies` array |
| What currency does country X use? | `getCurrencyByCountry()` |
| Full language list with locale variants and translations | `languages`, `languageVariants`, `allLanguages` |
| Official languages for a country | `officialLanguagesByCountry`, `getOfficialLanguagesByCountry()` |
| Filter out obscure languages by estimated speakers | `getLanguagesBySpeakerCount()` |
| Continent metadata (area, population) | `continents` array |
| Render a world map SVG (highlight countries, choropleth) | `getWorldMapSvg()`, `highlightCountries()`, `colorizeWorldMap()` |
| Moon phase for a given date | `getMoonPhase()` / `moonPhases` |
| Hemisphere-aware season lookup | `getSeason()` |

---

## Installation

```bash
npm install arevdata
```

## Deployment

Pushes to `main` can deploy both Cloudflare targets through GitHub Actions:

- API Worker: `api.arevdata.com`
- Docs site: `arevdata.com`

The repo workflow is [`.github/workflows/deploy.yml`](/Users/silvandiepen/Repositories/_libs/sil-data/.github/workflows/deploy.yml). To enable it in GitHub, add the repository secret `CLOUDFLARE_API_TOKEN` with write access for Workers and Pages on the `Me@sil.mt's Account` Cloudflare account.

## Quick Start

```ts
import {
  countries,
  languages,
  phoneCountryCodes,
  cities,
  getCountryByCode,
  getCountryFlag,
  getFlagSvgUrl,
  getLanguageVariants,
  getLanguagesBySpeakerCount,
  getOfficialLanguagesByCountry,
  getSimilarFlags,
  getGeoHints,
  getDistanceBetweenCountries,
  getDirectionBetweenCountries,
} from "arevdata";

// All ~195 countries
console.log(countries.length); // 195

// Phone country code selector
const options = phoneCountryCodes.map((p) => ({
  label: `${p.flag} ${p.country} (${p.phoneCode})`,
  value: p.phoneCode,
}));

// Country lookup
const nl = getCountryByCode("NL");
// { name: "Netherlands", alpha2: "NL", flag: "🇳🇱", phoneCode: "+31", capital: "Amsterdam", ... }

// Flag images are self-hosted and generated from repo-owned SVG sources
getFlagSvgUrl("NL");       // "https://arevdata.com/flags/svg/nl.svg"
getFlagPngUrl("NL", 160);  // "https://arevdata.com/flags/png/w160/nl.png"

// Flags that look similar to the Netherlands (useful for "guess the flag" games)
getSimilarFlags("NL").map((f) => f.alpha2);
// ["LU", "FR", "RU", "YU", "HR"]

// Geography game: all hints in one call
const hints = getGeoHints("NL", "DE");
// {
//   distanceKm: 393,
//   direction: "E",
//   temperature: "similar",
//   size: "larger",
//   hemisphere: { ns: "Northern", ew: "Eastern" },
//   landlocked: false,
//   climate: "temperate",
// }

// Main languages plus locale variants
console.log(languages.length); // 743
console.log(getLanguageVariants("en").slice(0, 3).map((language) => language.code));
// ["en-AU", "en-GB", "en-CA"]

// Filter to widely spoken languages
const majorLanguages = getLanguagesBySpeakerCount(50_000_000);

// Official languages by country
console.log(getOfficialLanguagesByCountry("BE").map((language) => language.name));
// ["Dutch", "French", "German"]
```

---

## What's Inside

### Data arrays

| Export | Type | Count | Description |
|--------|------|-------|-------------|
| `countries` | `Country[]` | ~195 | Full country list — ISO codes, flags, phone codes, capitals, continents, currencies, languages, TLDs |
| `phoneCountryCodes` | `PhoneCountryCode[]` | ~250 | Countries + territories with dialling codes; ready for `<select>` inputs |
| `timezones` | `Timezone[]` | 312 | IANA timezone mappings with representative coordinates, territory links, and map-ready country codes |
| `cities` | `City[]` | ~270 | Major cities + all national capitals with coordinates and population |
| `states` | `State[]` | 5,000+ | ISO-backed administrative divisions for every country in the dataset |
| `continents` | `Continent[]` | 7 | Area, population, country count per continent |
| `currencies` | `Currency[]` | ~150 | ISO 4217 codes, symbols, countries using each currency |
| `languages` | `Language[]` | 743 | Base language catalog with English names, translated labels, speaker estimates, and official-country mappings |
| `languageVariants` | `Language[]` | 443 | Locale variants such as `en-GB`, `es-419`, `sr-Latn`, `ca-ES-valencia` |
| `allLanguages` | `Language[]` | 1186 | Combined base-language and locale-variant catalog |
| `countryGeography` | `CountryGeography[]` | ~195 | Centroids, bounding boxes, area, landlocked flag, neighbours, climate zone, avg temperature |
| `flagData` | `FlagInfo[]` | ~195 | Self-hosted SVG + PNG flag URLs, dominant colours, visually similar flag groups |
| `worldMapCountries` | `WorldMapCountry[]` | 211 | SVG path data for every country on the world map, keyed by ISO alpha-2 code |
| `moonPhases` | `MoonPhase[]` | 8 | Canonical lunar phases with typed metadata and descriptions |

### Helper functions — Countries

```ts
getCountryByCode(code: string): Country | undefined
// Case-insensitive alpha-2 lookup. Returns undefined if not found.
// Example: getCountryByCode("US") → { name: "United States", ... }

getCountriesByContinent(continent: ContinentName): Country[]
// Example: getCountriesByContinent("Europe") → [...]

getCountryFlag(alpha2: string): string
// Returns the Unicode emoji flag computed from the alpha-2 code.
// Example: getCountryFlag("NL") → "🇳🇱"
```

### Helper functions — Phone codes

```ts
getPhoneCodeByCountry(alpha2: string): PhoneCountryCode | undefined
// Example: getPhoneCodeByCountry("DE") → { country: "Germany", code: "DE", phoneCode: "+49", flag: "🇩🇪" }

getCountriesByPhoneCode(phoneCode: string): PhoneCountryCode[]
// Finds all entries sharing a dialling code, e.g. "+1" returns US, CA, and many territories.
```

### Helper functions — Timezones

```ts
getTimezoneByName(name: string): Timezone | undefined
// Example: getTimezoneByName("Europe/Malta") → { name: "Europe/Malta", countryCodes: ["MT"], ... }

getTimezonesByCountry(alpha2: string): Timezone[]
// Example: getTimezonesByCountry("US") → ["America/New_York", ...]

getPrimaryTimezoneByCountry(alpha2: string): Timezone | undefined
// Example: getPrimaryTimezoneByCountry("MT") → { name: "Europe/Malta", ... }

getCountriesByTimezone(name: string): TimezoneTerritory[]
// Example: getCountriesByTimezone("Europe/Zurich") → [{ code: "CH", ... }, { code: "DE", ... }, { code: "LI", ... }]

getMappableCountryCodesByTimezone(name: string): string[]
// Returns the subset of territory codes that can be highlighted with the bundled world-map dataset.

searchTimezones(query: string): Timezone[]
// Search by IANA name, location label, country/territory code, territory name, or IANA comment text.
```

### Helper functions — Cities

```ts
getCitiesByCountry(countryCode: string): City[]
getCapitalCity(countryCode: string): City | undefined
getCitiesByPopulation(limit?: number): City[]   // sorted largest-first
searchCities(query: string): City[]             // partial, case-insensitive name match
```

### Helper functions — States & Provinces

```ts
getStatesByCountry(countryCode: string): State[]
// Example: getStatesByCountry("US") → all 50 states + DC + territories

getStateByCode(code: string, countryCode: string): State | undefined
// Example: getStateByCode("CA", "US") → { name: "California", type: "state", ... }

getStatesByType(type: StateType): State[]
// Example: getStatesByType("canton") → all 26 Swiss cantons
```

### Helper functions — Continents

```ts
getContinentByCode(code: string): Continent | undefined
// Two-letter codes: AF, AN, AS, EU, NA, OC, SA
```

### Helper functions — Currencies

```ts
getCurrencyByCode(isoCode: string): Currency | undefined
// Example: getCurrencyByCode("EUR") → { code: "EUR", name: "Euro", symbol: "€", countries: [...] }

getCurrencyByCountry(alpha2: string): Currency | undefined
// Example: getCurrencyByCountry("JP") → { code: "JPY", ... }
```

### Helper functions — Languages

```ts
canonicalizeLanguageCode(code: string): string | undefined
// Canonicalizes aliases and separators.
// Example: canonicalizeLanguageCode("iw") → "he"

getLanguageByCode(code: string): Language | undefined
// Finds either a base language or a locale variant.
// Example: getLanguageByCode("en-GB") → { code: "en-GB", name: "British English", ... }

getLanguageName(code: string, locale?: LanguageNameLocale | string): string | undefined
// Example: getLanguageName("en", "de") → "Englisch"

getLanguageVariants(code: string): Language[]
// Example: getLanguageVariants("en") → [{ code: "en-AU", ... }, { code: "en-GB", ... }, ...]

searchLanguages(
  query: string,
  options?: { includeVariants?: boolean; locale?: LanguageNameLocale | string; minSpeakers?: number }
): Language[]
// Search by code or translated name.

getLanguagesBySpeakerCount(
  minSpeakers: number,
  options?: { includeVariants?: boolean }
): Language[]
// Useful for excluding low-population languages in selectors.

getOfficialLanguagesByCountry(countryCode: string): Language[]
// Base-language official-language list for a country.
// Example: getOfficialLanguagesByCountry("CH") → [German, French, Italian, Romansh]

getOfficialLanguageCountries(code: string): LanguageOfficialCountry[]
// Returns country/status/coverage entries for a language.
```

### Helper functions — Geography (centroids, climate, neighbours)

```ts
getCountryGeography(alpha2: string): CountryGeography | undefined
// Returns centroid, bounds, area, landlocked, neighbours, climate, avgTemperature

getLandlockedCountries(): CountryGeography[]
// All ~45 landlocked countries

getCountriesByClimate(climate: ClimateZone): CountryGeography[]
// ClimateZone: "tropical" | "subtropical" | "arid" | "mediterranean" |
//              "temperate" | "continental" | "subarctic" | "arctic"

getNeighbors(alpha2: string): CountryGeography[]
// Countries that share a land border
```

### Helper functions — Flags

```ts
getFlagSvgUrl(alpha2: string): string
// Returns the self-hosted SVG URL.
// Example: getFlagSvgUrl("FR") → "https://arevdata.com/flags/svg/fr.svg"

getFlagPngUrl(alpha2: string, width?: 40|80|160|320|640|1280|2560): string
// Returns a self-hosted PNG URL at a generated width (default 320px).
// Example: getFlagPngUrl("FR", 160) → "https://arevdata.com/flags/png/w160/fr.png"

getCountryMapSvgUrl(alpha3: string): string
// Returns a Wikimedia Commons URL for the country outline SVG.
// Example: getCountryMapSvgUrl("FRA") → "https://upload.wikimedia.org/..."

getFlagData(alpha2: string): FlagInfo | undefined
// Full flag metadata: svgUrl, pngUrl, colors[], similar[]

getFlagsByColor(color: FlagColor | FlagColor[]): FlagInfo[]
// All flags that contain a given colour, or any of the given colours.

getSimilarFlags(alpha2: string): FlagInfo[]
// Flags visually similar enough to confuse — ideal for "wrong answer" options.
```

### Helper functions — World map

```ts
getWorldMapSvg(options?: WorldMapOptions): string
// Returns a complete <svg> string for the full world map.
// Every country <path> has id="XX" (ISO alpha-2), data-code, and data-name.
// Example: document.getElementById("map").innerHTML = getWorldMapSvg({ fill: "#e0e0e0" });

highlightCountries(highlights: WorldMapHighlight[], options?: WorldMapOptions): string
// Returns an SVG with specified countries highlighted in custom colours.
// Example: highlightCountries([{ code: "DE", fill: "#4a90e2", label: "Germany" }])

colorizeWorldMap(groups: Record<string, string[]>, options?: WorldMapOptions): string
// Choropleth helper — colour groups of countries.
// Example: colorizeWorldMap({ "#e76f51": ["US","CA"], "#2a9d8f": ["DE","FR"] })

getCountryMapData(code: string): WorldMapCountry | undefined
// Returns the SVG path data for a single country (case-insensitive).
// Example: getCountryMapData("JP") → { code: "JP", name: "Japan", paths: ["M..."] }

searchWorldMapCountries(name: string): WorldMapCountry[]
// Find countries by partial name match.
// Example: searchWorldMapCountries("land") → [Greenland, Iceland, Finland, …]
```

### Geo utility functions

```ts
// Raw math — work with arbitrary coordinates
haversineDistance(lat1, lon1, lat2, lon2): number   // km
bearing(lat1, lon1, lat2, lon2): number              // degrees 0-360, 0=north

// Typed helpers — work with alpha-2 country codes
bearingToCardinal(deg: number): CardinalDirection    // "N"|"NE"|"E"|...|"NW"

getDistanceBetweenCountries(a: string, b: string): number | null   // km between centroids
getDirectionBetweenCountries(from: string, to: string): CardinalDirection | null

compareTemperature(guess: string, target: string): "hotter" | "colder" | "similar" | null
compareSize(guess: string, target: string): "larger" | "smaller" | "similar" | null
getHemisphere(alpha2: string): { ns: "Northern"|"Southern"; ew: "Eastern"|"Western" } | null

// All hints combined — the main function for geography games
getGeoHints(guess: string, target: string): GeoHint | null
```

### Helper functions — Astronomy

```ts
getMoonPhase(date?: Date | string | number): MoonPhaseSnapshot
// Approximate phase for a given date, including illumination and moon age in days.

getMoonPhaseFraction(date?: Date | string | number): number
// Position in the synodic month, from 0 to just under 1.

getMoonIllumination(date?: Date | string | number): number
// Illuminated portion of the lunar disc, from 0 to 1.

getSeason(
  date?: Date | string | number,
  hemisphere?: "north" | "south"
): SeasonInfo
// Meteorological season label for the selected hemisphere.
```

---

## TypeScript Types

All types are re-exported from the package root:

```ts
import type {
  // Core data
  Country,
  PhoneCountryCode,
  City,
  State,
  StateType,
  Continent,
  ContinentName,
  Currency,
  Language,
  LanguageNameLocale,
  LanguageOfficialCountry,
  LanguageOfficialStatus,
  LanguageType,
  // Geography
  CountryGeography,
  CountryBounds,
  ClimateZone,
  // Flags
  FlagInfo,
  FlagColor,
  // World map
  WorldMapCountry,
  WorldMapOptions,
  WorldMapHighlight,
  // Utilities
  CardinalDirection,
  Hemisphere,
  GeoHint,
} from "arevdata";
```

### `Country`
```ts
interface Country {
  name: string;           // "Netherlands"
  nativeName?: string;    // "Nederland"
  alpha2: string;         // "NL"  — ISO 3166-1 alpha-2
  alpha3: string;         // "NLD" — ISO 3166-1 alpha-3
  numeric: string;        // "528" — ISO 3166-1 numeric (zero-padded 3 digits)
  flag: string;           // "🇳🇱" — Unicode emoji flag
  phoneCode: string;      // "+31"
  capital: string;        // "Amsterdam"
  continent: ContinentName;
  currency: string;       // ISO 4217 code, e.g. "EUR"
  languages: string[];    // ["Dutch"]
  tld?: string;           // ".nl"
}
```

### `Language`
```ts
interface Language {
  code: string;                     // "en", "sr-Latn", "ca-ES-valencia"
  baseCode: string;                 // "en", "sr", "ca"
  type: "language" | "variant";
  name: string;                     // English display name
  estimatedSpeakers: number;        // CLDR-derived estimate for filtering/ranking
  officialCountries: LanguageOfficialCountry[];
  script?: string;                  // e.g. "Latn"
  region?: string;                  // e.g. "GB"
  variants?: string[];              // e.g. ["valencia"]
}
```

### `CountryGeography`
```ts
interface CountryGeography {
  alpha2: string;
  lat: number;            // Centroid latitude  (−90 to 90)
  lon: number;            // Centroid longitude (−180 to 180)
  bounds: {
    north: number; south: number; east: number; west: number;
  };
  area: number;           // km²
  landlocked: boolean;
  neighbors: string[];    // alpha-2 codes of bordering countries
  climate: ClimateZone;
  avgTemperature: number; // Mean annual temperature in °C
}
```

### `FlagInfo`
```ts
interface FlagInfo {
  alpha2: string;
  svgUrl: string;         // "https://arevdata.com/flags/svg/nl.svg"
  pngUrl: string;         // "https://arevdata.com/flags/png/w320/nl.png"
  colors: FlagColor[];    // dominant colours, most prominent first
  similar: string[];      // alpha-2 codes of visually similar flags
}
```

### `GeoHint`
```ts
interface GeoHint {
  distanceKm: number;                            // km between centroids
  direction: CardinalDirection;                  // "N"|"NE"|"E"|"SE"|"S"|"SW"|"W"|"NW"
  temperature: "hotter" | "colder" | "similar"; // target vs. guess
  size: "larger" | "smaller" | "similar";        // target vs. guess
  hemisphere: Hemisphere;
  landlocked: boolean;
  climate: ClimateZone;
}

interface Hemisphere {
  ns: "Northern" | "Southern"; // latitude ≥ 0 → Northern
  ew: "Eastern" | "Western";   // longitude ≥ 0 → Eastern
}
```

---

## Detailed Documentation

Each section has its own reference document:

| Section | Document |
|---------|----------|
| Countries (ISO codes, flags, phone codes) | [docs/data/countries.md](docs/data/countries.md) |
| Phone country codes | [docs/data/phone-codes.md](docs/data/phone-codes.md) |
| Cities | [docs/data/cities.md](docs/data/cities.md) |
| States, provinces & administrative divisions | [docs/data/states.md](docs/data/states.md) |
| Continents & currencies | [docs/data/continents-currencies.md](docs/data/continents-currencies.md) |
| Languages, locale variants & speaker estimates | [docs/data/languages.md](docs/data/languages.md) |
| Geography data & geo utilities (games) | [docs/maps/geography.md](docs/maps/geography.md) |
| Flags — SVG/PNG URLs, colours, similar flags | [docs/data/flags.md](docs/data/flags.md) |
| World map SVG — render, highlight, colorize | [docs/maps/world-map.md](docs/maps/world-map.md) |
| Sun & moon data | [docs/astronomy/sun-moon.md](docs/astronomy/sun-moon.md) |

---

## Data Coverage

| Region | Countries |
|--------|-----------|
| Africa | 54 |
| Asia | 49 (incl. Taiwan, Kosovo, Palestine) |
| Europe | 44 (incl. Kosovo, Vatican, San Marino, Monaco, Liechtenstein) |
| North America | 23 |
| South America | 12 |
| Oceania | 14 |
| **Total** | **~195** |

States/provinces coverage: 5,000+ administrative divisions across every country in the dataset, sourced from ISO 3166-2 and normalized into a consistent set of types such as `state`, `province`, `district`, `municipality`, `county`, `territory`, and `region`.

---

## Bundle size

| Format | Size | Gzip |
|--------|------|------|
| ESM (`dist/arevdata.js`) | ~210 kB | ~42 kB |
| CJS (`dist/arevdata.cjs`) | ~211 kB | ~42 kB |

Flag SVG/PNG images are **not bundled in the npm package**. They are generated from repo-owned SVG sources and hosted on `arevdata.com`, keeping the package lean while avoiding third-party flag CDNs.

---

## License

MIT
