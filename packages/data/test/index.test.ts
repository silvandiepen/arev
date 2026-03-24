import { describe, expect, it } from "vitest";
import {
  countries,
  getCountryByCode,
  getPlacesDatasetMeta,
  getMoonPhase,
  planets,
  haversineDistance,
} from "../src/index.js";

describe("@arevs/data", () => {
  it("aggregates geo exports", () => {
    expect(countries.length).toBeGreaterThan(150);
    expect(getCountryByCode("MT")?.name).toBe("Malta");
  });

  it("aggregates places exports", () => {
    expect(getPlacesDatasetMeta().countryCount).toBeGreaterThan(190);
  });

  it("aggregates astronomy and space exports", () => {
    expect(getMoonPhase("2026-03-24").name).toBeTruthy();
    expect(planets.length).toBeGreaterThan(7);
  });

  it("aggregates shared utils", () => {
    expect(Math.round(haversineDistance(35.6895, 139.6917, 51.5072, -0.1276))).toBe(9559);
  });
});
