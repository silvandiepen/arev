import { describe, it, expect } from "vitest";
import { phoneCountryCodes } from "../data/phoneCodes.js";
import type { PhoneCountryCode } from "../types/index.js";

describe("phoneCountryCodes", () => {
  it("should export an array of phone country codes", () => {
    expect(Array.isArray(phoneCountryCodes)).toBe(true);
  });

  it("should contain a significant number of entries", () => {
    expect(phoneCountryCodes.length).toBeGreaterThan(150);
  });

  it("should have all required fields for each entry", () => {
    const requiredFields: (keyof PhoneCountryCode)[] = [
      "country",
      "code",
      "dialCode",
      "flag",
    ];

    for (const entry of phoneCountryCodes) {
      for (const field of requiredFields) {
        expect(
          entry[field],
          `Entry "${entry.country}" is missing field "${field}"`
        ).toBeTruthy();
      }
    }
  });

  it("should have unique country codes", () => {
    const codes = phoneCountryCodes.map((c) => c.code);
    const uniqueCodes = new Set(codes);
    expect(uniqueCodes.size).toBe(codes.length);
  });

  it("should have dial codes starting with +", () => {
    for (const entry of phoneCountryCodes) {
      expect(
        entry.dialCode.startsWith("+"),
        `Entry "${entry.country}" has invalid dial code: "${entry.dialCode}"`
      ).toBe(true);
    }
  });

  it("should have ISO alpha-2 codes of length 2", () => {
    for (const entry of phoneCountryCodes) {
      expect(
        entry.code.length,
        `Entry "${entry.country}" has invalid code: "${entry.code}"`
      ).toBe(2);
    }
  });

  it("should include well-known dial codes", () => {
    const us = phoneCountryCodes.find((c) => c.code === "US");
    expect(us?.dialCode).toBe("+1");

    const gb = phoneCountryCodes.find((c) => c.code === "GB");
    expect(gb?.dialCode).toBe("+44");

    const de = phoneCountryCodes.find((c) => c.code === "DE");
    expect(de?.dialCode).toBe("+49");

    const cn = phoneCountryCodes.find((c) => c.code === "CN");
    expect(cn?.dialCode).toBe("+86");

    const jp = phoneCountryCodes.find((c) => c.code === "JP");
    expect(jp?.dialCode).toBe("+81");
  });

  it("should be searchable by dial code", () => {
    const entries = phoneCountryCodes.filter((c) => c.dialCode === "+1");
    expect(entries.length).toBeGreaterThanOrEqual(1);
  });

  it("should have correct data for United Kingdom", () => {
    const gb = phoneCountryCodes.find((c) => c.code === "GB");
    expect(gb).toBeDefined();
    expect(gb?.country).toBe("United Kingdom");
    expect(gb?.dialCode).toBe("+44");
    expect(gb?.flag).toBe("🇬🇧");
  });
});
