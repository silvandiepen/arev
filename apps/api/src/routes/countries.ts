import type { ContinentName, Country } from "../../../../packages/core/src/types/index.js";
import {
  countries,
  getCountriesByContinent,
  getCountryByCode,
  getRecognizedCountries,
} from "../../../../packages/data/src/index.js";
import { parseBooleanParam } from "../query.js";
import { error, notFound, ok } from "../response.js";

const CONTINENTS: ContinentName[] = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];

function getCacheHeaders(): Record<string, string> {
  return {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  };
}

function getAllCountries(lang: string): Country[] {
  return countries
    .map((country) => getCountryByCode(country.alpha2, lang))
    .filter((country): country is Country => country !== undefined);
}

function isContinentName(value: string): value is ContinentName {
  return CONTINENTS.includes(value as ContinentName);
}

export function handleCountriesCollection(request: Request): Response {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang") ?? "en";
  const recognizedParam = url.searchParams.get("recognized");
  const continentParam = url.searchParams.get("continent");
  const recognized = parseBooleanParam(recognizedParam);

  if (recognizedParam !== null && recognized === undefined) {
    return error(400, "invalid_query", "recognized must be true or false");
  }

  if (continentParam !== null && !isContinentName(continentParam)) {
    return error(400, "invalid_query", "continent must be a supported continent name");
  }

  let results = continentParam
    ? getCountriesByContinent(continentParam, lang)
    : recognized
      ? getRecognizedCountries(lang)
      : getAllCountries(lang);

  if (recognized === false) {
    results = results.filter((country) => !country.recognized);
  }

  if (recognized === true && continentParam !== null) {
    results = results.filter((country) => country.recognized);
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

export function handleCountryDetails(request: Request, alpha2: string): Response {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang") ?? "en";
  const country = getCountryByCode(alpha2, lang);

  if (!country) {
    return notFound("Country not found");
  }

  return ok(country, undefined, {
    headers: getCacheHeaders(),
  });
}
