import { describe, expect, it } from "vitest";
import {
  getMoonIllumination,
  getMoonPhase,
  getMoonPhaseFraction,
  getSeason,
  moonPhases,
} from "../data/astronomy.js";

describe("moonPhases", () => {
  it("exports the canonical eight moon phases", () => {
    expect(moonPhases).toHaveLength(8);
    expect(moonPhases[0].key).toBe("new-moon");
    expect(moonPhases[4].key).toBe("full-moon");
  });
});

describe("getMoonPhaseFraction", () => {
  it("returns a normalized lunar cycle fraction", () => {
    const fraction = getMoonPhaseFraction("2026-03-23T00:00:00.000Z");

    expect(fraction).toBeGreaterThanOrEqual(0);
    expect(fraction).toBeLessThan(1);
  });

  it("throws for invalid dates", () => {
    expect(() => getMoonPhaseFraction("not-a-date")).toThrow("Invalid date");
  });
});

describe("getMoonPhase", () => {
  it("returns new moon at the known epoch", () => {
    const phase = getMoonPhase("2000-01-06T18:14:00.000Z");

    expect(phase.key).toBe("new-moon");
    expect(phase.illumination).toBeLessThan(0.01);
  });

  it("returns full moon around the midpoint of the cycle", () => {
    const phase = getMoonPhase("2000-01-21T04:40:00.000Z");

    expect(phase.key).toBe("full-moon");
    expect(phase.illumination).toBeGreaterThan(0.99);
  });
});

describe("getMoonIllumination", () => {
  it("returns a value between 0 and 1", () => {
    const illumination = getMoonIllumination("2026-03-23T00:00:00.000Z");

    expect(illumination).toBeGreaterThanOrEqual(0);
    expect(illumination).toBeLessThanOrEqual(1);
  });
});

describe("getSeason", () => {
  it("returns meteorological seasons for the northern hemisphere", () => {
    expect(getSeason("2026-01-15T00:00:00.000Z").name).toBe("winter");
    expect(getSeason("2026-04-15T00:00:00.000Z").name).toBe("spring");
    expect(getSeason("2026-07-15T00:00:00.000Z").name).toBe("summer");
    expect(getSeason("2026-10-15T00:00:00.000Z").name).toBe("autumn");
  });

  it("flips seasons for the southern hemisphere", () => {
    expect(getSeason("2026-01-15T00:00:00.000Z", "south").name).toBe("summer");
    expect(getSeason("2026-07-15T00:00:00.000Z", "south").name).toBe("winter");
  });
});
