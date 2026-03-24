import { countries } from "./countries.js";
import type {
  AddressAdministrativeAreaType,
  AddressDependentLocalityType,
  AddressField,
  AddressInput,
  AddressLocalityType,
  AddressPostalCodeType,
  CountryAddressFormat,
  FormatAddressOptions,
} from "../../../core/src/types/index.js";

type RawAddressFormat = {
  fmt?: string;
  lfmt?: string;
  require?: string;
  upper?: string;
  zip?: string;
  zipex?: string;
  zip_name_type?: AddressPostalCodeType;
  state_name_type?: AddressAdministrativeAreaType;
  locality_name_type?: AddressLocalityType;
  sublocality_name_type?: AddressDependentLocalityType;
  postprefix?: string;
};

const DEFAULT_RAW_ADDRESS_FORMAT = {
  fmt: "%N%n%O%n%A%n%C",
  require: "AC",
  upper: "C",
  zip_name_type: "postal",
  state_name_type: "province",
  locality_name_type: "city",
  sublocality_name_type: "suburb",
} satisfies RawAddressFormat;

/**
 * Normalized from Google's public libaddressinput metadata.
 * Countries missing from that dataset inherit the default "ZZ" pattern.
 * Malaysia is filled manually because the upstream record is absent.
 */
const rawAddressFormats: Record<string, RawAddressFormat> = {
  AD: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"AD[1-7]0\\d","zipex":"AD100,AD501,AD700"},
  AE: {"fmt":"%N%n%O%n%A%n%S","lfmt":"%N%n%O%n%A%n%S","require":"AS","state_name_type":"emirate"},
  AF: {"fmt":"%N%n%O%n%A%n%C%n%Z","zip":"\\d{4}","zipex":"1001,2601,3801"},
  AG: {"require":"A"},
  AL: {"fmt":"%N%n%O%n%A%n%Z%n%C","zip":"\\d{4}","zipex":"1001,1017,3501"},
  AM: {"fmt":"%N%n%O%n%A%n%Z%n%C%n%S","lfmt":"%N%n%O%n%A%n%Z%n%C%n%S","zip":"(?:37)?\\d{4}","zipex":"375010,0002,0010"},
  AO: {},
  AR: {"fmt":"%N%n%O%n%A%n%Z %C%n%S","upper":"ACZ","zip":"((?:[A-HJ-NP-Z])?\\d{4})([A-Z]{3})?","zipex":"C1070AAM,C1000WAM,B1000TBU,X5187XAB"},
  AT: {"fmt":"%O%n%N%n%A%n%Z %C","require":"ACZ","zip":"\\d{4}","zipex":"1010,3741"},
  AU: {"fmt":"%O%n%N%n%A%n%C %S %Z","require":"ACSZ","upper":"CS","zip":"\\d{4}","zipex":"2060,3171,6430,4000,4006,3001","state_name_type":"state","locality_name_type":"suburb"},
  AZ: {"fmt":"%N%n%O%n%A%nAZ %Z %C","zip":"\\d{4}","zipex":"1000","postprefix":"AZ "},
  BA: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"71000"},
  BB: {"fmt":"%N%n%O%n%A%n%C, %S %Z","zip":"BB\\d{5}","zipex":"BB23026,BB22025","state_name_type":"parish"},
  BD: {"fmt":"%N%n%O%n%A%n%C - %Z","zip":"\\d{4}","zipex":"1340,1000"},
  BE: {"fmt":"%O%n%N%n%A%n%Z %C","require":"ACZ","zip":"\\d{4}","zipex":"4000,1000"},
  BF: {"fmt":"%N%n%O%n%A%n%C %X"},
  BG: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{4}","zipex":"1000,1700"},
  BH: {"fmt":"%N%n%O%n%A%n%C %Z","zip":"(?:^|\\b)(?:1[0-2]|[1-9])\\d{2}(?:$|\\b)","zipex":"317"},
  BI: {},
  BJ: {"upper":"AC"},
  BN: {"fmt":"%N%n%O%n%A%n%C %Z","zip":"[A-Z]{2} ?\\d{4}","zipex":"BT2328,KA1131,BA1511"},
  BO: {"upper":"AC"},
  BR: {"fmt":"%O%n%N%n%A%n%D%n%C-%S%n%Z","require":"ASCZ","upper":"CS","zip":"\\d{5}-?\\d{3}","zipex":"40301-110,70002-900","state_name_type":"state","sublocality_name_type":"neighborhood"},
  BS: {"fmt":"%N%n%O%n%A%n%C, %S","state_name_type":"island"},
  BT: {"fmt":"%N%n%O%n%A%n%C %Z","zip":"\\d{5}","zipex":"11001,31101,35003"},
  BW: {},
  BY: {"fmt":"%O%n%N%n%A%n%Z, %C%n%S","zip":"\\d{6}","zipex":"223016,225860,220050"},
  BZ: {},
  CA: {"fmt":"%N%n%O%n%A%n%C %S %Z","require":"ACSZ","upper":"ACNOSZ","zip":"[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z] ?\\d[ABCEGHJ-NPRSTV-Z]\\d","zipex":"H3Z 2Y7,V8X 3X4,T0L 1K0,T0H 1A0,K1A 0B1"},
  CD: {},
  CF: {},
  CG: {},
  CH: {"fmt":"%O%n%N%n%A%nCH-%Z %C","require":"ACZ","upper":"","zip":"\\d{4}","zipex":"2544,1211,1556,3030","postprefix":"CH-"},
  CL: {"fmt":"%N%n%O%n%A%n%Z %C%n%S","zip":"\\d{7}","zipex":"8340457,8720019,1230000,8329100"},
  CM: {},
  CN: {"fmt":"%Z%n%S%C%D%n%A%n%O%n%N","lfmt":"%N%n%O%n%A%n%D%n%C%n%S, %Z","require":"ACSZ","upper":"S","zip":"\\d{6}","zipex":"266033,317204,100096,100808","sublocality_name_type":"district"},
  CO: {"fmt":"%N%n%O%n%A%n%D%n%C, %S, %Z","require":"AS","zip":"\\d{6}","zipex":"111221,130001,760011","state_name_type":"department"},
  CR: {"fmt":"%N%n%O%n%A%n%S, %C%n%Z","require":"ACS","zip":"\\d{4,5}|\\d{3}-\\d{4}","zipex":"1000,2010,1001"},
  CU: {"fmt":"%N%n%O%n%A%n%C %S%n%Z","zip":"\\d{5}","zipex":"10700"},
  CV: {"fmt":"%N%n%O%n%A%n%Z %C%n%S","zip":"\\d{4}","zipex":"7600","state_name_type":"island"},
  CY: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{4}","zipex":"2008,3304,1900"},
  CZ: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{3} ?\\d{2}","zipex":"100 00,251 66,530 87,110 00,225 99"},
  DE: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{5}","zipex":"26133,53225"},
  DJ: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"12345"},
  DK: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{4}","zipex":"8660,1566"},
  DM: {"require":"A"},
  DO: {"fmt":"%N%n%O%n%A%n%Z %C%n%S","zip":"\\d{5}","zipex":"11903,10101"},
  DZ: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"40304,16027"},
  EC: {"upper":"CS"},
  EE: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{5}","zipex":"69501,11212"},
  EG: {"fmt":"%N%n%O%n%A%n%C%n%S%n%Z","lfmt":"%N%n%O%n%A%n%C%n%S%n%Z","zip":"\\d{5}","zipex":"12411,11511,42523"},
  ER: {},
  ES: {"fmt":"%N%n%O%n%A%n%Z %C %S","require":"ACSZ","zip":"\\d{5}","zipex":"28039,28300,28070"},
  ET: {"fmt":"%N%n%O%n%A%n%Z%n%C","zip":"\\d{4}","zipex":"1000,4000,8000"},
  FI: {"fmt":"%O%n%N%n%A%nFI-%Z %C","require":"ACZ","zip":"\\d{5}","zipex":"00550,00011","postprefix":"FI-"},
  FJ: {},
  FM: {"fmt":"%N%n%O%n%A%n%C %S %Z","require":"ACS"},
  FR: {"fmt":"%O%n%N%n%A%n%Z %C","require":"ACZ","upper":"CX","zip":"\\d{2} ?\\d{3}","zipex":"33380,34092,33506"},
  GA: {},
  GB: {"fmt":"%N%n%O%n%A%n%C%n%Z","require":"ACZ","upper":"CZ","zip":"GIR ?0AA|(?:(?:AB|AL|B|BA|BB|BD|BF|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(?:\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}))|BFPO ?\\d{1,4}","zipex":"EC1Y 8SY,GIR 0AA,M2 5BQ,M34 4AB,CR0 2YR,DN16 9AA,W1A 4ZZ,EC1A 1HQ,OX14 4PG,BS18 8HF,NR25 7HG,RH6 0NP,BH23 6AA,B6 5BA,SO23 9AP,PO1 3AX,BFPO 61","locality_name_type":"post_town"},
  GD: {"require":"A"},
  GE: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{4}","zipex":"0101,0159"},
  GH: {},
  GM: {},
  GN: {"fmt":"%N%n%O%n%A%n%Z %C"},
  GQ: {},
  GR: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{3} ?\\d{2}","zipex":"151 24,151 10,101 88"},
  GT: {"fmt":"%N%n%O%n%A%n%Z- %C","zip":"\\d{5}","zipex":"01001,09001"},
  GW: {"fmt":"%N%n%O%n%A%n%C %Z"},
  GY: {},
  HN: {"fmt":"%N%n%O%n%A%n%C, %S%n%Z","require":"ACS"},
  HR: {"fmt":"%N%n%O%n%A%nHR-%Z %C","require":"ACZ","upper":"C","zip":"\\d{5}","zipex":"10000,21001,10002","postprefix":"HR-"},
  HT: {"fmt":"%N%n%O%n%A%nHT%Z %C %X","zip":"\\d{4}","zipex":"6120,5310,6110,8510","postprefix":"HT"},
  HU: {"fmt":"%N%n%O%n%C%n%A%n%Z","require":"ACZ","zip":"\\d{4}","zipex":"1037,2380,1540"},
  ID: {"fmt":"%N%n%O%n%A%n%C%n%S %Z","zip":"\\d{5}","zipex":"40115"},
  IE: {"fmt":"%N%n%O%n%A%n%D%n%C%n%S%n%Z","zip":"[\\dA-Z]{3} ?[\\dA-Z]{4}","zipex":"A65 F4E2","zip_name_type":"eircode","state_name_type":"county","sublocality_name_type":"townland"},
  IL: {"fmt":"%N%n%O%n%A%n%C %Z","lfmt":"%N%n%O%n%A%n%C %Z","zip":"\\d{5}(?:\\d{2})?","zipex":"9414300,6525216"},
  IN: {"fmt":"%N%n%O%n%A%n%C %Z%n%S","require":"ACSZ","zip":"\\d{6}","zipex":"110034,110001","zip_name_type":"pin","state_name_type":"state"},
  IQ: {"fmt":"%N%n%O%n%A%n%C%n%S","lfmt":"%N%n%O%n%A%n%C%n%S","require":"ACS","state_name_type":"province"},
  IR: {"fmt":"%O%n%N%n%S, %C, %D%n%A%n%Z","lfmt":"%O%n%N%n%S, %C, %D%n%A%n%Z","zip":"\\d{5}-?\\d{5}","zipex":"11369-9511"},
  IS: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{3}","zipex":"320,121,220,110"},
  IT: {"fmt":"%N%n%O%n%A%n%Z %C %S","require":"ACSZ","zip":"\\d{5}","zipex":"00144,47042,39049"},
  JM: {"fmt":"%N%n%O%n%A%n%C%n%S %X","require":"ACS","state_name_type":"parish"},
  JO: {"fmt":"%N%n%O%n%A%n%C %Z","lfmt":"%N%n%O%n%A%n%C %Z","zip":"\\d{5}","zipex":"11937,11118"},
  JP: {"fmt":"〒%Z%n%S%n%A%n%O%n%N","lfmt":"%N%n%O%n%A, %S%n%Z","require":"ASZ","upper":"S","zip":"\\d{3}-?\\d{4}","zipex":"154-0023,350-1106,951-8073,112-0001,208-0032,231-0012","state_name_type":"prefecture"},
  KE: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"20100,00100"},
  KG: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{6}","zipex":"720001"},
  KH: {"fmt":"%N%n%O%n%A%n%C","lfmt":"%N%n%O%n%A%n%C"},
  KI: {},
  KM: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"BP 4353"},
  KN: {"require":"A"},
  KP: {},
  KR: {"fmt":"%S %C%D%n%A%n%O%n%N%n%Z","lfmt":"%N%n%O%n%A%n%D%n%C%n%S%n%Z","require":"ACSZ","upper":"S","zip":"\\d{5}","zipex":"03051,06236"},
  KW: {"fmt":"%N%n%O%n%A%n%Z %C","lfmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"54541,32001"},
  KZ: {"fmt":"%Z%n%S%n%C%n%A%n%O%n%N","lfmt":"%N%n%O%n%A%n%C%n%S%n%Z","zip":"\\d{6}","zipex":"050000,080000"},
  LA: {"fmt":"%N%n%O%n%A%n%C%n%S %Z","zip":"\\d{5}","zipex":"01000"},
  LB: {"fmt":"%N%n%O%n%A%n%C%n%S%n%Z","lfmt":"%N%n%O%n%A%n%C%n%S%n%Z","zip":"(?:\\d{4}(?: ?(?:\\d{4}))?)?","zipex":"2038 3054,1107 2810"},
  LC: {"require":"A"},
  LI: {"fmt":"%O%n%N%n%A%nFL-%Z %C","require":"ACZ","zip":"948[5-9]|949[0-8]","zipex":"9496,9491","postprefix":"FL-"},
  LK: {"fmt":"%N%n%O%n%A%n%C%n%Z","zip":"\\d{5}","zipex":"20000,00100"},
  LR: {"fmt":"%N%n%O%n%A%n%C%n%S","state_name_type":"county"},
  LS: {"fmt":"%N%n%O%n%A%n%C%n%Z","zip":"\\d{3}","zipex":"100"},
  LT: {"fmt":"%O%n%N%n%A%nLT-%Z %C","require":"ACZ","zip":"\\d{5}","zipex":"04340","postprefix":"LT-"},
  LU: {"fmt":"%O%n%N%n%A%nL-%Z %C","require":"ACZ","zip":"\\d{4}","zipex":"4750,2998","postprefix":"L-"},
  LV: {"fmt":"%N%n%O%n%A%n%C, %Z","require":"ACZ","zip":"LV-\\d{4}","zipex":"LV-1073,LV-1000"},
  LY: {"fmt":"%N%n%O%n%A%n%C","lfmt":"%N%n%O%n%A%n%C"},
  MA: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"53000,10000,20050"},
  MC: {"fmt":"%N%n%O%n%A%nMC-%Z %C %X","zip":"980\\d{2}","zipex":"98000,98020,98011,98001","postprefix":"MC-"},
  MD: {"fmt":"%N%n%O%n%A%nMD-%Z %C","zip":"\\d{4}","zipex":"MD-2012","postprefix":"MD-"},
  ME: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"8\\d{4}","zipex":"81257,81258,81206"},
  MG: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{3}","zipex":"501,101"},
  MH: {"fmt":"%N%n%O%n%A%n%C %S %Z","require":"ACS"},
  MK: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{4}","zipex":"1060,1000,1001"},
  ML: {"fmt":"%N%n%O%n%A%n%C"},
  MM: {"fmt":"%N%n%O%n%A%n%C, %S","lfmt":"%N%n%O%n%A%n%C, %S","require":"AS"},
  MN: {"fmt":"%N%n%O%n%A%n%C%n%S%n%Z","lfmt":"%N%n%O%n%A%n%C%n%S%n%Z","zip":"\\d{5}","zipex":"65030,83110"},
  MR: {"fmt":"%N%n%O%n%A%n%Z %C"},
  MT: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"[A-Z]{3} ?\\d{2,4}","zipex":"NXR 01,BBR 123"},
  MU: {"fmt":"%N%n%O%n%A%n%Z%n%C","zip":"\\d{5}","zipex":"42602,40802"},
  MV: {"fmt":"%N%n%O%n%A%n%C%n%S %Z","lfmt":"%N%n%O%n%A%n%C%n%S %Z","zip":"\\d{5}","zipex":"20026,20027"},
  MW: {"fmt":"%N%n%O%n%A%n%C %X"},
  MX: {"fmt":"%N%n%O%n%A%n%D%n%Z %C, %S","require":"ACSZ","upper":"CSZ","zip":"\\d{5}","zipex":"02860,77520,06082","state_name_type":"state","sublocality_name_type":"neighborhood"},
  MY: {"fmt":"%N%n%O%n%A%n%Z %C%n%S","require":"ACSZ","zip":"\\d{5}","zip_name_type":"postal","state_name_type":"state"},
  MZ: {"fmt":"%N%n%O%n%A%n%Z %C"},
  NA: {},
  NE: {"fmt":"%N%n%O%n%A%n%Z %C"},
  NG: {"fmt":"%N%n%O%n%A%n%C %Z%n%S","zip":"\\d{6}","zipex":"930283,100001"},
  NI: {"fmt":"%N%n%O%n%A%n%Z%n%C, %S"},
  NL: {"fmt":"%O%n%N%n%A%n%Z %C","require":"ACZ","zip":"[1-9]\\d{3} ?(?:[A-RT-Z][A-Z]|S[BCE-RT-Z])","zipex":"1234 AB,2490 AA"},
  NO: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{4}","zipex":"0025,0107,6631"},
  NP: {"fmt":"%N%n%O%n%A%n%C %Z","zip":"\\d{5}","zipex":"44600,33700,00977"},
  NR: {},
  NZ: {"fmt":"%N%n%O%n%A%n%D%n%C %Z","require":"ACZ","zip":"\\d{4}","zipex":"7999,0101","sublocality_name_type":"suburb"},
  OM: {"fmt":"%N%n%O%n%A%n%Z%n%C","zip":"(?:PC )?\\d{3}","zipex":"PC 133,PC 500,PC 905"},
  PA: {"upper":"AC"},
  PE: {"fmt":"%N%n%O%n%A%n%C %S%n%Z","require":"ACS","zip":"\\d{5}","zipex":"15001,15046,15072"},
  PG: {},
  PH: {"fmt":"%N%n%O%n%A%n%D, %C%n%Z %S","require":"ACSZ","zip":"\\d{4}","zipex":"1008,1050,1135","state_name_type":"province","sublocality_name_type":"neighborhood"},
  PK: {"fmt":"%N%n%O%n%A%n%C-%Z","zip":"\\d{5}","zipex":"44000"},
  PL: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{2}-\\d{3}","zipex":"00-940,05-470"},
  PT: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{4}-\\d{3}","zipex":"2725-079,1250-096,1201-950,2860-571,1208-148"},
  PW: {"fmt":"%N%n%O%n%A%n%C %S %Z","require":"ACS"},
  PY: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{4}","zipex":"1536,1537,1209"},
  QA: {"fmt":"%N%n%O%n%A%n%C","lfmt":"%N%n%O%n%A%n%C"},
  RO: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{6}","zipex":"060274,061357,200716"},
  RS: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5,6}","zipex":"106314,11000,36201"},
  RU: {"fmt":"%N%n%O%n%A%n%C%n%S%n%Z","lfmt":"%N%n%O%n%A%n%C%n%S%n%Z","require":"ACZ","zip":"\\d{6}","zipex":"247112,103375,188689","state_name_type":"oblast"},
  RW: {},
  SA: {"fmt":"%N%n%O%n%A%n%C %Z","lfmt":"%N%n%O%n%A%n%C %Z","require":"ACZ","zip":"\\d{5}(?:-\\d{4})?","zipex":"11564,11187"},
  SB: {},
  SC: {"fmt":"%N%n%O%n%A%n%C%n%S","upper":"S","state_name_type":"island"},
  SD: {"fmt":"%N%n%O%n%A%n%C","lfmt":"%N%n%O%n%A%n%C"},
  SE: {"fmt":"%O%n%N%n%A%nSE-%Z %C","require":"ACZ","zip":"\\d{3} ?\\d{2}","zipex":"11455,12345,10500","postprefix":"SE-"},
  SG: {"fmt":"%N%n%O%n%A%nSINGAPORE %Z","require":"AZ","zip":"\\d{6}","zipex":"546080,308125,408600"},
  SI: {"fmt":"%N%n%O%n%A%nSI-%Z %C","zip":"\\d{4}","zipex":"4000,1001,2500","state_name_type":"do_si","postprefix":"SI-"},
  SK: {"fmt":"%N%n%O%n%A%n%Z %C","require":"ACZ","zip":"\\d{3} ?\\d{2}","zipex":"010 01,023 14,972 48,921 01,010 67"},
  SL: {},
  SM: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"4789\\d","zipex":"47890,47891,47899"},
  SN: {"fmt":"%N%n%O%n%A%n%Z %C"},
  SO: {"fmt":"%N%n%O%n%A%n%C, %S","lfmt":"%N%n%O%n%A%n%C, %S","require":"ACS","state_name_type":"region"},
  SR: {},
  SS: {"fmt":"%N%n%O%n%A%n%C"},
  ST: {"fmt":"%N%n%O%n%A%n%C"},
  SV: {"upper":"CS"},
  SY: {},
  SZ: {"fmt":"%N%n%O%n%A%n%C","zip":"[HLMS]\\d{3}","zipex":"H100,L300"},
  TD: {"fmt":"%N%n%O%n%A%n%C"},
  TG: {},
  TH: {"fmt":"%N%n%O%n%A%n%D, %C%n%S %Z","lfmt":"%N%n%O%n%A%n%D, %C%n%S %Z","require":"ACSZ","zip":"\\d{5}","zipex":"10200"},
  TJ: {"fmt":"%N%n%O%n%A%n%Z %C","lfmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{6}","zipex":"735450,734025"},
  TL: {"fmt":"%N%n%O%n%A%n%C %Z","zip":"\\d{4}","zipex":"1000,1100,1200"},
  TM: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{6}","zipex":"744000,744001"},
  TN: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{4}","zipex":"1002,8129,3100"},
  TO: {},
  TR: {"fmt":"%N%n%O%n%A%n%Z %C/%S","require":"ACZ","zip":"\\d{5}","zipex":"01960,06101"},
  TT: {"require":"A"},
  TV: {"fmt":"%N%n%O%n%A%n%C%n%S","upper":"ACS","state_name_type":"island"},
  TW: {"fmt":"%Z%n%S%C%n%A%n%O%n%N","lfmt":"%N%n%O%n%A%n%C, %S %Z","require":"ACSZ","zip":"\\d{3}(?:\\d{2,3})?","zipex":"104,106,10603,40867","state_name_type":"county","locality_name_type":"district"},
  TZ: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{4,5}","zipex":"6090,34413"},
  UA: {"fmt":"%N%n%O%n%A%n%C%n%S%n%Z","lfmt":"%N%n%O%n%A%n%C%n%S%n%Z","require":"ACZ","zip":"\\d{5}","zipex":"15432,01055,01001","state_name_type":"oblast"},
  UG: {},
  US: {"fmt":"%N%n%O%n%A%n%C, %S %Z","require":"ACSZ","upper":"CS","zip":"(\\d{5})(?:[ \\-](\\d{4}))?","zipex":"95014,22162-1010","zip_name_type":"zip","state_name_type":"state"},
  UY: {"fmt":"%N%n%O%n%A%n%Z %C %S","upper":"CS","zip":"\\d{5}","zipex":"11600"},
  UZ: {"fmt":"%N%n%O%n%A%n%Z %C%n%S","upper":"CS","zip":"\\d{6}","zipex":"702100,700000"},
  VA: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"00120","zipex":"00120"},
  VC: {"fmt":"%N%n%O%n%A%n%C %Z","zip":"VC\\d{4}","zipex":"VC0100,VC0110,VC0400"},
  VE: {"fmt":"%N%n%O%n%A%n%C %Z, %S","require":"ACS","upper":"CS","zip":"\\d{4}","zipex":"1010,3001,8011,1020","state_name_type":"state"},
  VN: {"fmt":"%N%n%O%n%A%n%C%n%S %Z","lfmt":"%N%n%O%n%A%n%C%n%S %Z","zip":"\\d{5}\\d?","zipex":"70010,55999"},
  VU: {},
  WS: {},
  XK: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"[1-7]\\d{4}","zipex":"10000"},
  YE: {},
  ZA: {"fmt":"%N%n%O%n%A%n%D%n%C%n%Z","require":"ACZ","zip":"\\d{4}","zipex":"0083,1451,0001"},
  ZM: {"fmt":"%N%n%O%n%A%n%Z %C","zip":"\\d{5}","zipex":"50100,50101"},
  ZW: {},
};

