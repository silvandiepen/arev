import type { FlagInfo, GetFlagsByColorOptions } from "../../../core/src/types/index.js";

const FLAG_ASSET_BASE_URL = "https://arevdata.com/flags";
const FLAG_PNG_WIDTHS = [40, 80, 160, 320, 640, 1280, 2560] as const;

export type FlagPngWidth = (typeof FLAG_PNG_WIDTHS)[number];
type RawFlagInfo = Omit<FlagInfo, "svgUrl" | "pngUrl">;

/**
 * Build the self-hosted SVG URL for a country's flag.
 * @param alpha2 ISO 3166-1 alpha-2 country code (case-insensitive)
 */
export function getFlagSvgUrl(alpha2: string): string {
  return `${FLAG_ASSET_BASE_URL}/svg/${alpha2.toLowerCase()}.svg`;
}

/**
 * Build the self-hosted PNG URL for a country's flag.
 * @param alpha2 ISO 3166-1 alpha-2 country code (case-insensitive)
 * @param width Image width in pixels (40 | 80 | 160 | 320 | 640 | 1280 | 2560). Default: 320
 */
export function getFlagPngUrl(alpha2: string, width: FlagPngWidth = 320): string {
  return `${FLAG_ASSET_BASE_URL}/png/w${width}/${alpha2.toLowerCase()}.png`;
}

/**
 * Build a Wikimedia Commons URL for a country's outline SVG map.
 * This is a reference URL—not bundled in the package.
 * @param alpha3 ISO 3166-1 alpha-3 code (e.g., "USA")
 */
