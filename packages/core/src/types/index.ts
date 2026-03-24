/**
 * Represents a country with standard ISO codes and metadata.
 */
export interface Country {
  /** Full official name of the country */
  name: string;
  /** Common/short name of the country */
  nativeName?: string;
  /** ISO 3166-1 alpha-2 code (e.g., "US") */
  alpha2: string;
  /** ISO 3166-1 alpha-3 code (e.g., "USA") */
  alpha3: string;
  /** ISO 3166-1 numeric code (e.g., "840") */
  numeric: string;
  /** Unicode emoji flag */
  flag: string;
  /** International dialing code (e.g., "+1") */
  phoneCode: string;
  /** Capital city name */
  capital: string;
  /** Continent name */
  continent: ContinentName;
  /** ISO 4217 currency code (e.g., "USD") */
  currency: string;
  /** Full currency name, optionally translated (e.g., "US Dollar", "US-Dollar") */
  currencyName?: string;
  /** Currency symbol (e.g., "$") */
  currencySymbol?: string;
  /** Primary language(s) spoken */
  languages: string[];
  /** Top-level domain (e.g., ".us") */
  tld?: string;
  /**
   * Whether the country is officially recognized as a sovereign state.
   * `false` for disputed or unrecognized territories (e.g., Kosovo, Nagorno-Karabakh)
   * that use user-assigned ISO codes not endorsed by the UN.
   */
  recognized: boolean;
}

/**
 * Supported locales used for translated display names in this package.
 */
export type LanguageNameLocale =
  | "en"
  | "ar"
  | "de"
  | "es"
  | "fr"
  | "hi"
  | "it"
  | "ja"
  | "ko"
  | "nl"
  | "pl"
  | "pt"
  | "ru"
  | "tr"
  | "zh";

/**
 * Whether a language entry is a base language code or a more specific locale variant.
 */
export type LanguageType = "language" | "variant";

/**
 * Official-language statuses used by CLDR territory population data.
 */
export type LanguageOfficialStatus =
  | "official"
  | "de_facto_official"
  | "official_regional";

/**
 * Country-level official-language metadata for a single language.
 */
export interface LanguageOfficialCountry {
  /** ISO 3166-1 alpha-2 country code */
  countryCode: string;
  /** Official status in the territory */
  officialStatus: LanguageOfficialStatus;
  /** Approximate share of the territory population that speaks the language */
  populationPercent: number;
}

/**
 * A language or locale variant with translated names and speaker estimates.
 */
export interface Language {
  /** Canonical BCP 47 language or locale code */
  code: string;
  /** The canonical base language code, e.g. "en" for "en-GB" */
  baseCode: string;
  /** Whether this is a base language or a locale variant */
  type: LanguageType;
  /** English display name */
  name: string;
  /**
   * Estimated speaker count derived from CLDR territory population percentages.
   * For variants this is a locale-scoped estimate where possible.
   */
  estimatedSpeakers: number;
  /** Countries or territories where this language has an official status in CLDR */
  officialCountries: LanguageOfficialCountry[];
  /** Script subtag for variants such as "sr-Latn" */
  script?: string;
  /** Region subtag for variants such as "en-GB" */
  region?: string;
  /** Additional locale variant subtags, e.g. ["valencia"] */
  variants?: string[];
}

/**
 * Continent names
 */
export type ContinentName =
  | "Africa"
  | "Antarctica"
  | "Asia"
  | "Europe"
  | "North America"
  | "Oceania"
  | "South America";

/**
 * Phone country code entry, suitable for use in phone number inputs.
 */
export interface PhoneCountryCode {
  /** Country name */
  country: string;
  /** ISO 3166-1 alpha-2 code */
  code: string;
  /** International dialing code with + prefix (e.g., "+1") */
  phoneCode: string;
  /** Unicode emoji flag */
  flag: string;
  /** Example number format (without country code) */
  example?: string;
}

/**
 * Semantic fields used in postal address templates.
 */
export type AddressField =
  | "recipient"
  | "organization"
  | "streetAddress"
  | "dependentLocality"
  | "locality"
  | "administrativeArea"
  | "postalCode"
  | "sortingCode";

/**
 * Country-specific label variant for postal codes.
 */
export type AddressPostalCodeType = "postal" | "zip" | "pin" | "eircode";

/**
 * Country-specific label variant for the administrative-area field.
 */
