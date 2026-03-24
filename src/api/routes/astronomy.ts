import { getMoonPhase, getSeason, moonPhases } from "../../data/astronomy.js";
import type { SeasonHemisphere } from "../../types/index.js";
import { error, ok } from "../response.js";

function getCacheHeaders(): Record<string, string> {
  return {
    "cache-control": "public, max-age=900, s-maxage=3600",
  };
}

export function handleAstronomyRoute(request: Request): Response {
  const url = new URL(request.url);
  const dateParam = url.searchParams.get("date");
  const hemisphereParam = url.searchParams.get("hemisphere")?.trim().toLowerCase();

  if (dateParam !== null && Number.isNaN(new Date(dateParam).getTime())) {
    return error(400, "invalid_query", "date must be a valid ISO-8601 date");
  }

  if (
    hemisphereParam !== undefined &&
    hemisphereParam !== "north" &&
    hemisphereParam !== "south"
  ) {
    return error(400, "invalid_query", "hemisphere must be either north or south");
  }

  const date = dateParam ? new Date(dateParam) : new Date();
  const hemisphere = (hemisphereParam as SeasonHemisphere | undefined) ?? "north";
  const moon = getMoonPhase(date);
  const season = getSeason(date, hemisphere);

  return ok(
    {
      date: date.toISOString(),
      hemisphere,
      moon,
      sun: {
        season,
      },
      references: {
        moonPhases,
      },
    },
    undefined,
    {
      headers: getCacheHeaders(),
    }
  );
}
