/**
 * Represents a country with standard geographic and ISO data.
 */
export interface Country {
  /** ISO 3166-1 alpha-2 country code (e.g., "US") */
  code: string;
  /** ISO 3166-1 alpha-3 country code (e.g., "USA") */
  code3: string;
  /** Official country name */
  name: string;
  /** Native name of the country */
  nativeName: string;
  /** Capital city */
  capital: string;
  /** Continent name */
  continent: string;
  /** Emoji flag representation */
  flag: string;
  /** Country phone dial code (e.g., "+1") */
  dialCode: string;
  /** ISO 4217 currency code (e.g., "USD") */
  currency: string;
  /** Primary language code (e.g., "en") */
  language: string;
}

/**
 * Represents a phone country code entry.
 */
export interface PhoneCountryCode {
  /** Country name */
  country: string;
  /** ISO 3166-1 alpha-2 country code */
  code: string;
  /** International dial code including "+" prefix (e.g., "+1") */
  dialCode: string;
  /** Emoji flag */
  flag: string;
}

/**
 * Represents a city.
 */
export interface City {
  /** City name */
  name: string;
  /** ISO 3166-1 alpha-2 country code the city belongs to */
  countryCode: string;
  /** Country name */
  country: string;
  /** Whether this is the capital city */
  capital: boolean;
  /** Approximate population */
  population?: number;
  /** Latitude coordinate */
  lat?: number;
  /** Longitude coordinate */
  lng?: number;
}

/**
 * Represents a US state or Canadian province / territory.
 */
export interface State {
  /** State or province name */
  name: string;
  /** Abbreviation or code (e.g., "CA", "TX") */
  code: string;
  /** ISO 3166-1 alpha-2 country code */
  countryCode: string;
  /** Type of administrative division */
  type: "state" | "province" | "territory" | "district";
}

/**
 * Represents a continent.
 */
export interface Continent {
  /** Continent name */
  name: string;
  /** Short continent code */
  code: string;
}
