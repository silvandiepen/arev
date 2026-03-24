import type {
  Galaxy,
  Moon,
  Planet,
  PlanetType,
  Star,
} from "../../../core/src/types/index.js";

function normalizeLookupValue(value: string): string {
  return value.trim().toLowerCase();
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    orderFromSun: 1,
    type: "terrestrial",
    summary: "A small rocky world with a giant iron core and an extremely thin exosphere.",
    meanRadiusKm: 2439.7,
    diameterKm: 4879.4,
    massKg: 3.3011e23,
    gravityMS2: 3.7,
    escapeVelocityKmS: 4.25,
    axialTiltDegrees: 0.03,
    hasRings: false,
    atmosphereDensity: "trace",
    atmosphere: ["oxygen", "sodium", "hydrogen", "helium", "potassium"],
    composition: [
      { name: "iron-rich core", percentage: 70 },
      { name: "silicate mantle and crust", percentage: 30 },
    ],
    temperature: {
      averageC: 167,
      minC: -173,
      maxC: 427,
      notes: "Large temperature swings due to the lack of a substantial atmosphere.",
    },
    orbit: {
      meanDistanceFromSunKm: 57_909_227,
      perihelionKm: 46_001_200,
      aphelionKm: 69_816_900,
      orbitalPeriodDays: 87.97,
      rotationPeriodHours: 1407.6,
    },
  },
  {
    id: "venus",
    name: "Venus",
    orderFromSun: 2,
    type: "terrestrial",
    summary: "A rocky planet with a dense carbon-dioxide atmosphere and runaway greenhouse heating.",
    meanRadiusKm: 6051.8,
    diameterKm: 12103.6,
    massKg: 4.8675e24,
    gravityMS2: 8.87,
    escapeVelocityKmS: 10.36,
    axialTiltDegrees: 177.4,
    hasRings: false,
    atmosphereDensity: "very-dense",
    atmosphere: ["carbon dioxide", "nitrogen", "sulfur dioxide"],
    composition: [
      { name: "iron core", percentage: 32 },
      { name: "silicate mantle", percentage: 67 },
      { name: "crust", percentage: 1 },
    ],
    temperature: {
      averageC: 464,
      minC: 462,
      maxC: 467,
      notes: "Surface temperatures stay high across the planet because of the dense atmosphere.",
    },
    orbit: {
      meanDistanceFromSunKm: 108_209_475,
      perihelionKm: 107_477_000,
      aphelionKm: 108_939_000,
      orbitalPeriodDays: 224.7,
      rotationPeriodHours: -5832.5,
    },
  },
  {
    id: "earth",
    name: "Earth",
    orderFromSun: 3,
    type: "terrestrial",
    summary: "A rocky world with surface oceans, plate tectonics, and a nitrogen-oxygen atmosphere.",
    meanRadiusKm: 6371,
    diameterKm: 12742,
    massKg: 5.97237e24,
    gravityMS2: 9.81,
    escapeVelocityKmS: 11.19,
    axialTiltDegrees: 23.44,
    hasRings: false,
    atmosphereDensity: "moderate",
    atmosphere: ["nitrogen", "oxygen", "argon", "carbon dioxide"],
    composition: [
      { name: "iron core", percentage: 32 },
      { name: "silicate mantle", percentage: 67 },
      { name: "crust", percentage: 1 },
    ],
    temperature: {
      averageC: 15,
      minC: -89,
      maxC: 58,
      notes: "Global averages vary by season, altitude, and long-term climate cycles.",
    },
    orbit: {
      meanDistanceFromSunKm: 149_598_023,
      perihelionKm: 147_098_290,
      aphelionKm: 152_100_000,
      orbitalPeriodDays: 365.26,
      rotationPeriodHours: 23.93,
    },
  },
  {
    id: "mars",
    name: "Mars",
    orderFromSun: 4,
    type: "terrestrial",
    summary: "A cold rocky planet with iron-oxide dust, polar caps, and a thin carbon-dioxide atmosphere.",
    meanRadiusKm: 3389.5,
    diameterKm: 6779,
    massKg: 6.4171e23,
    gravityMS2: 3.71,
    escapeVelocityKmS: 5.03,
    axialTiltDegrees: 25.19,
    hasRings: false,
    atmosphereDensity: "thin",
    atmosphere: ["carbon dioxide", "nitrogen", "argon"],
    composition: [
      { name: "iron, nickel, and sulfur core", percentage: 26 },
      { name: "silicate mantle", percentage: 70 },
      { name: "crust", percentage: 4 },
    ],
    temperature: {
      averageC: -63,
      minC: -125,
      maxC: 20,
      notes: "Temperatures vary sharply between day and night because the atmosphere is thin.",
    },
    orbit: {
      meanDistanceFromSunKm: 227_943_824,
      perihelionKm: 206_700_000,
      aphelionKm: 249_200_000,
      orbitalPeriodDays: 686.98,
      rotationPeriodHours: 24.62,
    },
  },
  {
    id: "jupiter",
    name: "Jupiter",
    orderFromSun: 5,
    type: "gas-giant",
    summary: "The largest planet, dominated by hydrogen and helium with no solid surface and powerful storms.",
    meanRadiusKm: 69_911,
    diameterKm: 139_820,
    massKg: 1.8982e27,
    gravityMS2: 24.79,
    escapeVelocityKmS: 59.5,
    axialTiltDegrees: 3.13,
    hasRings: true,
    atmosphereDensity: "very-dense",
    atmosphere: ["hydrogen", "helium", "methane", "ammonia"],
    composition: [
      { name: "hydrogen", percentage: 90 },
      { name: "helium", percentage: 10 },
      { name: "trace methane, ammonia, and water", note: "Present in the upper atmosphere." },
    ],
    temperature: {
      averageC: -145,
      notes: "This is a cloud-top temperature, not a solid-surface temperature.",
    },
    orbit: {
      meanDistanceFromSunKm: 778_340_821,
      perihelionKm: 740_595_000,
      aphelionKm: 816_363_000,
      orbitalPeriodDays: 4332.59,
      rotationPeriodHours: 9.93,
    },
  },
  {
    id: "saturn",
    name: "Saturn",
    orderFromSun: 6,
    type: "gas-giant",
    summary: "A hydrogen-helium giant best known for its bright ring system and low average density.",
    meanRadiusKm: 58_232,
    diameterKm: 116_460,
    massKg: 5.6834e26,
    gravityMS2: 10.44,
    escapeVelocityKmS: 35.5,
    axialTiltDegrees: 26.73,
    hasRings: true,
    atmosphereDensity: "very-dense",
    atmosphere: ["hydrogen", "helium", "methane", "ammonia"],
    composition: [
      { name: "hydrogen", percentage: 96 },
      { name: "helium", percentage: 3 },
      { name: "trace methane and ammonia", note: "Visible in the upper atmosphere." },
    ],
    temperature: {
      averageC: -178,
      notes: "This is a cloud-top temperature, not a solid-surface temperature.",
    },
    orbit: {
      meanDistanceFromSunKm: 1_433_500_000,
      perihelionKm: 1_352_550_000,
      aphelionKm: 1_514_500_000,
      orbitalPeriodDays: 10_759.22,
      rotationPeriodHours: 10.7,
    },
  },
  {
    id: "uranus",
    name: "Uranus",
    orderFromSun: 7,
    type: "ice-giant",
    summary: "An ice giant with a dramatic axial tilt and a cold atmosphere rich in hydrogen, helium, and methane.",
    meanRadiusKm: 25_362,
    diameterKm: 50_724,
    massKg: 8.681e25,
    gravityMS2: 8.69,
    escapeVelocityKmS: 21.3,
    axialTiltDegrees: 97.77,
    hasRings: true,
    atmosphereDensity: "dense",
    atmosphere: ["hydrogen", "helium", "methane"],
    composition: [
      { name: "hydrogen and helium envelope", percentage: 20 },
      { name: "water, ammonia, and methane ices", percentage: 80 },
    ],
    temperature: {
      averageC: -195,
      notes: "Measured near the upper atmosphere; Uranus is one of the coldest planets.",
    },
    orbit: {
      meanDistanceFromSunKm: 2_872_500_000,
      perihelionKm: 2_742_000_000,
      aphelionKm: 3_001_000_000,
      orbitalPeriodDays: 30_688.5,
      rotationPeriodHours: -17.24,
    },
  },
  {
    id: "neptune",
    name: "Neptune",
    orderFromSun: 8,
    type: "ice-giant",
    summary: "A deep-blue ice giant with fast winds, methane absorption, and a dynamic atmosphere.",
    meanRadiusKm: 24_622,
    diameterKm: 49_244,
    massKg: 1.02413e26,
    gravityMS2: 11.15,
    escapeVelocityKmS: 23.5,
    axialTiltDegrees: 28.32,
    hasRings: true,
    atmosphereDensity: "dense",
    atmosphere: ["hydrogen", "helium", "methane"],
    composition: [
      { name: "hydrogen and helium envelope", percentage: 20 },
      { name: "water, ammonia, and methane ices", percentage: 80 },
    ],
    temperature: {
      averageC: -201,
      notes: "Measured near the upper atmosphere; Neptune radiates more heat than it receives from the Sun.",
    },
    orbit: {
      meanDistanceFromSunKm: 4_495_100_000,
      perihelionKm: 4_444_500_000,
      aphelionKm: 4_545_700_000,
      orbitalPeriodDays: 60_182,
      rotationPeriodHours: 16.11,
    },
  },
];