export type AddressAdministrativeAreaType =
  | "province"
  | "state"
  | "county"
  | "department"
  | "district"
  | "do_si"
  | "emirate"
  | "island"
  | "oblast"
  | "parish"
  | "prefecture"
  | "region";

/**
 * Country-specific label variant for the locality field.
 */
export type AddressLocalityType = "city" | "district" | "post_town" | "suburb";

/**
 * Country-specific label variant for the dependent-locality field.
 */
export type AddressDependentLocalityType =
  | "district"
  | "neighborhood"
  | "suburb"
  | "townland";

/**
 * Normalized address-format metadata for a country.
 */
export interface CountryAddressFormat {
  /** ISO 3166-1 alpha-2 country code */
  alpha2: string;
  /** Postal template using % tokens from Google's address metadata */
  format: string;
  /** Optional Latin-script variant of the postal template */
  latinFormat?: string;
  /** Fields referenced by the template, in appearance order */
  usedFields: AddressField[];
  /** Fields marked as required for valid postal addresses in this country */
  requiredFields: AddressField[];
  /** Fields that are conventionally uppercased when formatted */
  uppercaseFields: AddressField[];
  /** Postal-code regex pattern from the source metadata */
  postalCodePattern?: string;
  /** Example postal codes from the source metadata */
  postalCodeExamples?: string[];
  /** Optional international prefix used before the postal code */
  postalCodePrefix?: string;
  /** User-facing postal-code label variant */
  postalCodeType: AddressPostalCodeType;
  /** User-facing administrative-area label variant */
  administrativeAreaType: AddressAdministrativeAreaType;
  /** User-facing locality label variant */
  localityType: AddressLocalityType;
  /** User-facing dependent-locality label variant */
  dependentLocalityType: AddressDependentLocalityType;
}

/**
 * Address parts accepted by `formatAddress()`.
 */
export interface AddressInput {
  /** Recipient or addressee name */
  recipient?: string;
  /** Organization or company name */
  organization?: string;
  /** Street-address line(s) */
  streetAddress?: string | string[];
  /** Neighborhood, district, townland, or similar dependent locality */
  dependentLocality?: string;
  /** City, suburb, district, or post town */
  locality?: string;
  /** State, province, county, prefecture, or similar area */
  administrativeArea?: string;
  /** Postal / ZIP / PIN / Eircode */
  postalCode?: string;
  /** Sorting code where applicable */
  sortingCode?: string;
}

/**
 * Options for `formatAddress()`.
 */
export interface FormatAddressOptions {
  /** Prefer the Latin-script template when one exists */
  latin?: boolean;
  /** Apply the source metadata's uppercase rules. Defaults to true. */
  uppercase?: boolean;
}

/**
 * A country or territory associated with an IANA timezone.
 */
export interface TimezoneTerritory {
  /** ISO 3166-1 alpha-2 code */
  code: string;
  /** English display name */
  name: string;
  /** Unicode emoji flag */
  flag: string;
  /** Whether the territory exists in the bundled world-map dataset */
  mappable: boolean;
  /** Sovereign-state recognition flag when the territory exists in the core countries dataset */
  recognized?: boolean;
  /** Continent when the territory exists in the core countries dataset */
  continent?: ContinentName;
}

/**
 * IANA timezone metadata derived from zone1970.tab.
 */
export interface Timezone {
  /** Canonical IANA timezone identifier */
  name: string;
  /** Top-level region segment, e.g. "Europe" */
  region: string;
  /** Middle path segments between region and location */
  subregions: string[];
  /** Final path segment formatted for display */
  location: string;
  /** Human-readable label built from the path segments */
  displayName: string;
  /** ISO 3166-1 alpha-2 codes covered by the timezone */
  countryCodes: string[];
  /** Fully-enriched territory details for each code */
  territories: TimezoneTerritory[];
  /** Country or territory codes that can be highlighted with the bundled map dataset */
  mappableCountryCodes: string[];
  /** Latitude of the timezone's principal location */
  latitude: number;
  /** Longitude of the timezone's principal location */
  longitude: number;
  /** Optional IANA comment for zones where a country has multiple entries */
  comment?: string;
}

/**
 * Supported capital roles for city records.
 */
export type CityCapitalType =
  | "country"
  | "state"
  | "province"
  | "district"
  | "territory"
  | "region"
  | "department"
  | "county"
  | "municipality";