const FIELD_CODE_TO_NAME: Record<string, AddressField> = {
  N: "recipient",
  O: "organization",
  A: "streetAddress",
  D: "dependentLocality",
  C: "locality",
  S: "administrativeArea",
  Z: "postalCode",
  X: "sortingCode",
};

function decodeFieldCodes(value: string | undefined): AddressField[] {
  if (!value) return [];

  const seen = new Set<AddressField>();
  const result: AddressField[] = [];

  for (const code of value) {
    const field = FIELD_CODE_TO_NAME[code];
    if (!field || seen.has(field)) continue;
    seen.add(field);
    result.push(field);
  }

  return result;
}

function getUsedFields(format: string, latinFormat?: string): AddressField[] {
  const seen = new Set<AddressField>();
  const result: AddressField[] = [];

  for (const template of [format, latinFormat]) {
    if (!template) continue;

    for (const match of template.matchAll(/%([A-Z])/g)) {
      const field = FIELD_CODE_TO_NAME[match[1]];
      if (!field || seen.has(field)) continue;
      seen.add(field);
      result.push(field);
    }
  }

  return result;
}

function normalizeAddressFormat(alpha2: string): CountryAddressFormat {
  const raw: RawAddressFormat = {
    ...DEFAULT_RAW_ADDRESS_FORMAT,
    ...(rawAddressFormats[alpha2] ?? {}),
  };
  const format = raw.fmt ?? DEFAULT_RAW_ADDRESS_FORMAT.fmt;

  return {
    alpha2,
    format,
    latinFormat: raw.lfmt,
    usedFields: getUsedFields(format, raw.lfmt),
    requiredFields: decodeFieldCodes(raw.require),
    uppercaseFields: decodeFieldCodes(raw.upper),
    postalCodePattern: raw.zip,
    postalCodeExamples: raw.zipex?.split(",").map((value: string) => value.trim()).filter(Boolean),
    postalCodePrefix: raw.postprefix,
    postalCodeType: raw.zip_name_type ?? DEFAULT_RAW_ADDRESS_FORMAT.zip_name_type,
    administrativeAreaType: raw.state_name_type ?? DEFAULT_RAW_ADDRESS_FORMAT.state_name_type,
    localityType: raw.locality_name_type ?? DEFAULT_RAW_ADDRESS_FORMAT.locality_name_type,
    dependentLocalityType: raw.sublocality_name_type ?? DEFAULT_RAW_ADDRESS_FORMAT.sublocality_name_type,
  };
}

