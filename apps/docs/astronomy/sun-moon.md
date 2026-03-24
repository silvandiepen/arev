---
title: Sun & Moon Data
description: Moon phase metadata, lunar illumination, and hemisphere-aware season helpers.
order: 10
tags: astronomy, moon, sun, seasons, reference
---

# Sun & Moon Data

`arevdata` now includes a lightweight astronomy layer for interfaces that need contextual seasonal or lunar data without pulling in a heavy astronomy library.

## Live astronomy lookup

<div>
  <arev-sun-moon-demo></arev-sun-moon-demo>
</div>

## Import

```ts
import {
  moonPhases,
  getMoonPhase,
  getMoonPhaseFraction,
  getMoonIllumination,
  getSeason,
} from "/data";

import type {
  MoonPhase,
  MoonPhaseName,
  MoonPhaseSnapshot,
  SeasonHemisphere,
  SeasonInfo,
  SeasonName,
} from "/data";
```

## What is included

### `moonPhases`

The canonical 8-phase lunar cycle as typed metadata.

```ts
interface MoonPhase {
  index: number;
  key:
    | "new-moon"
    | "waxing-crescent"
    | "first-quarter"
    | "waxing-gibbous"
    | "full-moon"
    | "waning-gibbous"
    | "last-quarter"
    | "waning-crescent";
  name: string;
  description: string;
}
```

### `getMoonPhase(date?)`

Resolve a date to its approximate moon phase snapshot.

```ts
import { getMoonPhase } from "/data";

const phase = getMoonPhase("2026-03-23T00:00:00.000Z");

phase.key; // e.g. "waxing-crescent"
phase.name; // "Waxing Crescent"
phase.illumination; // 0..1
phase.ageDays; // days since new moon
```

### `getMoonIllumination(date?)`

Returns the illuminated portion of the lunar disc as a decimal between `0` and `1`.

```ts
import { getMoonIllumination } from "/data";

getMoonIllumination("2000-01-21T04:40:00.000Z"); // close to 1
```

### `getMoonPhaseFraction(date?)`

Returns the position in the synodic month as a number from `0` to just under `1`.

```ts
import { getMoonPhaseFraction } from "/data";

getMoonPhaseFraction(new Date()); // 0 <= value < 1
```

### `getSeason(date?, hemisphere?)`

Meteorological seasons for the northern or southern hemisphere.

```ts
import { getSeason } from "/data";

getSeason("2026-04-15T00:00:00.000Z");
// { name: "spring", hemisphere: "north", label: "Spring (Northern Hemisphere)" }

getSeason("2026-04-15T00:00:00.000Z", "south");
// { name: "autumn", hemisphere: "south", label: "Autumn (Southern Hemisphere)" }
```

## Good use cases

- Show lunar context in weather, calendar, or travel interfaces
- Add moon-phase trivia or seasonal hints to educational apps
- Generate date-aware labels without relying on a remote API
- Drive region-aware copy like "winter break" or "summer season" by hemisphere