export const moons: Moon[] = [
  {
    id: "moon",
    name: "Moon",
    planetId: "earth",
    summary: "Earth's only natural satellite and the main driver of ocean tides.",
    meanRadiusKm: 1737.4,
    diameterKm: 3474.8,
    massKg: 7.342e22,
    gravityMS2: 1.62,
    atmosphereDensity: "trace",
    atmosphere: ["helium", "neon", "argon"],
    composition: [
      { name: "silicate rock", percentage: 84 },
      { name: "iron-rich core and metals", percentage: 16 },
    ],
    temperature: {
      averageC: -20,
      minC: -173,
      maxC: 127,
    },
    orbit: {
      meanDistanceFromPlanetKm: 384_400,
      orbitalPeriodDays: 27.32,
      rotationPeriodHours: 655.7,
      tidalLocked: true,
    },
  },
  {
    id: "phobos",
    name: "Phobos",
    planetId: "mars",
    summary: "The larger Martian moon, heavily cratered and orbiting very close to Mars.",
    meanRadiusKm: 11.27,
    diameterKm: 22.53,
    massKg: 1.0659e16,
    gravityMS2: 0.0057,
    atmosphereDensity: "none",
    atmosphere: [],
    composition: [
      { name: "carbon-rich rock", note: "Likely similar to D-type asteroids." },
    ],
    temperature: {
      averageC: -40,
      minC: -112,
      maxC: -4,
    },
    orbit: {
      meanDistanceFromPlanetKm: 9376,
      orbitalPeriodDays: 0.32,
      rotationPeriodHours: 7.66,
      tidalLocked: true,
    },
  },
  {
    id: "deimos",
    name: "Deimos",
    planetId: "mars",
    summary: "The smaller outer moon of Mars, likely captured from the asteroid belt.",
    meanRadiusKm: 6.2,
    diameterKm: 12.4,
    massKg: 1.4762e15,
    gravityMS2: 0.003,
    atmosphereDensity: "none",
    atmosphere: [],
    composition: [
      { name: "carbon-rich rock", note: "Likely similar to D-type asteroids." },
    ],
    temperature: {
      averageC: -40,
      minC: -112,
      maxC: -4,
    },
    orbit: {
      meanDistanceFromPlanetKm: 23_463,
      orbitalPeriodDays: 1.26,
      rotationPeriodHours: 30.35,
      tidalLocked: true,
    },
  },
  {
    id: "io",
    name: "Io",
    planetId: "jupiter",
    summary: "The most volcanically active moon in the Solar System because of strong tidal heating.",
    meanRadiusKm: 1821.6,
    diameterKm: 3643.2,
    massKg: 8.9319e22,
    gravityMS2: 1.8,
    atmosphereDensity: "thin",
    atmosphere: ["sulfur dioxide"],
    composition: [
      { name: "silicate rock", percentage: 90 },
      { name: "iron or iron-sulfide core", percentage: 10 },
    ],
    temperature: {
      averageC: -130,
      maxC: 1600,
      notes: "Volcanic hotspots can become much hotter than the average surface.",
    },
    orbit: {
      meanDistanceFromPlanetKm: 421_700,
      orbitalPeriodDays: 1.77,
      rotationPeriodHours: 42.46,
      tidalLocked: true,
    },
  },
  {
    id: "europa",
    name: "Europa",
    planetId: "jupiter",
    summary: "An icy moon thought to hide a global saltwater ocean beneath its crust.",
    meanRadiusKm: 1560.8,
    diameterKm: 3121.6,
    massKg: 4.7998e22,
    gravityMS2: 1.31,
    atmosphereDensity: "trace",
    atmosphere: ["oxygen"],
    composition: [
      { name: "water ice crust", percentage: 10 },
      { name: "silicate mantle and metallic core", percentage: 90 },
    ],
    temperature: {
      averageC: -160,
      minC: -220,
      maxC: -140,
    },
    orbit: {
      meanDistanceFromPlanetKm: 671_100,
      orbitalPeriodDays: 3.55,
      rotationPeriodHours: 85.2,
      tidalLocked: true,
    },
  },
  {
    id: "ganymede",
    name: "Ganymede",
    planetId: "jupiter",
    summary: "The largest moon in the Solar System and the only moon known to have its own magnetic field.",
    meanRadiusKm: 2634.1,
    diameterKm: 5268.2,
    massKg: 1.4819e23,
    gravityMS2: 1.43,
    atmosphereDensity: "trace",
    atmosphere: ["oxygen", "ozone"],
    composition: [
      { name: "water ice", percentage: 46 },
      { name: "silicate rock and metallic core", percentage: 54 },
    ],
    temperature: {
      averageC: -163,
      minC: -193,
      maxC: -121,
    },
    orbit: {
      meanDistanceFromPlanetKm: 1_070_400,
      orbitalPeriodDays: 7.15,
      rotationPeriodHours: 171.7,
      tidalLocked: true,
    },
  },
  {
    id: "callisto",
    name: "Callisto",
    planetId: "jupiter",
    summary: "A dark, ancient, heavily cratered icy moon with a possible subsurface ocean.",
    meanRadiusKm: 2410.3,
    diameterKm: 4820.6,
    massKg: 1.0759e23,
    gravityMS2: 1.24,
    atmosphereDensity: "trace",
    atmosphere: ["carbon dioxide", "oxygen"],
    composition: [
      { name: "water ice", percentage: 40 },
      { name: "rock and metals", percentage: 60 },
    ],
    temperature: {
      averageC: -139,
      minC: -193,
      maxC: -108,
    },
    orbit: {
      meanDistanceFromPlanetKm: 1_882_700,
      orbitalPeriodDays: 16.69,
      rotationPeriodHours: 400.6,
      tidalLocked: true,
    },
  },
  {
    id: "titan",
    name: "Titan",
    planetId: "saturn",
    summary: "Saturn's largest moon with a thick nitrogen atmosphere and methane lakes.",
    meanRadiusKm: 2574.7,
    diameterKm: 5149.4,
    massKg: 1.3452e23,
    gravityMS2: 1.35,
    atmosphereDensity: "very-dense",
    atmosphere: ["nitrogen", "methane", "hydrogen"],
    composition: [
      { name: "water ice", percentage: 50 },
      { name: "rocky material", percentage: 50 },
    ],
    temperature: {
      averageC: -179,
    },
    orbit: {
      meanDistanceFromPlanetKm: 1_221_870,
      orbitalPeriodDays: 15.95,
      rotationPeriodHours: 382.8,
      tidalLocked: true,
    },
  },
  {
    id: "enceladus",
    name: "Enceladus",
    planetId: "saturn",
    summary: "A bright icy moon that ejects water-rich plumes from its south polar region.",
    meanRadiusKm: 252.1,
    diameterKm: 504.2,
    massKg: 1.08022e20,
    gravityMS2: 0.113,
    atmosphereDensity: "trace",
    atmosphere: ["water vapor"],
    composition: [
      { name: "water ice", percentage: 60 },
      { name: "rocky core", percentage: 40 },
    ],
    temperature: {
      averageC: -201,
      notes: "The south polar terrain is warmer than the global average because of internal activity.",
    },
    orbit: {
      meanDistanceFromPlanetKm: 238_020,
      orbitalPeriodDays: 1.37,
      rotationPeriodHours: 32.9,
      tidalLocked: true,
    },
  },
  {
    id: "titania",
    name: "Titania",
    planetId: "uranus",
    summary: "The largest moon of Uranus, with a mix of rock and water ice and large tectonic valleys.",
    meanRadiusKm: 788.9,
    diameterKm: 1577.8,
    massKg: 3.527e21,
    gravityMS2: 0.38,
    atmosphereDensity: "trace",
    atmosphere: ["carbon dioxide"],
    composition: [
      { name: "water ice", percentage: 50 },
      { name: "rocky material", percentage: 50 },
    ],
    temperature: {
      averageC: -203,
    },
    orbit: {
      meanDistanceFromPlanetKm: 435_910,
      orbitalPeriodDays: 8.71,
      rotationPeriodHours: 209,
      tidalLocked: true,
    },
  },
  {
    id: "oberon",
    name: "Oberon",
    planetId: "uranus",
    summary: "A dark icy moon of Uranus with a heavily cratered ancient surface.",
    meanRadiusKm: 761.4,
    diameterKm: 1522.8,
    massKg: 3.014e21,
    gravityMS2: 0.35,
    atmosphereDensity: "trace",
    atmosphere: ["carbon dioxide"],
    composition: [
      { name: "water ice", percentage: 50 },
      { name: "rocky material", percentage: 50 },
    ],
    temperature: {
      averageC: -203,
    },
    orbit: {
      meanDistanceFromPlanetKm: 583_520,
      orbitalPeriodDays: 13.46,
      rotationPeriodHours: 323,
      tidalLocked: true,
    },
  },
  {
    id: "triton",
    name: "Triton",
    planetId: "neptune",
    summary: "A large captured moon with retrograde motion, nitrogen ice, and cryovolcanic features.",
    meanRadiusKm: 1353.4,
    diameterKm: 2706.8,
    massKg: 2.139e22,
    gravityMS2: 0.78,
    atmosphereDensity: "thin",
    atmosphere: ["nitrogen", "methane"],
    composition: [
      { name: "water ice", percentage: 55 },
      { name: "rocky material", percentage: 45 },
    ],
    temperature: {
      averageC: -235,
    },
    orbit: {
      meanDistanceFromPlanetKm: 354_759,
      orbitalPeriodDays: 5.88,
      rotationPeriodHours: 141,
      tidalLocked: true,
      retrograde: true,
    },
  },
];

