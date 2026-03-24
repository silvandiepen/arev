import { describe, expect, it } from "vitest";
import {
  addressFormats,
  formatAddress,
  getAddressFormatByCountry,
} from "../src/data/addressFormats.js";
import { countries } from "../src/data/countries.js";

describe("addressFormats", () => {
  it("should export a format record for every bundled country", () => {
    expect(addressFormats).toHaveLength(countries.length);
  });

  it("should return country formats case-insensitively", () => {
    const us = getAddressFormatByCountry("us");

    expect(us).toBeDefined();
    expect(us?.alpha2).toBe("US");
    expect(us?.postalCodeType).toBe("zip");
    expect(us?.administrativeAreaType).toBe("state");
    expect(us?.requiredFields).toEqual([
      "streetAddress",
      "locality",
      "administrativeArea",
      "postalCode",
    ]);
  });

  it("should include latin-script templates where available", () => {
    const jp = getAddressFormatByCountry("JP");

    expect(jp?.latinFormat).toBe("%N%n%O%n%A, %S%n%Z");
    expect(jp?.administrativeAreaType).toBe("prefecture");
    expect(jp?.usedFields).toContain("postalCode");
  });

  it("should fall back to the generic international pattern when a country has no upstream data", () => {
    const xn = getAddressFormatByCountry("XN");

    expect(xn).toBeDefined();
    expect(xn?.format).toBe("%N%n%O%n%A%n%C");
    expect(xn?.requiredFields).toEqual(["streetAddress", "locality"]);
    expect(xn?.postalCodeType).toBe("postal");
    expect(xn?.administrativeAreaType).toBe("province");
  });

  it("should format US addresses using the country template and uppercase rules", () => {
    const formatted = formatAddress(
      {
        recipient: "Ada Lovelace",
        streetAddress: "1600 Amphitheatre Pkwy",
        locality: "Mountain View",
        administrativeArea: "ca",
        postalCode: "94043",
      },
      "US"
    );

    expect(formatted).toBe(
      "Ada Lovelace\n1600 Amphitheatre Pkwy\nMOUNTAIN VIEW, CA 94043"
    );
  });

  it("should prefer latin templates when requested", () => {
    const formatted = formatAddress(
      {
        recipient: "Yamada Taro",
        streetAddress: "1-2-3 Jingumae",
        administrativeArea: "tokyo",
        postalCode: "150-0001",
      },
      "JP",
      { latin: true }
    );

    expect(formatted).toBe("Yamada Taro\n1-2-3 Jingumae, TOKYO\n150-0001");
  });

  it("should return undefined for unknown countries", () => {
    expect(getAddressFormatByCountry("ZZZ")).toBeUndefined();
    expect(formatAddress({}, "ZZZ")).toBeUndefined();
  });
});
