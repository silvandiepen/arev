---
title: World Map
description: Inline SVG world map data with helpers for highlighting and colorizing countries.
order: 90
tags: maps, world, svg
---

# World Map

`arev` ships a full vector world map as inline SVG path data, together with helper functions to render, style, and highlight countries. Countries are identified by their **ISO 3166-1 alpha-2** codes (e.g. `"US"`, `"DE"`, `"JP"`), which match the `alpha2` field used throughout the rest of the library.

## Live world map highlighter

<div>
  <arev-world-map-demo></arev-world-map-demo>
</div>

---

## Data

### `worldMapCountries: WorldMapCountry[]`

Raw path data for **211 countries and territories**.  
Each entry has:

| field | type | description |
|-------|------|-------------|
| `code` | `string` | ISO 3166-1 alpha-2 code (e.g. `"DE"`) |
| `name` | `string` | Common English country name |
| `paths` | `string[]` | One or more SVG path `d` attribute strings (island nations may have several) |

### `WORLD_MAP_VIEWBOX`

`"0 0 2000 857"` — the viewBox for the world map canvas.

### `WORLD_MAP_DEFAULTS`

Default styling values used when no overrides are passed:

```ts
{
  fill:        "#d0d0d0",
  stroke:      "#ffffff",
  strokeWidth: 0.5,
  hoverFill:   "#a0a0a0",
  width:       "100%",
  height:      "auto",
  className:   "",
}
```

---

## Types

```ts
interface WorldMapCountry {
  code: string;    // ISO alpha-2
  name: string;
  paths: string[]; // SVG path `d` strings
}

interface WorldMapOptions {
  fill?:        string;          // Default country fill
  stroke?:      string;          // Border colour
  strokeWidth?: number;          // Border width (SVG units)
  hoverFill?:   string;          // Fill on mouse hover
  width?:       string | number; // SVG width attribute
  height?:      string | number; // SVG height attribute
  className?:   string;          // CSS class on <svg>
}

interface WorldMapHighlight {
  code:   string;  // ISO alpha-2
  fill:   string;  // Highlight colour
  label?: string;  // Accessible <title> text
}
```

---

## Functions

### `getWorldMapSvg(options?)`

Returns a complete `<svg>…</svg>` string for the full world map.

Every country `<path>` element has:
- `id` — ISO alpha-2 code, e.g. `id="DE"`
- `data-code` — same code
- `data-name` — human-readable country name

This lets you target individual countries using plain CSS or JavaScript:

```css
/* CSS */
#DE { fill: steelblue; }
#FR { fill: crimson; }
```

```js
// JavaScript
document.getElementById("FR").style.fill = "red";
```

**Signature:**

```ts
function getWorldMapSvg(options?: WorldMapOptions): string;
```

**Example:**

```ts
import { getWorldMapSvg } from "arevdata";

// Inject into the DOM
document.getElementById("map")!.innerHTML = getWorldMapSvg({
  fill:      "#e8f4f8",
  stroke:    "#aaaaaa",
  hoverFill: "#4a90e2",
  className: "world-map",
});
```

---

### `highlightCountries(highlights, options?)`

Returns an SVG with specific countries rendered in custom colours.  
All other countries use the base `fill` from `options`.

**Signature:**

```ts
function highlightCountries(
  highlights: WorldMapHighlight[],
  options?: WorldMapOptions,
): string;
```

**Example – highlight election winners:**

```ts
import { highlightCountries } from "arevdata";

const svg = highlightCountries(
  [
    { code: "US", fill: "#4a90e2", label: "United States" },
    { code: "GB", fill: "#e24a4a", label: "United Kingdom" },
    { code: "DE", fill: "#4ae24a" },
  ],
  { fill: "#eeeeee", hoverFill: "#cccccc" }
);

document.getElementById("map")!.innerHTML = svg;
```

---

### `colorizeWorldMap(groups, options?)`

Choropleth helper — assign one fill colour to a group of countries.

**Signature:**

```ts
function colorizeWorldMap(
  groups: Record<string, string[]>,
  options?: WorldMapOptions,
): string;
```

**Example – colour by continent:**

```ts
import { colorizeWorldMap } from "arevdata";

const svg = colorizeWorldMap(
  {
    "#f4a261": ["US", "CA", "MX"],          // North America
    "#2a9d8f": ["BR", "AR", "CO", "CL"],   // South America
    "#e9c46a": ["DE", "FR", "GB", "IT"],   // Europe
    "#e76f51": ["CN", "IN", "JP", "KR"],   // Asia
    "#264653": ["NG", "ZA", "EG", "KE"],   // Africa
  },
  { fill: "#dddddd" }
);

document.getElementById("map")!.innerHTML = svg;
```

---

### `getCountryMapData(code)`

Look up the path data for a single country by its ISO alpha-2 code.  
The look-up is **case-insensitive**.

```ts
function getCountryMapData(code: string): WorldMapCountry | undefined;
```

```ts
import { getCountryMapData } from "arevdata";

const japan = getCountryMapData("JP");
// { code: "JP", name: "Japan", paths: ["M...", "M..."] }
```

---

### `searchWorldMapCountries(name)`

Find countries whose names include a given substring (case-insensitive).

```ts
function searchWorldMapCountries(name: string): WorldMapCountry[];
```

```ts
import { searchWorldMapCountries } from "arevdata";

searchWorldMapCountries("land");
// → [Greenland, Iceland, Finland, New Zealand, …]
```

---

## Styling tips

Because each country path has a predictable `id` attribute, you can style countries entirely in CSS without JavaScript:

```html
<style>
  /* base style */
  #map path { fill: #e0e0e0; transition: fill 0.2s; }

  /* highlight a region */
  #US, #CA, #MX { fill: #4a90e2; }

  /* interactive hover */
  #map path:hover { fill: #ff9800; cursor: pointer; }
</style>

<div id="map"></div>
<script type="module">
  import { getWorldMapSvg } from "arevdata";
  document.getElementById("map").innerHTML = getWorldMapSvg();
</script>
```

You can also listen for click events on individual countries:

```js
import { getWorldMapSvg } from "arevdata";

document.getElementById("map").innerHTML = getWorldMapSvg();

document.querySelectorAll("#map path[data-code]").forEach(path => {
  path.addEventListener("click", () => {
    const code = path.dataset.code;
    const name = path.dataset.name;
    console.log(`Clicked: ${name} (${code})`);
  });
});
```
