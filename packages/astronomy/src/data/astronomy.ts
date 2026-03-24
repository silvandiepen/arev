import type {
  MoonPhase,
  MoonPhaseSnapshot,
  SeasonHemisphere,
  SeasonInfo,
  SeasonName,
} from "../../../core/src/types/index.js";

const SYNODIC_MONTH_DAYS = 29.53058867;
const KNOWN_NEW_MOON_UTC_MS = Date.UTC(2000, 0, 6, 18, 14, 0);

const NORTHERN_SEASON_BY_MONTH: Record<number, SeasonName> = {
  1: "winter",
  2: "winter",
  3: "spring",
  4: "spring",
  5: "spring",
  6: "summer",
  7: "summer",
  8: "summer",
  9: "autumn",
  10: "autumn",
  11: "autumn",
  12: "winter",
};

const SOUTHERN_OPPOSITE_SEASON: Record<SeasonName, SeasonName> = {
  spring: "autumn",
  summer: "winter",
  autumn: "spring",
  winter: "summer",
};

export const moonPhases: MoonPhase[] = [
  {
    index: 0,
    key: "new-moon",
    name: "New Moon",
    description: "The moon is nearly invisible because the sunlit side faces away from Earth.",
  },
  {
    index: 1,
    key: "waxing-crescent",
    name: "Waxing Crescent",
    description: "A thin crescent appears and the illuminated portion is growing.",
  },
  {
    index: 2,
    key: "first-quarter",
    name: "First Quarter",
    description: "Roughly half of the moon is illuminated and visibility is increasing.",
  },
  {
    index: 3,
    key: "waxing-gibbous",
    name: "Waxing Gibbous",
    description: "More than half of the moon is illuminated and it is approaching full moon.",
  },
  {
    index: 4,
    key: "full-moon",
    name: "Full Moon",
    description: "The moon's Earth-facing side is almost completely illuminated.",
  },
  {
    index: 5,
    key: "waning-gibbous",
    name: "Waning Gibbous",
    description: "The moon is still mostly illuminated, but the lit portion is shrinking.",
  },
  {
    index: 6,
    key: "last-quarter",
    name: "Last Quarter",
    description: "About half of the moon remains illuminated as it heads toward new moon.",
  },
  {
    index: 7,
    key: "waning-crescent",
    name: "Waning Crescent",
    description: "Only a narrow crescent remains before the cycle resets.",
  },
];

function toValidDate(input: Date | string | number = new Date()): Date {
  const date = input instanceof Date ? new Date(input.getTime()) : new Date(input);

  if (Number.isNaN(date.getTime())) {
    throw new RangeError("Invalid date");
  }

  return date;
}

function round(value: number, digits = 4): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

export function getMoonPhaseFraction(input: Date | string | number = new Date()): number {
  const date = toValidDate(input);
  const daysSinceKnownNewMoon = (date.getTime() - KNOWN_NEW_MOON_UTC_MS) / 86_400_000;
  const normalizedDays =
    ((daysSinceKnownNewMoon % SYNODIC_MONTH_DAYS) + SYNODIC_MONTH_DAYS) % SYNODIC_MONTH_DAYS;

  return round(normalizedDays / SYNODIC_MONTH_DAYS, 6);
}

export function getMoonIllumination(input: Date | string | number = new Date()): number {
  const phaseFraction = getMoonPhaseFraction(input);
  return round((1 - Math.cos(phaseFraction * Math.PI * 2)) / 2);
}

export function getMoonPhase(input: Date | string | number = new Date()): MoonPhaseSnapshot {
  const phaseFraction = getMoonPhaseFraction(input);
  const index = Math.floor((phaseFraction * 8) + 0.5) % 8;
  const phase = moonPhases[index];

  return {
    ...phase,
    fraction: phaseFraction,
    illumination: getMoonIllumination(input),
    ageDays: round(phaseFraction * SYNODIC_MONTH_DAYS, 2),
  };
}

export function getSeason(
  input: Date | string | number = new Date(),
  hemisphere: SeasonHemisphere = "north"
): SeasonInfo {
  const date = toValidDate(input);
  const month = date.getUTCMonth() + 1;
  const northernSeason = NORTHERN_SEASON_BY_MONTH[month];
  const name = hemisphere === "south"
    ? SOUTHERN_OPPOSITE_SEASON[northernSeason]
    : northernSeason;

  return {
    name,
    hemisphere,
    label: `${name[0].toUpperCase()}${name.slice(1)} (${hemisphere === "north" ? "Northern" : "Southern"} Hemisphere)`,
  };
}
