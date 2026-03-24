---
title: Stars & Galaxy Data
description: Static reference data for major stars and the Milky Way galaxy.
order: 30
tags: astronomy, stars, galaxy, milky-way, reference
---

# Stars & Galaxy Data

`arevdata` also includes a small curated star catalog and Milky Way reference data.

This is intentionally compact and reference-oriented rather than a full astrophysics database.

## Import

```ts
import {
  stars,
  galaxies,
  milkyWay,
  getStarByName,
  searchStars,
  getGalaxyByName,
} from "/data";

import type {
  Star,
  Galaxy,
} from "/data";
```

## Included datasets

### `stars`

A small catalog of notable stars with:

- Spectral type
- Distance from Earth
- Apparent magnitude
- Radius, mass, and luminosity relative to the Sun
- Surface temperature

### `galaxies`

Currently a curated galaxy reference starting with the Milky Way:

- Morphological type
- Approximate diameter and thickness
- Age estimate
- Estimated star-count range
- Distance from the Solar System to the galactic center
- Major structures such as the bulge, bar, and spiral arms

## Examples

### Look up a star

```ts
const sirius = getStarByName("Sirius");

sirius?.constellation; // "Canis Major"
sirius?.spectralType; // "A1V"
```

### Search stars

```ts
const orionStars = searchStars("orion");
// Rigel, Betelgeuse
```

### Read Milky Way data

```ts
milkyWay.diameterLightYears; // 105700
milkyWay.estimatedStarsMin; // 100000000000

const galaxy = getGalaxyByName("Milky Way");
```

## Good use cases

- Science reference pages
- Small astronomy datasets for educational products
- UI cards about notable stars or the Milky Way