/**
 * Broad settlement classifications for city records.
 */
export type CityFeatureType =
  | "city"
  | "town"
  | "village"
  | "district"
  | "municipality"
  | "metropolitan-area"
  | "capital-district";

/**
 * Represents a city with geographic and demographic data.
 */
export interface City {
  /** Stable external identifier for the place when available */
  geonameId?: number;
  /** City name */
  name: string;
  /** ISO 3166-1 alpha-2 country code */
  country: string;
  /** State, province, or region */
  state?: string;
  /** Raw first-order administrative code when known */
  stateCode?: string;
  /** More explicit type for the `state` field when known */
  stateType?: string;
  /** Approximate population */
  population?: number;
  /** Year for the population estimate when known */
  populationYear?: number;
  /** Latitude */
  lat: number;
  /** Longitude */
  lon: number;
  /** IANA timezone identifier when known */
  timezone?: string;
  /** Whether this is the capital of the country */
  capital?: boolean;
  /** Exact administrative level when the city is a capital: 0=country, 1=admin1, ..., 4=admin4 */
  capitalLevel?: 0 | 1 | 2 | 3 | 4;
  /** Capital roles this city serves, e.g. `["country", "state"]` */
  capitalTypes?: CityCapitalType[];
  /** Settlement classification when known */
  featureType?: CityFeatureType;
}

/**
 * Metadata for a single static place-data shard.
 */
export interface PlaceDatasetCountryMeta {
  /** Number of place records in the shard */
  count: number;
  /** Approximate raw JSON size in bytes */
  bytes: number;
}

/**
 * Metadata describing the static place dataset.
 */
export interface PlaceDatasetMeta {
  /** Human-readable source description */
  source: string;
  /** Human-readable selection rule for included places */
  selection: string;
  /** Population floor applied to non-administrative places */
  minPopulation: number;
  /** Total number of place records across all shards */
  totalPlaces: number;
  /** Number of country/territory shards bundled */
  countryCount: number;
  /** Metadata keyed by ISO alpha-2 country/territory code */
  countries: Record<string, PlaceDatasetCountryMeta>;
}

/**
 * Represents a state, province, or other administrative division.
 */
export interface State {
  /** Full name of the state/province */
  name: string;
  /** State/province abbreviation code */
  code: string;
  /** ISO 3166-1 alpha-2 country code */
  country: string;
  /** Type of administrative division */
  type: StateType;
}

/**
 * Normalized types of administrative divisions used by this dataset.
 */
export type StateType =
  | "state"
  | "province"
  | "territory"
  | "autonomous region"
  | "district"
  | "department"
  | "region"
  | "county"
  | "emirate"
  | "canton"
  | "municipality"
  | "prefecture"
  | "governorate"
  | "parish"
  | "city"
  | "division"
  | "atoll"
  | "island";

/**
 * Continent with metadata
 */
export interface Continent {
  /** Continent name */
  name: ContinentName;
  /** Two-letter continent code */
  code: string;
  /** Approximate population */
  population: number;
  /** Area in square kilometers */
  area: number;
  /** Number of countries */
  countries: number;
}

/**
 * Currency information
 */
export interface Currency {
  /** ISO 4217 currency code */
  code: string;
  /** Currency name */
  name: string;
  /** Currency symbol */
  symbol: string;
  /** Countries using this currency (alpha-2 codes) */
  countries: string[];
}

/**
 * Climate zones based on the Köppen climate classification (simplified).
 */
export type ClimateZone =
  | "tropical"
  | "subtropical"
  | "arid"
  | "mediterranean"
  | "temperate"
  | "continental"
  | "subarctic"
  | "arctic";

/**
 * Geographic bounding box of a country.
 */
export interface CountryBounds {
  /** Northernmost latitude */
  north: number;
  /** Southernmost latitude */
  south: number;
  /** Easternmost longitude */
  east: number;
  /** Westernmost longitude */
  west: number;
}

/**
 * Geographic and climate data for a country, useful for geography games.
 */
export interface CountryGeography {
  /** ISO 3166-1 alpha-2 code */
  alpha2: string;
  /** Centroid latitude of the country */
  lat: number;
  /** Centroid longitude of the country */
  lon: number;
  /** Approximate bounding box */
  bounds: CountryBounds;
  /** Land area in km² */
  area: number;
  /** Whether the country is landlocked (has no coastline) */
  landlocked: boolean;
  /** Neighboring country alpha-2 codes */
  neighbors: string[];
  /** Primary climate zone */
  climate: ClimateZone;
  /** Average annual temperature in Celsius */
  avgTemperature: number;
}

