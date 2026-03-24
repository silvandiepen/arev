# @arevs/astronomy

Lightweight astronomy helpers for moon phases and hemisphere-aware seasons.

## Install

```bash
npm install @arevs/astronomy
```

## What it includes

- `moonPhases`
- `getMoonPhase()`
- `getMoonPhaseFraction()`
- `getMoonIllumination()`
- `getSeason()`

## Usage

```ts
import {
  moonPhases,
  getMoonPhase,
  getMoonIllumination,
  getSeason,
} from "@arevs/astronomy";

const phase = getMoonPhase(new Date());
const illumination = getMoonIllumination(new Date());
const season = getSeason(new Date("2026-06-21"), "north");
```

Docs: <https://arevdata.com/astronomy/sun-moon/>  
Repository: <https://github.com/silvandiepen/arev>
