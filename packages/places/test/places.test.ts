import { describe, expect, it } from "vitest";
import {
  getPlacesByCountry,
  getPlacesDatasetMeta,
  searchPlacesByCountry,
} from "../src/data/places.js";

describe("places dataset", () => {
  it("should expose dataset metadata", () => {
    const meta = getPlacesDatasetMeta();
    expect(meta.totalPlaces).toBeGreaterThan(100000);
    expect(meta.countryCount).toBeGreaterThan(190);
    expect(meta.minPopulation).toBe(5000);
    expect(meta.countries.MT?.count).toBeGreaterThan(0);
  });

  it("should load place data for a specific country", async () => {
    const places = await getPlacesByCountry("MT");
    expect(places.length).toBeGreaterThan(10);
    expect(places.some((place) => place.name === "Valletta")).toBe(true);
    expect(places.every((place) => place.country === "MT")).toBe(true);
  });

  it("should search within a single country shard", async () => {
    const results = await searchPlacesByCountry("US", "new york");
    expect(results.some((place) => place.name === "New York City")).toBe(true);
    expect(results.every((place) => place.country === "US")).toBe(true);
  });

  it("should return an empty array for unsupported country codes", async () => {
    await expect(getPlacesByCountry("ZZ")).resolves.toEqual([]);
  });
});
