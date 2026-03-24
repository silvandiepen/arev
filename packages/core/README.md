# @arevs/core

Shared TypeScript types for the `@arevs/*` packages.

## Install

```bash
npm install @arevs/core
```

## What it includes

- Shared model and utility types used across the `@arevs/*` packages
- A lightweight type-only entrypoint with no dataset payload

## Usage

```ts
import type { Country, City, FlagInfo, CardinalDirection } from "@arevs/core";
```

## Related packages

- `@arevs/data`: all-in-one package
- `@arevs/geo`: countries, cities, states, timezones, languages
- `@arevs/flags`: flag metadata and asset URLs
- `@arevs/places`: country-sharded place selector data

Docs: <https://arevdata.com>  
Repository: <https://github.com/silvandiepen/arev>