export const addressFormats: CountryAddressFormat[] = countries.map((country) =>
  normalizeAddressFormat(country.alpha2)
);

const addressFormatsByCountry = new Map(
  addressFormats.map((addressFormat) => [addressFormat.alpha2, addressFormat])
);

/**
 * Look up normalized address-format metadata for a country.
 */
export function getAddressFormatByCountry(alpha2: string): CountryAddressFormat | undefined {
  return addressFormatsByCountry.get(alpha2.toUpperCase());
}

function getFieldValue(address: AddressInput, field: AddressField): string {
  switch (field) {
    case "recipient":
      return address.recipient?.trim() ?? "";
    case "organization":
      return address.organization?.trim() ?? "";
    case "streetAddress":
      return Array.isArray(address.streetAddress)
        ? address.streetAddress.map((line) => line.trim()).filter(Boolean).join("\n")
        : address.streetAddress?.trim() ?? "";
    case "dependentLocality":
      return address.dependentLocality?.trim() ?? "";
    case "locality":
      return address.locality?.trim() ?? "";
    case "administrativeArea":
      return address.administrativeArea?.trim() ?? "";
    case "postalCode":
      return address.postalCode?.trim() ?? "";
    case "sortingCode":
      return address.sortingCode?.trim() ?? "";
  }
}