export function getCountryMapSvgUrl(alpha3: string): string {
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/maps/${alpha3.toUpperCase()}.svg/800px-${alpha3.toUpperCase()}.svg.png`;
}

/**
 * Flag metadata for all world countries.
 *
 * `colors` lists the most prominent flag colours (up to 4), most dominant first.
 * `similar` lists alpha-2 codes of countries whose flags are visually similar—
 *   useful for building confusing multiple-choice options in geography games.
 */
const rawFlagData: RawFlagInfo[] = [
  // ── A ─────────────────────────────────────────────────────────────────
  { alpha2: "AF", colors: ["black", "red", "green"], similar: ["IR", "SY", "EG"] },
  { alpha2: "AL", colors: ["red", "black"], similar: ["GE", "RS", "MK"] },
  { alpha2: "DZ", colors: ["green", "white"], similar: ["PK", "TR", "TN"] },
  { alpha2: "AD", colors: ["blue", "yellow", "red"], similar: ["RO", "TD", "MD"] },
  { alpha2: "AO", colors: ["red", "black"], similar: ["AL", "GE"] },
  { alpha2: "AG", colors: ["red", "black", "gold", "white", "blue"], similar: ["BB", "JM"] },
  { alpha2: "AR", colors: ["light-blue", "white"], similar: ["HN", "NI", "SV"] },
  { alpha2: "AM", colors: ["red", "blue", "orange"], similar: ["DE", "BE", "TD", "XN"] },
  { alpha2: "AU", colors: ["blue", "red", "white"], similar: ["NZ", "GB", "FJ", "TV"] },
  { alpha2: "AT", colors: ["red", "white"], similar: ["LV", "SG", "PE", "PL"] },
  { alpha2: "AZ", colors: ["light-blue", "red", "green"], similar: ["TR", "TM", "UZ"] },
  // ── B ─────────────────────────────────────────────────────────────────
  { alpha2: "BS", colors: ["black", "gold", "blue"], similar: ["PG", "TR"] },
  { alpha2: "BH", colors: ["red", "white"], similar: ["QA", "KW", "AT"] },
  { alpha2: "BD", colors: ["green", "red"], similar: ["JP", "PW", "CG"] },
  { alpha2: "BB", colors: ["blue", "gold", "black"], similar: ["BS", "AG"] },
  { alpha2: "BY", colors: ["red", "green", "white"], similar: ["AE", "TJ"] },
  { alpha2: "BE", colors: ["black", "yellow", "red"], similar: ["DE", "TD", "RO", "AM"] },
  { alpha2: "BZ", colors: ["blue", "red", "white"], similar: ["HN", "AR", "NI"] },
  { alpha2: "BJ", colors: ["green", "yellow", "red"], similar: ["GN", "ML", "SN", "ET"] },
  { alpha2: "BT", colors: ["orange", "yellow", "dark-green"], similar: ["ZW", "KE"] },
  { alpha2: "BO", colors: ["red", "yellow", "green"], similar: ["GH", "ET", "LT"] },
  { alpha2: "BA", colors: ["blue", "gold", "white"], similar: ["UK", "BW", "EU"] },
  { alpha2: "BW", colors: ["light-blue", "white", "black"], similar: ["SL", "TZ", "TF"] },
  { alpha2: "BR", colors: ["green", "yellow", "blue"], similar: ["AU", "VE", "MX"] },
  { alpha2: "BN", colors: ["yellow", "white", "black"], similar: ["MY", "LK"] },
  { alpha2: "BG", colors: ["white", "green", "red"], similar: ["HU", "IT", "MX"] },
  { alpha2: "BF", colors: ["red", "green", "yellow"], similar: ["GN", "ML", "SN"] },
  { alpha2: "BI", colors: ["red", "white", "green"], similar: ["HU", "IT", "MG"] },
  // ── C ─────────────────────────────────────────────────────────────────
  { alpha2: "CV", colors: ["blue", "white", "red"], similar: ["GY", "AT", "SI"] },
  { alpha2: "KH", colors: ["blue", "red", "white"], similar: ["TH", "LR", "CR"] },
  { alpha2: "CM", colors: ["green", "red", "yellow"], similar: ["SN", "GN", "ET", "ML"] },
  { alpha2: "CA", colors: ["red", "white"], similar: ["DK", "SG", "CH", "JP"] },
  { alpha2: "CF", colors: ["blue", "white", "green", "yellow", "red"], similar: ["SL", "RW"] },
  { alpha2: "TD", colors: ["blue", "yellow", "red"], similar: ["RO", "AD", "MD"] },
  { alpha2: "CL", colors: ["red", "white", "blue"], similar: ["CU", "NC", "TH"] },
  { alpha2: "CN", colors: ["red", "yellow"], similar: ["VN", "VU", "AZ"] },
  { alpha2: "CO", colors: ["yellow", "blue", "red"], similar: ["EC", "VE", "RO"] },
  { alpha2: "KM", colors: ["green", "white", "red", "blue"], similar: ["TZ", "YE"] },
  { alpha2: "CD", colors: ["blue", "red", "yellow"], similar: ["CG", "ST", "AO"] },
  { alpha2: "CG", colors: ["green", "yellow", "red"], similar: ["SN", "GN", "ML", "ET"] },
  { alpha2: "CR", colors: ["blue", "white", "red"], similar: ["HN", "CL", "CU", "TH"] },
  { alpha2: "HR", colors: ["red", "white", "blue"], similar: ["NL", "RU", "SK", "SI", "FR"] },
  { alpha2: "CU", colors: ["blue", "white", "red"], similar: ["CL", "PR", "CR", "TH"] },
  { alpha2: "CY", colors: ["white", "orange", "green"], similar: ["MT", "ME", "TR"] },
  { alpha2: "CZ", colors: ["white", "red", "blue"], similar: ["SK", "PH", "PL", "YU"] },
  // ── D ─────────────────────────────────────────────────────────────────
  { alpha2: "DK", colors: ["red", "white"], similar: ["NO", "SE", "FI", "IS", "CH"] },
  { alpha2: "DJ", colors: ["light-blue", "green", "white", "red"], similar: ["SO", "ER"] },
  { alpha2: "DM", colors: ["green", "red", "yellow", "black", "white"], similar: ["GN", "SN", "CM"] },
  { alpha2: "DO", colors: ["blue", "red", "white"], similar: ["CZ", "SK", "CU"] },
  // ── E ─────────────────────────────────────────────────────────────────
  { alpha2: "EC", colors: ["yellow", "blue", "red"], similar: ["CO", "VE", "RO"] },
  { alpha2: "EG", colors: ["red", "white", "black"], similar: ["SY", "IQ", "YE", "IR"] },
  { alpha2: "SV", colors: ["blue", "white"], similar: ["HN", "NI", "AR", "GT"] },
  { alpha2: "GQ", colors: ["green", "white", "red"], similar: ["IT", "IE", "MX", "CM"] },
  { alpha2: "ER", colors: ["green", "red", "blue"], similar: ["ET", "DJ", "BJ"] },
  { alpha2: "EE", colors: ["blue", "black", "white"], similar: ["DE", "BE", "NL"] },
  { alpha2: "SZ", colors: ["blue", "yellow", "red"], similar: ["TH", "CR", "CL"] },
  { alpha2: "ET", colors: ["green", "yellow", "red"], similar: ["GN", "ML", "CM", "SN", "BO"] },
  // ── F ─────────────────────────────────────────────────────────────────
  { alpha2: "FJ", colors: ["light-blue", "white", "blue"], similar: ["AU", "NZ", "TV", "GB"] },
  { alpha2: "FI", colors: ["white", "blue"], similar: ["SE", "DK", "NO", "IS", "GR"] },
  { alpha2: "FR", colors: ["blue", "white", "red"], similar: ["NL", "RU", "SI", "CG", "HR"] },
  // ── G ─────────────────────────────────────────────────────────────────
  { alpha2: "GA", colors: ["green", "yellow", "blue"], similar: ["TZ", "ET", "ML"] },
  { alpha2: "GM", colors: ["red", "blue", "green", "white"], similar: ["SL", "GN", "SN"] },
  { alpha2: "GE", colors: ["white", "red"], similar: ["ENG", "DK", "CH", "SG"] },
  { alpha2: "DE", colors: ["black", "red", "gold"], similar: ["BE", "BO", "UG", "RW"] },
  { alpha2: "GH", colors: ["red", "gold", "green"], similar: ["ET", "CM", "SN", "BO"] },
  { alpha2: "GR", colors: ["blue", "white"], similar: ["FI", "SE", "IS", "EL"] },
  { alpha2: "GD", colors: ["red", "yellow", "green"], similar: ["BJ", "CM", "ET"] },
  { alpha2: "GT", colors: ["blue", "white"], similar: ["SV", "HN", "NI", "AR"] },
  { alpha2: "GN", colors: ["red", "yellow", "green"], similar: ["ML", "SN", "CM", "ET"] },
  { alpha2: "GW", colors: ["red", "yellow", "green", "black"], similar: ["GN", "SN", "CM"] },
  { alpha2: "GY", colors: ["green", "yellow", "red", "black", "white"], similar: ["CG", "ET", "BJ"] },
  // ── H ─────────────────────────────────────────────────────────────────
  { alpha2: "HT", colors: ["blue", "red"], similar: ["CL", "FR", "NL"] },
  { alpha2: "HN", colors: ["blue", "white"], similar: ["AR", "SV", "NI", "GT"] },
  { alpha2: "HU", colors: ["red", "white", "green"], similar: ["IT", "IE", "BG", "MX"] },
  // ── I ─────────────────────────────────────────────────────────────────
  { alpha2: "IS", colors: ["blue", "white", "red"], similar: ["NO", "DK", "SE", "FI"] },
  { alpha2: "IN", colors: ["orange", "white", "green"], similar: ["IE", "CI", "IT"] },
  { alpha2: "ID", colors: ["red", "white"], similar: ["MC", "PL", "SG", "AT"] },
  { alpha2: "IR", colors: ["green", "white", "red"], similar: ["IT", "HU", "MX"] },
  { alpha2: "IQ", colors: ["red", "white", "black"], similar: ["EG", "SY", "YE"] },
  { alpha2: "IE", colors: ["green", "white", "orange"], similar: ["IN", "CI", "IT"] },
  { alpha2: "IL", colors: ["white", "blue"], similar: ["GR", "FI", "SI"] },
  { alpha2: "IT", colors: ["green", "white", "red"], similar: ["IE", "CI", "HU", "IR", "MX"] },
  // ── J ─────────────────────────────────────────────────────────────────
  { alpha2: "JM", colors: ["black", "gold", "green"], similar: ["DE", "BE", "BJ"] },
  { alpha2: "JP", colors: ["white", "red"], similar: ["BD", "CH", "CA", "GE"] },
  { alpha2: "JO", colors: ["black", "white", "green", "red"], similar: ["PS", "KW", "SD", "EG"] },
  // ── K ─────────────────────────────────────────────────────────────────
  { alpha2: "KZ", colors: ["light-blue", "yellow"], similar: ["UZ", "TM", "AZ"] },
  { alpha2: "KE", colors: ["black", "red", "green", "white"], similar: ["ZW", "UG", "GH", "SS"] },
  { alpha2: "KI", colors: ["red", "blue", "white", "gold"], similar: ["FJ", "AU", "PG"] },
  { alpha2: "XK", colors: ["blue", "gold", "white"], similar: ["BA", "EU", "CY"] },
  { alpha2: "KW", colors: ["green", "white", "red", "black"], similar: ["JO", "PS", "SD"] },
  { alpha2: "KG", colors: ["red", "yellow"], similar: ["CN", "VN", "TR"] },
  // ── L ─────────────────────────────────────────────────────────────────
  { alpha2: "LA", colors: ["blue", "red", "white"], similar: ["TH", "KH", "CR"] },
  { alpha2: "LV", colors: ["red", "white"], similar: ["AT", "SG", "DK", "PL"] },
  { alpha2: "LB", colors: ["red", "white", "green"], similar: ["HU", "IT", "BG"] },
  { alpha2: "LS", colors: ["blue", "white", "green"], similar: ["BW", "SL", "ES"] },
  { alpha2: "LR", colors: ["red", "white", "blue"], similar: ["US", "CL", "KH"] },
  { alpha2: "LY", colors: ["black", "red", "green", "white"], similar: ["SA", "EG", "SD"] },
  { alpha2: "LI", colors: ["blue", "red", "gold"], similar: ["NL", "LU", "HT"] },
  { alpha2: "LT", colors: ["yellow", "green", "red"], similar: ["BO", "ET", "GH"] },
  { alpha2: "LU", colors: ["red", "white", "light-blue"], similar: ["NL", "FR", "RU", "NL"] },
  // ── M ─────────────────────────────────────────────────────────────────
  { alpha2: "MG", colors: ["white", "red", "green"], similar: ["IT", "HU", "BI"] },
  { alpha2: "MW", colors: ["black", "red", "green"], similar: ["ZW", "KE", "ET"] },
  { alpha2: "MY", colors: ["red", "white", "blue", "yellow"], similar: ["US", "LR", "PH"] },
  { alpha2: "MV", colors: ["red", "green", "white"], similar: ["BD", "JP", "DZ"] },
  { alpha2: "ML", colors: ["green", "yellow", "red"], similar: ["GN", "SN", "CM", "ET"] },
  { alpha2: "MT", colors: ["white", "red"], similar: ["PL", "ID", "MC", "AT"] },
  { alpha2: "MH", colors: ["blue", "white", "orange"], similar: ["PW", "FJ", "NA"] },
  { alpha2: "MR", colors: ["green", "yellow", "red"], similar: ["DZ", "PK", "TN", "SA"] },
  { alpha2: "MU", colors: ["red", "blue", "yellow", "green"], similar: ["BJ", "ET", "CG"] },
  { alpha2: "MX", colors: ["green", "white", "red"], similar: ["IT", "IE", "CI", "HU"] },
  { alpha2: "FM", colors: ["light-blue", "white"], similar: ["PW", "SOM", "MH"] },
  { alpha2: "MD", colors: ["blue", "yellow", "red"], similar: ["RO", "TD", "AD"] },
  { alpha2: "MC", colors: ["red", "white"], similar: ["ID", "PL", "SG", "MT"] },
  { alpha2: "MN", colors: ["red", "blue", "yellow"], similar: ["KZ", "UZ", "TM"] },
  { alpha2: "ME", colors: ["gold", "red", "blue"], similar: ["RS", "MK", "BA"] },
  { alpha2: "MA", colors: ["red", "green"], similar: ["PT", "DZ", "TN", "WE"] },
  { alpha2: "MZ", colors: ["green", "white", "black", "yellow", "red"], similar: ["ZW", "AO", "ET"] },
  { alpha2: "MM", colors: ["yellow", "green", "red", "white"], similar: ["LT", "BO", "GH"] },
  // ── N ─────────────────────────────────────────────────────────────────
  { alpha2: "XN", colors: ["red", "blue", "orange", "white"], similar: ["AM"] },
  { alpha2: "NA", colors: ["blue", "red", "green", "white", "gold"], similar: ["ZA", "BW", "ZW"] },
  { alpha2: "NR", colors: ["blue", "white", "gold"], similar: ["AU", "TV", "TO"] },
  { alpha2: "NP", colors: ["red", "white", "blue"], similar: [] },
  { alpha2: "NL", colors: ["red", "white", "blue"], similar: ["LU", "FR", "RU", "YU", "HR"] },
  { alpha2: "NZ", colors: ["blue", "red", "white"], similar: ["AU", "GB", "FJ", "TV"] },
  { alpha2: "NI", colors: ["blue", "white"], similar: ["HN", "SV", "AR", "GT"] },
  { alpha2: "NE", colors: ["orange", "white", "green"], similar: ["IN", "IE", "CI"] },
  { alpha2: "NG", colors: ["green", "white"], similar: ["IT", "MX", "IE"] },
  { alpha2: "KP", colors: ["blue", "red", "white"], similar: ["KR", "CU", "CL", "TH"] },
  { alpha2: "MK", colors: ["red", "yellow"], similar: ["CN", "KG", "TR"] },
  { alpha2: "NO", colors: ["red", "white", "blue"], similar: ["DK", "IS", "SE", "FI"] },
  // ── O ─────────────────────────────────────────────────────────────────
  { alpha2: "OM", colors: ["white", "red", "green"], similar: ["YE", "KW", "JO"] },
  // ── P ─────────────────────────────────────────────────────────────────
  { alpha2: "PK", colors: ["green", "white"], similar: ["DZ", "TN", "TR", "MY"] },
  { alpha2: "PW", colors: ["light-blue", "yellow"], similar: ["FM", "BD", "JP"] },
  { alpha2: "PS", colors: ["black", "white", "green", "red"], similar: ["JO", "KW", "SD"] },
  { alpha2: "PA", colors: ["red", "white", "blue"], similar: ["CU", "CL", "CR"] },
  { alpha2: "PG", colors: ["black", "red", "gold"], similar: ["BS", "DE", "BE"] },
  { alpha2: "PY", colors: ["red", "white", "blue"], similar: ["NL", "LU", "FR", "RU"] },
  { alpha2: "PE", colors: ["red", "white"], similar: ["AT", "LV", "DK", "SG"] },
  { alpha2: "PH", colors: ["blue", "red", "white", "yellow"], similar: ["MY", "CZ", "SK"] },
  { alpha2: "PL", colors: ["white", "red"], similar: ["ID", "MC", "SG", "MT"] },
  { alpha2: "PT", colors: ["green", "red", "yellow"], similar: ["IT", "IE", "MX", "GH"] },
  // ── Q ─────────────────────────────────────────────────────────────────
  { alpha2: "QA", colors: ["dark-red", "white"], similar: ["BH", "KW", "AT"] },
  // ── R ─────────────────────────────────────────────────────────────────
  { alpha2: "RO", colors: ["blue", "yellow", "red"], similar: ["TD", "MD", "AD", "BE"] },
  { alpha2: "RU", colors: ["white", "blue", "red"], similar: ["NL", "LU", "SK", "SI", "HR"] },
  { alpha2: "RW", colors: ["blue", "yellow", "green"], similar: ["DE", "ET", "BO"] },
  // ── S ─────────────────────────────────────────────────────────────────
  { alpha2: "KN", colors: ["green", "black", "red", "gold", "white"], similar: ["TT", "JM", "AG"] },
  { alpha2: "LC", colors: ["blue", "black", "yellow", "white"], similar: ["BS", "BB", "TT"] },
  { alpha2: "VC", colors: ["green", "gold", "blue"], similar: ["GY", "GN", "CM"] },
  { alpha2: "WS", colors: ["red", "white", "blue"], similar: ["NZ", "AU", "TW"] },
  { alpha2: "SM", colors: ["light-blue", "white"], similar: ["IL", "GR", "FI"] },
  { alpha2: "ST", colors: ["green", "yellow", "red", "black"], similar: ["GW", "BJ", "ET"] },
  { alpha2: "SA", colors: ["green", "white"], similar: ["PK", "DZ", "LY", "MR"] },
  { alpha2: "SN", colors: ["green", "yellow", "red"], similar: ["ML", "GN", "CM", "ET"] },
  { alpha2: "RS", colors: ["red", "blue", "white"], similar: ["NL", "RU", "LU", "FR", "HR"] },
  { alpha2: "SC", colors: ["blue", "yellow", "red", "white", "green"], similar: ["MU", "CM", "ET"] },
  { alpha2: "SL", colors: ["green", "white", "blue"], similar: ["LS", "BW", "ES"] },
  { alpha2: "SG", colors: ["red", "white"], similar: ["ID", "MC", "PL", "AT"] },
  { alpha2: "SK", colors: ["white", "blue", "red"], similar: ["CZ", "RU", "SI", "HR", "NL"] },
  { alpha2: "SI", colors: ["white", "blue", "red"], similar: ["RU", "SK", "HR", "FR", "NL"] },
  { alpha2: "SB", colors: ["blue", "green", "yellow", "white"], similar: ["PG", "FJ", "KI"] },
  { alpha2: "SO", colors: ["light-blue", "white"], similar: ["SM", "IS", "FI"] },
  { alpha2: "ZA", colors: ["green", "black", "gold", "white", "red", "blue"], similar: ["ZW", "NA", "LR"] },
  { alpha2: "KR", colors: ["white", "red", "blue", "black"], similar: ["KP", "TW", "JP"] },
  { alpha2: "SS", colors: ["black", "red", "green", "white", "blue", "yellow"], similar: ["KE", "ET", "ZW"] },
  { alpha2: "ES", colors: ["red", "yellow"], similar: ["AD", "MC", "DE"] },
  { alpha2: "LK", colors: ["dark-red", "gold", "orange", "green"], similar: ["IN", "BN", "IR"] },
  { alpha2: "SD", colors: ["red", "white", "black", "green"], similar: ["JO", "PS", "KW", "EG"] },
  { alpha2: "SR", colors: ["green", "white", "red", "yellow"], similar: ["GY", "BO", "CM"] },
  { alpha2: "SE", colors: ["blue", "yellow"], similar: ["DK", "NO", "FI", "IS"] },
  { alpha2: "CH", colors: ["red", "white"], similar: ["DK", "GE", "CA", "JP"] },
  { alpha2: "SY", colors: ["red", "white", "black", "green"], similar: ["EG", "IQ", "YE", "AF"] },
  // ── T ─────────────────────────────────────────────────────────────────
  { alpha2: "TW", colors: ["red", "blue", "white"], similar: ["KR", "US", "MY"] },
  { alpha2: "TJ", colors: ["red", "white", "green"], similar: ["BE", "IT", "HU", "BY"] },
  { alpha2: "TZ", colors: ["green", "black", "gold", "blue"], similar: ["ZA", "KE", "ZW"] },
  { alpha2: "TH", colors: ["red", "white", "blue"], similar: ["CL", "CU", "CR", "LA"] },
  { alpha2: "TL", colors: ["red", "black", "yellow", "white"], similar: ["PG", "BS", "CU"] },
  { alpha2: "TG", colors: ["green", "yellow", "red", "white"], similar: ["GN", "ET", "BF"] },
  { alpha2: "TO", colors: ["red", "white"], similar: ["DK", "CH", "GE", "SG"] },
  { alpha2: "TT", colors: ["red", "black", "white"], similar: ["KN", "AG", "LC"] },
  { alpha2: "TN", colors: ["red", "white"], similar: ["TR", "PK", "MR", "LY"] },
  { alpha2: "TR", colors: ["red", "white"], similar: ["TN", "PK", "AZ", "MY", "DZ"] },
  { alpha2: "TM", colors: ["green", "white"], similar: ["KZ", "AZ", "UZ"] },
  { alpha2: "TV", colors: ["light-blue", "white", "gold"], similar: ["AU", "NZ", "FJ"] },
  // ── U ─────────────────────────────────────────────────────────────────
  { alpha2: "UG", colors: ["black", "yellow", "red"], similar: ["DE", "BE", "ZW", "RW"] },
  { alpha2: "UA", colors: ["blue", "yellow"], similar: ["SE", "PW", "KZ"] },
  { alpha2: "AE", colors: ["red", "green", "white", "black"], similar: ["JO", "KW", "SD", "PS"] },
  { alpha2: "GB", colors: ["blue", "red", "white"], similar: ["AU", "NZ", "US", "FJ"] },
  { alpha2: "US", colors: ["red", "white", "blue"], similar: ["GB", "AU", "LR", "MY"] },
  { alpha2: "UY", colors: ["white", "blue", "yellow"], similar: ["AR", "HN", "NI"] },
  { alpha2: "UZ", colors: ["light-blue", "white", "green"], similar: ["AZ", "TM", "KZ"] },
  // ── V ─────────────────────────────────────────────────────────────────
  { alpha2: "VU", colors: ["green", "red", "black", "yellow"], similar: ["ZW", "ET", "GW"] },
  { alpha2: "VA", colors: ["yellow", "white"], similar: [] },
  { alpha2: "VE", colors: ["yellow", "blue", "red"], similar: ["CO", "EC", "RO"] },
  { alpha2: "VN", colors: ["red", "yellow"], similar: ["CN", "MN", "KG"] },
  // ── W ─────────────────────────────────────────────────────────────────
  { alpha2: "YE", colors: ["red", "white", "black"], similar: ["EG", "IQ", "SY"] },
  // ── Z ─────────────────────────────────────────────────────────────────
  { alpha2: "ZM", colors: ["green", "red", "black", "orange"], similar: ["ZW", "MZ", "ET"] },
  { alpha2: "ZW", colors: ["green", "gold", "red", "black", "white"], similar: ["ZA", "KE", "MZ", "DE"] },
];

export const flagData: FlagInfo[] = rawFlagData.map((flag) => ({
  ...flag,
  svgUrl: getFlagSvgUrl(flag.alpha2),
  pngUrl: getFlagPngUrl(flag.alpha2),
}));

/**
 * Get flag data for a specific country by its alpha-2 code.
 */
export function getFlagData(alpha2: string): FlagInfo | undefined {
  return flagData.find((f) => f.alpha2.toLowerCase() === alpha2.toLowerCase());
}

/**
 * Get all countries whose flags match one or more given colours.
 * When an array is provided, all supplied colours must match by default.
 * Pass `{ operator: "or" }` to match any supplied colour instead.
 */
export function getFlagsByColor(color: FlagInfo["colors"][number]): FlagInfo[];
export function getFlagsByColor(
  colors: readonly FlagInfo["colors"][number][],
  options?: GetFlagsByColorOptions,
): FlagInfo[];
export function getFlagsByColor(
  colorOrColors: FlagInfo["colors"][number] | readonly FlagInfo["colors"][number][],
  options: GetFlagsByColorOptions = {},
): FlagInfo[] {
  const colors = Array.isArray(colorOrColors) ? colorOrColors : [colorOrColors];

  if (colors.length === 0) return [];

  if (options.operator === "or") {
    return flagData.filter((flag) => colors.some((color) => flag.colors.includes(color)));
  }

  return flagData.filter((flag) => colors.every((color) => flag.colors.includes(color)));
}

/**
 * Get all similar-flag entries for a given country.
 * Returns an array of FlagInfo for each similar country.
 */
export function getSimilarFlags(alpha2: string): FlagInfo[] {
  const entry = getFlagData(alpha2);
  if (!entry) return [];
  return entry.similar
    .map((code) => getFlagData(code))
    .filter((f): f is FlagInfo => f !== undefined);
}
