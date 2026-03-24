import { describe, expect, it } from "vitest";
import {
  getMoonIllumination,
  getMoonPhase,
  getMoonPhaseFraction,
  getSeason,
  moonPhases,
} from "../src/data/astronomy.js";
import {
  galaxies,
  getGalaxyByName,
  getMoonByName,
  getMoonsByPlanet,
  getPlanetByName,
  getPlanetByOrder,
  getPlanetsByType,
  getStarByName,
  moons,
  planets,
  searchStars,
  stars,
} from "../../space/src/data/space.js";
import {
  galaxies as exportedGalaxies,
  milkyWay,
  moons as exportedMoons,
  planets as exportedPlanets,
  stars as exportedStars,
} from "../../space/src/index.js";

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

describe("space datasets", () => {
  it("exports the eight major planets", () => {
    expect(planets).toHaveLength(8);
    expect(planets[0].name).toBe("Mercury");
    expect(planets[7].name).toBe("Neptune");
  });

  it("exports curated moons, stars, and galaxies", () => {
    expect(moons.length).toBeGreaterThanOrEqual(10);
    expect(stars.length).toBeGreaterThanOrEqual(8);
    expect(galaxies).toHaveLength(1);
    expect(galaxies[0].name).toBe("Milky Way");
  });

  it("re-exports the same space datasets from the package root", () => {
    expect(exportedPlanets).toBe(planets);
    expect(exportedMoons).toBe(moons);
    expect(exportedStars).toBe(stars);
    expect(exportedGalaxies).toBe(galaxies);
    expect(milkyWay.id).toBe("milky-way");
  });
});

describe("space lookup helpers", () => {
  it("finds planets by name and order", () => {
    expect(getPlanetByName("earth")?.orderFromSun).toBe(3);
    expect(getPlanetByOrder(5)?.name).toBe("Jupiter");
  });

  it("filters planets by type", () => {
    expect(getPlanetsByType("terrestrial").map((planet) => planet.name)).toEqual([
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
    ]);
  });

  it("finds moons by name and planet", () => {
    expect(getMoonByName("Titan")?.planetId).toBe("saturn");
    expect(getMoonsByPlanet("Jupiter").map((moon) => moon.name)).toEqual([
      "Io",
      "Europa",
      "Ganymede",
      "Callisto",
    ]);
  });

  it("finds and searches stars", () => {
    expect(getStarByName("Sun")?.spectralType).toBe("G2V");
    expect(searchStars("orion").map((star) => star.name)).toEqual([
      "Rigel",
      "Betelgeuse",
    ]);
  });

  it("finds the Milky Way galaxy", () => {
    expect(getGalaxyByName("milky way")?.type).toBe("barred-spiral");
  });
});
