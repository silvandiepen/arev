import type { CardinalDirection } from "../../core/src/types/index.js";

const EARTH_RADIUS_KM = 6371;
const CARDINAL_DIRECTIONS: CardinalDirection[] = [
  "N",
  "NE",
  "E",
  "SE",
  "S",
  "SW",
  "W",
  "NW",
];

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(a));
}

export function bearing(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const rlat1 = toRadians(lat1);
  const rlat2 = toRadians(lat2);
  const dLon = toRadians(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(rlat2);
  const x =
    Math.cos(rlat1) * Math.sin(rlat2) -
    Math.sin(rlat1) * Math.cos(rlat2) * Math.cos(dLon);

  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

export function bearingToCardinal(degrees: number): CardinalDirection {
  const index = Math.round((((degrees % 360) + 360) % 360) / 45) % 8;
  return CARDINAL_DIRECTIONS[index];
}