export const stars: Star[] = [
  {
    id: "sun",
    name: "Sun",
    summary: "The G-type main-sequence star at the center of the Solar System.",
    spectralType: "G2V",
    distanceFromEarthLightYears: 0,
    apparentMagnitude: -26.74,
    massSolar: 1,
    radiusSolar: 1,
    surfaceTemperatureK: 5772,
    luminositySolar: 1,
  },
  {
    id: "sirius",
    name: "Sirius",
    constellation: "Canis Major",
    summary: "The brightest star in Earth's night sky, part of a nearby binary system.",
    spectralType: "A1V",
    distanceFromEarthLightYears: 8.6,
    apparentMagnitude: -1.46,
    massSolar: 2.06,
    radiusSolar: 1.71,
    surfaceTemperatureK: 9940,
    luminositySolar: 25.4,
  },
  {
    id: "canopus",
    name: "Canopus",
    constellation: "Carina",
    summary: "A bright giant star visible prominently in southern skies.",
    spectralType: "A9II",
    distanceFromEarthLightYears: 310,
    apparentMagnitude: -0.74,
    massSolar: 8,
    radiusSolar: 71,
    surfaceTemperatureK: 7350,
    luminositySolar: 10_700,
  },
  {
    id: "arcturus",
    name: "Arcturus",
    constellation: "Bootes",
    summary: "A nearby orange giant and one of the brightest stars in the northern sky.",
    spectralType: "K1.5III",
    distanceFromEarthLightYears: 36.7,
    apparentMagnitude: -0.05,
    massSolar: 1.08,
    radiusSolar: 25.4,
    surfaceTemperatureK: 4286,
    luminositySolar: 170,
  },
  {
    id: "vega",
    name: "Vega",
    constellation: "Lyra",
    summary: "A bright white star often used as a reference point in stellar photometry.",
    spectralType: "A0V",
    distanceFromEarthLightYears: 25,
    apparentMagnitude: 0.03,
    massSolar: 2.14,
    radiusSolar: 2.36,
    surfaceTemperatureK: 9602,
    luminositySolar: 40.1,
  },
  {
    id: "capella",
    name: "Capella",
    constellation: "Auriga",
    summary: "A bright multi-star system seen as a single golden point to the naked eye.",
    spectralType: "G8III + G0III",
    distanceFromEarthLightYears: 42.9,
    apparentMagnitude: 0.08,
    massSolar: 2.57,
    radiusSolar: 11.98,
    surfaceTemperatureK: 4970,
    luminositySolar: 78.7,
  },
  {
    id: "rigel",
    name: "Rigel",
    constellation: "Orion",
    summary: "A luminous blue supergiant that anchors one corner of Orion.",
    spectralType: "B8Ia",
    distanceFromEarthLightYears: 860,
    apparentMagnitude: 0.13,
    massSolar: 21,
    radiusSolar: 78.9,
    surfaceTemperatureK: 12_100,
    luminositySolar: 120_000,
  },
  {
    id: "betelgeuse",
    name: "Betelgeuse",
    constellation: "Orion",
    summary: "A red supergiant nearing the end of its life, famous for its huge size and variability.",
    spectralType: "M1-M2Ia-Iab",
    distanceFromEarthLightYears: 548,
    apparentMagnitude: 0.42,
    massSolar: 16.5,
    radiusSolar: 764,
    surfaceTemperatureK: 3500,
    luminositySolar: 126_000,
  },
  {
    id: "polaris",
    name: "Polaris",
    constellation: "Ursa Minor",
    summary: "The current North Star, lying close to Earth's north celestial pole.",
    spectralType: "F7Ib",
    distanceFromEarthLightYears: 433,
    apparentMagnitude: 1.98,
    massSolar: 5.4,
    radiusSolar: 37.5,
    surfaceTemperatureK: 6015,
    luminositySolar: 1260,
  },
  {
    id: "proxima-centauri",
    name: "Proxima Centauri",
    constellation: "Centaurus",
    summary: "The closest known star to the Sun and a cool red dwarf.",
    spectralType: "M5.5Ve",
    distanceFromEarthLightYears: 4.24,
    apparentMagnitude: 11.13,
    massSolar: 0.12,
    radiusSolar: 0.15,
    surfaceTemperatureK: 3042,
    luminositySolar: 0.0017,
  },
];

