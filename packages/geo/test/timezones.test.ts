import { describe, expect, it } from "vitest";
import {
  getCountriesByTimezone,
  getMappableCountryCodesByTimezone,
  getPrimaryTimezoneByCountry,
  getTimezoneByName,
  getTimezonesByCountry,
  searchTimezones,
  timezones,
} from "../src/data/timezones.js";

describe("timezone data", () => {
  it("exports the IANA timezone collection", () => {
    expect(Array.isArray(timezones)).toBe(true);
    expect(timezones.length).toBeGreaterThan(300);
  });

  it("resolves timezones by country code", () => {
    const maltaTimezones = getTimezonesByCountry("mt");

    expect(maltaTimezones).toHaveLength(1);
    expect(maltaTimezones[0]?.name).toBe("Europe/Malta");
    expect(maltaTimezones[0]?.mappableCountryCodes).toContain("MT");
  });

  it("returns the primary timezone for a country", () => {
    expect(getPrimaryTimezoneByCountry("MT")?.name).toBe("Europe/Malta");
  });

  it("resolves territories for a timezone", () => {
    const territories = getCountriesByTimezone("Europe/Zurich");
    const codes = territories.map((territory) => territory.code);

    expect(codes).toContain("CH");
    expect(codes).toContain("DE");
    expect(codes).toContain("LI");
  });

  it("returns mappable country codes for map rendering", () => {
    const codes = getMappableCountryCodesByTimezone("Europe/Zurich");

    expect(codes).toContain("CH");
    expect(codes).toContain("DE");
    expect(codes).toContain("LI");
  });

  it("searches timezones by zone name and territory name", () => {
    expect(searchTimezones("dubai").some((timezone) => timezone.name === "Asia/Dubai")).toBe(true);
    expect(searchTimezones("malta").some((timezone) => timezone.name === "Europe/Malta")).toBe(true);
  });

  it("looks up timezones by name case-insensitively", () => {
    expect(getTimezoneByName("europe/malta")?.displayName).toBe("Malta");
  });
});
