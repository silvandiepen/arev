---
title: Languages
description: Base languages, locale variants, translations, and official-language mappings.
order: 60
tags: languages, locales, reference
---

# Languages

The language dataset adds three things that were missing from the core country data:

1. A full base-language catalog with canonical codes such as `en`, `fr`, `zh`, `gsw`, and `zza`
2. Locale variants such as `en-GB`, `es-419`, `sr-Latn`, and `ca-ES-valencia`
3. Estimated speaker counts plus official-language country mappings so projects can rank, filter, and group languages without maintaining their own lists

## Import

```ts
import {
  languages,
  languageVariants,
  allLanguages,
  officialLanguagesByCountry,
  canonicalizeLanguageCode,
  getLanguageByCode,
  getLanguageName,
  getLanguageVariants,
  searchLanguages,
  getLanguagesBySpeakerCount,
  getOfficialLanguagesByCountry,
  getOfficialLanguageCountries,
} from "arevdata";
import type {
  Language,
  LanguageNameLocale,
  LanguageOfficialCountry,
  LanguageOfficialStatus,
} from "arevdata";
```

## Data shape

```ts
type LanguageNameLocale =
  | "en" | "ar" | "de" | "es" | "fr"
  | "hi" | "it" | "ja" | "ko" | "nl"
  | "pl" | "pt" | "ru" | "tr" | "zh";

type LanguageOfficialStatus =
  | "official"
  | "de_facto_official"
  | "official_regional";

interface LanguageOfficialCountry {
  countryCode: string;       // ISO 3166-1 alpha-2
  officialStatus: LanguageOfficialStatus;
  populationPercent: number; // approximate share of speakers in that country
}

interface Language {
  code: string;              // "en", "en-GB", "sr-Latn", "ca-ES-valencia"
  baseCode: string;          // "en", "en", "sr", "ca"
  type: "language" | "variant";
  name: string;              // English display name
  estimatedSpeakers: number; // CLDR-derived estimate, useful for ranking/filtering
  officialCountries: LanguageOfficialCountry[];
  script?: string;
  region?: string;
  variants?: string[];
}
```

## Exports

| Export | Type | Description |
|--------|------|-------------|
| `languages` | `Language[]` | Base-language catalog |
| `languageVariants` | `Language[]` | Locale variants / regional or script-specific forms |
| `allLanguages` | `Language[]` | Combined catalog |
| `officialLanguagesByCountry` | `Record<string, Language[]>` | Base-language official-language list keyed by country code |

## Examples

### Build a language selector

```ts
import { languages } from "arevdata";

const options = languages
  .filter((language) => language.estimatedSpeakers >= 1_000_000)
  .map((language) => ({
    value: language.code,
    label: language.name,
  }));
```

### Render labels in the user’s UI language

```ts
import { getLanguageName } from "arevdata";

getLanguageName("en", "de");    // "Englisch"
getLanguageName("en-GB", "fr"); // "anglais britannique"
getLanguageName("sr-Latn", "ja"); // "セルビア語 (ラテン文字)"
```

### Resolve aliases and normalize stored values

```ts
import { canonicalizeLanguageCode } from "arevdata";

canonicalizeLanguageCode("iw");     // "he"
canonicalizeLanguageCode("EN_gb");  // "en-GB"
canonicalizeLanguageCode("sh");     // "sr-Latn"
```

### Show all locale variants of a base language

```ts
import { getLanguageVariants } from "arevdata";

const englishVariants = getLanguageVariants("en");
englishVariants.slice(0, 5).map((language) => language.code);
// ["en-AU", "en-GB", "en-CA", ...]
```

### Filter out obscure languages

```ts
import { getLanguagesBySpeakerCount } from "arevdata";

const majorLanguages = getLanguagesBySpeakerCount(10_000_000);
```

### Search by translated label or code

```ts
import { searchLanguages } from "arevdata";

searchLanguages("anglais", { locale: "fr" });
searchLanguages("british english", { includeVariants: true });
searchLanguages("spanish", { minSpeakers: 50_000_000 });
```

### Map countries to official languages

```ts
import { getOfficialLanguagesByCountry } from "arevdata";

getOfficialLanguagesByCountry("BE").map((language) => language.name);
// ["Dutch", "French", "German"]
```

### Map a language back to countries where it is official

```ts
import { getOfficialLanguageCountries } from "arevdata";

getOfficialLanguageCountries("ca");
// [
//   { countryCode: "AD", officialStatus: "official", populationPercent: 51 },
//   { countryCode: "ES", officialStatus: "official_regional", populationPercent: 19 },
// ]
```

## Notes

- `estimatedSpeakers` is meant for ranking and filtering, not precise census reporting.
- Base-language estimates are aggregated from CLDR territory population percentages.
- Variant estimates are locale-scoped when that can be inferred, for example `en-GB` or `es-419`.
- `officialCountries` on raw language entries can include territories from CLDR.
- `getOfficialLanguagesByCountry()` and `getOfficialLanguageCountries()` are filtered to countries present in this package’s main `countries` dataset.
- Localized language labels live in the shared translation files, while the language data itself stays English-only.
- If a translated display name is unavailable for a very obscure code, the API falls back to the English label instead of omitting the language.

## Data provenance

The static data in this repo was generated from:

- IANA Language Subtag Registry for canonical language identifiers and aliases
- Unicode CLDR territory population data for official-language and speaker estimates
- CLDR locale lists for named locale variants

## Module layout

The language feature lives in [`srcarev/languages`](../srcarev/languages):

- `languageData.ts` for the committed English dataset
- `languageFunctions.ts` for runtime helpers
- `translations/` for localized language labels used by `getLanguageName()`
- `language.test.ts` for module coverage

## Related

- [Countries](/data/countries/) — country alpha-2 codes used by the official-language mappings
- [Cities](/data/cities/) — useful when building locale-aware selectors with capital-city defaults
- [Continents & currencies](/data/continents-currencies/) — often paired with country and language selectors