/**
 * Primary colors that can appear on a country flag.
 */
export type FlagColor =
  | "red"
  | "dark-red"
  | "white"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "black"
  | "gold"
  | "light-blue"
  | "dark-blue"
  | "dark-green"
  | "purple"
  | "brown";

/**
 * How multi-colour flag filters should be combined.
 */
export type FlagColorOperator = "and" | "or";

/**
 * Options for filtering flags by one or more colours.
 */
export interface GetFlagsByColorOptions {
  /**
   * How multiple colours should be matched.
   * Defaults to "and" when an array of colours is provided.
   */
  operator?: FlagColorOperator;
}

/**
 * Flag metadata for a country, including visual similarity data for geography games.
 */
export interface FlagInfo {
  /** ISO 3166-1 alpha-2 code */
  alpha2: string;
  /** URL to the hosted SVG flag image */
  svgUrl: string;
  /** URL to a hosted 4×3 PNG flag image */
  pngUrl: string;
  /** Primary colors present on the flag (up to 4, most prominent first) */
  colors: FlagColor[];
  /**
   * Alpha-2 codes of countries whose flags look visually similar.
   * Useful for building "guess the flag" games with confusing options.
   */
  similar: string[];
}

/**
 * 8-point cardinal / intercardinal compass directions.
 */
export type CardinalDirection = "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";

/**
 * SVG path data for a single country on the world map.
 * A country may consist of multiple disjoint polygons (e.g. islands).
 */
export interface WorldMapCountry {
  /** ISO 3166-1 alpha-2 code (e.g. "US") */
  code: string;
  /** Common country name */
  name: string;
  /** One or more SVG path `d` attribute strings */
  paths: string[];
}

/**
 * Styling options for rendering the world map SVG.
 */
export interface WorldMapOptions {
  /** Fill color for all country shapes. Default: "#d0d0d0" */
  fill?: string;
  /** Stroke (border) color between countries. Default: "#ffffff" */
  stroke?: string;
  /** Stroke width in SVG units. Default: 0.5 */
  strokeWidth?: number;
  /** Fill color applied to a country on hover. Default: "#a0a0a0" */
  hoverFill?: string;
  /** SVG element width attribute (e.g. "100%", 800). Default: "100%" */
  width?: string | number;
  /** SVG element height attribute (e.g. "auto", 400). Default: "auto" */
  height?: string | number;
  /** Optional CSS class added to the `<svg>` element. */
  className?: string;
}

/**
 * A single religion and its approximate share of a country's population.
 */
export interface ReligionBreakdown {
  /** Religion name (e.g., "Christianity", "Islam", "Hinduism") */
  name: string;
  /** Percentage of the population (0–100) */
  percentage: number;
}

/**
 * A single ethnic group and its approximate share of a country's population.
 */
export interface EthnicGroup {
  /** Ethnic group name (e.g., "Han Chinese", "White", "Mestizo") */
  name: string;
  /** Percentage of the population (0–100) */
  percentage: number;
}

/**
 * Demographic data for a country: population, religions, and ethnic makeup.
 * Data is sourced from the CIA World Factbook, Pew Research Center, and UN estimates.
 */
export interface CountryDemographics {
  /** ISO 3166-1 alpha-2 code */
  alpha2: string;
  /** Approximate total population */
  population: number;
  /** Year of the population estimate */
  populationYear: number;
  /**
   * Religious breakdown, sorted by percentage descending.
   * Percentages may not sum to exactly 100 due to rounding or "other/unspecified" omissions.
   */
  religions: ReligionBreakdown[];
  /**
   * Ethnic group breakdown, sorted by percentage descending.
   * Percentages may not sum to exactly 100 due to rounding or "other/unspecified" omissions.
   */
  ethnicGroups: EthnicGroup[];
}

/**
 * Describes a highlighted country on the world map.
 */
export interface WorldMapHighlight {
  /** ISO 3166-1 alpha-2 code of the country to highlight */
  code: string;
  /** Fill color to use for this country. Overrides the default fill. */
  fill: string;
  /** Optional accessible label (written as a `<title>` element). */
  label?: string;
}

/**
 * Styling and display options for rendering a single-country SVG map.
 */
