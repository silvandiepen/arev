import { describe, expect, it } from "vitest";
import { bearing, bearingToCardinal, haversineDistance } from "../src/index.js";

describe("@arevs/utils", () => {
  it("calculates haversine distances", () => {
    expect(Math.round(haversineDistance(35.6895, 139.6917, 51.5072, -0.1276))).toBe(9559);
  });

  it("calculates bearings", () => {
    expect(Math.round(bearing(51.5072, -0.1276, 48.8566, 2.3522))).toBe(148);
  });

  it("maps bearings to cardinal directions", () => {
    expect(bearingToCardinal(149)).toBe("SE");
  });
});
