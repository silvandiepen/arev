/**
 * Timezone reference data derived from the IANA Time Zone Database (tzdata2026a).
 *
 * Sources:
 * - https://data.iana.org/time-zones/releases/tzdata2026a.tar.gz
 * - zone1970.tab
 * - iso3166.tab
 */

export interface RawTimezoneRecord {
  name: string;
  region: string;
  subregions: string[];
  location: string;
  displayName: string;
  countryCodes: string[];
  latitude: number;
  longitude: number;
  comment?: string;
}

export const timezoneTerritoryNames: Record<string, string> = {
  "AD": "Andorra",
  "AE": "United Arab Emirates",
  "AF": "Afghanistan",
  "AG": "Antigua & Barbuda",
  "AI": "Anguilla",
  "AL": "Albania",
  "AM": "Armenia",
  "AO": "Angola",
  "AQ": "Antarctica",
  "AR": "Argentina",
  "AS": "Samoa (American)",
  "AT": "Austria",
  "AU": "Australia",
  "AW": "Aruba",
  "AX": "Åland Islands",
  "AZ": "Azerbaijan",
  "BA": "Bosnia & Herzegovina",
  "BB": "Barbados",
  "BD": "Bangladesh",
  "BE": "Belgium",
  "BF": "Burkina Faso",
  "BG": "Bulgaria",
  "BH": "Bahrain",
  "BI": "Burundi",
  "BJ": "Benin",
  "BL": "St Barthelemy",
  "BM": "Bermuda",
  "BN": "Brunei",
  "BO": "Bolivia",
  "BQ": "Caribbean NL",
  "BR": "Brazil",
  "BS": "Bahamas",
  "BT": "Bhutan",
  "BV": "Bouvet Island",
  "BW": "Botswana",
  "BY": "Belarus",
  "BZ": "Belize",
  "CA": "Canada",
  "CC": "Cocos (Keeling) Islands",
  "CD": "Congo (Dem. Rep.)",
  "CF": "Central African Rep.",
  "CG": "Congo (Rep.)",
  "CH": "Switzerland",
  "CI": "Côte d’Ivoire",
  "CK": "Cook Islands",
  "CL": "Chile",
  "CM": "Cameroon",
  "CN": "China",
  "CO": "Colombia",
  "CR": "Costa Rica",
  "CU": "Cuba",
  "CV": "Cape Verde",
  "CW": "Curaçao",
  "CX": "Christmas Island",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DE": "Germany",
  "DJ": "Djibouti",
  "DK": "Denmark",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "DZ": "Algeria",
  "EC": "Ecuador",
  "EE": "Estonia",
  "EG": "Egypt",
  "EH": "Western Sahara",
  "ER": "Eritrea",
  "ES": "Spain",
  "ET": "Ethiopia",
  "FI": "Finland",
  "FJ": "Fiji",
  "FK": "Falkland Islands",
  "FM": "Micronesia",
  "FO": "Faroe Islands",
  "FR": "France",
  "GA": "Gabon",
  "GB": "Britain (UK)",
  "GD": "Grenada",
  "GE": "Georgia",
  "GF": "French Guiana",
  "GG": "Guernsey",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GL": "Greenland",
  "GM": "Gambia",
  "GN": "Guinea",
  "GP": "Guadeloupe",
  "GQ": "Equatorial Guinea",
  "GR": "Greece",
  "GS": "South Georgia & the South Sandwich Islands",
  "GT": "Guatemala",
  "GU": "Guam",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HK": "Hong Kong",
  "HM": "Heard Island & McDonald Islands",
  "HN": "Honduras",
  "HR": "Croatia",
  "HT": "Haiti",
  "HU": "Hungary",
  "ID": "Indonesia",
  "IE": "Ireland",
  "IL": "Israel",
  "IM": "Isle of Man",
  "IN": "India",
  "IO": "British Indian Ocean Territory",
  "IQ": "Iraq",
  "IR": "Iran",
  "IS": "Iceland",
  "IT": "Italy",
  "JE": "Jersey",
  "JM": "Jamaica",
  "JO": "Jordan",
  "JP": "Japan",
  "KE": "Kenya",
  "KG": "Kyrgyzstan",
  "KH": "Cambodia",
  "KI": "Kiribati",
  "KM": "Comoros",
  "KN": "St Kitts & Nevis",
  "KP": "Korea (North)",
  "KR": "Korea (South)",
  "KW": "Kuwait",
  "KY": "Cayman Islands",
  "KZ": "Kazakhstan",
  "LA": "Laos",
  "LB": "Lebanon",
  "LC": "St Lucia",
  "LI": "Liechtenstein",
  "LK": "Sri Lanka",
  "LR": "Liberia",
  "LS": "Lesotho",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "LV": "Latvia",
  "LY": "Libya",
  "MA": "Morocco",
  "MC": "Monaco",
  "MD": "Moldova",
  "ME": "Montenegro",
  "MF": "St Martin (French)",
  "MG": "Madagascar",
  "MH": "Marshall Islands",
  "MK": "North Macedonia",
  "ML": "Mali",
  "MM": "Myanmar (Burma)",
  "MN": "Mongolia",
  "MO": "Macau",
  "MP": "Northern Mariana Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MS": "Montserrat",
  "MT": "Malta",
  "MU": "Mauritius",
  "MV": "Maldives",
  "MW": "Malawi",
  "MX": "Mexico",
  "MY": "Malaysia",
  "MZ": "Mozambique",
  "NA": "Namibia",
  "NC": "New Caledonia",
  "NE": "Niger",
  "NF": "Norfolk Island",
  "NG": "Nigeria",
  "NI": "Nicaragua",
  "NL": "Netherlands",
  "NO": "Norway",
  "NP": "Nepal",
  "NR": "Nauru",
  "NU": "Niue",
  "NZ": "New Zealand",
  "OM": "Oman",
  "PA": "Panama",
  "PE": "Peru",
  "PF": "French Polynesia",
  "PG": "Papua New Guinea",
  "PH": "Philippines",
  "PK": "Pakistan",
  "PL": "Poland",
  "PM": "St Pierre & Miquelon",
  "PN": "Pitcairn",
  "PR": "Puerto Rico",
  "PS": "Palestine",
  "PT": "Portugal",
  "PW": "Palau",
  "PY": "Paraguay",
  "QA": "Qatar",
  "RE": "Réunion",
  "RO": "Romania",
  "RS": "Serbia",
  "RU": "Russia",
  "RW": "Rwanda",
  "SA": "Saudi Arabia",
  "SB": "Solomon Islands",
  "SC": "Seychelles",
  "SD": "Sudan",
  "SE": "Sweden",
  "SG": "Singapore",
  "SH": "St Helena",
  "SI": "Slovenia",
  "SJ": "Svalbard & Jan Mayen",
  "SK": "Slovakia",
  "SL": "Sierra Leone",
  "SM": "San Marino",
  "SN": "Senegal",
  "SO": "Somalia",
  "SR": "Suriname",
  "SS": "South Sudan",
  "ST": "Sao Tome & Principe",
  "SV": "El Salvador",
  "SX": "St Maarten (Dutch)",
  "SY": "Syria",
  "SZ": "Eswatini (Swaziland)",
  "TC": "Turks & Caicos Is",
  "TD": "Chad",
  "TF": "French S. Terr.",
  "TG": "Togo",
  "TH": "Thailand",
  "TJ": "Tajikistan",
  "TK": "Tokelau",
  "TL": "East Timor",
  "TM": "Turkmenistan",
  "TN": "Tunisia",
  "TO": "Tonga",
  "TR": "Turkey",
  "TT": "Trinidad & Tobago",
  "TV": "Tuvalu",
  "TW": "Taiwan",
  "TZ": "Tanzania",
  "UA": "Ukraine",
  "UG": "Uganda",
  "UM": "US minor outlying islands",
  "US": "United States",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VA": "Vatican City",
  "VC": "St Vincent",
  "VE": "Venezuela",
  "VG": "Virgin Islands (UK)",
  "VI": "Virgin Islands (US)",
  "VN": "Vietnam",
  "VU": "Vanuatu",
  "WF": "Wallis & Futuna",
  "WS": "Samoa (western)",
  "YE": "Yemen",
  "YT": "Mayotte",
  "ZA": "South Africa",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
};

