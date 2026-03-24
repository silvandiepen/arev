import type { PhoneCountryCode } from "../../../../packages/core/src/types/index.js";
import {
  getCountriesByPhoneCode,
  getPhoneCodeByCountry,
  phoneCountryCodes,
} from "../../../../packages/data/src/index.js";
import { parseIntegerParam } from "../query.js";
import { error, ok } from "../response.js";

function getCacheHeaders(): Record<string, string> {
  return {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  };
}

function normalizePhoneCode(value: string): string | undefined {
  const digits = value.replace(/[^\d]/g, "");
  if (!digits) {
    return undefined;
  }

  return `+${digits}`;
}

function matchesQuery(entry: PhoneCountryCode, query: string): boolean {
  const normalizedQuery = query.toLowerCase();
  const normalizedDigits = query.replace(/[^\d]/g, "");

  return (
    entry.country.toLowerCase().includes(normalizedQuery) ||
    entry.code.toLowerCase().includes(normalizedQuery) ||
    entry.phoneCode.includes(normalizedDigits ? normalizedDigits : normalizedQuery)
  );
}

export function handlePhoneCodesCollection(request: Request): Response {
  const url = new URL(request.url);
  const country = url.searchParams.get("country")?.trim();
  const phoneCodeParam = url.searchParams.get("phoneCode")?.trim();
  const query = url.searchParams.get("q")?.trim();
  const limitParam = url.searchParams.get("limit");
  const limit = parseIntegerParam(limitParam);

  if (limitParam !== null && (limit === undefined || limit < 1)) {
    return error(400, "invalid_query", "limit must be a positive integer");
  }

  const normalizedPhoneCode =
    phoneCodeParam === undefined ? undefined : normalizePhoneCode(phoneCodeParam);

  if (phoneCodeParam !== undefined && normalizedPhoneCode === undefined) {
    return error(400, "invalid_query", "phoneCode must include at least one digit");
  }

  let results = country
    ? (() => {
        const match = getPhoneCodeByCountry(country);
        return match ? [match] : [];
      })()
    : [...phoneCountryCodes];

  if (normalizedPhoneCode) {
    const sharedMatches = getCountriesByPhoneCode(normalizedPhoneCode);
    const matchedCodes = new Set(sharedMatches.map((entry) => entry.code));
    results = results.filter((entry) => matchedCodes.has(entry.code));
  }

  if (query) {
    results = results.filter((entry) => matchesQuery(entry, query));
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
