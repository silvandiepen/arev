import {
  getTimezoneByName,
  getTimezonesByCountry,
  searchTimezones,
  timezones,
} from "../../data/timezones.js";
import { parseIntegerParam } from "../query.js";
import { error, ok } from "../response.js";

function getCacheHeaders(): Record<string, string> {
  return {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  };
}

export function handleTimezonesCollection(request: Request): Response {
  const url = new URL(request.url);
  const country = url.searchParams.get("country")?.trim();
  const zone = url.searchParams.get("zone")?.trim();
  const query = url.searchParams.get("q")?.trim();
  const limitParam = url.searchParams.get("limit");
  const limit = parseIntegerParam(limitParam);

  if (country !== undefined && !/^[A-Za-z]{2}$/.test(country)) {
    return error(400, "invalid_query", "country must be a valid alpha-2 code");
  }

  if (limitParam !== null && (limit === undefined || limit < 1)) {
    return error(400, "invalid_query", "limit must be a positive integer");
  }

  let results = zone
    ? (() => {
        const match = getTimezoneByName(zone);
        return match ? [match] : [];
      })()
    : country
      ? getTimezonesByCountry(country)
      : query
        ? searchTimezones(query)
        : [...timezones];

  if (query && zone) {
    const normalizedQuery = query.toLowerCase();
    results = results.filter(
      (timezone) =>
        timezone.name.toLowerCase().includes(normalizedQuery) ||
        timezone.displayName.toLowerCase().includes(normalizedQuery) ||
        timezone.territories.some(
          (territory) =>
            territory.code.toLowerCase().includes(normalizedQuery) ||
            territory.name.toLowerCase().includes(normalizedQuery)
        )
    );
  }

  if (country && zone) {
    const normalizedCountry = country.toUpperCase();
    results = results.filter((timezone) => timezone.countryCodes.includes(normalizedCountry));
  }

  if (limit !== undefined) {
    results = results.slice(0, limit);
  }

  return ok(
    results,
    {
      count: results.length,
    },
    {
      headers: getCacheHeaders(),
    }
  );
}