export const rawTimezones: RawTimezoneRecord[] = [
  {
    "name": "Europe/Andorra",
    "region": "Europe",
    "subregions": [],
    "location": "Andorra",
    "displayName": "Andorra",
    "countryCodes": [
      "AD"
    ],
    "latitude": 42.5,
    "longitude": 1.516667
  },
  {
    "name": "Asia/Dubai",
    "region": "Asia",
    "subregions": [],
    "location": "Dubai",
    "displayName": "Dubai",
    "countryCodes": [
      "AE",
      "OM",
      "RE",
      "SC",
      "TF"
    ],
    "latitude": 25.3,
    "longitude": 55.3,
    "comment": "Crozet"
  },
  {
    "name": "Asia/Kabul",
    "region": "Asia",
    "subregions": [],
    "location": "Kabul",
    "displayName": "Kabul",
    "countryCodes": [
      "AF"
    ],
    "latitude": 34.516667,
    "longitude": 69.2
  },
  {
    "name": "Europe/Tirane",
    "region": "Europe",
    "subregions": [],
    "location": "Tirane",
    "displayName": "Tirane",
    "countryCodes": [
      "AL"
    ],
    "latitude": 41.333333,
    "longitude": 19.833333
  },
  {
    "name": "Asia/Yerevan",
    "region": "Asia",
    "subregions": [],
    "location": "Yerevan",
    "displayName": "Yerevan",
    "countryCodes": [
      "AM"
    ],
    "latitude": 40.183333,
    "longitude": 44.5
  },
  {
    "name": "Antarctica/Casey",
    "region": "Antarctica",
    "subregions": [],
    "location": "Casey",
    "displayName": "Casey",
    "countryCodes": [
      "AQ"
    ],
    "latitude": -66.283333,
    "longitude": 110.516667,
    "comment": "Casey"
  },
  {
    "name": "Antarctica/Davis",
    "region": "Antarctica",
    "subregions": [],
    "location": "Davis",
    "displayName": "Davis",
    "countryCodes": [
      "AQ"
    ],
    "latitude": -68.583333,
    "longitude": 77.966667,
    "comment": "Davis"
  },
  {
    "name": "Antarctica/Mawson",
    "region": "Antarctica",
    "subregions": [],
    "location": "Mawson",
    "displayName": "Mawson",
    "countryCodes": [
      "AQ"
    ],
    "latitude": -67.6,
    "longitude": 62.883333,
    "comment": "Mawson"
  },
  {
    "name": "Antarctica/Palmer",
    "region": "Antarctica",
    "subregions": [],
    "location": "Palmer",
    "displayName": "Palmer",
    "countryCodes": [
      "AQ"
    ],
    "latitude": -64.8,
    "longitude": -64.1,
    "comment": "Palmer"
  },
  {
    "name": "Antarctica/Rothera",
    "region": "Antarctica",
    "subregions": [],
    "location": "Rothera",
    "displayName": "Rothera",
    "countryCodes": [
      "AQ"
    ],
    "latitude": -67.566667,
    "longitude": -68.133333,
    "comment": "Rothera"
  },
  {
    "name": "Antarctica/Troll",
    "region": "Antarctica",
    "subregions": [],
    "location": "Troll",
    "displayName": "Troll",
    "countryCodes": [
      "AQ"
    ],
    "latitude": -72.011389,
    "longitude": 2.535,
    "comment": "Troll"
  },
  {
    "name": "Antarctica/Vostok",
    "region": "Antarctica",
    "subregions": [],
    "location": "Vostok",
    "displayName": "Vostok",
    "countryCodes": [
      "AQ"
    ],
    "latitude": -78.4,
    "longitude": 106.9,
    "comment": "Vostok"
  },
  {
    "name": "America/Argentina/Buenos_Aires",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Buenos Aires",
    "displayName": "Argentina / Buenos Aires",
    "countryCodes": [
      "AR"
    ],
    "latitude": -34.6,
    "longitude": -58.45,
    "comment": "Buenos Aires (BA, CF)"
  },
  {
    "name": "America/Argentina/Cordoba",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Cordoba",
    "displayName": "Argentina / Cordoba",
    "countryCodes": [
      "AR"
    ],
    "latitude": -31.4,
    "longitude": -64.183333,
    "comment": "most areas: CB, CC, CN, ER, FM, MN, SE, SF"
  },
  {
    "name": "America/Argentina/Salta",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Salta",
    "displayName": "Argentina / Salta",
    "countryCodes": [
      "AR"
    ],
    "latitude": -24.783333,
    "longitude": -65.416667,
    "comment": "Salta (SA, LP, NQ, RN)"
  },
  {
    "name": "America/Argentina/Jujuy",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Jujuy",
    "displayName": "Argentina / Jujuy",
    "countryCodes": [
      "AR"
    ],
    "latitude": -24.183333,
    "longitude": -65.3,
    "comment": "Jujuy (JY)"
  },
  {
    "name": "America/Argentina/Tucuman",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Tucuman",
    "displayName": "Argentina / Tucuman",
    "countryCodes": [
      "AR"
    ],
    "latitude": -26.816667,
    "longitude": -65.216667,
    "comment": "Tucumán (TM)"
  },
  {
    "name": "America/Argentina/Catamarca",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Catamarca",
    "displayName": "Argentina / Catamarca",
    "countryCodes": [
      "AR"
    ],
    "latitude": -28.466667,
    "longitude": -65.783333,
    "comment": "Catamarca (CT), Chubut (CH)"
  },
  {
    "name": "America/Argentina/La_Rioja",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "La Rioja",
    "displayName": "Argentina / La Rioja",
    "countryCodes": [
      "AR"
    ],
    "latitude": -29.433333,
    "longitude": -66.85,
    "comment": "La Rioja (LR)"
  },
  {
    "name": "America/Argentina/San_Juan",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "San Juan",
    "displayName": "Argentina / San Juan",
    "countryCodes": [
      "AR"
    ],
    "latitude": -31.533333,
    "longitude": -68.516667,
    "comment": "San Juan (SJ)"
  },
  {
    "name": "America/Argentina/Mendoza",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Mendoza",
    "displayName": "Argentina / Mendoza",
    "countryCodes": [
      "AR"
    ],
    "latitude": -32.883333,
    "longitude": -68.816667,
    "comment": "Mendoza (MZ)"
  },
  {
    "name": "America/Argentina/San_Luis",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "San Luis",
    "displayName": "Argentina / San Luis",
    "countryCodes": [
      "AR"
    ],
    "latitude": -33.316667,
    "longitude": -66.35,
    "comment": "San Luis (SL)"
  },
  {
    "name": "America/Argentina/Rio_Gallegos",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Rio Gallegos",
    "displayName": "Argentina / Rio Gallegos",
    "countryCodes": [
      "AR"
    ],
    "latitude": -51.633333,
    "longitude": -69.216667,
    "comment": "Santa Cruz (SC)"
  },
  {
    "name": "America/Argentina/Ushuaia",
    "region": "America",
    "subregions": [
      "Argentina"
    ],
    "location": "Ushuaia",
    "displayName": "Argentina / Ushuaia",
    "countryCodes": [
      "AR"
    ],
    "latitude": -54.8,
    "longitude": -68.3,
    "comment": "Tierra del Fuego (TF)"
  },
  {
    "name": "Pacific/Pago_Pago",
    "region": "Pacific",
    "subregions": [],
    "location": "Pago Pago",
    "displayName": "Pago Pago",
    "countryCodes": [
      "AS",
      "UM"
    ],
    "latitude": -14.266667,
    "longitude": -170.7,
    "comment": "Midway"
  },
  {
    "name": "Europe/Vienna",
    "region": "Europe",
    "subregions": [],
    "location": "Vienna",
    "displayName": "Vienna",
    "countryCodes": [
      "AT"
    ],
    "latitude": 48.216667,
    "longitude": 16.333333
  },
  {
    "name": "Australia/Lord_Howe",
    "region": "Australia",
    "subregions": [],
    "location": "Lord Howe",
    "displayName": "Lord Howe",
    "countryCodes": [
      "AU"
    ],
    "latitude": -31.55,
    "longitude": 159.083333,
    "comment": "Lord Howe Island"
  },
  {
    "name": "Antarctica/Macquarie",
    "region": "Antarctica",
    "subregions": [],
    "location": "Macquarie",
    "displayName": "Macquarie",
    "countryCodes": [
      "AU"
    ],
    "latitude": -54.5,
    "longitude": 158.95,
    "comment": "Macquarie Island"
  },
  {
    "name": "Australia/Hobart",
    "region": "Australia",
    "subregions": [],
    "location": "Hobart",
    "displayName": "Hobart",
    "countryCodes": [
      "AU"
    ],
    "latitude": -42.883333,
    "longitude": 147.316667,
    "comment": "Tasmania"
  },
  {
    "name": "Australia/Melbourne",
    "region": "Australia",
    "subregions": [],
    "location": "Melbourne",
    "displayName": "Melbourne",
    "countryCodes": [
      "AU"
    ],
    "latitude": -37.816667,
    "longitude": 144.966667,
    "comment": "Victoria"
  },
  {
    "name": "Australia/Sydney",
    "region": "Australia",
    "subregions": [],
    "location": "Sydney",
    "displayName": "Sydney",
    "countryCodes": [
      "AU"
    ],
    "latitude": -33.866667,
    "longitude": 151.216667,
    "comment": "New South Wales (most areas)"
  },
  {
    "name": "Australia/Broken_Hill",
    "region": "Australia",
    "subregions": [],
    "location": "Broken Hill",
    "displayName": "Broken Hill",
    "countryCodes": [
      "AU"
    ],
    "latitude": -31.95,
    "longitude": 141.45,
    "comment": "New South Wales (Yancowinna)"
  },
  {
    "name": "Australia/Brisbane",
    "region": "Australia",
    "subregions": [],
    "location": "Brisbane",
    "displayName": "Brisbane",
    "countryCodes": [
      "AU"
    ],
    "latitude": -27.466667,
    "longitude": 153.033333,
    "comment": "Queensland (most areas)"
  },
  {
    "name": "Australia/Lindeman",
    "region": "Australia",
    "subregions": [],
    "location": "Lindeman",
    "displayName": "Lindeman",
    "countryCodes": [
      "AU"
    ],
    "latitude": -20.266667,
    "longitude": 149,
    "comment": "Queensland (Whitsunday Islands)"
  },
  {
    "name": "Australia/Adelaide",
    "region": "Australia",
    "subregions": [],
    "location": "Adelaide",
    "displayName": "Adelaide",
    "countryCodes": [
      "AU"
    ],
    "latitude": -34.916667,
    "longitude": 138.583333,
    "comment": "South Australia"
  },
  {
    "name": "Australia/Darwin",
    "region": "Australia",
    "subregions": [],
    "location": "Darwin",
    "displayName": "Darwin",
    "countryCodes": [
      "AU"
    ],
    "latitude": -12.466667,
    "longitude": 130.833333,
    "comment": "Northern Territory"
  },
  {
    "name": "Australia/Perth",
    "region": "Australia",
    "subregions": [],
    "location": "Perth",
    "displayName": "Perth",
    "countryCodes": [
      "AU"
    ],
    "latitude": -31.95,
    "longitude": 115.85,
    "comment": "Western Australia (most areas)"
  },
  {
    "name": "Australia/Eucla",
    "region": "Australia",
    "subregions": [],
    "location": "Eucla",
    "displayName": "Eucla",
    "countryCodes": [
      "AU"
    ],
    "latitude": -31.716667,
    "longitude": 128.866667,
    "comment": "Western Australia (Eucla)"
  },
  {
    "name": "Asia/Baku",
    "region": "Asia",
    "subregions": [],
    "location": "Baku",
    "displayName": "Baku",
    "countryCodes": [
      "AZ"
    ],
    "latitude": 40.383333,
    "longitude": 49.85
  },
  {
    "name": "America/Barbados",
    "region": "America",
    "subregions": [],
    "location": "Barbados",
    "displayName": "Barbados",
    "countryCodes": [
      "BB"
    ],
    "latitude": 13.1,
    "longitude": -59.616667
  },
  {
    "name": "Asia/Dhaka",
    "region": "Asia",
    "subregions": [],
    "location": "Dhaka",
    "displayName": "Dhaka",
    "countryCodes": [
      "BD"
    ],
    "latitude": 23.716667,
    "longitude": 90.416667
  },
  {
    "name": "Europe/Brussels",
    "region": "Europe",
    "subregions": [],
    "location": "Brussels",
    "displayName": "Brussels",
    "countryCodes": [
      "BE",
      "LU",
      "NL"
    ],
    "latitude": 50.833333,
    "longitude": 4.333333
  },
  {
    "name": "Europe/Sofia",
    "region": "Europe",
    "subregions": [],
    "location": "Sofia",
    "displayName": "Sofia",
    "countryCodes": [
      "BG"
    ],
    "latitude": 42.683333,
    "longitude": 23.316667
  },
  {
    "name": "Atlantic/Bermuda",
    "region": "Atlantic",
    "subregions": [],
    "location": "Bermuda",
    "displayName": "Bermuda",
    "countryCodes": [
      "BM"
    ],
    "latitude": 32.283333,
    "longitude": -64.766667
  },
  {
    "name": "America/La_Paz",
    "region": "America",
    "subregions": [],
    "location": "La Paz",
    "displayName": "La Paz",
    "countryCodes": [
      "BO"
    ],
    "latitude": -16.5,
    "longitude": -68.15
  },
  {
    "name": "America/Noronha",
    "region": "America",
    "subregions": [],
    "location": "Noronha",
    "displayName": "Noronha",
    "countryCodes": [
      "BR"
    ],
    "latitude": -3.85,
    "longitude": -32.416667,
    "comment": "Atlantic islands"
  },
  {
    "name": "America/Belem",
    "region": "America",
    "subregions": [],
    "location": "Belem",
    "displayName": "Belem",
    "countryCodes": [
      "BR"
    ],
    "latitude": -1.45,
    "longitude": -48.483333,
    "comment": "Pará (east), Amapá"
  },
  {
    "name": "America/Fortaleza",
    "region": "America",
    "subregions": [],
    "location": "Fortaleza",
    "displayName": "Fortaleza",
    "countryCodes": [
      "BR"
    ],
    "latitude": -3.716667,
    "longitude": -38.5,
    "comment": "Brazil (northeast: MA, PI, CE, RN, PB)"
  },
  {
    "name": "America/Recife",
    "region": "America",
    "subregions": [],
    "location": "Recife",
    "displayName": "Recife",
    "countryCodes": [
      "BR"
    ],
    "latitude": -8.05,
    "longitude": -34.9,
    "comment": "Pernambuco"
  },
  {
    "name": "America/Araguaina",
    "region": "America",
    "subregions": [],
    "location": "Araguaina",
    "displayName": "Araguaina",
    "countryCodes": [
      "BR"
    ],
    "latitude": -7.2,
    "longitude": -48.2,
    "comment": "Tocantins"
  },
  {
    "name": "America/Maceio",
    "region": "America",
    "subregions": [],
    "location": "Maceio",
    "displayName": "Maceio",
    "countryCodes": [
      "BR"
    ],
    "latitude": -9.666667,
    "longitude": -35.716667,
    "comment": "Alagoas, Sergipe"
  },
  {
    "name": "America/Bahia",
    "region": "America",
    "subregions": [],
    "location": "Bahia",
    "displayName": "Bahia",
    "countryCodes": [
      "BR"
    ],
    "latitude": -12.983333,
    "longitude": -38.516667,
    "comment": "Bahia"
  },
  {
    "name": "America/Sao_Paulo",
    "region": "America",
    "subregions": [],
    "location": "Sao Paulo",
    "displayName": "Sao Paulo",
    "countryCodes": [
      "BR"
    ],
    "latitude": -23.533333,
    "longitude": -46.616667,
    "comment": "Brazil (southeast: GO, DF, MG, ES, RJ, SP, PR, SC, RS)"
  },
  {
    "name": "America/Campo_Grande",
    "region": "America",
    "subregions": [],
    "location": "Campo Grande",
    "displayName": "Campo Grande",
    "countryCodes": [
      "BR"
    ],
    "latitude": -20.45,
    "longitude": -54.616667,
    "comment": "Mato Grosso do Sul"
  },
  {
    "name": "America/Cuiaba",
    "region": "America",
    "subregions": [],
    "location": "Cuiaba",
    "displayName": "Cuiaba",
    "countryCodes": [
      "BR"
    ],
    "latitude": -15.583333,
    "longitude": -56.083333,
    "comment": "Mato Grosso"
  },
  {
    "name": "America/Santarem",
    "region": "America",
    "subregions": [],
    "location": "Santarem",
    "displayName": "Santarem",
    "countryCodes": [
      "BR"
    ],
    "latitude": -2.433333,
    "longitude": -54.866667,
    "comment": "Pará (west)"
  },
  {
    "name": "America/Porto_Velho",
    "region": "America",
    "subregions": [],
    "location": "Porto Velho",
    "displayName": "Porto Velho",
    "countryCodes": [
      "BR"
    ],
    "latitude": -8.766667,
    "longitude": -63.9,
    "comment": "Rondônia"
  },
  {
    "name": "America/Boa_Vista",
    "region": "America",
    "subregions": [],
    "location": "Boa Vista",
    "displayName": "Boa Vista",
    "countryCodes": [
      "BR"
    ],
    "latitude": 2.816667,
    "longitude": -60.666667,
    "comment": "Roraima"
  },
  {
    "name": "America/Manaus",
    "region": "America",
    "subregions": [],
    "location": "Manaus",
    "displayName": "Manaus",
    "countryCodes": [
      "BR"
    ],
    "latitude": -3.133333,
    "longitude": -60.016667,
    "comment": "Amazonas (east)"
  },
  {
    "name": "America/Eirunepe",
    "region": "America",
    "subregions": [],
    "location": "Eirunepe",
    "displayName": "Eirunepe",
    "countryCodes": [
      "BR"
    ],
    "latitude": -6.666667,
    "longitude": -69.866667,
    "comment": "Amazonas (west)"
  },
  {
    "name": "America/Rio_Branco",
    "region": "America",
    "subregions": [],
    "location": "Rio Branco",
    "displayName": "Rio Branco",
    "countryCodes": [
      "BR"
    ],
    "latitude": -9.966667,
    "longitude": -67.8,
    "comment": "Acre"
  },
  {
    "name": "Asia/Thimphu",
    "region": "Asia",
    "subregions": [],
    "location": "Thimphu",
    "displayName": "Thimphu",
    "countryCodes": [
      "BT"
    ],
    "latitude": 27.466667,
    "longitude": 89.65
  },
  {
    "name": "Europe/Minsk",
    "region": "Europe",
    "subregions": [],
    "location": "Minsk",
    "displayName": "Minsk",
    "countryCodes": [
      "BY"
    ],
    "latitude": 53.9,
    "longitude": 27.566667
  },
  {
    "name": "America/Belize",
    "region": "America",
    "subregions": [],
    "location": "Belize",
    "displayName": "Belize",
    "countryCodes": [
      "BZ"
    ],
    "latitude": 17.5,
    "longitude": -88.2
  },
  {
    "name": "America/St_Johns",
    "region": "America",
    "subregions": [],
    "location": "St Johns",
    "displayName": "St Johns",
    "countryCodes": [
      "CA"
    ],
    "latitude": 47.566667,
    "longitude": -52.716667,
    "comment": "Newfoundland, Labrador (SE)"
  },
  {
    "name": "America/Halifax",
    "region": "America",
    "subregions": [],
    "location": "Halifax",
    "displayName": "Halifax",
    "countryCodes": [
      "CA"
    ],
    "latitude": 44.65,
    "longitude": -63.6,
    "comment": "Atlantic - NS (most areas), PE"
  },
  {
    "name": "America/Glace_Bay",
    "region": "America",
    "subregions": [],
    "location": "Glace Bay",
    "displayName": "Glace Bay",
    "countryCodes": [
      "CA"
    ],
    "latitude": 46.2,
    "longitude": -59.95,
    "comment": "Atlantic - NS (Cape Breton)"
  },
  {
    "name": "America/Moncton",
    "region": "America",
    "subregions": [],
    "location": "Moncton",
    "displayName": "Moncton",
    "countryCodes": [
      "CA"
    ],
    "latitude": 46.1,
    "longitude": -64.783333,
    "comment": "Atlantic - New Brunswick"
  },
  {
    "name": "America/Goose_Bay",
    "region": "America",
    "subregions": [],
    "location": "Goose Bay",
    "displayName": "Goose Bay",
    "countryCodes": [
      "CA"
    ],
    "latitude": 53.333333,
    "longitude": -60.416667,
    "comment": "Atlantic - Labrador (most areas)"
  },
  {
    "name": "America/Toronto",
    "region": "America",
    "subregions": [],
    "location": "Toronto",
    "displayName": "Toronto",
    "countryCodes": [
      "CA",
      "BS"
    ],
    "latitude": 43.65,
    "longitude": -79.383333,
    "comment": "Eastern - ON & QC (most areas)"
  },
  {
    "name": "America/Iqaluit",
    "region": "America",
    "subregions": [],
    "location": "Iqaluit",
    "displayName": "Iqaluit",
    "countryCodes": [
      "CA"
    ],
    "latitude": 63.733333,
    "longitude": -68.466667,
    "comment": "Eastern - NU (most areas)"
  },
  {
    "name": "America/Winnipeg",
    "region": "America",
    "subregions": [],
    "location": "Winnipeg",
    "displayName": "Winnipeg",
    "countryCodes": [
      "CA"
    ],
    "latitude": 49.883333,
    "longitude": -97.15,
    "comment": "Central - ON (west), Manitoba"
  },
  {
    "name": "America/Resolute",
    "region": "America",
    "subregions": [],
    "location": "Resolute",
    "displayName": "Resolute",
    "countryCodes": [
      "CA"
    ],
    "latitude": 74.695556,
    "longitude": -94.829167,
    "comment": "Central - NU (Resolute)"
  },
  {
    "name": "America/Rankin_Inlet",
    "region": "America",
    "subregions": [],
    "location": "Rankin Inlet",
    "displayName": "Rankin Inlet",
    "countryCodes": [
      "CA"
    ],
    "latitude": 62.816667,
    "longitude": -92.083056,
    "comment": "Central - NU (central)"
  },
  {
    "name": "America/Regina",
    "region": "America",
    "subregions": [],
    "location": "Regina",
    "displayName": "Regina",
    "countryCodes": [
      "CA"
    ],
    "latitude": 50.4,
    "longitude": -104.65,
    "comment": "CST - SK (most areas)"
  },
  {
    "name": "America/Swift_Current",
    "region": "America",
    "subregions": [],
    "location": "Swift Current",
    "displayName": "Swift Current",
    "countryCodes": [
      "CA"
    ],
    "latitude": 50.283333,
    "longitude": -107.833333,
    "comment": "CST - SK (midwest)"
  },
  {
    "name": "America/Edmonton",
    "region": "America",
    "subregions": [],
    "location": "Edmonton",
    "displayName": "Edmonton",
    "countryCodes": [
      "CA"
    ],
    "latitude": 53.55,
    "longitude": -113.466667,
    "comment": "Mountain - AB, BC(E), NT(E), SK(W)"
  },
  {
    "name": "America/Cambridge_Bay",
    "region": "America",
    "subregions": [],
    "location": "Cambridge Bay",
    "displayName": "Cambridge Bay",
    "countryCodes": [
      "CA"
    ],
    "latitude": 69.113889,
    "longitude": -105.052778,
    "comment": "Mountain - NU (west)"
  },
  {
    "name": "America/Inuvik",
    "region": "America",
    "subregions": [],
    "location": "Inuvik",
    "displayName": "Inuvik",
    "countryCodes": [
      "CA"
    ],
    "latitude": 68.349722,
    "longitude": -133.716667,
    "comment": "Mountain - NT (west)"
  },
  {
    "name": "America/Dawson_Creek",
    "region": "America",
    "subregions": [],
    "location": "Dawson Creek",
    "displayName": "Dawson Creek",
    "countryCodes": [
      "CA"
    ],
    "latitude": 55.766667,
    "longitude": -120.233333,
    "comment": "MST - BC (Dawson Cr, Ft St John)"
  },
  {
    "name": "America/Fort_Nelson",
    "region": "America",
    "subregions": [],
    "location": "Fort Nelson",
    "displayName": "Fort Nelson",
    "countryCodes": [
      "CA"
    ],
    "latitude": 58.8,
    "longitude": -122.7,
    "comment": "MST - BC (Ft Nelson)"
  },
  {
    "name": "America/Whitehorse",
    "region": "America",
    "subregions": [],
    "location": "Whitehorse",
    "displayName": "Whitehorse",
    "countryCodes": [
      "CA"
    ],
    "latitude": 60.716667,
    "longitude": -135.05,
    "comment": "MST - Yukon (east)"
  },
  {
    "name": "America/Dawson",
    "region": "America",
    "subregions": [],
    "location": "Dawson",
    "displayName": "Dawson",
    "countryCodes": [
      "CA"
    ],
    "latitude": 64.066667,
    "longitude": -139.416667,
    "comment": "MST - Yukon (west)"
  },
  {
    "name": "America/Vancouver",
    "region": "America",
    "subregions": [],
    "location": "Vancouver",
    "displayName": "Vancouver",
    "countryCodes": [
      "CA"
    ],
    "latitude": 49.266667,
    "longitude": -123.116667,
    "comment": "Pacific - BC (most areas)"
  },
  {
    "name": "Europe/Zurich",
    "region": "Europe",
    "subregions": [],
    "location": "Zurich",
    "displayName": "Zurich",
    "countryCodes": [
      "CH",
      "DE",
      "LI"
    ],
    "latitude": 47.383333,
    "longitude": 8.533333,
    "comment": "Büsingen"
  },
  {
    "name": "Africa/Abidjan",
    "region": "Africa",
    "subregions": [],
    "location": "Abidjan",
    "displayName": "Abidjan",
    "countryCodes": [
      "CI",
      "BF",
      "GH",
      "GM",
      "GN",
      "IS",
      "ML",
      "MR",
      "SH",
      "SL",
      "SN",
      "TG"
    ],
    "latitude": 5.316667,
    "longitude": -4.033333
  },
  {
    "name": "Pacific/Rarotonga",
    "region": "Pacific",
    "subregions": [],
    "location": "Rarotonga",
    "displayName": "Rarotonga",
    "countryCodes": [
      "CK"
    ],
    "latitude": -21.233333,
    "longitude": -159.766667
  },
  {
    "name": "America/Santiago",
    "region": "America",
    "subregions": [],
    "location": "Santiago",
    "displayName": "Santiago",
    "countryCodes": [
      "CL"
    ],
    "latitude": -33.45,
    "longitude": -70.666667,
    "comment": "most of Chile"
  },
  {
    "name": "America/Coyhaique",
    "region": "America",
    "subregions": [],
    "location": "Coyhaique",
    "displayName": "Coyhaique",
    "countryCodes": [
      "CL"
    ],
    "latitude": -45.566667,
    "longitude": -72.066667,
    "comment": "Aysén Region"
  },
  {
    "name": "America/Punta_Arenas",
    "region": "America",
    "subregions": [],
    "location": "Punta Arenas",
    "displayName": "Punta Arenas",
    "countryCodes": [
      "CL"
    ],
    "latitude": -53.15,
    "longitude": -70.916667,
    "comment": "Magallanes Region"
  },
  {
    "name": "Pacific/Easter",
    "region": "Pacific",
    "subregions": [],
    "location": "Easter",
    "displayName": "Easter",
    "countryCodes": [
      "CL"
    ],
    "latitude": -27.15,
    "longitude": -109.433333,
    "comment": "Easter Island"
  },
  {
    "name": "Asia/Shanghai",
    "region": "Asia",
    "subregions": [],
    "location": "Shanghai",
    "displayName": "Shanghai",
    "countryCodes": [
      "CN"
    ],
    "latitude": 31.233333,
    "longitude": 121.466667,
    "comment": "Beijing Time"
  },
  {
    "name": "Asia/Urumqi",
    "region": "Asia",
    "subregions": [],
    "location": "Urumqi",
    "displayName": "Urumqi",
    "countryCodes": [
      "CN"
    ],
    "latitude": 43.8,
    "longitude": 87.583333,
    "comment": "Xinjiang Time"
  },
  {
    "name": "America/Bogota",
    "region": "America",
    "subregions": [],
    "location": "Bogota",
    "displayName": "Bogota",
    "countryCodes": [
      "CO"
    ],
    "latitude": 4.6,
    "longitude": -74.083333
  },
  {
    "name": "America/Costa_Rica",
    "region": "America",
    "subregions": [],
    "location": "Costa Rica",
    "displayName": "Costa Rica",
    "countryCodes": [
      "CR"
    ],
    "latitude": 9.933333,
    "longitude": -84.083333
  },
  {
    "name": "America/Havana",
    "region": "America",
    "subregions": [],
    "location": "Havana",
    "displayName": "Havana",
    "countryCodes": [
      "CU"
    ],
    "latitude": 23.133333,
    "longitude": -82.366667
  },
  {
    "name": "Atlantic/Cape_Verde",
    "region": "Atlantic",
    "subregions": [],
    "location": "Cape Verde",
    "displayName": "Cape Verde",
    "countryCodes": [
      "CV"
    ],
    "latitude": 14.916667,
    "longitude": -23.516667
  },
  {
    "name": "Asia/Nicosia",
    "region": "Asia",
    "subregions": [],
    "location": "Nicosia",
    "displayName": "Nicosia",
    "countryCodes": [
      "CY"
    ],
    "latitude": 35.166667,
    "longitude": 33.366667,
    "comment": "most of Cyprus"
  },
  {
    "name": "Asia/Famagusta",
    "region": "Asia",
    "subregions": [],
    "location": "Famagusta",
    "displayName": "Famagusta",
    "countryCodes": [
      "CY"
    ],
    "latitude": 35.116667,
    "longitude": 33.95,
    "comment": "Northern Cyprus"
  },
  {
    "name": "Europe/Prague",
    "region": "Europe",
    "subregions": [],
    "location": "Prague",
    "displayName": "Prague",
    "countryCodes": [
      "CZ",
      "SK"
    ],
    "latitude": 50.083333,
    "longitude": 14.433333
  },
  {
    "name": "Europe/Berlin",
    "region": "Europe",
    "subregions": [],
    "location": "Berlin",
    "displayName": "Berlin",
    "countryCodes": [
      "DE",
      "DK",
      "NO",
      "SE",
      "SJ"
    ],
    "latitude": 52.5,
    "longitude": 13.366667,
    "comment": "most of Germany"
  },
  {
    "name": "America/Santo_Domingo",
    "region": "America",
    "subregions": [],
    "location": "Santo Domingo",
    "displayName": "Santo Domingo",
    "countryCodes": [
      "DO"
    ],
    "latitude": 18.466667,
    "longitude": -69.9
  },
  {
    "name": "Africa/Algiers",
    "region": "Africa",
    "subregions": [],
    "location": "Algiers",
    "displayName": "Algiers",
    "countryCodes": [
      "DZ"
    ],
    "latitude": 36.783333,
    "longitude": 3.05
  },
  {
    "name": "America/Guayaquil",
    "region": "America",
    "subregions": [],
    "location": "Guayaquil",
    "displayName": "Guayaquil",
    "countryCodes": [
      "EC"
    ],
    "latitude": -2.166667,
    "longitude": -79.833333,
    "comment": "Ecuador (mainland)"
  },
  {
    "name": "Pacific/Galapagos",
    "region": "Pacific",
    "subregions": [],
    "location": "Galapagos",
    "displayName": "Galapagos",
    "countryCodes": [
      "EC"
    ],
    "latitude": -0.9,
    "longitude": -89.6,
    "comment": "Galápagos Islands"
  },
  {
    "name": "Europe/Tallinn",
    "region": "Europe",
    "subregions": [],
    "location": "Tallinn",
    "displayName": "Tallinn",
    "countryCodes": [
      "EE"
    ],
    "latitude": 59.416667,
    "longitude": 24.75
  },
  {
    "name": "Africa/Cairo",
    "region": "Africa",
    "subregions": [],
    "location": "Cairo",
    "displayName": "Cairo",
    "countryCodes": [
      "EG"
    ],
    "latitude": 30.05,
    "longitude": 31.25
  },
  {
    "name": "Africa/El_Aaiun",
    "region": "Africa",
    "subregions": [],
    "location": "El Aaiun",
    "displayName": "El Aaiun",
    "countryCodes": [
      "EH"
    ],
    "latitude": 27.15,
    "longitude": -13.2
  },
  {
    "name": "Europe/Madrid",
    "region": "Europe",
    "subregions": [],
    "location": "Madrid",
    "displayName": "Madrid",
    "countryCodes": [
      "ES"
    ],
    "latitude": 40.4,
    "longitude": -3.683333,
    "comment": "Spain (mainland)"
  },
  {
    "name": "Africa/Ceuta",
    "region": "Africa",
    "subregions": [],
    "location": "Ceuta",
    "displayName": "Ceuta",
    "countryCodes": [
      "ES"
    ],
    "latitude": 35.883333,
    "longitude": -5.316667,
    "comment": "Ceuta, Melilla"
  },
  {
    "name": "Atlantic/Canary",
    "region": "Atlantic",
    "subregions": [],
    "location": "Canary",
    "displayName": "Canary",
    "countryCodes": [
      "ES"
    ],
    "latitude": 28.1,
    "longitude": -15.4,
    "comment": "Canary Islands"
  },
  {
    "name": "Europe/Helsinki",
    "region": "Europe",
    "subregions": [],
    "location": "Helsinki",
    "displayName": "Helsinki",
    "countryCodes": [
      "FI",
      "AX"
    ],
    "latitude": 60.166667,
    "longitude": 24.966667
  },
  {
    "name": "Pacific/Fiji",
    "region": "Pacific",
    "subregions": [],
    "location": "Fiji",
    "displayName": "Fiji",
    "countryCodes": [
      "FJ"
    ],
    "latitude": -18.133333,
    "longitude": 178.416667
  },
  {
    "name": "Atlantic/Stanley",
    "region": "Atlantic",
    "subregions": [],
    "location": "Stanley",
    "displayName": "Stanley",
    "countryCodes": [
      "FK"
    ],
    "latitude": -51.7,
    "longitude": -57.85
  },
  {
    "name": "Pacific/Kosrae",
    "region": "Pacific",
    "subregions": [],
    "location": "Kosrae",
    "displayName": "Kosrae",
    "countryCodes": [
      "FM"
    ],
    "latitude": 5.316667,
    "longitude": 162.983333,
    "comment": "Kosrae"
  },
  {
    "name": "Atlantic/Faroe",
    "region": "Atlantic",
    "subregions": [],
    "location": "Faroe",
    "displayName": "Faroe",
    "countryCodes": [
      "FO"
    ],
    "latitude": 62.016667,
    "longitude": -6.766667
  },
  {
    "name": "Europe/Paris",
    "region": "Europe",
    "subregions": [],
    "location": "Paris",
    "displayName": "Paris",
    "countryCodes": [
      "FR",
      "MC"
    ],
    "latitude": 48.866667,
    "longitude": 2.333333
  },
  {
    "name": "Europe/London",
    "region": "Europe",
    "subregions": [],
    "location": "London",
    "displayName": "London",
    "countryCodes": [
      "GB",
      "GG",
      "IM",
      "JE"
    ],
    "latitude": 51.508333,
    "longitude": -0.125278
  },
  {
    "name": "Asia/Tbilisi",
    "region": "Asia",
    "subregions": [],
    "location": "Tbilisi",
    "displayName": "Tbilisi",
    "countryCodes": [
      "GE"
    ],
    "latitude": 41.716667,
    "longitude": 44.816667
  },
  {
    "name": "America/Cayenne",
    "region": "America",
    "subregions": [],
    "location": "Cayenne",
    "displayName": "Cayenne",
    "countryCodes": [
      "GF"
    ],
    "latitude": 4.933333,
    "longitude": -52.333333
  },
  {
    "name": "Europe/Gibraltar",
    "region": "Europe",
    "subregions": [],
    "location": "Gibraltar",
    "displayName": "Gibraltar",
    "countryCodes": [
      "GI"
    ],
    "latitude": 36.133333,
    "longitude": -5.35
  },
  {
    "name": "America/Nuuk",
    "region": "America",
    "subregions": [],
    "location": "Nuuk",
    "displayName": "Nuuk",
    "countryCodes": [
      "GL"
    ],
    "latitude": 64.183333,
    "longitude": -51.733333,
    "comment": "most of Greenland"
  },
  {
    "name": "America/Danmarkshavn",
    "region": "America",
    "subregions": [],
    "location": "Danmarkshavn",
    "displayName": "Danmarkshavn",
    "countryCodes": [
      "GL"
    ],
    "latitude": 76.766667,
    "longitude": -18.666667,
    "comment": "National Park (east coast)"
  },
  {
    "name": "America/Scoresbysund",
    "region": "America",
    "subregions": [],
    "location": "Scoresbysund",
    "displayName": "Scoresbysund",
    "countryCodes": [
      "GL"
    ],
    "latitude": 70.483333,
    "longitude": -21.966667,
    "comment": "Scoresbysund/Ittoqqortoormiit"
  },
  {
    "name": "America/Thule",
    "region": "America",
    "subregions": [],
    "location": "Thule",
    "displayName": "Thule",
    "countryCodes": [
      "GL"
    ],
    "latitude": 76.566667,
    "longitude": -68.783333,
    "comment": "Thule/Pituffik"
  },
  {
    "name": "Europe/Athens",
    "region": "Europe",
    "subregions": [],
    "location": "Athens",
    "displayName": "Athens",
    "countryCodes": [
      "GR"
    ],
    "latitude": 37.966667,
    "longitude": 23.716667
  },
  {
    "name": "Atlantic/South_Georgia",
    "region": "Atlantic",
    "subregions": [],
    "location": "South Georgia",
    "displayName": "South Georgia",
    "countryCodes": [
      "GS"
    ],
    "latitude": -54.266667,
    "longitude": -36.533333
  },
  {
    "name": "America/Guatemala",
    "region": "America",
    "subregions": [],
    "location": "Guatemala",
    "displayName": "Guatemala",
    "countryCodes": [
      "GT"
    ],
    "latitude": 14.633333,
    "longitude": -90.516667
  },
  {
    "name": "Pacific/Guam",
    "region": "Pacific",
    "subregions": [],
    "location": "Guam",
    "displayName": "Guam",
    "countryCodes": [
      "GU",
      "MP"
    ],
    "latitude": 13.466667,
    "longitude": 144.75
  },
  {
    "name": "Africa/Bissau",
    "region": "Africa",
    "subregions": [],
    "location": "Bissau",
    "displayName": "Bissau",
    "countryCodes": [
      "GW"
    ],
    "latitude": 11.85,
    "longitude": -15.583333
  },
  {
    "name": "America/Guyana",
    "region": "America",
    "subregions": [],
    "location": "Guyana",
    "displayName": "Guyana",
    "countryCodes": [
      "GY"
    ],
    "latitude": 6.8,
    "longitude": -58.166667
  },
  {
    "name": "Asia/Hong_Kong",
    "region": "Asia",
    "subregions": [],
    "location": "Hong Kong",
    "displayName": "Hong Kong",
    "countryCodes": [
      "HK"
    ],
    "latitude": 22.283333,
    "longitude": 114.15
  },
  {
    "name": "America/Tegucigalpa",
    "region": "America",
    "subregions": [],
    "location": "Tegucigalpa",
    "displayName": "Tegucigalpa",
    "countryCodes": [
      "HN"
    ],
    "latitude": 14.1,
    "longitude": -87.216667
  },
  {
    "name": "America/Port-au-Prince",
    "region": "America",
    "subregions": [],
    "location": "Port-au-Prince",
    "displayName": "Port-au-Prince",
    "countryCodes": [
      "HT"
    ],
    "latitude": 18.533333,
    "longitude": -72.333333
  },
  {
    "name": "Europe/Budapest",
    "region": "Europe",
    "subregions": [],
    "location": "Budapest",
    "displayName": "Budapest",
    "countryCodes": [
      "HU"
    ],
    "latitude": 47.5,
    "longitude": 19.083333
  },
  {
    "name": "Asia/Jakarta",
    "region": "Asia",
    "subregions": [],
    "location": "Jakarta",
    "displayName": "Jakarta",
    "countryCodes": [
      "ID"
    ],
    "latitude": -6.166667,
    "longitude": 106.8,
    "comment": "Java, Sumatra"
  },
  {
    "name": "Asia/Pontianak",
    "region": "Asia",
    "subregions": [],
    "location": "Pontianak",
    "displayName": "Pontianak",
    "countryCodes": [
      "ID"
    ],
    "latitude": -0.033333,
    "longitude": 109.333333,
    "comment": "Borneo (west, central)"
  },
  {
    "name": "Asia/Makassar",
    "region": "Asia",
    "subregions": [],
    "location": "Makassar",
    "displayName": "Makassar",
    "countryCodes": [
      "ID"
    ],
    "latitude": -5.116667,
    "longitude": 119.4,
    "comment": "Borneo (east, south), Sulawesi/Celebes, Bali, Nusa Tengarra, Timor (west)"
  },
  {
    "name": "Asia/Jayapura",
    "region": "Asia",
    "subregions": [],
    "location": "Jayapura",
    "displayName": "Jayapura",
    "countryCodes": [
      "ID"
    ],
    "latitude": -2.533333,
    "longitude": 140.7,
    "comment": "New Guinea (West Papua / Irian Jaya), Malukus/Moluccas"
  },
  {
    "name": "Europe/Dublin",
    "region": "Europe",
    "subregions": [],
    "location": "Dublin",
    "displayName": "Dublin",
    "countryCodes": [
      "IE"
    ],
    "latitude": 53.333333,
    "longitude": -6.25
  },
  {
    "name": "Asia/Jerusalem",
    "region": "Asia",
    "subregions": [],
    "location": "Jerusalem",
    "displayName": "Jerusalem",
    "countryCodes": [
      "IL"
    ],
    "latitude": 31.780556,
    "longitude": 35.223889
  },
  {
    "name": "Asia/Kolkata",
    "region": "Asia",
    "subregions": [],
    "location": "Kolkata",
    "displayName": "Kolkata",
    "countryCodes": [
      "IN"
    ],
    "latitude": 22.533333,
    "longitude": 88.366667
  },
  {
    "name": "Indian/Chagos",
    "region": "Indian",
    "subregions": [],
    "location": "Chagos",
    "displayName": "Chagos",
    "countryCodes": [
      "IO"
    ],
    "latitude": -7.333333,
    "longitude": 72.416667
  },
  {
    "name": "Asia/Baghdad",
    "region": "Asia",
    "subregions": [],
    "location": "Baghdad",
    "displayName": "Baghdad",
    "countryCodes": [
      "IQ"
    ],
    "latitude": 33.35,
    "longitude": 44.416667
  },
  {
    "name": "Asia/Tehran",
    "region": "Asia",
    "subregions": [],
    "location": "Tehran",
    "displayName": "Tehran",
    "countryCodes": [
      "IR"
    ],
    "latitude": 35.666667,
    "longitude": 51.433333
  },
  {
    "name": "Europe/Rome",
    "region": "Europe",
    "subregions": [],
    "location": "Rome",
    "displayName": "Rome",
    "countryCodes": [
      "IT",
      "SM",
      "VA"
    ],
    "latitude": 41.9,
    "longitude": 12.483333
  },
  {
    "name": "America/Jamaica",
    "region": "America",
    "subregions": [],
    "location": "Jamaica",
    "displayName": "Jamaica",
    "countryCodes": [
      "JM"
    ],
    "latitude": 17.968056,
    "longitude": -76.793333
  },
  {
    "name": "Asia/Amman",
    "region": "Asia",
    "subregions": [],
    "location": "Amman",
    "displayName": "Amman",
    "countryCodes": [
      "JO"
    ],
    "latitude": 31.95,
    "longitude": 35.933333
  },
  {
    "name": "Asia/Tokyo",
    "region": "Asia",
    "subregions": [],
    "location": "Tokyo",
    "displayName": "Tokyo",
    "countryCodes": [
      "JP",
      "AU"
    ],
    "latitude": 35.654444,
    "longitude": 139.744722,
    "comment": "Eyre Bird Observatory"
  },
  {
    "name": "Africa/Nairobi",
    "region": "Africa",
    "subregions": [],
    "location": "Nairobi",
    "displayName": "Nairobi",
    "countryCodes": [
      "KE",
      "DJ",
      "ER",
      "ET",
      "KM",
      "MG",
      "SO",
      "TZ",
      "UG",
      "YT"
    ],
    "latitude": -1.283333,
    "longitude": 36.816667
  },
  {
    "name": "Asia/Bishkek",
    "region": "Asia",
    "subregions": [],
    "location": "Bishkek",
    "displayName": "Bishkek",
    "countryCodes": [
      "KG"
    ],
    "latitude": 42.9,
    "longitude": 74.6
  },
  {
    "name": "Pacific/Tarawa",
    "region": "Pacific",
    "subregions": [],
    "location": "Tarawa",
    "displayName": "Tarawa",
    "countryCodes": [
      "KI",
      "MH",
      "TV",
      "UM",
      "WF"
    ],
    "latitude": 1.416667,
    "longitude": 173,
    "comment": "Gilberts, Marshalls, Wake"
  },
  {
    "name": "Pacific/Kanton",
    "region": "Pacific",
    "subregions": [],
    "location": "Kanton",
    "displayName": "Kanton",
    "countryCodes": [
      "KI"
    ],
    "latitude": -2.783333,
    "longitude": -171.716667,
    "comment": "Phoenix Islands"
  },
  {
    "name": "Pacific/Kiritimati",
    "region": "Pacific",
    "subregions": [],
    "location": "Kiritimati",
    "displayName": "Kiritimati",
    "countryCodes": [
      "KI"
    ],
    "latitude": 1.866667,
    "longitude": -157.333333,
    "comment": "Line Islands"
  },
  {
    "name": "Asia/Pyongyang",
    "region": "Asia",
    "subregions": [],
    "location": "Pyongyang",
    "displayName": "Pyongyang",
    "countryCodes": [
      "KP"
    ],
    "latitude": 39.016667,
    "longitude": 125.75
  },
  {
    "name": "Asia/Seoul",
    "region": "Asia",
    "subregions": [],
    "location": "Seoul",
    "displayName": "Seoul",
    "countryCodes": [
      "KR"
    ],
    "latitude": 37.55,
    "longitude": 126.966667
  },
  {
    "name": "Asia/Almaty",
    "region": "Asia",
    "subregions": [],
    "location": "Almaty",
    "displayName": "Almaty",
    "countryCodes": [
      "KZ"
    ],
    "latitude": 43.25,
    "longitude": 76.95,
    "comment": "most of Kazakhstan"
  },
  {
    "name": "Asia/Qyzylorda",
    "region": "Asia",
    "subregions": [],
    "location": "Qyzylorda",
    "displayName": "Qyzylorda",
    "countryCodes": [
      "KZ"
    ],
    "latitude": 44.8,
    "longitude": 65.466667,
    "comment": "Qyzylorda/Kyzylorda/Kzyl-Orda"
  },
  {
    "name": "Asia/Qostanay",
    "region": "Asia",
    "subregions": [],
    "location": "Qostanay",
    "displayName": "Qostanay",
    "countryCodes": [
      "KZ"
    ],
    "latitude": 53.2,
    "longitude": 63.616667,
    "comment": "Qostanay/Kostanay/Kustanay"
  },
  {
    "name": "Asia/Aqtobe",
    "region": "Asia",
    "subregions": [],
    "location": "Aqtobe",
    "displayName": "Aqtobe",
    "countryCodes": [
      "KZ"
    ],
    "latitude": 50.283333,
    "longitude": 57.166667,
    "comment": "Aqtöbe/Aktobe"
  },
  {
    "name": "Asia/Aqtau",
    "region": "Asia",
    "subregions": [],
    "location": "Aqtau",
    "displayName": "Aqtau",
    "countryCodes": [
      "KZ"
    ],
    "latitude": 44.516667,
    "longitude": 50.266667,
    "comment": "Mangghystaū/Mankistau"
  },
  {
    "name": "Asia/Atyrau",
    "region": "Asia",
    "subregions": [],
    "location": "Atyrau",
    "displayName": "Atyrau",
    "countryCodes": [
      "KZ"
    ],
    "latitude": 47.116667,
    "longitude": 51.933333,
    "comment": "Atyraū/Atirau/Gur’yev"
  },
  {
    "name": "Asia/Oral",
    "region": "Asia",
    "subregions": [],
    "location": "Oral",
    "displayName": "Oral",
    "countryCodes": [
      "KZ"
    ],
    "latitude": 51.216667,
    "longitude": 51.35,
    "comment": "West Kazakhstan"
  },
  {
    "name": "Asia/Beirut",
    "region": "Asia",
    "subregions": [],
    "location": "Beirut",
    "displayName": "Beirut",
    "countryCodes": [
      "LB"
    ],
    "latitude": 33.883333,
    "longitude": 35.5
  },
  {
    "name": "Asia/Colombo",
    "region": "Asia",
    "subregions": [],
    "location": "Colombo",
    "displayName": "Colombo",
    "countryCodes": [
      "LK"
    ],
    "latitude": 6.933333,
    "longitude": 79.85
  },
  {
    "name": "Africa/Monrovia",
    "region": "Africa",
    "subregions": [],
    "location": "Monrovia",
    "displayName": "Monrovia",
    "countryCodes": [
      "LR"
    ],
    "latitude": 6.3,
    "longitude": -10.783333
  },
  {
    "name": "Europe/Vilnius",
    "region": "Europe",
    "subregions": [],
    "location": "Vilnius",
    "displayName": "Vilnius",
    "countryCodes": [
      "LT"
    ],
    "latitude": 54.683333,
    "longitude": 25.316667
  },
  {
    "name": "Europe/Riga",
    "region": "Europe",
    "subregions": [],
    "location": "Riga",
    "displayName": "Riga",
    "countryCodes": [
      "LV"
    ],
    "latitude": 56.95,
    "longitude": 24.1
  },
  {
    "name": "Africa/Tripoli",
    "region": "Africa",
    "subregions": [],
    "location": "Tripoli",
    "displayName": "Tripoli",
    "countryCodes": [
      "LY"
    ],
    "latitude": 32.9,
    "longitude": 13.183333
  },
  {
    "name": "Africa/Casablanca",
    "region": "Africa",
    "subregions": [],
    "location": "Casablanca",
    "displayName": "Casablanca",
    "countryCodes": [
      "MA"
    ],
    "latitude": 33.65,
    "longitude": -7.583333
  },
  {
    "name": "Europe/Chisinau",
    "region": "Europe",
    "subregions": [],
    "location": "Chisinau",
    "displayName": "Chisinau",
    "countryCodes": [
      "MD"
    ],
    "latitude": 47,
    "longitude": 28.833333
  },
  {
    "name": "Pacific/Kwajalein",
    "region": "Pacific",
    "subregions": [],
    "location": "Kwajalein",
    "displayName": "Kwajalein",
    "countryCodes": [
      "MH"
    ],
    "latitude": 9.083333,
    "longitude": 167.333333,
    "comment": "Kwajalein"
  },
  {
    "name": "Asia/Yangon",
    "region": "Asia",
    "subregions": [],
    "location": "Yangon",
    "displayName": "Yangon",
    "countryCodes": [
      "MM",
      "CC"
    ],
    "latitude": 16.783333,
    "longitude": 96.166667
  },
  {
    "name": "Asia/Ulaanbaatar",
    "region": "Asia",
    "subregions": [],
    "location": "Ulaanbaatar",
    "displayName": "Ulaanbaatar",
    "countryCodes": [
      "MN"
    ],
    "latitude": 47.916667,
    "longitude": 106.883333,
    "comment": "most of Mongolia"
  },
  {
    "name": "Asia/Hovd",
    "region": "Asia",
    "subregions": [],
    "location": "Hovd",
    "displayName": "Hovd",
    "countryCodes": [
      "MN"
    ],
    "latitude": 48.016667,
    "longitude": 91.65,
    "comment": "Bayan-Ölgii, Hovd, Uvs"
  },
  {
    "name": "Asia/Macau",
    "region": "Asia",
    "subregions": [],
    "location": "Macau",
    "displayName": "Macau",
    "countryCodes": [
      "MO"
    ],
    "latitude": 22.197222,
    "longitude": 113.541667
  },
  {
    "name": "America/Martinique",
    "region": "America",
    "subregions": [],
    "location": "Martinique",
    "displayName": "Martinique",
    "countryCodes": [
      "MQ"
    ],
    "latitude": 14.6,
    "longitude": -61.083333
  },
  {
    "name": "Europe/Malta",
    "region": "Europe",
    "subregions": [],
    "location": "Malta",
    "displayName": "Malta",
    "countryCodes": [
      "MT"
    ],
    "latitude": 35.9,
    "longitude": 14.516667
  },
  {
    "name": "Indian/Mauritius",
    "region": "Indian",
    "subregions": [],
    "location": "Mauritius",
    "displayName": "Mauritius",
    "countryCodes": [
      "MU"
    ],
    "latitude": -20.166667,
    "longitude": 57.5
  },
  {
    "name": "Indian/Maldives",
    "region": "Indian",
    "subregions": [],
    "location": "Maldives",
    "displayName": "Maldives",
    "countryCodes": [
      "MV",
      "TF"
    ],
    "latitude": 4.166667,
    "longitude": 73.5,
    "comment": "Kerguelen, St Paul I, Amsterdam I"
  },
  {
    "name": "America/Mexico_City",
    "region": "America",
    "subregions": [],
    "location": "Mexico City",
    "displayName": "Mexico City",
    "countryCodes": [
      "MX"
    ],
    "latitude": 19.4,
    "longitude": -99.15,
    "comment": "Central Mexico"
  },
  {
    "name": "America/Cancun",
    "region": "America",
    "subregions": [],
    "location": "Cancun",
    "displayName": "Cancun",
    "countryCodes": [
      "MX"
    ],
    "latitude": 21.083333,
    "longitude": -86.766667,
    "comment": "Quintana Roo"
  },
  {
    "name": "America/Merida",
    "region": "America",
    "subregions": [],
    "location": "Merida",
    "displayName": "Merida",
    "countryCodes": [
      "MX"
    ],
    "latitude": 20.966667,
    "longitude": -89.616667,
    "comment": "Campeche, Yucatán"
  },
  {
    "name": "America/Monterrey",
    "region": "America",
    "subregions": [],
    "location": "Monterrey",
    "displayName": "Monterrey",
    "countryCodes": [
      "MX"
    ],
    "latitude": 25.666667,
    "longitude": -100.316667,
    "comment": "Durango; Coahuila, Nuevo León, Tamaulipas (most areas)"
  },
  {
    "name": "America/Matamoros",
    "region": "America",
    "subregions": [],
    "location": "Matamoros",
    "displayName": "Matamoros",
    "countryCodes": [
      "MX"
    ],
    "latitude": 25.833333,
    "longitude": -97.5,
    "comment": "Coahuila, Nuevo León, Tamaulipas (US border)"
  },
  {
    "name": "America/Chihuahua",
    "region": "America",
    "subregions": [],
    "location": "Chihuahua",
    "displayName": "Chihuahua",
    "countryCodes": [
      "MX"
    ],
    "latitude": 28.633333,
    "longitude": -106.083333,
    "comment": "Chihuahua (most areas)"
  },
  {
    "name": "America/Ciudad_Juarez",
    "region": "America",
    "subregions": [],
    "location": "Ciudad Juarez",
    "displayName": "Ciudad Juarez",
    "countryCodes": [
      "MX"
    ],
    "latitude": 31.733333,
    "longitude": -106.483333,
    "comment": "Chihuahua (US border - west)"
  },
  {
    "name": "America/Ojinaga",
    "region": "America",
    "subregions": [],
    "location": "Ojinaga",
    "displayName": "Ojinaga",
    "countryCodes": [
      "MX"
    ],
    "latitude": 29.566667,
    "longitude": -104.416667,
    "comment": "Chihuahua (US border - east)"
  },
  {
    "name": "America/Mazatlan",
    "region": "America",
    "subregions": [],
    "location": "Mazatlan",
    "displayName": "Mazatlan",
    "countryCodes": [
      "MX"
    ],
    "latitude": 23.216667,
    "longitude": -106.416667,
    "comment": "Baja California Sur, Nayarit (most areas), Sinaloa"
  },
  {
    "name": "America/Bahia_Banderas",
    "region": "America",
    "subregions": [],
    "location": "Bahia Banderas",
    "displayName": "Bahia Banderas",
    "countryCodes": [
      "MX"
    ],
    "latitude": 20.8,
    "longitude": -105.25,
    "comment": "Bahía de Banderas"
  },
  {
    "name": "America/Hermosillo",
    "region": "America",
    "subregions": [],
    "location": "Hermosillo",
    "displayName": "Hermosillo",
    "countryCodes": [
      "MX"
    ],
    "latitude": 29.066667,
    "longitude": -110.966667,
    "comment": "Sonora"
  },
  {
    "name": "America/Tijuana",
    "region": "America",
    "subregions": [],
    "location": "Tijuana",
    "displayName": "Tijuana",
    "countryCodes": [
      "MX"
    ],
    "latitude": 32.533333,
    "longitude": -117.016667,
    "comment": "Baja California"
  },
  {
    "name": "Asia/Kuching",
    "region": "Asia",
    "subregions": [],
    "location": "Kuching",
    "displayName": "Kuching",
    "countryCodes": [
      "MY",
      "BN"
    ],
    "latitude": 1.55,
    "longitude": 110.333333,
    "comment": "Sabah, Sarawak"
  },
  {
    "name": "Africa/Maputo",
    "region": "Africa",
    "subregions": [],
    "location": "Maputo",
    "displayName": "Maputo",
    "countryCodes": [
      "MZ",
      "BI",
      "BW",
      "CD",
      "MW",
      "RW",
      "ZM",
      "ZW"
    ],
    "latitude": -25.966667,
    "longitude": 32.583333,
    "comment": "Central Africa Time"
  },
  {
    "name": "Africa/Windhoek",
    "region": "Africa",
    "subregions": [],
    "location": "Windhoek",
    "displayName": "Windhoek",
    "countryCodes": [
      "NA"
    ],
    "latitude": -22.566667,
    "longitude": 17.1
  },
  {
    "name": "Pacific/Noumea",
    "region": "Pacific",
    "subregions": [],
    "location": "Noumea",
    "displayName": "Noumea",
    "countryCodes": [
      "NC"
    ],
    "latitude": -22.266667,
    "longitude": 166.45
  },
  {
    "name": "Pacific/Norfolk",
    "region": "Pacific",
    "subregions": [],
    "location": "Norfolk",
    "displayName": "Norfolk",
    "countryCodes": [
      "NF"
    ],
    "latitude": -29.05,
    "longitude": 167.966667
  },
  {
    "name": "Africa/Lagos",
    "region": "Africa",
    "subregions": [],
    "location": "Lagos",
    "displayName": "Lagos",
    "countryCodes": [
      "NG",
      "AO",
      "BJ",
      "CD",
      "CF",
      "CG",
      "CM",
      "GA",
      "GQ",
      "NE"
    ],
    "latitude": 6.45,
    "longitude": 3.4,
    "comment": "West Africa Time"
  },
  {
    "name": "America/Managua",
    "region": "America",
    "subregions": [],
    "location": "Managua",
    "displayName": "Managua",
    "countryCodes": [
      "NI"
    ],
    "latitude": 12.15,
    "longitude": -86.283333
  },
  {
    "name": "Asia/Kathmandu",
    "region": "Asia",
    "subregions": [],
    "location": "Kathmandu",
    "displayName": "Kathmandu",
    "countryCodes": [
      "NP"
    ],
    "latitude": 27.716667,
    "longitude": 85.316667
  },
  {
    "name": "Pacific/Nauru",
    "region": "Pacific",
    "subregions": [],
    "location": "Nauru",
    "displayName": "Nauru",
    "countryCodes": [
      "NR"
    ],
    "latitude": -0.516667,
    "longitude": 166.916667
  },
  {
    "name": "Pacific/Niue",
    "region": "Pacific",
    "subregions": [],
    "location": "Niue",
    "displayName": "Niue",
    "countryCodes": [
      "NU"
    ],
    "latitude": -19.016667,
    "longitude": -169.916667
  },
  {
    "name": "Pacific/Auckland",
    "region": "Pacific",
    "subregions": [],
    "location": "Auckland",
    "displayName": "Auckland",
    "countryCodes": [
      "NZ",
      "AQ"
    ],
    "latitude": -36.866667,
    "longitude": 174.766667,
    "comment": "New Zealand time"
  },
  {
    "name": "Pacific/Chatham",
    "region": "Pacific",
    "subregions": [],
    "location": "Chatham",
    "displayName": "Chatham",
    "countryCodes": [
      "NZ"
    ],
    "latitude": -43.95,
    "longitude": -176.55,
    "comment": "Chatham Islands"
  },
  {
    "name": "America/Panama",
    "region": "America",
    "subregions": [],
    "location": "Panama",
    "displayName": "Panama",
    "countryCodes": [
      "PA",
      "CA",
      "KY"
    ],
    "latitude": 8.966667,
    "longitude": -79.533333,
    "comment": "EST - ON (Atikokan), NU (Coral H)"
  },
  {
    "name": "America/Lima",
    "region": "America",
    "subregions": [],
    "location": "Lima",
    "displayName": "Lima",
    "countryCodes": [
      "PE"
    ],
    "latitude": -12.05,
    "longitude": -77.05
  },
  {
    "name": "Pacific/Tahiti",
    "region": "Pacific",
    "subregions": [],
    "location": "Tahiti",
    "displayName": "Tahiti",
    "countryCodes": [
      "PF"
    ],
    "latitude": -17.533333,
    "longitude": -149.566667,
    "comment": "Society Islands"
  },
  {
    "name": "Pacific/Marquesas",
    "region": "Pacific",
    "subregions": [],
    "location": "Marquesas",
    "displayName": "Marquesas",
    "countryCodes": [
      "PF"
    ],
    "latitude": -9,
    "longitude": -139.5,
    "comment": "Marquesas Islands"
  },
  {
    "name": "Pacific/Gambier",
    "region": "Pacific",
    "subregions": [],
    "location": "Gambier",
    "displayName": "Gambier",
    "countryCodes": [
      "PF"
    ],
    "latitude": -23.133333,
    "longitude": -134.95,
    "comment": "Gambier Islands"
  },
  {
    "name": "Pacific/Port_Moresby",
    "region": "Pacific",
    "subregions": [],
    "location": "Port Moresby",
    "displayName": "Port Moresby",
    "countryCodes": [
      "PG",
      "AQ",
      "FM"
    ],
    "latitude": -9.5,
    "longitude": 147.166667,
    "comment": "Papua New Guinea (most areas), Chuuk, Yap, Dumont d’Urville"
  },
  {
    "name": "Pacific/Bougainville",
    "region": "Pacific",
    "subregions": [],
    "location": "Bougainville",
    "displayName": "Bougainville",
    "countryCodes": [
      "PG"
    ],
    "latitude": -6.216667,
    "longitude": 155.566667,
    "comment": "Bougainville"
  },
  {
    "name": "Asia/Manila",
    "region": "Asia",
    "subregions": [],
    "location": "Manila",
    "displayName": "Manila",
    "countryCodes": [
      "PH"
    ],
    "latitude": 14.586667,
    "longitude": 120.967778
  },
  {
    "name": "Asia/Karachi",
    "region": "Asia",
    "subregions": [],
    "location": "Karachi",
    "displayName": "Karachi",
    "countryCodes": [
      "PK"
    ],
    "latitude": 24.866667,
    "longitude": 67.05
  },
  {
    "name": "Europe/Warsaw",
    "region": "Europe",
    "subregions": [],
    "location": "Warsaw",
    "displayName": "Warsaw",
    "countryCodes": [
      "PL"
    ],
    "latitude": 52.25,
    "longitude": 21
  },
  {
    "name": "America/Miquelon",
    "region": "America",
    "subregions": [],
    "location": "Miquelon",
    "displayName": "Miquelon",
    "countryCodes": [
      "PM"
    ],
    "latitude": 47.05,
    "longitude": -56.333333
  },
  {
    "name": "Pacific/Pitcairn",
    "region": "Pacific",
    "subregions": [],
    "location": "Pitcairn",
    "displayName": "Pitcairn",
    "countryCodes": [
      "PN"
    ],
    "latitude": -25.066667,
    "longitude": -130.083333
  },
  {
    "name": "America/Puerto_Rico",
    "region": "America",
    "subregions": [],
    "location": "Puerto Rico",
    "displayName": "Puerto Rico",
    "countryCodes": [
      "PR",
      "AG",
      "CA",
      "AI",
      "AW",
      "BL",
      "BQ",
      "CW",
      "DM",
      "GD",
      "GP",
      "KN",
      "LC",
      "MF",
      "MS",
      "SX",
      "TT",
      "VC",
      "VG",
      "VI"
    ],
    "latitude": 18.468333,
    "longitude": -66.106111,
    "comment": "AST - QC (Lower North Shore)"
  },
  {
    "name": "Asia/Gaza",
    "region": "Asia",
    "subregions": [],
    "location": "Gaza",
    "displayName": "Gaza",
    "countryCodes": [
      "PS"
    ],
    "latitude": 31.5,
    "longitude": 34.466667,
    "comment": "Gaza Strip"
  },
  {
    "name": "Asia/Hebron",
    "region": "Asia",
    "subregions": [],
    "location": "Hebron",
    "displayName": "Hebron",
    "countryCodes": [
      "PS"
    ],
    "latitude": 31.533333,
    "longitude": 35.095,
    "comment": "West Bank"
  },
  {
    "name": "Europe/Lisbon",
    "region": "Europe",
    "subregions": [],
    "location": "Lisbon",
    "displayName": "Lisbon",
    "countryCodes": [
      "PT"
    ],
    "latitude": 38.716667,
    "longitude": -9.133333,
    "comment": "Portugal (mainland)"
  },
  {
    "name": "Atlantic/Madeira",
    "region": "Atlantic",
    "subregions": [],
    "location": "Madeira",
    "displayName": "Madeira",
    "countryCodes": [
      "PT"
    ],
    "latitude": 32.633333,
    "longitude": -16.9,
    "comment": "Madeira Islands"
  },
  {
    "name": "Atlantic/Azores",
    "region": "Atlantic",
    "subregions": [],
    "location": "Azores",
    "displayName": "Azores",
    "countryCodes": [
      "PT"
    ],
    "latitude": 37.733333,
    "longitude": -25.666667,
    "comment": "Azores"
  },
  {
    "name": "Pacific/Palau",
    "region": "Pacific",
    "subregions": [],
    "location": "Palau",
    "displayName": "Palau",
    "countryCodes": [
      "PW"
    ],
    "latitude": 7.333333,
    "longitude": 134.483333
  },
  {
    "name": "America/Asuncion",
    "region": "America",
    "subregions": [],
    "location": "Asuncion",
    "displayName": "Asuncion",
    "countryCodes": [
      "PY"
    ],
    "latitude": -25.266667,
    "longitude": -57.666667
  },
  {
    "name": "Asia/Qatar",
    "region": "Asia",
    "subregions": [],
    "location": "Qatar",
    "displayName": "Qatar",
    "countryCodes": [
      "QA",
      "BH"
    ],
    "latitude": 25.283333,
    "longitude": 51.533333
  },
  {
    "name": "Europe/Bucharest",
    "region": "Europe",
    "subregions": [],
    "location": "Bucharest",
    "displayName": "Bucharest",
    "countryCodes": [
      "RO"
    ],
    "latitude": 44.433333,
    "longitude": 26.1
  },
  {
    "name": "Europe/Belgrade",
    "region": "Europe",
    "subregions": [],
    "location": "Belgrade",
    "displayName": "Belgrade",
    "countryCodes": [
      "RS",
      "BA",
      "HR",
      "ME",
      "MK",
      "SI"
    ],
    "latitude": 44.833333,
    "longitude": 20.5
  },
  {
    "name": "Europe/Kaliningrad",
    "region": "Europe",
    "subregions": [],
    "location": "Kaliningrad",
    "displayName": "Kaliningrad",
    "countryCodes": [
      "RU"
    ],
    "latitude": 54.716667,
    "longitude": 20.5,
    "comment": "MSK-01 - Kaliningrad"
  },
  {
    "name": "Europe/Moscow",
    "region": "Europe",
    "subregions": [],
    "location": "Moscow",
    "displayName": "Moscow",
    "countryCodes": [
      "RU"
    ],
    "latitude": 55.755833,
    "longitude": 37.617778,
    "comment": "MSK+00 - Moscow area"
  },
  {
    "name": "Europe/Simferopol",
    "region": "Europe",
    "subregions": [],
    "location": "Simferopol",
    "displayName": "Simferopol",
    "countryCodes": [
      "RU",
      "UA"
    ],
    "latitude": 44.95,
    "longitude": 34.1,
    "comment": "Crimea"
  },
  {
    "name": "Europe/Kirov",
    "region": "Europe",
    "subregions": [],
    "location": "Kirov",
    "displayName": "Kirov",
    "countryCodes": [
      "RU"
    ],
    "latitude": 58.6,
    "longitude": 49.65,
    "comment": "MSK+00 - Kirov"
  },
  {
    "name": "Europe/Volgograd",
    "region": "Europe",
    "subregions": [],
    "location": "Volgograd",
    "displayName": "Volgograd",
    "countryCodes": [
      "RU"
    ],
    "latitude": 48.733333,
    "longitude": 44.416667,
    "comment": "MSK+00 - Volgograd"
  },
  {
    "name": "Europe/Astrakhan",
    "region": "Europe",
    "subregions": [],
    "location": "Astrakhan",
    "displayName": "Astrakhan",
    "countryCodes": [
      "RU"
    ],
    "latitude": 46.35,
    "longitude": 48.05,
    "comment": "MSK+01 - Astrakhan"
  },
  {
    "name": "Europe/Saratov",
    "region": "Europe",
    "subregions": [],
    "location": "Saratov",
    "displayName": "Saratov",
    "countryCodes": [
      "RU"
    ],
    "latitude": 51.566667,
    "longitude": 46.033333,
    "comment": "MSK+01 - Saratov"
  },
  {
    "name": "Europe/Ulyanovsk",
    "region": "Europe",
    "subregions": [],
    "location": "Ulyanovsk",
    "displayName": "Ulyanovsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 54.333333,
    "longitude": 48.4,
    "comment": "MSK+01 - Ulyanovsk"
  },
  {
    "name": "Europe/Samara",
    "region": "Europe",
    "subregions": [],
    "location": "Samara",
    "displayName": "Samara",
    "countryCodes": [
      "RU"
    ],
    "latitude": 53.2,
    "longitude": 50.15,
    "comment": "MSK+01 - Samara, Udmurtia"
  },
  {
    "name": "Asia/Yekaterinburg",
    "region": "Asia",
    "subregions": [],
    "location": "Yekaterinburg",
    "displayName": "Yekaterinburg",
    "countryCodes": [
      "RU"
    ],
    "latitude": 56.85,
    "longitude": 60.6,
    "comment": "MSK+02 - Urals"
  },
  {
    "name": "Asia/Omsk",
    "region": "Asia",
    "subregions": [],
    "location": "Omsk",
    "displayName": "Omsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 55,
    "longitude": 73.4,
    "comment": "MSK+03 - Omsk"
  },
  {
    "name": "Asia/Novosibirsk",
    "region": "Asia",
    "subregions": [],
    "location": "Novosibirsk",
    "displayName": "Novosibirsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 55.033333,
    "longitude": 82.916667,
    "comment": "MSK+04 - Novosibirsk"
  },
  {
    "name": "Asia/Barnaul",
    "region": "Asia",
    "subregions": [],
    "location": "Barnaul",
    "displayName": "Barnaul",
    "countryCodes": [
      "RU"
    ],
    "latitude": 53.366667,
    "longitude": 83.75,
    "comment": "MSK+04 - Altai"
  },
  {
    "name": "Asia/Tomsk",
    "region": "Asia",
    "subregions": [],
    "location": "Tomsk",
    "displayName": "Tomsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 56.5,
    "longitude": 84.966667,
    "comment": "MSK+04 - Tomsk"
  },
  {
    "name": "Asia/Novokuznetsk",
    "region": "Asia",
    "subregions": [],
    "location": "Novokuznetsk",
    "displayName": "Novokuznetsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 53.75,
    "longitude": 87.116667,
    "comment": "MSK+04 - Kemerovo"
  },
  {
    "name": "Asia/Krasnoyarsk",
    "region": "Asia",
    "subregions": [],
    "location": "Krasnoyarsk",
    "displayName": "Krasnoyarsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 56.016667,
    "longitude": 92.833333,
    "comment": "MSK+04 - Krasnoyarsk area"
  },
  {
    "name": "Asia/Irkutsk",
    "region": "Asia",
    "subregions": [],
    "location": "Irkutsk",
    "displayName": "Irkutsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 52.266667,
    "longitude": 104.333333,
    "comment": "MSK+05 - Irkutsk, Buryatia"
  },
  {
    "name": "Asia/Chita",
    "region": "Asia",
    "subregions": [],
    "location": "Chita",
    "displayName": "Chita",
    "countryCodes": [
      "RU"
    ],
    "latitude": 52.05,
    "longitude": 113.466667,
    "comment": "MSK+06 - Zabaykalsky"
  },
  {
    "name": "Asia/Yakutsk",
    "region": "Asia",
    "subregions": [],
    "location": "Yakutsk",
    "displayName": "Yakutsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 62,
    "longitude": 129.666667,
    "comment": "MSK+06 - Lena River"
  },
  {
    "name": "Asia/Khandyga",
    "region": "Asia",
    "subregions": [],
    "location": "Khandyga",
    "displayName": "Khandyga",
    "countryCodes": [
      "RU"
    ],
    "latitude": 62.656389,
    "longitude": 135.553889,
    "comment": "MSK+06 - Tomponsky, Ust-Maysky"
  },
  {
    "name": "Asia/Vladivostok",
    "region": "Asia",
    "subregions": [],
    "location": "Vladivostok",
    "displayName": "Vladivostok",
    "countryCodes": [
      "RU"
    ],
    "latitude": 43.166667,
    "longitude": 131.933333,
    "comment": "MSK+07 - Amur River"
  },
  {
    "name": "Asia/Ust-Nera",
    "region": "Asia",
    "subregions": [],
    "location": "Ust-Nera",
    "displayName": "Ust-Nera",
    "countryCodes": [
      "RU"
    ],
    "latitude": 64.560278,
    "longitude": 143.226667,
    "comment": "MSK+07 - Oymyakonsky"
  },
  {
    "name": "Asia/Magadan",
    "region": "Asia",
    "subregions": [],
    "location": "Magadan",
    "displayName": "Magadan",
    "countryCodes": [
      "RU"
    ],
    "latitude": 59.566667,
    "longitude": 150.8,
    "comment": "MSK+08 - Magadan"
  },
  {
    "name": "Asia/Sakhalin",
    "region": "Asia",
    "subregions": [],
    "location": "Sakhalin",
    "displayName": "Sakhalin",
    "countryCodes": [
      "RU"
    ],
    "latitude": 46.966667,
    "longitude": 142.7,
    "comment": "MSK+08 - Sakhalin Island"
  },
  {
    "name": "Asia/Srednekolymsk",
    "region": "Asia",
    "subregions": [],
    "location": "Srednekolymsk",
    "displayName": "Srednekolymsk",
    "countryCodes": [
      "RU"
    ],
    "latitude": 67.466667,
    "longitude": 153.716667,
    "comment": "MSK+08 - Sakha (E), N Kuril Is"
  },
  {
    "name": "Asia/Kamchatka",
    "region": "Asia",
    "subregions": [],
    "location": "Kamchatka",
    "displayName": "Kamchatka",
    "countryCodes": [
      "RU"
    ],
    "latitude": 53.016667,
    "longitude": 158.65,
    "comment": "MSK+09 - Kamchatka"
  },
  {
    "name": "Asia/Anadyr",
    "region": "Asia",
    "subregions": [],
    "location": "Anadyr",
    "displayName": "Anadyr",
    "countryCodes": [
      "RU"
    ],
    "latitude": 64.75,
    "longitude": 177.483333,
    "comment": "MSK+09 - Bering Sea"
  },
  {
    "name": "Asia/Riyadh",
    "region": "Asia",
    "subregions": [],
    "location": "Riyadh",
    "displayName": "Riyadh",
    "countryCodes": [
      "SA",
      "AQ",
      "KW",
      "YE"
    ],
    "latitude": 24.633333,
    "longitude": 46.716667,
    "comment": "Syowa"
  },
  {
    "name": "Pacific/Guadalcanal",
    "region": "Pacific",
    "subregions": [],
    "location": "Guadalcanal",
    "displayName": "Guadalcanal",
    "countryCodes": [
      "SB",
      "FM"
    ],
    "latitude": -9.533333,
    "longitude": 160.2,
    "comment": "Pohnpei"
  },
  {
    "name": "Africa/Khartoum",
    "region": "Africa",
    "subregions": [],
    "location": "Khartoum",
    "displayName": "Khartoum",
    "countryCodes": [
      "SD"
    ],
    "latitude": 15.6,
    "longitude": 32.533333
  },
  {
    "name": "Asia/Singapore",
    "region": "Asia",
    "subregions": [],
    "location": "Singapore",
    "displayName": "Singapore",
    "countryCodes": [
      "SG",
      "AQ",
      "MY"
    ],
    "latitude": 1.283333,
    "longitude": 103.85,
    "comment": "peninsular Malaysia, Concordia"
  },
  {
    "name": "America/Paramaribo",
    "region": "America",
    "subregions": [],
    "location": "Paramaribo",
    "displayName": "Paramaribo",
    "countryCodes": [
      "SR"
    ],
    "latitude": 5.833333,
    "longitude": -55.166667
  },
  {
    "name": "Africa/Juba",
    "region": "Africa",
    "subregions": [],
    "location": "Juba",
    "displayName": "Juba",
    "countryCodes": [
      "SS"
    ],
    "latitude": 4.85,
    "longitude": 31.616667
  },
  {
    "name": "Africa/Sao_Tome",
    "region": "Africa",
    "subregions": [],
    "location": "Sao Tome",
    "displayName": "Sao Tome",
    "countryCodes": [
      "ST"
    ],
    "latitude": 0.333333,
    "longitude": 6.733333
  },
  {
    "name": "America/El_Salvador",
    "region": "America",
    "subregions": [],
    "location": "El Salvador",
    "displayName": "El Salvador",
    "countryCodes": [
      "SV"
    ],
    "latitude": 13.7,
    "longitude": -89.2
  },
  {
    "name": "Asia/Damascus",
    "region": "Asia",
    "subregions": [],
    "location": "Damascus",
    "displayName": "Damascus",
    "countryCodes": [
      "SY"
    ],
    "latitude": 33.5,
    "longitude": 36.3
  },
  {
    "name": "America/Grand_Turk",
    "region": "America",
    "subregions": [],
    "location": "Grand Turk",
    "displayName": "Grand Turk",
    "countryCodes": [
      "TC"
    ],
    "latitude": 21.466667,
    "longitude": -71.133333
  },
  {
    "name": "Africa/Ndjamena",
    "region": "Africa",
    "subregions": [],
    "location": "Ndjamena",
    "displayName": "Ndjamena",
    "countryCodes": [
      "TD"
    ],
    "latitude": 12.116667,
    "longitude": 15.05
  },
  {
    "name": "Asia/Bangkok",
    "region": "Asia",
    "subregions": [],
    "location": "Bangkok",
    "displayName": "Bangkok",
    "countryCodes": [
      "TH",
      "CX",
      "KH",
      "LA",
      "VN"
    ],
    "latitude": 13.75,
    "longitude": 100.516667,
    "comment": "north Vietnam"
  },
  {
    "name": "Asia/Dushanbe",
    "region": "Asia",
    "subregions": [],
    "location": "Dushanbe",
    "displayName": "Dushanbe",
    "countryCodes": [
      "TJ"
    ],
    "latitude": 38.583333,
    "longitude": 68.8
  },
  {
    "name": "Pacific/Fakaofo",
    "region": "Pacific",
    "subregions": [],
    "location": "Fakaofo",
    "displayName": "Fakaofo",
    "countryCodes": [
      "TK"
    ],
    "latitude": -9.366667,
    "longitude": -171.233333
  },
  {
    "name": "Asia/Dili",
    "region": "Asia",
    "subregions": [],
    "location": "Dili",
    "displayName": "Dili",
    "countryCodes": [
      "TL"
    ],
    "latitude": -8.55,
    "longitude": 125.583333
  },
  {
    "name": "Asia/Ashgabat",
    "region": "Asia",
    "subregions": [],
    "location": "Ashgabat",
    "displayName": "Ashgabat",
    "countryCodes": [
      "TM"
    ],
    "latitude": 37.95,
    "longitude": 58.383333
  },
  {
    "name": "Africa/Tunis",
    "region": "Africa",
    "subregions": [],
    "location": "Tunis",
    "displayName": "Tunis",
    "countryCodes": [
      "TN"
    ],
    "latitude": 36.8,
    "longitude": 10.183333
  },
  {
    "name": "Pacific/Tongatapu",
    "region": "Pacific",
    "subregions": [],
    "location": "Tongatapu",
    "displayName": "Tongatapu",
    "countryCodes": [
      "TO"
    ],
    "latitude": -21.133333,
    "longitude": -175.2
  },
  {
    "name": "Europe/Istanbul",
    "region": "Europe",
    "subregions": [],
    "location": "Istanbul",
    "displayName": "Istanbul",
    "countryCodes": [
      "TR"
    ],
    "latitude": 41.016667,
    "longitude": 28.966667
  },
  {
    "name": "Asia/Taipei",
    "region": "Asia",
    "subregions": [],
    "location": "Taipei",
    "displayName": "Taipei",
    "countryCodes": [
      "TW"
    ],
    "latitude": 25.05,
    "longitude": 121.5
  },
  {
    "name": "Europe/Kyiv",
    "region": "Europe",
    "subregions": [],
    "location": "Kyiv",
    "displayName": "Kyiv",
    "countryCodes": [
      "UA"
    ],
    "latitude": 50.433333,
    "longitude": 30.516667,
    "comment": "most of Ukraine"
  },
  {
    "name": "America/New_York",
    "region": "America",
    "subregions": [],
    "location": "New York",
    "displayName": "New York",
    "countryCodes": [
      "US"
    ],
    "latitude": 40.714167,
    "longitude": -74.006389,
    "comment": "Eastern (most areas)"
  },
  {
    "name": "America/Detroit",
    "region": "America",
    "subregions": [],
    "location": "Detroit",
    "displayName": "Detroit",
    "countryCodes": [
      "US"
    ],
    "latitude": 42.331389,
    "longitude": -83.045833,
    "comment": "Eastern - MI (most areas)"
  },
  {
    "name": "America/Kentucky/Louisville",
    "region": "America",
    "subregions": [
      "Kentucky"
    ],
    "location": "Louisville",
    "displayName": "Kentucky / Louisville",
    "countryCodes": [
      "US"
    ],
    "latitude": 38.254167,
    "longitude": -85.759444,
    "comment": "Eastern - KY (Louisville area)"
  },
  {
    "name": "America/Kentucky/Monticello",
    "region": "America",
    "subregions": [
      "Kentucky"
    ],
    "location": "Monticello",
    "displayName": "Kentucky / Monticello",
    "countryCodes": [
      "US"
    ],
    "latitude": 36.829722,
    "longitude": -84.849167,
    "comment": "Eastern - KY (Wayne)"
  },
  {
    "name": "America/Indiana/Indianapolis",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Indianapolis",
    "displayName": "Indiana / Indianapolis",
    "countryCodes": [
      "US"
    ],
    "latitude": 39.768333,
    "longitude": -86.158056,
    "comment": "Eastern - IN (most areas)"
  },
  {
    "name": "America/Indiana/Vincennes",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Vincennes",
    "displayName": "Indiana / Vincennes",
    "countryCodes": [
      "US"
    ],
    "latitude": 38.677222,
    "longitude": -87.528611,
    "comment": "Eastern - IN (Da, Du, K, Mn)"
  },
  {
    "name": "America/Indiana/Winamac",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Winamac",
    "displayName": "Indiana / Winamac",
    "countryCodes": [
      "US"
    ],
    "latitude": 41.051389,
    "longitude": -86.603056,
    "comment": "Eastern - IN (Pulaski)"
  },
  {
    "name": "America/Indiana/Marengo",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Marengo",
    "displayName": "Indiana / Marengo",
    "countryCodes": [
      "US"
    ],
    "latitude": 38.375556,
    "longitude": -86.344722,
    "comment": "Eastern - IN (Crawford)"
  },
  {
    "name": "America/Indiana/Petersburg",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Petersburg",
    "displayName": "Indiana / Petersburg",
    "countryCodes": [
      "US"
    ],
    "latitude": 38.491944,
    "longitude": -87.278611,
    "comment": "Eastern - IN (Pike)"
  },
  {
    "name": "America/Indiana/Vevay",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Vevay",
    "displayName": "Indiana / Vevay",
    "countryCodes": [
      "US"
    ],
    "latitude": 38.747778,
    "longitude": -85.067222,
    "comment": "Eastern - IN (Switzerland)"
  },
  {
    "name": "America/Chicago",
    "region": "America",
    "subregions": [],
    "location": "Chicago",
    "displayName": "Chicago",
    "countryCodes": [
      "US"
    ],
    "latitude": 41.85,
    "longitude": -87.65,
    "comment": "Central (most areas)"
  },
  {
    "name": "America/Indiana/Tell_City",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Tell City",
    "displayName": "Indiana / Tell City",
    "countryCodes": [
      "US"
    ],
    "latitude": 37.953056,
    "longitude": -86.761389,
    "comment": "Central - IN (Perry)"
  },
  {
    "name": "America/Indiana/Knox",
    "region": "America",
    "subregions": [
      "Indiana"
    ],
    "location": "Knox",
    "displayName": "Indiana / Knox",
    "countryCodes": [
      "US"
    ],
    "latitude": 41.295833,
    "longitude": -86.625,
    "comment": "Central - IN (Starke)"
  },
  {
    "name": "America/Menominee",
    "region": "America",
    "subregions": [],
    "location": "Menominee",
    "displayName": "Menominee",
    "countryCodes": [
      "US"
    ],
    "latitude": 45.107778,
    "longitude": -87.614167,
    "comment": "Central - MI (Wisconsin border)"
  },
  {
    "name": "America/North_Dakota/Center",
    "region": "America",
    "subregions": [
      "North Dakota"
    ],
    "location": "Center",
    "displayName": "North Dakota / Center",
    "countryCodes": [
      "US"
    ],
    "latitude": 47.116389,
    "longitude": -101.299167,
    "comment": "Central - ND (Oliver)"
  },
  {
    "name": "America/North_Dakota/New_Salem",
    "region": "America",
    "subregions": [
      "North Dakota"
    ],
    "location": "New Salem",
    "displayName": "North Dakota / New Salem",
    "countryCodes": [
      "US"
    ],
    "latitude": 46.845,
    "longitude": -101.410833,
    "comment": "Central - ND (Morton rural)"
  },
  {
    "name": "America/North_Dakota/Beulah",
    "region": "America",
    "subregions": [
      "North Dakota"
    ],
    "location": "Beulah",
    "displayName": "North Dakota / Beulah",
    "countryCodes": [
      "US"
    ],
    "latitude": 47.264167,
    "longitude": -101.777778,
    "comment": "Central - ND (Mercer)"
  },
  {
    "name": "America/Denver",
    "region": "America",
    "subregions": [],
    "location": "Denver",
    "displayName": "Denver",
    "countryCodes": [
      "US"
    ],
    "latitude": 39.739167,
    "longitude": -104.984167,
    "comment": "Mountain (most areas)"
  },
  {
    "name": "America/Boise",
    "region": "America",
    "subregions": [],
    "location": "Boise",
    "displayName": "Boise",
    "countryCodes": [
      "US"
    ],
    "latitude": 43.613611,
    "longitude": -116.2025,
    "comment": "Mountain - ID (south), OR (east)"
  },
  {
    "name": "America/Phoenix",
    "region": "America",
    "subregions": [],
    "location": "Phoenix",
    "displayName": "Phoenix",
    "countryCodes": [
      "US",
      "CA"
    ],
    "latitude": 33.448333,
    "longitude": -112.073333,
    "comment": "MST - AZ (most areas), Creston BC"
  },
  {
    "name": "America/Los_Angeles",
    "region": "America",
    "subregions": [],
    "location": "Los Angeles",
    "displayName": "Los Angeles",
    "countryCodes": [
      "US"
    ],
    "latitude": 34.052222,
    "longitude": -118.242778,
    "comment": "Pacific"
  },
  {
    "name": "America/Anchorage",
    "region": "America",
    "subregions": [],
    "location": "Anchorage",
    "displayName": "Anchorage",
    "countryCodes": [
      "US"
    ],
    "latitude": 61.218056,
    "longitude": -149.900278,
    "comment": "Alaska (most areas)"
  },
  {
    "name": "America/Juneau",
    "region": "America",
    "subregions": [],
    "location": "Juneau",
    "displayName": "Juneau",
    "countryCodes": [
      "US"
    ],
    "latitude": 58.301944,
    "longitude": -134.419722,
    "comment": "Alaska - Juneau area"
  },
  {
    "name": "America/Sitka",
    "region": "America",
    "subregions": [],
    "location": "Sitka",
    "displayName": "Sitka",
    "countryCodes": [
      "US"
    ],
    "latitude": 57.176389,
    "longitude": -135.301944,
    "comment": "Alaska - Sitka area"
  },
  {
    "name": "America/Metlakatla",
    "region": "America",
    "subregions": [],
    "location": "Metlakatla",
    "displayName": "Metlakatla",
    "countryCodes": [
      "US"
    ],
    "latitude": 55.126944,
    "longitude": -131.576389,
    "comment": "Alaska - Annette Island"
  },
  {
    "name": "America/Yakutat",
    "region": "America",
    "subregions": [],
    "location": "Yakutat",
    "displayName": "Yakutat",
    "countryCodes": [
      "US"
    ],
    "latitude": 59.546944,
    "longitude": -139.727222,
    "comment": "Alaska - Yakutat"
  },
  {
    "name": "America/Nome",
    "region": "America",
    "subregions": [],
    "location": "Nome",
    "displayName": "Nome",
    "countryCodes": [
      "US"
    ],
    "latitude": 64.501111,
    "longitude": -165.406389,
    "comment": "Alaska (west)"
  },
  {
    "name": "America/Adak",
    "region": "America",
    "subregions": [],
    "location": "Adak",
    "displayName": "Adak",
    "countryCodes": [
      "US"
    ],
    "latitude": 51.88,
    "longitude": -176.658056,
    "comment": "Alaska - western Aleutians"
  },
  {
    "name": "Pacific/Honolulu",
    "region": "Pacific",
    "subregions": [],
    "location": "Honolulu",
    "displayName": "Honolulu",
    "countryCodes": [
      "US"
    ],
    "latitude": 21.306944,
    "longitude": -157.858333,
    "comment": "Hawaii"
  },
  {
    "name": "America/Montevideo",
    "region": "America",
    "subregions": [],
    "location": "Montevideo",
    "displayName": "Montevideo",
    "countryCodes": [
      "UY"
    ],
    "latitude": -34.909167,
    "longitude": -56.2125
  },
  {
    "name": "Asia/Samarkand",
    "region": "Asia",
    "subregions": [],
    "location": "Samarkand",
    "displayName": "Samarkand",
    "countryCodes": [
      "UZ"
    ],
    "latitude": 39.666667,
    "longitude": 66.8,
    "comment": "Uzbekistan (west)"
  },
  {
    "name": "Asia/Tashkent",
    "region": "Asia",
    "subregions": [],
    "location": "Tashkent",
    "displayName": "Tashkent",
    "countryCodes": [
      "UZ"
    ],
    "latitude": 41.333333,
    "longitude": 69.3,
    "comment": "Uzbekistan (east)"
  },
  {
    "name": "America/Caracas",
    "region": "America",
    "subregions": [],
    "location": "Caracas",
    "displayName": "Caracas",
    "countryCodes": [
      "VE"
    ],
    "latitude": 10.5,
    "longitude": -66.933333
  },
  {
    "name": "Asia/Ho_Chi_Minh",
    "region": "Asia",
    "subregions": [],
    "location": "Ho Chi Minh",
    "displayName": "Ho Chi Minh",
    "countryCodes": [
      "VN"
    ],
    "latitude": 10.75,
    "longitude": 106.666667,
    "comment": "south Vietnam"
  },
  {
    "name": "Pacific/Efate",
    "region": "Pacific",
    "subregions": [],
    "location": "Efate",
    "displayName": "Efate",
    "countryCodes": [
      "VU"
    ],
    "latitude": -17.666667,
    "longitude": 168.416667
  },
  {
    "name": "Pacific/Apia",
    "region": "Pacific",
    "subregions": [],
    "location": "Apia",
    "displayName": "Apia",
    "countryCodes": [
      "WS"
    ],
    "latitude": -13.833333,
    "longitude": -171.733333
  },
  {
    "name": "Africa/Johannesburg",
    "region": "Africa",
    "subregions": [],
    "location": "Johannesburg",
    "displayName": "Johannesburg",
    "countryCodes": [
      "ZA",
      "LS",
      "SZ"
    ],
    "latitude": -26.25,
    "longitude": 28
  }
];
