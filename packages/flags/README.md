# @arevs/flags

Flag metadata, colour grouping, and self-hosted flag asset URLs.

## Install

```bash
npm install @arevs/flags
```

## What it includes

- `flagData`
- `getFlagData()`
- `getFlagsByColor()`
- `getSimilarFlags()`
- `getFlagSvgUrl()`
- `getFlagPngUrl()`

## Usage

```ts
import {
  flagData,
  getFlagData,
  getFlagsByColor,
  getSimilarFlags,
  getFlagSvgUrl,
  getFlagPngUrl,
} from "@arevs/flags";

const malta = getFlagData("MT");
const redAndWhiteFlags = getFlagsByColor(["red", "white"]);
const similarToNetherlands = getSimilarFlags("NL");
const svgUrl = getFlagSvgUrl("MT");
const pngUrl = getFlagPngUrl("MT", 160);
```

## Notes

- Flag SVG and PNG assets are hosted from `arevdata.com`
- Array input for `getFlagsByColor()` uses `AND` matching by default

Docs: <https://arevdata.com/data/flags/>  
Repository: <https://github.com/silvandiepen/arev>
