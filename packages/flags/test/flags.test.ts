import { describe, expect, it } from "vitest";
import { flagData, getFlagData, getFlagsByColor } from "../src/index.js";

describe("@arevs/flags", () => {
  it("exports the flag dataset", () => {
    expect(flagData.length).toBeGreaterThan(190);
  });

  it("looks up a flag by country code", () => {
    expect(getFlagData("NL")?.alpha2).toBe("NL");
  });

  it("matches all requested colours by default", () => {
    const matchingFlags = getFlagsByColor(["red", "white"]);
    expect(matchingFlags.length).toBeGreaterThan(0);
    expect(
      matchingFlags.every((flag) => flag.colors.includes("red") && flag.colors.includes("white")),
    ).toBe(true);
  });
});
