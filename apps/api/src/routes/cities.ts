import type { City } from "../../../../packages/core/src/types/index.js";
import {
  getCapitalCity,
  getCitiesByCountry,
  getCitiesByPopulation,
  searchCities,
} from "../../../../packages/data/src/index.js";
import { normalizeAlpha2, parseIntegerParam } from "../query.js";
import { error, notFound, ok } from "../response.js";

function getCacheHeaders(): Record<string, string> {
  return {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  };
}

function getAllCities(lang: string): City[] {
  return searchCities("", lang);
}

function sortCitiesByPopulation(results: City[]): City[] {
  return [...results].sort((a, b) => (b.population ?? 0) - (a.population ?? 0));
}

export function handleCitiesCollection(request: Request): Response {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang") ?? "en";
  const query = url.searchParams.get("q")?.trim();
  const country = url.searchParams.get("country")?.trim();
  const sort = url.searchParams.get("sort");
  const limitParam = url.searchParams.get("limit");
  const limit = parseIntegerParam(limitParam);

  if (sort !== null && sort !== "population") {
    return error(400, "invalid_query", "sort must be population");
  }

  if (limitParam !== null && (limit === undefined || limit < 1)) {
    return error(400, "invalid_query", "limit must be a positive integer");
  }

  let results = query
    ? searchCities(query, lang)
    : country
      ? getCitiesByCountry(country, lang)
      : sort === "population"
        ? getCitiesByPopulation(undefined, lang)
        : getAllCities(lang);

  if (query && country) {
    const normalizedCountry = normalizeAlpha2(country);
    results = results.filter((city) => city.country === normalizedCountry);
  }

  if (sort === "population" && !(query === undefined && country === undefined)) {
    results = sortCitiesByPopulation(results);
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

export function handleCapitalCity(request: Request, alpha2: string): Response {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang") ?? "en";
  const city = getCapitalCity(alpha2, lang);

  if (!city) {
    return notFound("Capital city not found");
  }

  return ok(city, undefined, {
    headers: getCacheHeaders(),
  });
}
