import type { State } from "../types/index.js";
import stateData from "./states.data.json";

/**
 * Administrative divisions backed by ISO 3166-2 subdivision data.
 * Includes custom entries for the repo's non-standard XK and XN country codes.
 */
export const states: State[] = stateData as State[];

/**
 * Get all states/provinces for a specific country.
 */
export function getStatesByCountry(countryCode: string): State[] {
  return states.filter(
    (state) => state.country.toLowerCase() === countryCode.toLowerCase()
  );
}

/**
 * Get a state by its code and country code.
 */
export function getStateByCode(
  code: string,
  countryCode: string
): State | undefined {
  return states.find(
    (state) =>
      state.code.toLowerCase() === code.toLowerCase() &&
      state.country.toLowerCase() === countryCode.toLowerCase()
  );
}

/**
 * Get all states of a specific type.
 */
export function getStatesByType(type: State["type"]): State[] {
  return states.filter((state) => state.type === type);
}
