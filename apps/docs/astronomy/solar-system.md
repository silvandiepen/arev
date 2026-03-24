---
title: Solar System Data
description: Static reference data for planets and major moons, including composition, temperature, and orbital facts.
order: 20
tags: astronomy, planets, moons, solar-system, reference
---

# Solar System Data

`arevdata` includes a curated static Solar System dataset for the eight planets and a set of major moons.

It is designed for apps, educational tools, quizzes, and interfaces that need typed facts without pulling from a remote science API.

## Import

```ts
import {
  planets,
  moons,
  getPlanetByName,
  getPlanetByOrder,
  getPlanetsByType,
  getMoonByName,
  getMoonsByPlanet,
} from "/data";

import type {
  Planet,
  PlanetType,
  Moon,
} from "/data";
```

## Included datasets

### `planets`

The eight major planets with:

- Physical data like radius, diameter, mass, gravity, and escape velocity
- Temperature summaries
- Atmospheric composition
- High-level bulk composition
- Orbital data such as mean distance from the Sun, perihelion, aphelion, and orbital period

### `moons`

A curated list of major natural satellites with:

- Parent planet relationship
- Size, mass, gravity, and temperature data
- Atmospheric traces where relevant
- Bulk composition
- Orbital period, distance from the parent planet, and tidal-locking metadata

## Examples

### Look up a planet

```ts
const earth = getPlanetByName("Earth");

earth?.type; // "terrestrial"
earth?.temperature.averageC; // 15
earth?.orbit.meanDistanceFromSunKm; // 149598023
```

### Get planets by category

```ts
const rockyPlanets = getPlanetsByType("terrestrial");
// Mercury, Venus, Earth, Mars
```

### Get moons for a planet

```ts
const jupiterMoons = getMoonsByPlanet("jupiter");
// Io, Europa, Ganymede, Callisto
```

## Good use cases

- Space-themed educational interfaces
- Planet comparison tables
- Quiz games about moons, planets, or atmosphere types
- Static reference cards for science dashboards
