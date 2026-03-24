# @arevs/utils

Small shared geography utilities for the `@arevs/*` packages.

## Install

```bash
npm install @arevs/utils
```

## What it includes

- `haversineDistance()`
- `bearing()`
- `bearingToCardinal()`

## Usage

```ts
import { haversineDistance, bearing, bearingToCardinal } from "@arevs/utils";

const distanceKm = haversineDistance(35.8989, 14.5146, 52.3676, 4.9041);
const direction = bearingToCardinal(bearing(35.8989, 14.5146, 52.3676, 4.9041));
```

## Related packages

- `@arevs/core`: shared types
- `@arevs/geo`: dataset-aware geo helpers
- `@arevs/data`: all-in-one package

Docs: <https://arevdata.com/maps/geography/>  
Repository: <https://github.com/silvandiepen/arev>
