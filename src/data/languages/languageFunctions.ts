import type {
  Language,
  LanguageNameLocale,
  LanguageOfficialCountry,
} from "../../types/index.js";
import { getCountryByCode } from "../countries.js";
import { translations, translateLanguageName } from "../translations.js";
import {
  allLanguages,
  languageCodeAliases,
  languages,
  languageNameLocales,
  languageVariants,
} from "./languageData.js";

const supportedLanguageNameLocales = new Set<string>(languageNameLocales);
const translatedLanguageNameLocales = new Set<string>(["en", ...Object.keys(translations)]);
const languageByCode = new Map(allLanguages.map((language) => [language.code, language]));

function isKnownCountryCode(code: string): boolean {
  return Boolean(getCountryByCode(code));
}

function toCountryIndex(source: Language[]): Record<string, Language[]> {
  const index: Record<string, Language[]> = {};

  for (const language of source) {
    for (const country of language.officialCountries) {
      if (!isKnownCountryCode(country.countryCode)) continue;

      index[country.countryCode] ??= [];
      index[country.countryCode].push(language);
    }
  }

  for (const code of Object.keys(index)) {
    index[code].sort((left, right) => left.name.localeCompare(right.name, "en"));
  }

  return index;
}

export const officialLanguagesByCountry: Record<string, Language[]> = toCountryIndex(languages);

/**
 * Canonicalize a language or locale tag into a stable BCP 47 form.
 * Accepts common aliases such as "iw" -> "he" and underscore-separated tags.
 */
export function canonicalizeLanguageCode(code: string): string | undefined {
  const normalizedCode = code.trim();
  if (!normalizedCode) return undefined;

  const aliasResolved =
    languageCodeAliases[normalizedCode.toLowerCase()] ??
    languageCodeAliases[normalizedCode.replace(/_/g, "-").toLowerCase()] ??
    normalizedCode;

  try {
    return Intl.getCanonicalLocales(aliasResolved.replace(/_/g, "-"))[0];
  } catch {
    return undefined;
  }
}

/**
 * Look up a language or locale variant by its BCP 47 code.
 */
export function getLanguageByCode(code: string): Language | undefined {
  const canonicalCode = canonicalizeLanguageCode(code);
  if (!canonicalCode) return undefined;

  return languageByCode.get(canonicalCode);
}

/**
 * Return the localized display name for a language or locale code.
 * Falls back to the English source name if the requested locale is unsupported.
 */
export function getLanguageName(
  code: string,
  locale: LanguageNameLocale | string = "en"
): string | undefined {
  const language = getLanguageByCode(code);
  if (!language) return undefined;

  if (translatedLanguageNameLocales.has(locale)) {
    return translateLanguageName(language.code, language.name, locale);
  }

  try {
    return new Intl.DisplayNames([locale], { type: "language" }).of(language.code) || language.name;
  } catch {
    return language.name;
  }
}

/**
 * Return all locale variants for a base language code.
 */
export function getLanguageVariants(code: string): Language[] {
  const language = getLanguageByCode(code);
  const baseCode = language?.baseCode ?? canonicalizeLanguageCode(code)?.split("-")[0];
  if (!baseCode) return [];

  return languageVariants.filter((variant) => variant.baseCode === baseCode);
}

/**
 * Search languages by code or translated name.
 */
export function searchLanguages(
  query: string,
  options: {
    includeVariants?: boolean;
    locale?: LanguageNameLocale | string;
    minSpeakers?: number;
  } = {}
): Language[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  const collection = options.includeVariants === false ? languages : allLanguages;
  const locale = options.locale;
  const translatedLocales = locale
    ? [locale]
    : [...supportedLanguageNameLocales].filter((entry) => entry !== "en");

  return collection.filter((language) => {
    if (options.minSpeakers !== undefined && language.estimatedSpeakers < options.minSpeakers) {
      return false;
    }

    if (language.code.toLowerCase().includes(normalizedQuery)) return true;
    if (language.name.toLowerCase().includes(normalizedQuery)) return true;

    if (locale && getLanguageName(language.code, locale)?.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    return translatedLocales.some((entry) =>
      translateLanguageName(language.code, language.name, entry).toLowerCase().includes(normalizedQuery)
    );
  });
}

/**
 * Return languages whose estimated speaker count is at least `minSpeakers`.
 */
export function getLanguagesBySpeakerCount(
  minSpeakers: number,
  options: { includeVariants?: boolean } = {}
): Language[] {
  const collection = options.includeVariants ? allLanguages : languages;
  return collection.filter((language) => language.estimatedSpeakers >= minSpeakers);
}

/**
 * Return the base-language official-language list for a given country.
 */
export function getOfficialLanguagesByCountry(countryCode: string): Language[] {
  const normalizedCountryCode = countryCode.trim().toUpperCase();
  return officialLanguagesByCountry[normalizedCountryCode] || [];
}

/**
 * Return the official-country mappings for a given language, limited to countries
 * present in this package's main `countries` dataset.
 */
export function getOfficialLanguageCountries(code: string): LanguageOfficialCountry[] {
  const language = getLanguageByCode(code);
  if (!language) return [];

  return language.officialCountries.filter((entry) => isKnownCountryCode(entry.countryCode));
}
