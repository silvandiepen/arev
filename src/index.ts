/**
 * arev
 *
 * A comprehensive collection of reusable world data:
 * countries, phone codes, flags, cities, states, provinces, currencies, and more.
 *
 * @example
 * ```ts
 * import { phoneCountryCodes, countries, cities } from "arevdata";
 *
 * // Use phone country codes in a select input
 * const options = phoneCountryCodes.map(p => ({
 *   label: `${p.flag} ${p.country} (${p.phoneCode})`,
 *   value: p.phoneCode,
 * }));
 * ```
 */

// Types
export type {
  AddressField,
  AddressPostalCodeType,
  AddressAdministrativeAreaType,
  AddressLocalityType,
  AddressDependentLocalityType,
  CountryAddressFormat,
  AddressInput,
  FormatAddressOptions,
  Country,
  Language,
  LanguageNameLocale,
  LanguageOfficialCountry,
  LanguageOfficialStatus,
  LanguageType,
  PhoneCountryCode,
  Timezone,
  TimezoneTerritory,
  City,
  State,
  StateType,
  Continent,
  ContinentName,
  Currency,
  CountryGeography,
  CountryBounds,
  ClimateZone,
  FlagInfo,
  FlagColor,
  CardinalDirection,
  WorldMapCountry,
  WorldMapOptions,
  WorldMapHighlight,
  ReligionBreakdown,
  EthnicGroup,
  CountryDemographics,
  CountryMapOptions,
  MoonPhase,
  MoonPhaseName,
  MoonPhaseSnapshot,
  SeasonHemisphere,
  SeasonInfo,
  SeasonName,
} from "./types/index.js";

// Translations
export type {
  CountryTranslation,
  TranslationMap,
  TranslationLanguage,
} from "./data/translations.js";
export {
  translations,
  getSupportedLanguages,
  getTranslations,
  translateCountry,
  translateCity,
  translateContinent,
  translateCurrency,
  translateLanguageName,
} from "./data/translations.js";

// Languages
export {
  allLanguages,
  canonicalizeLanguageCode,
  getLanguageByCode,
  getLanguageName,
  getLanguagesBySpeakerCount,
  getLanguageVariants,
  getOfficialLanguageCountries,
  getOfficialLanguagesByCountry,
  languageCodeAliases,
  languageNameLocales,
  languageVariants,
  languages,
  officialLanguagesByCountry,
  searchLanguages,
} from "./data/languages/index.js";

// Address formats
export {
  addressFormats,
  getAddressFormatByCountry,
  formatAddress,
} from "./data/addressFormats.js";

// Countries
export {
  countries,
  getCountryByCode,
  getCountriesByContinent,
  getCountryFlag,
  getRecognizedCountries,
} from "./data/countries.js";

// Phone country codes
export {
  phoneCountryCodes,
  getPhoneCodeByCountry,
  getCountriesByPhoneCode,
} from "./data/phoneCodes.js";

// Timezones
export {
  timezones,
  getTimezoneByName,
  getTimezonesByCountry,
  getPrimaryTimezoneByCountry,
  getTerritoriesByTimezone,
  getCountriesByTimezone,
  getMappableCountryCodesByTimezone,
  searchTimezones,
} from "./data/timezones.js";

// Cities
export {
  cities,
  getCitiesByCountry,
  getCapitalCity,
  getCitiesByPopulation,
  searchCities,
} from "./data/cities.js";

// States and provinces
export {
  states,
  getStatesByCountry,
  getStateByCode,
  getStatesByType,
} from "./data/states.js";

// Continents
export { continents, getContinentByCode } from "./data/continents.js";

// Currencies
export {
  currencies,
  getCurrencyByCode,
  getCurrencyByCountry,
} from "./data/currencies.js";

// Country geography (centroids, bounds, area, climate, neighbours)
export {
  countryGeography,
  getCountryGeography,
  getLandlockedCountries,
  getCountriesByClimate,
  getNeighbors,
  doCountriesBorder,
} from "./data/geography.js";

// Flag metadata (SVG URLs, colours, similar flags)
export {
  flagData,
  getFlagData,
  getFlagsByColor,
  getSimilarFlags,
  getFlagSvgUrl,
  getFlagPngUrl,
  getCountryMapSvgUrl,
} from "./data/flags.js";

// Geo utilities for geography games
export {
  haversineDistance,
  bearing,
  bearingToCardinal,
  getDistanceBetweenCountries,
  getDirectionBetweenCountries,
  compareTemperature,
  compareSize,
  getHemisphere,
  getGeoHints,
} from "./utils/geo.js";

export type { GeoHint, Hemisphere } from "./utils/geo.js";

// World map SVG – path data and rendering helpers
export {
  WORLD_MAP_VIEWBOX,
  WORLD_MAP_DEFAULTS,
  worldMapCountries,
  getCountryMapData,
  searchWorldMapCountries,
  getWorldMapSvg,
  highlightCountries,
  colorizeWorldMap,
} from "./data/worldMap.js";

// Individual country SVG maps
export {
  COUNTRY_MAP_DEFAULTS,
  latLonToMapPoint,
  getCountrySvg,
  getCountrySubdivisionMapUrl,
} from "./data/countryMaps.js";

// Astronomy helpers for sun and moon lookups
export {
  moonPhases,
  getMoonPhase,
  getMoonPhaseFraction,
  getMoonIllumination,
  getSeason,
} from "./data/astronomy.js";