export interface CountryMapOptions {
  /** Fill color for the country shape. Default: "#d0d0d0" */
  fill?: string;
  /** Stroke (border) color for the country outline. Default: "#ffffff" */
  stroke?: string;
  /** Stroke width in SVG units. Default: 0.5 */
  strokeWidth?: number;
  /** SVG element width attribute (e.g. "100%", 800). Default: "100%" */
  width?: string | number;
  /** SVG element height attribute (e.g. "auto", 400). Default: "auto" */
  height?: string | number;
  /** Optional CSS class added to the `<svg>` element. */
  className?: string;
  /** Whether to show city marker dots. Default: true */
  showCities?: boolean;
  /** Fill color for regular city markers. Default: "#555555" */
  cityColor?: string;
  /** Fill color for the capital city marker. Default: "#cc2222" */
  capitalColor?: string;
  /** Radius of regular city markers in SVG units. Default: 3 */
  cityRadius?: number;
  /** Radius of the capital city marker in SVG units. Default: 5 */
  capitalRadius?: number;
  /** Extra space (in SVG units) added around the country outline. Default: 5 */
  padding?: number;
}

/**
 * Named moon phases used by the astronomy helpers.
 */
export type MoonPhaseName =
  | "new-moon"
  | "waxing-crescent"
  | "first-quarter"
  | "waxing-gibbous"
  | "full-moon"
  | "waning-gibbous"
  | "last-quarter"
  | "waning-crescent";

/**
 * Static metadata for a moon phase.
 */
export interface MoonPhase {
  /** Zero-based phase index in the canonical 8-phase cycle. */
  index: number;
  /** Stable machine-readable moon phase key. */
  key: MoonPhaseName;
  /** Human-readable moon phase label. */
  name: string;
  /** Short description of the phase. */
  description: string;
}

/**
 * A moon phase resolved for a specific date.
 */
export interface MoonPhaseSnapshot extends MoonPhase {
  /** Fraction through the synodic month, from 0 to just under 1. */
  fraction: number;
  /** Illuminated portion of the lunar disc, from 0 to 1. */
  illumination: number;
  /** Approximate age of the moon in days since new moon. */
  ageDays: number;
}

/**
 * Meteorological season names used for the sun helpers.
 */
export type SeasonName = "spring" | "summer" | "autumn" | "winter";

/**
 * Hemisphere selector for season lookups.
 */
export type SeasonHemisphere = "north" | "south";

/**
 * Describes the current season for a hemisphere.
 */
export interface SeasonInfo {
  /** Season name. */
  name: SeasonName;
  /** Hemisphere used for the lookup. */
  hemisphere: SeasonHemisphere;
  /** Human-readable label suitable for UI output. */
  label: string;
}

/**
 * Simple atmosphere density categories for static space datasets.
 */
export type AtmosphereDensity = "none" | "trace" | "thin" | "moderate" | "dense" | "very-dense";

/**
 * A named composition component with an optional rough share.
 */
export interface CompositionComponent {
  /** Human-readable component label. */
  name: string;
  /** Optional approximate share of the body by mass or bulk composition. */
  percentage?: number;
  /** Extra context when the entry is descriptive rather than strictly quantitative. */
  note?: string;
}

/**
 * Simple temperature metadata for a celestial body.
 */
export interface TemperatureProfile {
  /** Approximate average temperature in Celsius. */
  averageC?: number;
  /** Approximate minimum observed or expected temperature in Celsius. */
  minC?: number;
  /** Approximate maximum observed or expected temperature in Celsius. */
  maxC?: number;
  /** Notes about how the temperatures should be interpreted. */
  notes?: string;
}

/**
 * Orbital and rotation data for a planet.
 */
export interface PlanetOrbit {
  /** Mean distance from the Sun in kilometers. */
  meanDistanceFromSunKm: number;
  /** Closest distance to the Sun in kilometers. */
  perihelionKm: number;
  /** Farthest distance to the Sun in kilometers. */
  aphelionKm: number;
  /** Time to orbit the Sun once, in Earth days. */
  orbitalPeriodDays: number;
  /** Sidereal rotation period in hours. Negative values indicate retrograde rotation. */
  rotationPeriodHours: number;
}

/**
 * Major planet categories used by the static astronomy dataset.
 */
export type PlanetType = "terrestrial" | "gas-giant" | "ice-giant";