function cleanupAddressLine(line: string): string {
  return line
    .replace(/\s+,/g, ",")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^[,\-\/\s]+/, "")
    .replace(/[,\-\/\s]+$/, "")
    .trim();
}

/**
 * Format an address using the selected country's postal template.
 */
export function formatAddress(
  address: AddressInput,
  countryCode: string,
  options: FormatAddressOptions = {}
): string | undefined {
  const addressFormat = getAddressFormatByCountry(countryCode);

  if (!addressFormat) {
    return undefined;
  }

  const template = options.latin && addressFormat.latinFormat
    ? addressFormat.latinFormat
    : addressFormat.format;
  const shouldUppercase = options.uppercase ?? true;

  const rendered = template.replace(/%([A-Zn])/g, (_match, token: string) => {
    if (token === "n") {
      return "\n";
    }

    const field = FIELD_CODE_TO_NAME[token];
    if (!field) {
      return "";
    }

    const value = getFieldValue(address, field);
    if (!value) {
      return "";
    }

    if (shouldUppercase && addressFormat.uppercaseFields.includes(field)) {
      return value.toLocaleUpperCase();
    }

    return value;
  });

  const lines = rendered
    .split("\n")
    .map((line) => cleanupAddressLine(line))
    .filter(Boolean);

  return lines.join("\n");
}
