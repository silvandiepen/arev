import {
  getCountryByCode,
  getWorldMapSvg,
  highlightCountries,
} from "../../../../packages/data/src/index.js";
import type {
  WorldMapHighlight,
  WorldMapOptions,
} from "../../../../packages/core/src/types/index.js";
import { error, ok } from "../response.js";

const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

function getCacheHeaders(): Record<string, string> {
  return {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  };
}

function parseHexColor(value: string | null, name: string): string | Response | undefined {
  if (value === null) {
    return undefined;
  }

  if (!HEX_COLOR_PATTERN.test(value)) {
    return error(400, "invalid_query", `${name} must be a hex color like #0f766e`);
  }

  return value;
}

function parseHighlights(value: string | null): WorldMapHighlight[] | Response {
  if (value === null || value.trim() === "") {
    return [];
  }

  const entries = value.split(",").map((entry) => entry.trim()).filter(Boolean);
  const highlights: WorldMapHighlight[] = [];

  for (const entry of entries) {
    const [rawCode, rawFill] = entry.split(":");
    const code = rawCode?.trim().toUpperCase();
    const fill = rawFill?.trim();

    if (!code || !fill || !/^[A-Z]{2}$/.test(code) || !HEX_COLOR_PATTERN.test(fill)) {
      return error(
        400,
        "invalid_query",
        "highlight must use CODE:#hex pairs separated by commas"
      );
    }

    const country = getCountryByCode(code);
    if (!country) {
      return error(400, "invalid_query", `Unknown country code: ${code}`);
    }

    highlights.push({
      code,
      fill,
      label: country.name,
    });
  }

  return highlights;
}

export function handleWorldMapRoute(request: Request): Response {
  const url = new URL(request.url);
  const highlights = parseHighlights(url.searchParams.get("highlight"));

  if (highlights instanceof Response) {
    return highlights;
  }

  const fill = parseHexColor(url.searchParams.get("fill"), "fill");
  if (fill instanceof Response) {
    return fill;
  }

  const stroke = parseHexColor(url.searchParams.get("stroke"), "stroke");
  if (stroke instanceof Response) {
    return stroke;
  }

  const hoverFill = parseHexColor(url.searchParams.get("hoverFill"), "hoverFill");
  if (hoverFill instanceof Response) {
    return hoverFill;
  }

  const options: WorldMapOptions = {
    ...(fill ? { fill } : {}),
    ...(stroke ? { stroke } : {}),
    ...(hoverFill ? { hoverFill } : {}),
  };

  const svg =
    highlights.length > 0 ? highlightCountries(highlights, options) : getWorldMapSvg(options);

  return ok(
    {
      svg,
      highlightCount: highlights.length,
      highlights,
    },
    undefined,
    {
      headers: getCacheHeaders(),
    }
  );
}