/**
 * Static reference data for a planet.
 */
export interface Planet {
  /** Stable identifier. */
  id: string;
  /** Display name. */
  name: string;
  /** Position from the Sun, starting at 1 for Mercury. */
  orderFromSun: number;
  /** High-level planet category. */
  type: PlanetType;
  /** Short human-readable summary. */
  summary: string;
  /** Mean radius in kilometers. */
  meanRadiusKm: number;
  /** Mean diameter in kilometers. */
  diameterKm: number;
  /** Mass in kilograms. */
  massKg: number;
  /** Surface or cloud-top gravity in meters per second squared. */
  gravityMS2: number;
  /** Escape velocity in kilometers per second. */
  escapeVelocityKmS: number;
  /** Axial tilt in degrees. */
  axialTiltDegrees: number;
  /** Whether a ring system is present. */
  hasRings: boolean;
  /** Coarse atmosphere density label. */
  atmosphereDensity: AtmosphereDensity;
  /** Primary atmospheric gases. */
  atmosphere: string[];
  /** High-level composition entries. */
  composition: CompositionComponent[];
  /** Approximate temperature profile. */
  temperature: TemperatureProfile;
  /** Basic orbital and rotation values. */
  orbit: PlanetOrbit;
}

/**
 * Orbital and rotation data for a moon.
 */
export interface MoonOrbit {
  /** Mean distance from the parent planet in kilometers. */
  meanDistanceFromPlanetKm: number;
  /** Time to orbit the parent planet once, in Earth days. */
  orbitalPeriodDays: number;
  /** Rotation period in hours. */
  rotationPeriodHours: number;
  /** Whether the moon keeps one hemisphere facing the parent planet. */
  tidalLocked: boolean;
  /** Whether the orbit is retrograde relative to the planet's rotation. */
  retrograde?: boolean;
}

/**
 * Static reference data for a moon or natural satellite.
 */
export interface Moon {
  /** Stable identifier. */
  id: string;
  /** Display name. */
  name: string;
  /** Parent planet identifier. */
  planetId: string;
  /** Short human-readable summary. */
  summary: string;
  /** Mean radius in kilometers. */
  meanRadiusKm: number;
  /** Mean diameter in kilometers. */
  diameterKm: number;
  /** Mass in kilograms. */
  massKg: number;
  /** Surface gravity in meters per second squared. */
  gravityMS2: number;
  /** Coarse atmosphere density label. */
  atmosphereDensity: AtmosphereDensity;
  /** Primary atmospheric gases, if any. */
  atmosphere: string[];
  /** High-level composition entries. */
  composition: CompositionComponent[];
  /** Approximate temperature profile. */
  temperature: TemperatureProfile;
  /** Orbital data around the parent planet. */
  orbit: MoonOrbit;
}

/**
 * Static reference data for a star.
 */
export interface Star {
  /** Stable identifier. */
  id: string;
  /** Display name. */
  name: string;
  /** Optional constellation. */
  constellation?: string;
  /** Short human-readable summary. */
  summary: string;
  /** Spectral class or type. */
  spectralType: string;
  /** Distance from Earth in light-years. */
  distanceFromEarthLightYears: number;
  /** Apparent magnitude as seen from Earth. */
  apparentMagnitude: number;
  /** Mass relative to the Sun. */
  massSolar: number;
  /** Radius relative to the Sun. */
  radiusSolar: number;
  /** Approximate photosphere temperature in Kelvin. */
  surfaceTemperatureK: number;
  /** Luminosity relative to the Sun. */
  luminositySolar: number;
}

/**
 * Static reference data for a galaxy.
 */
export interface Galaxy {
  /** Stable identifier. */
  id: string;
  /** Display name. */
  name: string;
  /** High-level morphological type. */
  type: string;
  /** Short human-readable summary. */
  summary: string;
  /** Approximate diameter in light-years. */
  diameterLightYears: number;
  /** Approximate disc thickness in light-years. */
  thicknessLightYears: number;
  /** Approximate age in billions of years. */
  ageBillionYears: number;
  /** Lower-bound star count estimate. */
  estimatedStarsMin: number;
  /** Upper-bound star count estimate. */
  estimatedStarsMax: number;
  /** Approximate distance from the Solar System to the galactic center, in light-years. */
  distanceFromGalacticCenterLightYears: number;
  /** Major named structural components. */
  majorStructures: string[];
}
