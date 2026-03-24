# @arevs/space

Curated static reference data for planets, moons, stars, and galaxies.

## Install

```bash
npm install @arevs/space
```

## What it includes

- `planets`
- `moons`
- `stars`
- `galaxies`
- `milkyWay`
- Lookup helpers for planets, moons, stars, and galaxies

## Usage

```ts
import {
  planets,
  moons,
  stars,
  milkyWay,
  getPlanetByName,
  getMoonsByPlanet,
  searchStars,
} from "@arevs/space";

const earth = getPlanetByName("Earth");
const jupiterMoons = getMoonsByPlanet("Jupiter");
const sirius = searchStars("Sirius");
```

Docs: <https://arevdata.com/astronomy/>  
Repository: <https://github.com/silvandiepen/arev>
