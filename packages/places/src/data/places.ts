import type { City, PlaceDatasetMeta } from "../../../core/src/types/index.js";
import { translateCity } from "../../../geo/src/data/translations.js";
import placesMeta from "./places.meta.json";
import { placeLoaders } from "./places.loaders.js";

const placeMeta = placesMeta as PlaceDatasetMeta;
const placeCache = new Map<string, Promise<City[]>>();

type PlaceCapitalLevel = 0 | 1 | 2 | 3 | 4 | null;
type PlaceCompactRecord = [
  geonameId: number,
  name: string,
  population: number,
  coords: [number, number],
  capitalLevel: PlaceCapitalLevel,
  timezoneIndex: number,
];

interface PlaceCountryShard {
  z: string[];
  s: Record<string, string>;
  p: Record<string, PlaceCompactRecord[]>;
}

function normalizeCountryCode(countryCode: string): string {
  return countryCode.trim().toUpperCase();
}

function decodeCapital(level: PlaceCapitalLevel): Pick<City, "capital" | "capitalLevel" | "capitalTypes"> {
  if (level === 0) {
    return { capital: true, capitalLevel: 0, capitalTypes: ["country"] };
  }
  if (level === 1) {
    return { capitalLevel: 1, capitalTypes: ["state"] };
  }
  if (level === 2) {
    return { capitalLevel: 2, capitalTypes: ["district"] };
  }
  if (level === 3) {
    return { capitalLevel: 3, capitalTypes: ["municipality"] };
  }
  if (level === 4) {
    return { capitalLevel: 4, capitalTypes: ["municipality"] };
  }
  return {};
}

function decodeShard(countryCode: string, shard: PlaceCountryShard): City[] {
  const cities: City[] = [];

  for (const [stateCode, records] of Object.entries(shard.p)) {
    const stateName = stateCode === "_" ? undefined : shard.s[stateCode];

    for (const [geonameId, name, population, [lat, lon], capitalLevel, timezoneIndex] of records) {
      const timezone = shard.z[timezoneIndex];
      cities.push({
        geonameId,
        name,
        country: countryCode,
        ...(stateName ? { state: stateName } : {}),
        ...(stateCode !== "_" ? { stateCode } : {}),
        ...(population > 0 ? { population } : {}),
        lat,
        lon,
        ...(timezone ? { timezone } : {}),
        ...decodeCapital(capitalLevel),
      });
    }
  }

  return cities;
}

async function loadPlacesForCountry(countryCode: string): Promise<City[]> {
  const code = normalizeCountryCode(countryCode);
  const loader = placeLoaders[code as keyof typeof placeLoaders] as
    | (() => Promise<unknown>)
    | undefined;
  if (!loader) return [];

  const cached = placeCache.get(code);
  if (cached) return cached;

  const loading = loader().then((shard) => decodeShard(code, shard as PlaceCountryShard));
  placeCache.set(code, loading);
  return loading;
}

/**
 * Get static metadata about the bundled place shards.
 */
export function getPlacesDatasetMeta(): PlaceDatasetMeta {
  return placeMeta;
}

/**
 * Get selector-grade place data for a specific country without loading other countries.
 */
export async function getPlacesByCountry(
  countryCode: string,
  lang = "en",
): Promise<City[]> {
  const places = await loadPlacesForCountry(countryCode);
  return lang.toLowerCase() === "en"
    ? places
    : places.map((place) => translateCity(place, lang));
}

/**
 * Search place names within a single country shard.
 */
export async function searchPlacesByCountry(
  countryCode: string,
  query: string,
  lang = "en",
): Promise<City[]> {
  const q = query.trim().toLowerCase();
  const places = await getPlacesByCountry(countryCode, lang);
  if (q.length === 0) return places;
  return places.filter((place) => place.name.toLowerCase().includes(q));
}