export const galaxies: Galaxy[] = [
  {
    id: "milky-way",
    name: "Milky Way",
    type: "barred-spiral",
    summary: "The barred spiral galaxy that contains the Solar System.",
    diameterLightYears: 105_700,
    thicknessLightYears: 1000,
    ageBillionYears: 13.6,
    estimatedStarsMin: 100_000_000_000,
    estimatedStarsMax: 400_000_000_000,
    distanceFromGalacticCenterLightYears: 26_700,
    majorStructures: [
      "central bulge",
      "stellar bar",
      "spiral arms",
      "stellar halo",
      "dark matter halo",
    ],
  },
];

export const milkyWay = galaxies[0];

export function getPlanetByName(name: string): Planet | undefined {
  const normalized = normalizeLookupValue(name);
  return planets.find((planet) => planet.id === normalized || normalizeLookupValue(planet.name) === normalized);
}

export function getPlanetByOrder(orderFromSun: number): Planet | undefined {
  return planets.find((planet) => planet.orderFromSun === orderFromSun);
}

export function getPlanetsByType(type: PlanetType): Planet[] {
  return planets.filter((planet) => planet.type === type);
}

export function getMoonByName(name: string): Moon | undefined {
  const normalized = normalizeLookupValue(name);
  return moons.find((moon) => moon.id === normalized || normalizeLookupValue(moon.name) === normalized);
}

export function getMoonsByPlanet(planet: string): Moon[] {
  const match = getPlanetByName(planet);
  const planetId = match?.id ?? normalizeLookupValue(planet);
  return moons.filter((moon) => moon.planetId === planetId);
}

export function getStarByName(name: string): Star | undefined {
  const normalized = normalizeLookupValue(name);
  return stars.find((star) => star.id === normalized || normalizeLookupValue(star.name) === normalized);
}

export function searchStars(query: string): Star[] {
  const normalized = normalizeLookupValue(query);
  if (!normalized) {
    return [...stars];
  }

  return stars.filter((star) => {
    const constellation = star.constellation ? normalizeLookupValue(star.constellation) : "";
    return (
      star.id.includes(normalized) ||
      normalizeLookupValue(star.name).includes(normalized) ||
      constellation.includes(normalized) ||
      star.spectralType.toLowerCase().includes(normalized)
    );
  });
}

export function getGalaxyByName(name: string): Galaxy | undefined {
  const normalized = normalizeLookupValue(name);
  return galaxies.find((galaxy) => galaxy.id === normalized || normalizeLookupValue(galaxy.name) === normalized);
}
