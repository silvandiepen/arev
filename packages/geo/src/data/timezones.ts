import type { Timezone, TimezoneTerritory } from "../../../core/src/types/index.js";
import { getCountryByCode } from "./countries.js";
import { mappableCountryCodes } from "./mappableCountryCodes.js";
import { rawTimezones, timezoneTerritoryNames } from "./timezones.data.js";

function normalizeCountryCode(code: string): string {
  return code.trim().toUpperCase();
}

function normalizeTimezoneName(name: string): string {
  return name.trim().toLowerCase();
}

function getFlagEmoji(code: string): string {
  const normalized = normalizeCountryCode(code);

  if (!/^[A-Z]{2}$/.test(normalized)) {
    return "";
  }

  return Array.from(normalized)
    .map((letter) => String.fromCodePoint(letter.charCodeAt(0) + 127397))
    .join("");
}

function buildTerritory(code: string): TimezoneTerritory {
  const normalizedCode = normalizeCountryCode(code);
  const country = getCountryByCode(normalizedCode, "en");

  return {
    code: normalizedCode,
    name: country?.name ?? timezoneTerritoryNames[normalizedCode] ?? normalizedCode,
    flag: country?.flag ?? getFlagEmoji(normalizedCode),
    mappable: mappableCountryCodes.has(normalizedCode),
    ...(country?.recognized !== undefined ? { recognized: country.recognized } : {}),
    ...(country?.continent ? { continent: country.continent } : {}),
  };
}

export const timezones: Timezone[] = rawTimezones.map((timezone) => {
  const territories = timezone.countryCodes.map(buildTerritory);

  return {
    ...timezone,
    territories,
    mappableCountryCodes: territories
      .filter((territory) => territory.mappable)
      .map((territory) => territory.code),
  };
});

const timezoneByName = new Map(
  timezones.map((timezone) => [normalizeTimezoneName(timezone.name), timezone])
);

/**
 * Resolve a timezone by its IANA identifier.
 */
export function getTimezoneByName(name: string): Timezone | undefined {
  return timezoneByName.get(normalizeTimezoneName(name));
}

/**
 * Get all timezones that overlap a specific ISO 3166-1 alpha-2 country or territory code.
 */
export function getTimezonesByCountry(code: string): Timezone[] {
  const normalizedCode = normalizeCountryCode(code);

  return timezones.filter((timezone) => timezone.countryCodes.includes(normalizedCode));
}

/**
 * Get the primary timezone entry for a country or territory.
 * When a territory has multiple zones, this returns the first entry from IANA's ordering.
 */
export function getPrimaryTimezoneByCountry(code: string): Timezone | undefined {
  return getTimezonesByCountry(code)[0];
}

/**
 * Get all territories that overlap a timezone.
 */
export function getTerritoriesByTimezone(name: string): TimezoneTerritory[] {
  return getTimezoneByName(name)?.territories ?? [];
}

/**
 * Alias for getTerritoriesByTimezone for country-centric use cases.
 */
export function getCountriesByTimezone(name: string): TimezoneTerritory[] {
  return getTerritoriesByTimezone(name);
}

/**
 * Get all mappable country or territory codes for a timezone.
 * These can be passed directly to the SVG world-map helpers.
 */
export function getMappableCountryCodesByTimezone(name: string): string[] {
  return getTimezoneByName(name)?.mappableCountryCodes ?? [];
}

/**
 * Search timezones by IANA name, display label, territory code/name, or comment text.
 */
export function searchTimezones(query: string): Timezone[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [...timezones];
  }

  return timezones.filter((timezone) => {
    if (
      timezone.name.toLowerCase().includes(normalizedQuery) ||
      timezone.displayName.toLowerCase().includes(normalizedQuery) ||
      timezone.location.toLowerCase().includes(normalizedQuery) ||
      timezone.region.toLowerCase().includes(normalizedQuery) ||
      timezone.subregions.some((subregion) => subregion.toLowerCase().includes(normalizedQuery)) ||
      timezone.comment?.toLowerCase().includes(normalizedQuery)
    ) {
      return true;
    }

    return timezone.territories.some(
      (territory) =>
        territory.code.toLowerCase().includes(normalizedQuery) ||
        territory.name.toLowerCase().includes(normalizedQuery)
    );
  });
}
