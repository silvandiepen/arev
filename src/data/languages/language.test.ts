import { describe, expect, it } from "vitest";
import type { Language } from "../../types/index.js";
import {
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
} from "./index.js";

describe("language datasets", () => {
  it("should expose a large base language dataset", () => {
    expect(languages.length).toBeGreaterThan(700);
  });

  it("should expose a large locale variant dataset", () => {
    expect(languageVariants.length).toBeGreaterThan(400);
  });

  it("should expose the combined language catalog", () => {
    expect(allLanguages.length).toBe(languages.length + languageVariants.length);
  });

  it("should expose supported translation locales", () => {
    expect(languageNameLocales).toContain("en");
    expect(languageNameLocales).toContain("de");
    expect(languageNameLocales).toContain("ja");
    expect(languageNameLocales).toContain("zh");
  });

  it("should expose language aliases for deprecated codes", () => {
    expect(languageCodeAliases.iw).toBe("he");
    expect(languageCodeAliases.in).toBe("id");
    expect(languageCodeAliases.sh).toBe("sr-Latn");
  });
});

describe("canonicalizeLanguageCode", () => {
  it("should canonicalize aliases and separators", () => {
    expect(canonicalizeLanguageCode("iw")).toBe("he");
    expect(canonicalizeLanguageCode("EN_gb")).toBe("en-GB");
    expect(canonicalizeLanguageCode("sh")).toBe("sr-Latn");
  });

  it("should return undefined for invalid tags", () => {
    expect(canonicalizeLanguageCode("")).toBeUndefined();
    expect(canonicalizeLanguageCode("???")).toBeUndefined();
  });
});

describe("getLanguageByCode", () => {
  it("should find a base language", () => {
    const language = getLanguageByCode("en");
    expect(language?.name).toBe("English");
    expect(language?.type).toBe("language");
  });

  it("should find a locale variant", () => {
    const language = getLanguageByCode("en_gb");
    expect(language?.code).toBe("en-GB");
    expect(language?.type).toBe("variant");
    expect(language?.name).toBe("British English");
  });

  it("should return undefined for unknown codes", () => {
    expect(getLanguageByCode("zz-Nowhere")).toBeUndefined();
  });
});

describe("getLanguageName", () => {
  it("should return translated labels from the translation data", () => {
    expect(getLanguageName("en", "de")).toBe("Englisch");
    expect(getLanguageName("en-GB", "fr")).toBe("anglais britannique");
  });

  it("should fall back to English when the locale is unsupported", () => {
    expect(getLanguageName("en", "xx")).toBe("English");
  });
});

describe("getLanguageVariants", () => {
  it("should return multiple variants for English", () => {
    const variants = getLanguageVariants("en");
    const codes = variants.map((language) => language.code);
    expect(variants.length).toBeGreaterThan(50);
    expect(codes).toContain("en-AU");
    expect(codes).toContain("en-GB");
  });

  it("should resolve variants from alias inputs", () => {
    const variants = getLanguageVariants("sh");
    expect(variants.some((language) => language.code === "sr-Latn")).toBe(true);
  });
});

describe("searchLanguages", () => {
  it("should match by translated name", () => {
    const results = searchLanguages("anglais", { locale: "fr", includeVariants: true });
    expect(results.some((language) => language.code === "en")).toBe(true);
  });

  it("should match locale variants by name", () => {
    const results = searchLanguages("british english", { includeVariants: true });
    expect(results.some((language) => language.code === "en-GB")).toBe(true);
  });

  it("should respect the minimum speaker count filter", () => {
    const results = searchLanguages("english", {
      includeVariants: false,
      minSpeakers: 1_000_000_000,
    });

    expect(results.map((language) => language.code)).toContain("en");
  });
});

describe("getLanguagesBySpeakerCount", () => {
  it("should allow filtering out obscure languages", () => {
    const results = getLanguagesBySpeakerCount(500_000_000);
    const codes = results.map((language) => language.code);

    expect(codes).toContain("en");
    expect(codes).toContain("zh");
    expect(codes).toContain("hi");
  });

  it("should exclude variants by default", () => {
    const results = getLanguagesBySpeakerCount(1_000_000_000);
    expect(results.every((language) => language.type === "language")).toBe(true);
  });
});

describe("official language mappings", () => {
  it("should expose official languages by country", () => {
    const belgium = getOfficialLanguagesByCountry("BE");
    const codes = belgium.map((language) => language.code);

    expect(codes).toContain("de");
    expect(codes).toContain("fr");
    expect(codes).toContain("nl");
  });

  it("should expose official countries for a language", () => {
    const catalan = getOfficialLanguageCountries("ca");
    const countryCodes = catalan.map((entry) => entry.countryCode);

    expect(countryCodes).toContain("AD");
    expect(countryCodes).toContain("ES");
  });

  it("should keep the country index limited to countries in the main dataset", () => {
    expect(officialLanguagesByCountry.US.every((language) => language.type === "language")).toBe(true);
  });
});

describe("type safety", () => {
  it("should satisfy the exported Language type", () => {
    const language: Language = languages[0];
    expect(typeof language.code).toBe("string");
    expect(typeof language.baseCode).toBe("string");
    expect(typeof language.name).toBe("string");
    expect(typeof language.estimatedSpeakers).toBe("number");
    expect(Array.isArray(language.officialCountries)).toBe(true);
  });
});
