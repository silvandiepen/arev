import type { Language, LanguageNameLocale } from "../../../../core/src/types/index.js";

export const languageNameLocales = [
  "en",
  "ar",
  "de",
  "es",
  "fr",
  "hi",
  "it",
  "ja",
  "ko",
  "nl",
  "pl",
  "pt",
  "ru",
  "tr",
  "zh"
] as const satisfies LanguageNameLocale[];

export const languageCodeAliases: Record<string, string> = {
  "aa-saaho": "ssy",
  "aam": "aas",
  "aar": "aa",
  "abk": "ab",
  "adp": "dz",
  "afr": "af",
  "agp": "apf",
  "ais": "ami",
  "ajp": "apc",
  "ajt": "aeb",
  "aju": "jrb",
  "aka": "ak",
  "alb": "sq",
  "als": "sq",
  "amh": "am",
  "ara": "ar",
  "arb": "ar",
  "arg": "an",
  "arm": "hy",
  "art-lojban": "jbo",
  "asd": "snz",
  "asm": "as",
  "aue": "ktz",
  "ava": "av",
  "ave": "ae",
  "aym": "ay",
  "ayr": "ay",
  "ayx": "nun",
  "aze": "az",
  "azj": "az",
  "bak": "ba",
  "bam": "bm",
  "baq": "eu",
  "baz": "nvo",
  "bcc": "bal",
  "bcl": "bik",
  "bel": "be",
  "ben": "bn",
  "bgm": "bcg",
  "bh": "bho",
  "bhk": "fbl",
  "bic": "bir",
  "bih": "bho",
  "bis": "bi",
  "bjd": "drl",
  "bjq": "bzc",
  "bkb": "ebk",
  "blg": "iba",
  "bod": "bo",
  "bos": "bs",
  "bre": "br",
  "btb": "beb",
  "bul": "bg",
  "bur": "my",
  "bxk": "luy",
  "bxr": "bua",
  "cat": "ca",
  "ccq": "rki",
  "cel-gaulish": "xtg",
  "ces": "cs",
  "cha": "ch",
  "che": "ce",
  "chi": "zh",
  "chu": "cu",
  "chv": "cv",
  "cjr": "mom",
  "cka": "cmr",
  "cld": "syr",
  "cls": "sa",
  "cmk": "xch",
  "cmn": "zh",
  "cnr": "sr-ME",
  "cor": "kw",
  "cos": "co",
  "coy": "pij",
  "cqu": "quh",
  "cre": "cr",
  "cwd": "cr",
  "cym": "cy",
  "cze": "cs",
  "daf": "dnj",
  "dan": "da",
  "dap": "njz",
  "dek": "sqm",
  "deu": "de",
  "dgo": "doi",
  "dhd": "mwr",
  "dik": "din",
  "diq": "zza",
  "dit": "dif",
  "div": "dv",
  "djl": "dze",
  "dkl": "aqd",
  "drh": "mn",
  "drr": "kzk",
  "drw": "fa-AF",
  "dud": "uth",
  "duj": "dwu",
  "dut": "nl",
  "dwl": "dbt",
  "dzo": "dz",
  "ekk": "et",
  "ell": "el",
  "elp": "amq",
  "emk": "man",
  "en-gb-oed": "en-GB-oxendict",
  "eng": "en",
  "epo": "eo",
  "esk": "ik",
  "est": "et",
  "eus": "eu",
  "ewe": "ee",
  "fao": "fo",
  "fas": "fa",
  "fat": "ak",
  "fij": "fj",
  "fin": "fi",
  "fra": "fr",
  "fre": "fr",
  "fry": "fy",
  "fuc": "ff",
  "ful": "ff",
  "gav": "dev",
  "gaz": "om",
  "gbc": "wny",
  "gbo": "grb",
  "geo": "ka",
  "ger": "de",
  "gfx": "vaj",
  "ggn": "gvr",
  "ggo": "esg",
  "ggr": "gtu",
  "gio": "aou",
  "gla": "gd",
  "gle": "ga",
  "glg": "gl",
  "gli": "kzk",
  "glv": "gv",
  "gno": "gon",
  "gom": "kok",
  "gre": "el",
  "grn": "gn",
  "gti": "nyc",
  "gug": "gn",
  "guj": "gu",
  "guv": "duz",
  "gya": "gba",
  "hat": "ht",
  "hau": "ha",
  "hbs": "sr-Latn",
  "hdn": "hai",
  "hea": "hmn",
  "heb": "he",
  "her": "hz",
  "him": "srx",
  "hin": "hi",
  "hmo": "ho",
  "hrr": "jal",
  "hrv": "hr",
  "hun": "hu",
  "hy-arevmda": "hyw",
  "hye": "hy",
  "i-ami": "ami",
  "i-bnn": "bnn",
  "i-default": "en-x-i-default",
  "i-enochian": "und-x-i-enochian",
  "i-hak": "hak",
  "i-klingon": "tlh",
  "i-lux": "lb",
  "i-mingo": "see-x-i-mingo",
  "i-navajo": "nv",
  "i-pwn": "pwn",
  "i-tao": "tao",
  "i-tay": "tay",
  "i-tsu": "tsu",
  "ibi": "opa",
  "ibo": "ig",
  "ice": "is",
  "ido": "io",
  "iii": "ii",
  "ike": "iu",
  "iku": "iu",
  "ile": "ie",
  "ill": "ilm",
  "ilw": "gal",
  "in": "id",
  "ina": "ia",
  "ind": "id",
  "ipk": "ik",
  "isl": "is",
  "ita": "it",
  "iw": "he",
  "izi": "eza",
  "jar": "jgk",
  "jav": "jv",
  "jeg": "oyb",
  "ji": "yi",
  "jpn": "ja",
  "jw": "jv",
  "kal": "kl",
  "kan": "kn",
  "kas": "ks",
  "kat": "ka",
  "kau": "kr",
  "kaz": "kk",
  "kdv": "zkd",
  "kgc": "tdf",
  "kgd": "ncq",
  "kgh": "kml",
  "kgm": "plu",
  "khk": "mn",
  "khm": "km",
  "kik": "ki",
  "kin": "rw",
  "kir": "ky",
  "kmr": "ku",
  "knc": "kr",
  "kng": "kg",
  "koj": "kwv",
  "kom": "kv",
  "kon": "kg",
  "kor": "ko",
  "kpp": "jkm",
  "kpv": "kv",
  "krm": "bmf",
  "ktr": "dtp",
  "kua": "kj",
  "kur": "ku",
  "kvs": "gdj",
  "kwq": "yam",
  "kxe": "tvd",
  "kxl": "kru",
  "kzh": "dgl",
  "kzj": "dtp",
  "kzt": "dtp",
  "lak": "ksp",
  "lao": "lo",
  "lat": "la",
  "lav": "lv",
  "lbk": "bnc",
  "leg": "enl",
  "lii": "raq",
  "lim": "li",
  "lin": "ln",
  "lit": "lt",
  "llo": "ngt",
  "lmm": "rmx",
  "ltz": "lb",
  "lub": "lu",
  "lug": "lg",
  "lvs": "lv",
  "mac": "mk",
  "mah": "mh",
  "mal": "ml",
  "mao": "mi",
  "mar": "mr",
  "may": "ms",
  "meg": "cir",
  "mgx": "jbk",
  "mhr": "chm",
  "mkd": "mk",
  "mlg": "mg",
  "mlt": "mt",
  "mnt": "wnn",
  "mo": "ro",
  "mof": "xnt",
  "mol": "ro",
  "mon": "mn",
  "mri": "mi",
  "msa": "ms",
  "mst": "mry",
  "mup": "raj",
  "mwd": "dmw",
  "mwj": "vaj",
  "mya": "my",
  "myd": "aog",
  "myt": "mry",
  "nad": "xny",
  "nau": "na",
  "nav": "nv",
  "nbf": "nru",
  "nbl": "nr",
  "nbx": "gll",
  "ncp": "kdz",
  "nde": "nd",
  "ndo": "ng",
  "nep": "ne",
  "nld": "nl",
  "nln": "azd",
  "nlr": "nrk",
  "nno": "nn",
  "nns": "nbr",
  "nnx": "ngv",
  "no-bok": "nb",
  "no-bokmal": "nb",
  "no-nyn": "nn",
  "no-nynorsk": "nn",
  "nob": "nb",
  "nom": "cbr",
  "noo": "dtd",
  "nor": "no",
  "npi": "ne",
  "nte": "eko",
  "nts": "pij",
  "nxu": "bpp",
  "nya": "ny",
  "oci": "oc",
  "ojg": "oj",
  "oji": "oj",
  "ori": "or",
  "orm": "om",
  "ory": "or",
  "oss": "os",
  "oun": "vaj",
  "pan": "pa",
  "pat": "kxr",
  "pbu": "ps",
  "pcr": "adx",
  "per": "fa",
  "pes": "fa",
  "pli": "pi",
  "plt": "mg",
  "pmc": "huw",
  "pmk": "crr",
  "pmu": "phr",
  "pnb": "lah",
  "pol": "pl",
  "por": "pt",
  "ppa": "bfy",
  "ppr": "lcq",
  "prp": "gu",
  "prs": "fa-AF",
  "pry": "prt",
  "pus": "ps",
  "puz": "pub",
  "que": "qu",
  "quz": "qu",
  "rmr": "emx",
  "rmy": "rom",
  "roh": "rm",
  "ron": "ro",
  "rum": "ro",
  "run": "rn",
  "rus": "ru",
  "sag": "sg",
  "san": "sa",
  "sap": "aqt",
  "sca": "hle",
  "scc": "sr",
  "scr": "hr",
  "sgl": "isk",
  "sgn-be-fr": "sfb",
  "sgn-be-nl": "vgt",
  "sgn-br": "bzs",
  "sgn-ch-de": "sgg",
  "sgn-co": "csn",
  "sgn-de": "gsg",
  "sgn-dk": "dsl",
  "sgn-es": "ssp",
  "sgn-fr": "fsl",
  "sgn-gb": "bfi",
  "sgn-gr": "gss",
  "sgn-ie": "isg",
  "sgn-it": "ise",
  "sgn-jp": "jsl",
  "sgn-mx": "mfs",
  "sgn-ni": "ncs",
  "sgn-nl": "dse",
  "sgn-no": "nsi",
  "sgn-pt": "psr",
  "sgn-se": "swl",
  "sgn-us": "ase",
  "sgn-za": "sfs",
  "sh": "sr-Latn",
  "sin": "si",
  "skk": "oyb",
  "slk": "sk",
  "slo": "sk",
  "slv": "sl",
  "smd": "kmb",
  "sme": "se",
  "smo": "sm",
  "sna": "sn",
  "snb": "iba",
  "snd": "sd",
  "som": "so",
  "sot": "st",
  "spa": "es",
  "spy": "kln",
  "sqi": "sq",
  "src": "sc",
  "srd": "sc",
  "srp": "sr",
  "ssw": "ss",
  "sul": "sgd",
  "sum": "ulw",
  "sun": "su",
  "swa": "sw",
  "swc": "sw-CD",
  "swe": "sv",
  "swh": "sw",
  "szd": "umi",
  "tah": "ty",
  "tam": "ta",
  "tat": "tt",
  "tdu": "dtp",
  "tel": "te",
  "tgg": "bjp",
  "tgk": "tg",
  "tgl": "fil",
  "tha": "th",
  "thc": "tpo",
  "thw": "ola",
  "thx": "oyb",
  "tib": "bo",
  "tid": "itd",
  "tie": "ras",
  "tir": "ti",
  "tkk": "twm",
  "tl": "fil",
  "tlw": "weo",
  "tmk": "tdg",
  "tmp": "tyj",
  "tne": "kak",
  "tnf": "fa-AF",
  "ton": "to",
  "tpw": "tpn",
  "tsf": "taj",
  "tsn": "tn",
  "tso": "ts",
  "ttq": "tmh",
  "tuk": "tk",
  "tur": "tr",
  "tw": "ak",
  "twi": "ak",
  "uig": "ug",
  "ukr": "uk",
  "umu": "del",
  "und-aaland": "und-AX",
  "und-arevela": "und",
  "und-arevmda": "und",
  "und-bokmal": "und",
  "und-hakka": "und",
  "und-hepburn-heploc": "und-alalc97",
  "und-lojban": "und",
  "und-nynorsk": "und",
  "und-saaho": "und",
  "und-xiang": "und",
  "unp": "wro",
  "uok": "ema",
  "urd": "ur",
  "uzb": "uz",
  "uzn": "uz",
  "ven": "ve",
  "vie": "vi",
  "vol": "vo",
  "wel": "cy",
  "wgw": "wgb",
  "wit": "nol",
  "wiw": "nwo",
  "wln": "wa",
  "wol": "wo",
  "xba": "cax",
  "xho": "xh",
  "xia": "acn",
  "xkh": "waw",
  "xpe": "kpe",
  "xrq": "dmw",
  "xsj": "suj",
  "xsl": "den",
  "xss": "zko",
  "ybd": "rki",
  "ydd": "yi",
  "yen": "ynq",
  "yid": "yi",
  "yiy": "yrm",
  "yma": "lrr",
  "ymt": "mtm",
  "yor": "yo",
  "yos": "zom",
  "yuu": "yug",
  "zai": "zap",
  "zh-cmn": "zh",
  "zh-cmn-hans": "zh-Hans",
  "zh-cmn-hant": "zh-Hant",
  "zh-gan": "gan",
  "zh-guoyu": "zh",
  "zh-hakka": "hak",
  "zh-min": "nan-x-zh-min",
  "zh-min-nan": "nan",
  "zh-wuu": "wuu",
  "zh-xiang": "hsn",
  "zh-yue": "yue",
  "zha": "za",
  "zho": "zh",
  "zir": "scv",
  "zkb": "kjh",
  "zsm": "ms",
  "zul": "zu",
  "zyb": "za"
};

export const languages: Language[] = [
  {
    "code": "abq",
    "baseCode": "abq",
    "type": "language",
    "name": "Abaza",
    "estimatedSpeakers": 42190,
    "officialCountries": []
  },
  {
    "code": "ab",
    "baseCode": "ab",
    "type": "language",
    "name": "Abkhazian",
    "estimatedSpeakers": 111859,
    "officialCountries": [
      {
        "countryCode": "GE",
        "officialStatus": "official_regional",
        "populationPercent": 2.2
      }
    ]
  },
  {
    "code": "abr",
    "baseCode": "abr",
    "type": "language",
    "name": "Abron",
    "estimatedSpeakers": 1729455,
    "officialCountries": []
  },
  {
    "code": "ace",
    "baseCode": "ace",
    "type": "language",
    "name": "Acehnese",
    "estimatedSpeakers": 3941868,
    "officialCountries": []
  },
  {
    "code": "acr",
    "baseCode": "acr",
    "type": "language",
    "name": "Achi",
    "estimatedSpeakers": 200807,
    "officialCountries": []
  },
  {
    "code": "ach",
    "baseCode": "ach",
    "type": "language",
    "name": "Acoli",
    "estimatedSpeakers": 1823471,
    "officialCountries": []
  },
  {
    "code": "ada",
    "baseCode": "ada",
    "type": "language",
    "name": "Adangme",
    "estimatedSpeakers": 1037673,
    "officialCountries": []
  },
  {
    "code": "ady",
    "baseCode": "ady",
    "type": "language",
    "name": "Adyghe",
    "estimatedSpeakers": 451989,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.088
      }
    ]
  },
  {
    "code": "aa",
    "baseCode": "aa",
    "type": "language",
    "name": "Afar",
    "estimatedSpeakers": 2305972,
    "officialCountries": []
  },
  {
    "code": "af",
    "baseCode": "af",
    "type": "language",
    "name": "Afrikaans",
    "estimatedSpeakers": 9966165,
    "officialCountries": [
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 13
      }
    ]
  },
  {
    "code": "agq",
    "baseCode": "agq",
    "type": "language",
    "name": "Aghem",
    "estimatedSpeakers": 43353,
    "officialCountries": []
  },
  {
    "code": "agu",
    "baseCode": "agu",
    "type": "language",
    "name": "Aguacateco",
    "estimatedSpeakers": 47464,
    "officialCountries": []
  },
  {
    "code": "ak",
    "baseCode": "ak",
    "type": "language",
    "name": "Akan",
    "estimatedSpeakers": 13489749,
    "officialCountries": [
      {
        "countryCode": "GH",
        "officialStatus": "official_regional",
        "populationPercent": 39
      }
    ]
  },
  {
    "code": "tw",
    "baseCode": "tw",
    "type": "language",
    "name": "Akan",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "bss",
    "baseCode": "bss",
    "type": "language",
    "name": "Akoose",
    "estimatedSpeakers": 167217,
    "officialCountries": []
  },
  {
    "code": "sq",
    "baseCode": "sq",
    "type": "language",
    "name": "Albanian",
    "estimatedSpeakers": 6798944,
    "officialCountries": [
      {
        "countryCode": "AL",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "MK",
        "officialStatus": "official_regional",
        "populationPercent": 25
      },
      {
        "countryCode": "XK",
        "officialStatus": "official",
        "populationPercent": 92
      }
    ]
  },
  {
    "code": "fbl",
    "baseCode": "fbl",
    "type": "language",
    "name": "Albay Bicolano",
    "estimatedSpeakers": 2720371,
    "officialCountries": []
  },
  {
    "code": "arq",
    "baseCode": "arq",
    "type": "language",
    "name": "Algerian Arabic",
    "estimatedSpeakers": 39028675,
    "officialCountries": []
  },
  {
    "code": "am",
    "baseCode": "am",
    "type": "language",
    "name": "Amharic",
    "estimatedSpeakers": 39176975,
    "officialCountries": [
      {
        "countryCode": "ET",
        "officialStatus": "official",
        "populationPercent": 33
      }
    ]
  },
  {
    "code": "amo",
    "baseCode": "amo",
    "type": "language",
    "name": "Amo",
    "estimatedSpeakers": 20597,
    "officialCountries": []
  },
  {
    "code": "grc",
    "baseCode": "grc",
    "type": "language",
    "name": "Ancient Greek",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "blo",
    "baseCode": "blo",
    "type": "language",
    "name": "Anii",
    "estimatedSpeakers": 57468,
    "officialCountries": []
  },
  {
    "code": "njo",
    "baseCode": "njo",
    "type": "language",
    "name": "Ao Naga",
    "estimatedSpeakers": 324100,
    "officialCountries": []
  },
  {
    "code": "ar",
    "baseCode": "ar",
    "type": "language",
    "name": "Arabic",
    "estimatedSpeakers": 378792526,
    "officialCountries": [
      {
        "countryCode": "AE",
        "officialStatus": "official",
        "populationPercent": 78
      },
      {
        "countryCode": "BH",
        "officialStatus": "official",
        "populationPercent": 87
      },
      {
        "countryCode": "DJ",
        "officialStatus": "official",
        "populationPercent": 7.3
      },
      {
        "countryCode": "DZ",
        "officialStatus": "official",
        "populationPercent": 74
      },
      {
        "countryCode": "EG",
        "officialStatus": "official",
        "populationPercent": 94
      },
      {
        "countryCode": "EH",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "ER",
        "officialStatus": "official",
        "populationPercent": 4.9
      },
      {
        "countryCode": "IL",
        "officialStatus": "official",
        "populationPercent": 20
      },
      {
        "countryCode": "IQ",
        "officialStatus": "official",
        "populationPercent": 68
      },
      {
        "countryCode": "JO",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "KM",
        "officialStatus": "official",
        "populationPercent": 66
      },
      {
        "countryCode": "KW",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "LB",
        "officialStatus": "official",
        "populationPercent": 86
      },
      {
        "countryCode": "LY",
        "officialStatus": "official",
        "populationPercent": 74
      },
      {
        "countryCode": "MA",
        "officialStatus": "official",
        "populationPercent": 62
      },
      {
        "countryCode": "MR",
        "officialStatus": "official",
        "populationPercent": 85
      },
      {
        "countryCode": "OM",
        "officialStatus": "official",
        "populationPercent": 81
      },
      {
        "countryCode": "PS",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "QA",
        "officialStatus": "official",
        "populationPercent": 89
      },
      {
        "countryCode": "SA",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "SD",
        "officialStatus": "official",
        "populationPercent": 61
      },
      {
        "countryCode": "SO",
        "officialStatus": "official",
        "populationPercent": 34
      },
      {
        "countryCode": "SY",
        "officialStatus": "official",
        "populationPercent": 80
      },
      {
        "countryCode": "TD",
        "officialStatus": "official",
        "populationPercent": 17
      },
      {
        "countryCode": "TN",
        "officialStatus": "official",
        "populationPercent": 90
      },
      {
        "countryCode": "YE",
        "officialStatus": "official",
        "populationPercent": 74
      }
    ]
  },
  {
    "code": "an",
    "baseCode": "an",
    "type": "language",
    "name": "Aragonese",
    "estimatedSpeakers": 24586,
    "officialCountries": []
  },
  {
    "code": "aro",
    "baseCode": "aro",
    "type": "language",
    "name": "Araona",
    "estimatedSpeakers": 111,
    "officialCountries": []
  },
  {
    "code": "hy",
    "baseCode": "hy",
    "type": "language",
    "name": "Armenian",
    "estimatedSpeakers": 5443505,
    "officialCountries": [
      {
        "countryCode": "AM",
        "officialStatus": "official",
        "populationPercent": 99
      }
    ]
  },
  {
    "code": "frp",
    "baseCode": "frp",
    "type": "language",
    "name": "Arpitan",
    "estimatedSpeakers": 64272,
    "officialCountries": []
  },
  {
    "code": "as",
    "baseCode": "as",
    "type": "language",
    "name": "Assamese",
    "estimatedSpeakers": 18318690,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 1.3
      }
    ]
  },
  {
    "code": "ast",
    "baseCode": "ast",
    "type": "language",
    "name": "Asturian",
    "estimatedSpeakers": 614645,
    "officialCountries": [
      {
        "countryCode": "ES",
        "officialStatus": "official_regional",
        "populationPercent": 1.3
      }
    ]
  },
  {
    "code": "asa",
    "baseCode": "asa",
    "type": "language",
    "name": "Asu",
    "estimatedSpeakers": 809545,
    "officialCountries": []
  },
  {
    "code": "atj",
    "baseCode": "atj",
    "type": "language",
    "name": "Atikamekw",
    "estimatedSpeakers": 6983,
    "officialCountries": []
  },
  {
    "code": "cch",
    "baseCode": "cch",
    "type": "language",
    "name": "Atsam",
    "estimatedSpeakers": 49717,
    "officialCountries": []
  },
  {
    "code": "av",
    "baseCode": "av",
    "type": "language",
    "name": "Avaric",
    "estimatedSpeakers": 549202,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.39
      }
    ]
  },
  {
    "code": "ae",
    "baseCode": "ae",
    "type": "language",
    "name": "Avestan",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "awa",
    "baseCode": "awa",
    "type": "language",
    "name": "Awadhi",
    "estimatedSpeakers": 27458163,
    "officialCountries": []
  },
  {
    "code": "ay",
    "baseCode": "ay",
    "type": "language",
    "name": "Aymara",
    "estimatedSpeakers": 2984003,
    "officialCountries": [
      {
        "countryCode": "BO",
        "officialStatus": "official",
        "populationPercent": 20
      }
    ]
  },
  {
    "code": "az",
    "baseCode": "az",
    "type": "language",
    "name": "Azerbaijani",
    "estimatedSpeakers": 32202483,
    "officialCountries": [
      {
        "countryCode": "AZ",
        "officialStatus": "official",
        "populationPercent": 89
      },
      {
        "countryCode": "IQ",
        "officialStatus": "official_regional",
        "populationPercent": 1.8
      },
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.093
      }
    ]
  },
  {
    "code": "bfq",
    "baseCode": "bfq",
    "type": "language",
    "name": "Badaga",
    "estimatedSpeakers": 324100,
    "officialCountries": []
  },
  {
    "code": "ksf",
    "baseCode": "ksf",
    "type": "language",
    "name": "Bafia",
    "estimatedSpeakers": 99092,
    "officialCountries": []
  },
  {
    "code": "bfd",
    "baseCode": "bfd",
    "type": "language",
    "name": "Bafut",
    "estimatedSpeakers": 176507,
    "officialCountries": []
  },
  {
    "code": "bfy",
    "baseCode": "bfy",
    "type": "language",
    "name": "Bagheli",
    "estimatedSpeakers": 689439,
    "officialCountries": []
  },
  {
    "code": "bqi",
    "baseCode": "bqi",
    "type": "language",
    "name": "Bakhtiari",
    "estimatedSpeakers": 1237417,
    "officialCountries": []
  },
  {
    "code": "bjt",
    "baseCode": "bjt",
    "type": "language",
    "name": "Balanta-Ganja",
    "estimatedSpeakers": 114970,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 0.61
      }
    ]
  },
  {
    "code": "ban",
    "baseCode": "ban",
    "type": "language",
    "name": "Balinese",
    "estimatedSpeakers": 5068116,
    "officialCountries": []
  },
  {
    "code": "bgx",
    "baseCode": "bgx",
    "type": "language",
    "name": "Balkan Gagauz Turkish",
    "estimatedSpeakers": 386950,
    "officialCountries": []
  },
  {
    "code": "bft",
    "baseCode": "bft",
    "type": "language",
    "name": "Balti",
    "estimatedSpeakers": 541621,
    "officialCountries": []
  },
  {
    "code": "bal",
    "baseCode": "bal",
    "type": "language",
    "name": "Baluchi",
    "estimatedSpeakers": 8751140,
    "officialCountries": []
  },
  {
    "code": "bm",
    "baseCode": "bm",
    "type": "language",
    "name": "Bambara",
    "estimatedSpeakers": 10115676,
    "officialCountries": []
  },
  {
    "code": "bax",
    "baseCode": "bax",
    "type": "language",
    "name": "Bamun",
    "estimatedSpeakers": 371593,
    "officialCountries": []
  },
  {
    "code": "bza",
    "baseCode": "bza",
    "type": "language",
    "name": "Bandi",
    "estimatedSpeakers": 157680,
    "officialCountries": []
  },
  {
    "code": "bn",
    "baseCode": "bn",
    "type": "language",
    "name": "Bangla",
    "estimatedSpeakers": 279893704,
    "officialCountries": [
      {
        "countryCode": "BD",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 8.1
      }
    ]
  },
  {
    "code": "bjn",
    "baseCode": "bjn",
    "type": "language",
    "name": "Banjar",
    "estimatedSpeakers": 4228269,
    "officialCountries": []
  },
  {
    "code": "bap",
    "baseCode": "bap",
    "type": "language",
    "name": "Bantawa",
    "estimatedSpeakers": 466836,
    "officialCountries": []
  },
  {
    "code": "bci",
    "baseCode": "bci",
    "type": "language",
    "name": "Baoulé",
    "estimatedSpeakers": 3297998,
    "officialCountries": []
  },
  {
    "code": "bas",
    "baseCode": "bas",
    "type": "language",
    "name": "Basaa",
    "estimatedSpeakers": 371593,
    "officialCountries": []
  },
  {
    "code": "ba",
    "baseCode": "ba",
    "type": "language",
    "name": "Bashkir",
    "estimatedSpeakers": 1830673,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 1.3
      }
    ]
  },
  {
    "code": "eu",
    "baseCode": "eu",
    "type": "language",
    "name": "Basque",
    "estimatedSpeakers": 1034495,
    "officialCountries": [
      {
        "countryCode": "ES",
        "officialStatus": "official_regional",
        "populationPercent": 2
      }
    ]
  },
  {
    "code": "bsq",
    "baseCode": "bsq",
    "type": "language",
    "name": "Bassa",
    "estimatedSpeakers": 761215,
    "officialCountries": []
  },
  {
    "code": "bsc",
    "baseCode": "bsc",
    "type": "language",
    "name": "Bassari",
    "estimatedSpeakers": 18282,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 0.097
      }
    ]
  },
  {
    "code": "bbc",
    "baseCode": "bbc",
    "type": "language",
    "name": "Batak Toba",
    "estimatedSpeakers": 2590370,
    "officialCountries": []
  },
  {
    "code": "btv",
    "baseCode": "btv",
    "type": "language",
    "name": "Bateri",
    "estimatedSpeakers": 84587,
    "officialCountries": []
  },
  {
    "code": "bar",
    "baseCode": "bar",
    "type": "language",
    "name": "Bavarian",
    "estimatedSpeakers": 22819828,
    "officialCountries": []
  },
  {
    "code": "bej",
    "baseCode": "bej",
    "type": "language",
    "name": "Beja",
    "estimatedSpeakers": 2725234,
    "officialCountries": []
  },
  {
    "code": "be",
    "baseCode": "be",
    "type": "language",
    "name": "Belarusian",
    "estimatedSpeakers": 2991098,
    "officialCountries": [
      {
        "countryCode": "BY",
        "officialStatus": "official",
        "populationPercent": 26
      }
    ]
  },
  {
    "code": "bzj",
    "baseCode": "bzj",
    "type": "language",
    "name": "Belize Kriol English",
    "estimatedSpeakers": 207895,
    "officialCountries": []
  },
  {
    "code": "bem",
    "baseCode": "bem",
    "type": "language",
    "name": "Bemba",
    "estimatedSpeakers": 7071694,
    "officialCountries": []
  },
  {
    "code": "bez",
    "baseCode": "bez",
    "type": "language",
    "name": "Bena",
    "estimatedSpeakers": 1146856,
    "officialCountries": []
  },
  {
    "code": "bew",
    "baseCode": "bew",
    "type": "language",
    "name": "Betawi",
    "estimatedSpeakers": 5912802,
    "officialCountries": []
  },
  {
    "code": "bhi",
    "baseCode": "bhi",
    "type": "language",
    "name": "Bhilali",
    "estimatedSpeakers": 1296400,
    "officialCountries": []
  },
  {
    "code": "bhb",
    "baseCode": "bhb",
    "type": "language",
    "name": "Bhili",
    "estimatedSpeakers": 1690956,
    "officialCountries": []
  },
  {
    "code": "bh",
    "baseCode": "bh",
    "type": "language",
    "name": "Bhojpuri",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "bho",
    "baseCode": "bho",
    "type": "language",
    "name": "Bhojpuri",
    "estimatedSpeakers": 34639016,
    "officialCountries": []
  },
  {
    "code": "bik",
    "baseCode": "bik",
    "type": "language",
    "name": "Bikol",
    "estimatedSpeakers": 3548310,
    "officialCountries": []
  },
  {
    "code": "bin",
    "baseCode": "bin",
    "type": "language",
    "name": "Bini",
    "estimatedSpeakers": 1680904,
    "officialCountries": []
  },
  {
    "code": "bpy",
    "baseCode": "bpy",
    "type": "language",
    "name": "Bishnupriya",
    "estimatedSpeakers": 95821,
    "officialCountries": []
  },
  {
    "code": "bi",
    "baseCode": "bi",
    "type": "language",
    "name": "Bislama",
    "estimatedSpeakers": 286206,
    "officialCountries": [
      {
        "countryCode": "VU",
        "officialStatus": "official",
        "populationPercent": 90
      }
    ]
  },
  {
    "code": "byn",
    "baseCode": "byn",
    "type": "language",
    "name": "Blin",
    "estimatedSpeakers": 82471,
    "officialCountries": []
  },
  {
    "code": "brx",
    "baseCode": "brx",
    "type": "language",
    "name": "Bodo",
    "estimatedSpeakers": 1972782,
    "officialCountries": []
  },
  {
    "code": "bmq",
    "baseCode": "bmq",
    "type": "language",
    "name": "Bomu",
    "estimatedSpeakers": 189119,
    "officialCountries": []
  },
  {
    "code": "bs",
    "baseCode": "bs",
    "type": "language",
    "name": "Bosnian",
    "estimatedSpeakers": 3760683,
    "officialCountries": [
      {
        "countryCode": "BA",
        "officialStatus": "official",
        "populationPercent": 99
      }
    ]
  },
  {
    "code": "brh",
    "baseCode": "brh",
    "type": "language",
    "name": "Brahui",
    "estimatedSpeakers": 3280732,
    "officialCountries": []
  },
  {
    "code": "bra",
    "baseCode": "bra",
    "type": "language",
    "name": "Braj",
    "estimatedSpeakers": 57774,
    "officialCountries": []
  },
  {
    "code": "br",
    "baseCode": "br",
    "type": "language",
    "name": "Breton",
    "estimatedSpeakers": 567509,
    "officialCountries": []
  },
  {
    "code": "bvb",
    "baseCode": "bvb",
    "type": "language",
    "name": "Bube",
    "estimatedSpeakers": 141871,
    "officialCountries": []
  },
  {
    "code": "bug",
    "baseCode": "bug",
    "type": "language",
    "name": "Buginese",
    "estimatedSpeakers": 4532298,
    "officialCountries": []
  },
  {
    "code": "bku",
    "baseCode": "bku",
    "type": "language",
    "name": "Buhid",
    "estimatedSpeakers": 8043,
    "officialCountries": []
  },
  {
    "code": "bg",
    "baseCode": "bg",
    "type": "language",
    "name": "Bulgarian",
    "estimatedSpeakers": 7684020,
    "officialCountries": [
      {
        "countryCode": "BG",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "bum",
    "baseCode": "bum",
    "type": "language",
    "name": "Bulu",
    "estimatedSpeakers": 1424441,
    "officialCountries": []
  },
  {
    "code": "bua",
    "baseCode": "bua",
    "type": "language",
    "name": "Buriat",
    "estimatedSpeakers": 309806,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.22
      }
    ]
  },
  {
    "code": "my",
    "baseCode": "my",
    "type": "language",
    "name": "Burmese",
    "estimatedSpeakers": 37171608,
    "officialCountries": [
      {
        "countryCode": "MM",
        "officialStatus": "official",
        "populationPercent": 64
      }
    ]
  },
  {
    "code": "buc",
    "baseCode": "buc",
    "type": "language",
    "name": "Bushi",
    "estimatedSpeakers": 44620,
    "officialCountries": []
  },
  {
    "code": "ccr",
    "baseCode": "ccr",
    "type": "language",
    "name": "Cacaopera",
    "estimatedSpeakers": 3712,
    "officialCountries": []
  },
  {
    "code": "cad",
    "baseCode": "cad",
    "type": "language",
    "name": "Caddo",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "frc",
    "baseCode": "frc",
    "type": "language",
    "name": "Cajun French",
    "estimatedSpeakers": 28725,
    "officialCountries": []
  },
  {
    "code": "ckz",
    "baseCode": "ckz",
    "type": "language",
    "name": "Cakchiquel-Quiché Mixed Language",
    "estimatedSpeakers": 3286,
    "officialCountries": []
  },
  {
    "code": "yue",
    "baseCode": "yue",
    "type": "language",
    "name": "Cantonese",
    "estimatedSpeakers": 81532220,
    "officialCountries": [
      {
        "countryCode": "MO",
        "officialStatus": "de_facto_official",
        "populationPercent": 86
      }
    ]
  },
  {
    "code": "cps",
    "baseCode": "cps",
    "type": "language",
    "name": "Capiznon",
    "estimatedSpeakers": 780628,
    "officialCountries": []
  },
  {
    "code": "ca",
    "baseCode": "ca",
    "type": "language",
    "name": "Catalan",
    "estimatedSpeakers": 8218781,
    "officialCountries": [
      {
        "countryCode": "AD",
        "officialStatus": "official",
        "populationPercent": 51
      },
      {
        "countryCode": "ES",
        "officialStatus": "official_regional",
        "populationPercent": 17
      }
    ]
  },
  {
    "code": "sef",
    "baseCode": "sef",
    "type": "language",
    "name": "Cebaara Senoufo",
    "estimatedSpeakers": 1289217,
    "officialCountries": []
  },
  {
    "code": "ceb",
    "baseCode": "ceb",
    "type": "language",
    "name": "Cebuano",
    "estimatedSpeakers": 28386480,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official_regional",
        "populationPercent": 24
      }
    ]
  },
  {
    "code": "tzm",
    "baseCode": "tzm",
    "type": "language",
    "name": "Central Atlas Tamazight",
    "estimatedSpeakers": 3663985,
    "officialCountries": [
      {
        "countryCode": "MA",
        "officialStatus": "official",
        "populationPercent": 9.8
      }
    ]
  },
  {
    "code": "dtp",
    "baseCode": "dtp",
    "type": "language",
    "name": "Central Dusun",
    "estimatedSpeakers": 193563,
    "officialCountries": []
  },
  {
    "code": "nch",
    "baseCode": "nch",
    "type": "language",
    "name": "Central Huasteca Nahuatl",
    "estimatedSpeakers": 248406,
    "officialCountries": []
  },
  {
    "code": "ckb",
    "baseCode": "ckb",
    "type": "language",
    "name": "Central Kurdish",
    "estimatedSpeakers": 5606845,
    "officialCountries": [
      {
        "countryCode": "IQ",
        "officialStatus": "official_regional",
        "populationPercent": 12
      }
    ]
  },
  {
    "code": "maz",
    "baseCode": "maz",
    "type": "language",
    "name": "Central Mazahua",
    "estimatedSpeakers": 444516,
    "officialCountries": []
  },
  {
    "code": "ryu",
    "baseCode": "ryu",
    "type": "language",
    "name": "Central Okinawan",
    "estimatedSpeakers": 948655,
    "officialCountries": []
  },
  {
    "code": "esu",
    "baseCode": "esu",
    "type": "language",
    "name": "Central Yupik",
    "estimatedSpeakers": 21544,
    "officialCountries": []
  },
  {
    "code": "fuq",
    "baseCode": "fuq",
    "type": "language",
    "name": "Central-Eastern Niger Fulfulde",
    "estimatedSpeakers": 1843996,
    "officialCountries": []
  },
  {
    "code": "ccp",
    "baseCode": "ccp",
    "type": "language",
    "name": "Chakma",
    "estimatedSpeakers": 765690,
    "officialCountries": []
  },
  {
    "code": "ch",
    "baseCode": "ch",
    "type": "language",
    "name": "Chamorro",
    "estimatedSpeakers": 46498,
    "officialCountries": [
      {
        "countryCode": "GU",
        "officialStatus": "official",
        "populationPercent": 22
      }
    ]
  },
  {
    "code": "ce",
    "baseCode": "ce",
    "type": "language",
    "name": "Chechen",
    "estimatedSpeakers": 929419,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.66
      }
    ]
  },
  {
    "code": "chr",
    "baseCode": "chr",
    "type": "language",
    "name": "Cherokee",
    "estimatedSpeakers": 26331,
    "officialCountries": []
  },
  {
    "code": "hne",
    "baseCode": "hne",
    "type": "language",
    "name": "Chhattisgarhi",
    "estimatedSpeakers": 15500430,
    "officialCountries": []
  },
  {
    "code": "cic",
    "baseCode": "cic",
    "type": "language",
    "name": "Chickasaw",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "cgg",
    "baseCode": "cgg",
    "type": "language",
    "name": "Chiga",
    "estimatedSpeakers": 2661282,
    "officialCountries": []
  },
  {
    "code": "clc",
    "baseCode": "clc",
    "type": "language",
    "name": "Chilcotin",
    "estimatedSpeakers": 853,
    "officialCountries": []
  },
  {
    "code": "qug",
    "baseCode": "qug",
    "type": "language",
    "name": "Chimborazo Highland Quichua",
    "estimatedSpeakers": 1043670,
    "officialCountries": []
  },
  {
    "code": "zh",
    "baseCode": "zh",
    "type": "language",
    "name": "Chinese",
    "estimatedSpeakers": 1317958461,
    "officialCountries": [
      {
        "countryCode": "CN",
        "officialStatus": "official",
        "populationPercent": 90
      },
      {
        "countryCode": "HK",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "MO",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "SG",
        "officialStatus": "official",
        "populationPercent": 77
      },
      {
        "countryCode": "TW",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ]
  },
  {
    "code": "chp",
    "baseCode": "chp",
    "type": "language",
    "name": "Chipewyan",
    "estimatedSpeakers": 12414,
    "officialCountries": [
      {
        "countryCode": "CA",
        "officialStatus": "official_regional",
        "populationPercent": 0.032
      }
    ]
  },
  {
    "code": "cho",
    "baseCode": "cho",
    "type": "language",
    "name": "Choctaw",
    "estimatedSpeakers": 11285,
    "officialCountries": []
  },
  {
    "code": "caa",
    "baseCode": "caa",
    "type": "language",
    "name": "Chortí",
    "estimatedSpeakers": 23732,
    "officialCountries": [
      {
        "countryCode": "GT",
        "officialStatus": "official_regional",
        "populationPercent": 0.13
      }
    ]
  },
  {
    "code": "cac",
    "baseCode": "cac",
    "type": "language",
    "name": "Chuj",
    "estimatedSpeakers": 78497,
    "officialCountries": []
  },
  {
    "code": "cu",
    "baseCode": "cu",
    "type": "language",
    "name": "Church Slavic",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "chk",
    "baseCode": "chk",
    "type": "language",
    "name": "Chuukese",
    "estimatedSpeakers": 29881,
    "officialCountries": []
  },
  {
    "code": "cv",
    "baseCode": "cv",
    "type": "language",
    "name": "Chuvash",
    "estimatedSpeakers": 1830673,
    "officialCountries": []
  },
  {
    "code": "ksh",
    "baseCode": "ksh",
    "type": "language",
    "name": "Colognian",
    "estimatedSpeakers": 252357,
    "officialCountries": []
  },
  {
    "code": "swb",
    "baseCode": "swb",
    "type": "language",
    "name": "Comorian",
    "estimatedSpeakers": 170720,
    "officialCountries": []
  },
  {
    "code": "cop",
    "baseCode": "cop",
    "type": "language",
    "name": "Coptic",
    "estimatedSpeakers": 6674820,
    "officialCountries": []
  },
  {
    "code": "kw",
    "baseCode": "kw",
    "type": "language",
    "name": "Cornish",
    "estimatedSpeakers": 1985,
    "officialCountries": []
  },
  {
    "code": "co",
    "baseCode": "co",
    "type": "language",
    "name": "Corsican",
    "estimatedSpeakers": 164099,
    "officialCountries": []
  },
  {
    "code": "cr",
    "baseCode": "cr",
    "type": "language",
    "name": "Cree",
    "estimatedSpeakers": 5043,
    "officialCountries": []
  },
  {
    "code": "crh",
    "baseCode": "crh",
    "type": "language",
    "name": "Crimean Tatar",
    "estimatedSpeakers": 199706,
    "officialCountries": []
  },
  {
    "code": "hr",
    "baseCode": "hr",
    "type": "language",
    "name": "Croatian",
    "estimatedSpeakers": 6790797,
    "officialCountries": [
      {
        "countryCode": "AT",
        "officialStatus": "official_regional",
        "populationPercent": 1.2
      },
      {
        "countryCode": "BA",
        "officialStatus": "official",
        "populationPercent": 12
      },
      {
        "countryCode": "HR",
        "officialStatus": "official",
        "populationPercent": 99
      },
      {
        "countryCode": "RS",
        "officialStatus": "official_regional",
        "populationPercent": 0.93
      }
    ]
  },
  {
    "code": "cs",
    "baseCode": "cs",
    "type": "language",
    "name": "Czech",
    "estimatedSpeakers": 13236058,
    "officialCountries": [
      {
        "countryCode": "CZ",
        "officialStatus": "official",
        "populationPercent": 98
      }
    ]
  },
  {
    "code": "dak",
    "baseCode": "dak",
    "type": "language",
    "name": "Dakota",
    "estimatedSpeakers": 21689,
    "officialCountries": []
  },
  {
    "code": "dnj",
    "baseCode": "dnj",
    "type": "language",
    "name": "Dan",
    "estimatedSpeakers": 1628815,
    "officialCountries": []
  },
  {
    "code": "thl",
    "baseCode": "thl",
    "type": "language",
    "name": "Dangaura Tharu",
    "estimatedSpeakers": 622448,
    "officialCountries": []
  },
  {
    "code": "da",
    "baseCode": "da",
    "type": "language",
    "name": "Danish",
    "estimatedSpeakers": 7247744,
    "officialCountries": [
      {
        "countryCode": "DK",
        "officialStatus": "official",
        "populationPercent": 93
      }
    ]
  },
  {
    "code": "dar",
    "baseCode": "dar",
    "type": "language",
    "name": "Dargwa",
    "estimatedSpeakers": 366135,
    "officialCountries": []
  },
  {
    "code": "dcc",
    "baseCode": "dcc",
    "type": "language",
    "name": "Deccan",
    "estimatedSpeakers": 13950387,
    "officialCountries": []
  },
  {
    "code": "dv",
    "baseCode": "dv",
    "type": "language",
    "name": "Divehi",
    "estimatedSpeakers": 385308,
    "officialCountries": [
      {
        "countryCode": "MV",
        "officialStatus": "official",
        "populationPercent": 98
      }
    ]
  },
  {
    "code": "doi",
    "baseCode": "doi",
    "type": "language",
    "name": "Dogri",
    "estimatedSpeakers": 2818260,
    "officialCountries": []
  },
  {
    "code": "dgr",
    "baseCode": "dgr",
    "type": "language",
    "name": "Dogrib",
    "estimatedSpeakers": 2134,
    "officialCountries": [
      {
        "countryCode": "CA",
        "officialStatus": "official_regional",
        "populationPercent": 0.0055
      }
    ]
  },
  {
    "code": "rmt",
    "baseCode": "rmt",
    "type": "language",
    "name": "Domari",
    "estimatedSpeakers": 1679351,
    "officialCountries": []
  },
  {
    "code": "dty",
    "baseCode": "dty",
    "type": "language",
    "name": "Dotyali",
    "estimatedSpeakers": 778060,
    "officialCountries": []
  },
  {
    "code": "dua",
    "baseCode": "dua",
    "type": "language",
    "name": "Duala",
    "estimatedSpeakers": 148637,
    "officialCountries": []
  },
  {
    "code": "nl",
    "baseCode": "nl",
    "type": "language",
    "name": "Dutch",
    "estimatedSpeakers": 32854898,
    "officialCountries": [
      {
        "countryCode": "AW",
        "officialStatus": "official",
        "populationPercent": 97
      },
      {
        "countryCode": "BE",
        "officialStatus": "official",
        "populationPercent": 55
      },
      {
        "countryCode": "BQ",
        "officialStatus": "official",
        "populationPercent": 8
      },
      {
        "countryCode": "CW",
        "officialStatus": "official",
        "populationPercent": 8
      },
      {
        "countryCode": "NL",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "SR",
        "officialStatus": "official",
        "populationPercent": 90
      },
      {
        "countryCode": "SX",
        "officialStatus": "official",
        "populationPercent": 3.4
      }
    ]
  },
  {
    "code": "dyu",
    "baseCode": "dyu",
    "type": "language",
    "name": "Dyula",
    "estimatedSpeakers": 7373504,
    "officialCountries": []
  },
  {
    "code": "dz",
    "baseCode": "dz",
    "type": "language",
    "name": "Dzongkha",
    "estimatedSpeakers": 418555,
    "officialCountries": [
      {
        "countryCode": "BT",
        "officialStatus": "official",
        "populationPercent": 47
      }
    ]
  },
  {
    "code": "fud",
    "baseCode": "fud",
    "type": "language",
    "name": "East Futuna",
    "estimatedSpeakers": 4789,
    "officialCountries": []
  },
  {
    "code": "cjm",
    "baseCode": "cjm",
    "type": "language",
    "name": "Eastern Cham",
    "estimatedSpeakers": 94126,
    "officialCountries": []
  },
  {
    "code": "frs",
    "baseCode": "frs",
    "type": "language",
    "name": "Eastern Frisian",
    "estimatedSpeakers": 2019,
    "officialCountries": []
  },
  {
    "code": "gvr",
    "baseCode": "gvr",
    "type": "language",
    "name": "Eastern Gurung",
    "estimatedSpeakers": 90255,
    "officialCountries": []
  },
  {
    "code": "nhe",
    "baseCode": "nhe",
    "type": "language",
    "name": "Eastern Huasteca Nahuatl",
    "estimatedSpeakers": 509886,
    "officialCountries": []
  },
  {
    "code": "lwl",
    "baseCode": "lwl",
    "type": "language",
    "name": "Eastern Lawa",
    "estimatedSpeakers": 6992,
    "officialCountries": []
  },
  {
    "code": "mgp",
    "baseCode": "mgp",
    "type": "language",
    "name": "Eastern Magar",
    "estimatedSpeakers": 342346,
    "officialCountries": []
  },
  {
    "code": "taj",
    "baseCode": "taj",
    "type": "language",
    "name": "Eastern Tamang",
    "estimatedSpeakers": 133826,
    "officialCountries": []
  },
  {
    "code": "efi",
    "baseCode": "efi",
    "type": "language",
    "name": "Efik",
    "estimatedSpeakers": 3314458,
    "officialCountries": []
  },
  {
    "code": "arz",
    "baseCode": "arz",
    "type": "language",
    "name": "Egyptian Arabic",
    "estimatedSpeakers": 71198080,
    "officialCountries": []
  },
  {
    "code": "ebu",
    "baseCode": "ebu",
    "type": "language",
    "name": "Embu",
    "estimatedSpeakers": 873696,
    "officialCountries": []
  },
  {
    "code": "egl",
    "baseCode": "egl",
    "type": "language",
    "name": "Emilian",
    "estimatedSpeakers": 30482,
    "officialCountries": []
  },
  {
    "code": "en",
    "baseCode": "en",
    "type": "language",
    "name": "English",
    "estimatedSpeakers": 1728473504,
    "officialCountries": [
      {
        "countryCode": "AG",
        "officialStatus": "official",
        "populationPercent": 86
      },
      {
        "countryCode": "AI",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "AS",
        "officialStatus": "de_facto_official",
        "populationPercent": 97
      },
      {
        "countryCode": "AU",
        "officialStatus": "de_facto_official",
        "populationPercent": 96
      },
      {
        "countryCode": "BB",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "BI",
        "officialStatus": "official",
        "populationPercent": 0.046
      },
      {
        "countryCode": "BM",
        "officialStatus": "official",
        "populationPercent": 92
      },
      {
        "countryCode": "BS",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "BW",
        "officialStatus": "official",
        "populationPercent": 81
      },
      {
        "countryCode": "BZ",
        "officialStatus": "official",
        "populationPercent": 77
      },
      {
        "countryCode": "CA",
        "officialStatus": "official",
        "populationPercent": 87
      },
      {
        "countryCode": "CC",
        "officialStatus": "de_facto_official",
        "populationPercent": 17
      },
      {
        "countryCode": "CK",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "CM",
        "officialStatus": "official",
        "populationPercent": 38
      },
      {
        "countryCode": "CQ",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "CX",
        "officialStatus": "official",
        "populationPercent": 83
      },
      {
        "countryCode": "DG",
        "officialStatus": "de_facto_official",
        "populationPercent": 99
      },
      {
        "countryCode": "DM",
        "officialStatus": "official",
        "populationPercent": 94
      },
      {
        "countryCode": "ER",
        "officialStatus": "official",
        "populationPercent": 59
      },
      {
        "countryCode": "FJ",
        "officialStatus": "official",
        "populationPercent": 94
      },
      {
        "countryCode": "FK",
        "officialStatus": "official",
        "populationPercent": 77
      },
      {
        "countryCode": "FM",
        "officialStatus": "official",
        "populationPercent": 57
      },
      {
        "countryCode": "GB",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "GD",
        "officialStatus": "official",
        "populationPercent": 96
      },
      {
        "countryCode": "GG",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "GH",
        "officialStatus": "official",
        "populationPercent": 21
      },
      {
        "countryCode": "GI",
        "officialStatus": "official",
        "populationPercent": 80
      },
      {
        "countryCode": "GM",
        "officialStatus": "official",
        "populationPercent": 40
      },
      {
        "countryCode": "GS",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "GU",
        "officialStatus": "de_facto_official",
        "populationPercent": 91
      },
      {
        "countryCode": "GY",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "HK",
        "officialStatus": "official",
        "populationPercent": 51
      },
      {
        "countryCode": "IE",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "IM",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "IN",
        "officialStatus": "official",
        "populationPercent": 19
      },
      {
        "countryCode": "IO",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "JE",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "JM",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "KE",
        "officialStatus": "official",
        "populationPercent": 19
      },
      {
        "countryCode": "KI",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "KN",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "KY",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "LC",
        "officialStatus": "official",
        "populationPercent": 90
      },
      {
        "countryCode": "LR",
        "officialStatus": "official",
        "populationPercent": 83
      },
      {
        "countryCode": "LS",
        "officialStatus": "official",
        "populationPercent": 27
      },
      {
        "countryCode": "MG",
        "officialStatus": "official",
        "populationPercent": 18
      },
      {
        "countryCode": "MH",
        "officialStatus": "official",
        "populationPercent": 93
      },
      {
        "countryCode": "MP",
        "officialStatus": "de_facto_official",
        "populationPercent": 97
      },
      {
        "countryCode": "MS",
        "officialStatus": "official",
        "populationPercent": 64
      },
      {
        "countryCode": "MT",
        "officialStatus": "official",
        "populationPercent": 88
      },
      {
        "countryCode": "MU",
        "officialStatus": "official",
        "populationPercent": 72
      },
      {
        "countryCode": "MW",
        "officialStatus": "official",
        "populationPercent": 63
      },
      {
        "countryCode": "NA",
        "officialStatus": "official",
        "populationPercent": 7
      },
      {
        "countryCode": "NF",
        "officialStatus": "official",
        "populationPercent": 96
      },
      {
        "countryCode": "NG",
        "officialStatus": "official",
        "populationPercent": 53
      },
      {
        "countryCode": "NR",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "NU",
        "officialStatus": "official",
        "populationPercent": 56
      },
      {
        "countryCode": "NZ",
        "officialStatus": "de_facto_official",
        "populationPercent": 98
      },
      {
        "countryCode": "PG",
        "officialStatus": "official",
        "populationPercent": 50
      },
      {
        "countryCode": "PH",
        "officialStatus": "official",
        "populationPercent": 64
      },
      {
        "countryCode": "PK",
        "officialStatus": "official",
        "populationPercent": 50
      },
      {
        "countryCode": "PN",
        "officialStatus": "official",
        "populationPercent": 92
      },
      {
        "countryCode": "PR",
        "officialStatus": "de_facto_official",
        "populationPercent": 49
      },
      {
        "countryCode": "PW",
        "officialStatus": "official",
        "populationPercent": 8.6
      },
      {
        "countryCode": "RW",
        "officialStatus": "official",
        "populationPercent": 15
      },
      {
        "countryCode": "SB",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "SC",
        "officialStatus": "official",
        "populationPercent": 38
      },
      {
        "countryCode": "SD",
        "officialStatus": "official",
        "populationPercent": 61
      },
      {
        "countryCode": "SG",
        "officialStatus": "official",
        "populationPercent": 93
      },
      {
        "countryCode": "SH",
        "officialStatus": "official",
        "populationPercent": 68
      },
      {
        "countryCode": "SL",
        "officialStatus": "official",
        "populationPercent": 35
      },
      {
        "countryCode": "SS",
        "officialStatus": "official",
        "populationPercent": 27
      },
      {
        "countryCode": "SX",
        "officialStatus": "official",
        "populationPercent": 68
      },
      {
        "countryCode": "SZ",
        "officialStatus": "official",
        "populationPercent": 80
      },
      {
        "countryCode": "TC",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "TK",
        "officialStatus": "official",
        "populationPercent": 38
      },
      {
        "countryCode": "TO",
        "officialStatus": "official",
        "populationPercent": 28
      },
      {
        "countryCode": "TT",
        "officialStatus": "official",
        "populationPercent": 88
      },
      {
        "countryCode": "TV",
        "officialStatus": "official",
        "populationPercent": 9.1
      },
      {
        "countryCode": "TZ",
        "officialStatus": "official",
        "populationPercent": 69
      },
      {
        "countryCode": "UG",
        "officialStatus": "official",
        "populationPercent": 3.9
      },
      {
        "countryCode": "UM",
        "officialStatus": "de_facto_official",
        "populationPercent": 100
      },
      {
        "countryCode": "US",
        "officialStatus": "de_facto_official",
        "populationPercent": 96
      },
      {
        "countryCode": "VC",
        "officialStatus": "official",
        "populationPercent": 96
      },
      {
        "countryCode": "VG",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "VI",
        "officialStatus": "de_facto_official",
        "populationPercent": 75
      },
      {
        "countryCode": "VU",
        "officialStatus": "official",
        "populationPercent": 83
      },
      {
        "countryCode": "WS",
        "officialStatus": "official",
        "populationPercent": 2.1
      },
      {
        "countryCode": "ZA",
        "officialStatus": "official",
        "populationPercent": 31
      },
      {
        "countryCode": "ZM",
        "officialStatus": "official",
        "populationPercent": 16
      },
      {
        "countryCode": "ZW",
        "officialStatus": "official",
        "populationPercent": 42
      }
    ]
  },
  {
    "code": "myv",
    "baseCode": "myv",
    "type": "language",
    "name": "Erzya",
    "estimatedSpeakers": 436545,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.31
      }
    ]
  },
  {
    "code": "eo",
    "baseCode": "eo",
    "type": "language",
    "name": "Esperanto",
    "estimatedSpeakers": 298,
    "officialCountries": []
  },
  {
    "code": "et",
    "baseCode": "et",
    "type": "language",
    "name": "Estonian",
    "estimatedSpeakers": 853780,
    "officialCountries": [
      {
        "countryCode": "EE",
        "officialStatus": "official",
        "populationPercent": 71
      }
    ]
  },
  {
    "code": "ecy",
    "baseCode": "ecy",
    "type": "language",
    "name": "Eteocypriot",
    "estimatedSpeakers": 1,
    "officialCountries": []
  },
  {
    "code": "ee",
    "baseCode": "ee",
    "type": "language",
    "name": "Ewe",
    "estimatedSpeakers": 5320859,
    "officialCountries": [
      {
        "countryCode": "GH",
        "officialStatus": "official_regional",
        "populationPercent": 11
      }
    ]
  },
  {
    "code": "ewo",
    "baseCode": "ewo",
    "type": "language",
    "name": "Ewondo",
    "estimatedSpeakers": 959949,
    "officialCountries": []
  },
  {
    "code": "ext",
    "baseCode": "ext",
    "type": "language",
    "name": "Extremaduran",
    "estimatedSpeakers": 231674,
    "officialCountries": []
  },
  {
    "code": "fan",
    "baseCode": "fan",
    "type": "language",
    "name": "Fang",
    "estimatedSpeakers": 915873,
    "officialCountries": []
  },
  {
    "code": "fo",
    "baseCode": "fo",
    "type": "language",
    "name": "Faroese",
    "estimatedSpeakers": 72984,
    "officialCountries": [
      {
        "countryCode": "FO",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ]
  },
  {
    "code": "hif",
    "baseCode": "hif",
    "type": "language",
    "name": "Fiji Hindi",
    "estimatedSpeakers": 390161,
    "officialCountries": [
      {
        "countryCode": "FJ",
        "officialStatus": "official",
        "populationPercent": 41
      }
    ]
  },
  {
    "code": "fj",
    "baseCode": "fj",
    "type": "language",
    "name": "Fijian",
    "estimatedSpeakers": 371128,
    "officialCountries": [
      {
        "countryCode": "FJ",
        "officialStatus": "official",
        "populationPercent": 39
      }
    ]
  },
  {
    "code": "fil",
    "baseCode": "fil",
    "type": "language",
    "name": "Filipino",
    "estimatedSpeakers": 73198318,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official",
        "populationPercent": 60
      }
    ]
  },
  {
    "code": "tl",
    "baseCode": "fil",
    "type": "language",
    "name": "Filipino",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "fi",
    "baseCode": "fi",
    "type": "language",
    "name": "Finnish",
    "estimatedSpeakers": 5789395,
    "officialCountries": [
      {
        "countryCode": "FI",
        "officialStatus": "official",
        "populationPercent": 94
      },
      {
        "countryCode": "SE",
        "officialStatus": "official_regional",
        "populationPercent": 2.2
      }
    ]
  },
  {
    "code": "fon",
    "baseCode": "fon",
    "type": "language",
    "name": "Fon",
    "estimatedSpeakers": 3674275,
    "officialCountries": []
  },
  {
    "code": "gur",
    "baseCode": "gur",
    "type": "language",
    "name": "Frafra",
    "estimatedSpeakers": 1210619,
    "officialCountries": []
  },
  {
    "code": "fr",
    "baseCode": "fr",
    "type": "language",
    "name": "French",
    "estimatedSpeakers": 332956351,
    "officialCountries": [
      {
        "countryCode": "BE",
        "officialStatus": "official",
        "populationPercent": 38
      },
      {
        "countryCode": "BF",
        "officialStatus": "official",
        "populationPercent": 25
      },
      {
        "countryCode": "BI",
        "officialStatus": "official",
        "populationPercent": 59
      },
      {
        "countryCode": "BJ",
        "officialStatus": "official",
        "populationPercent": 34
      },
      {
        "countryCode": "BL",
        "officialStatus": "official",
        "populationPercent": 85
      },
      {
        "countryCode": "CA",
        "officialStatus": "official",
        "populationPercent": 29
      },
      {
        "countryCode": "CD",
        "officialStatus": "official",
        "populationPercent": 51
      },
      {
        "countryCode": "CF",
        "officialStatus": "official",
        "populationPercent": 29
      },
      {
        "countryCode": "CG",
        "officialStatus": "official",
        "populationPercent": 61
      },
      {
        "countryCode": "CH",
        "officialStatus": "official",
        "populationPercent": 39
      },
      {
        "countryCode": "CI",
        "officialStatus": "official",
        "populationPercent": 34
      },
      {
        "countryCode": "CM",
        "officialStatus": "official",
        "populationPercent": 68
      },
      {
        "countryCode": "DJ",
        "officialStatus": "official",
        "populationPercent": 50
      },
      {
        "countryCode": "DZ",
        "officialStatus": "official",
        "populationPercent": 33
      },
      {
        "countryCode": "FR",
        "officialStatus": "official",
        "populationPercent": 97
      },
      {
        "countryCode": "GA",
        "officialStatus": "official",
        "populationPercent": 63
      },
      {
        "countryCode": "GF",
        "officialStatus": "official",
        "populationPercent": 62
      },
      {
        "countryCode": "GN",
        "officialStatus": "official",
        "populationPercent": 27
      },
      {
        "countryCode": "GP",
        "officialStatus": "official",
        "populationPercent": 84
      },
      {
        "countryCode": "GQ",
        "officialStatus": "official",
        "populationPercent": 29
      },
      {
        "countryCode": "HT",
        "officialStatus": "official",
        "populationPercent": 42
      },
      {
        "countryCode": "IT",
        "officialStatus": "official_regional",
        "populationPercent": 20
      },
      {
        "countryCode": "KM",
        "officialStatus": "official",
        "populationPercent": 26
      },
      {
        "countryCode": "LU",
        "officialStatus": "official",
        "populationPercent": 92
      },
      {
        "countryCode": "MA",
        "officialStatus": "de_facto_official",
        "populationPercent": 36
      },
      {
        "countryCode": "MC",
        "officialStatus": "official",
        "populationPercent": 97
      },
      {
        "countryCode": "MF",
        "officialStatus": "official",
        "populationPercent": 84
      },
      {
        "countryCode": "MG",
        "officialStatus": "official",
        "populationPercent": 27
      },
      {
        "countryCode": "ML",
        "officialStatus": "official",
        "populationPercent": 17
      },
      {
        "countryCode": "MQ",
        "officialStatus": "official",
        "populationPercent": 81
      },
      {
        "countryCode": "MU",
        "officialStatus": "official",
        "populationPercent": 73
      },
      {
        "countryCode": "NC",
        "officialStatus": "official",
        "populationPercent": 99
      },
      {
        "countryCode": "NE",
        "officialStatus": "official",
        "populationPercent": 13
      },
      {
        "countryCode": "PF",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "PM",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "RE",
        "officialStatus": "official",
        "populationPercent": 89
      },
      {
        "countryCode": "RW",
        "officialStatus": "official",
        "populationPercent": 5.8
      },
      {
        "countryCode": "SC",
        "officialStatus": "official",
        "populationPercent": 53
      },
      {
        "countryCode": "SN",
        "officialStatus": "official",
        "populationPercent": 26
      },
      {
        "countryCode": "TD",
        "officialStatus": "official",
        "populationPercent": 13
      },
      {
        "countryCode": "TG",
        "officialStatus": "official",
        "populationPercent": 41
      },
      {
        "countryCode": "TN",
        "officialStatus": "official",
        "populationPercent": 53
      },
      {
        "countryCode": "VU",
        "officialStatus": "official",
        "populationPercent": 31
      },
      {
        "countryCode": "WF",
        "officialStatus": "official",
        "populationPercent": 83
      },
      {
        "countryCode": "YT",
        "officialStatus": "official",
        "populationPercent": 63
      }
    ]
  },
  {
    "code": "fur",
    "baseCode": "fur",
    "type": "language",
    "name": "Friulian",
    "estimatedSpeakers": 36579,
    "officialCountries": []
  },
  {
    "code": "ff",
    "baseCode": "ff",
    "type": "language",
    "name": "Fula",
    "estimatedSpeakers": 8955865,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 21
      }
    ]
  },
  {
    "code": "fvr",
    "baseCode": "fvr",
    "type": "language",
    "name": "Fur",
    "estimatedSpeakers": 1362617,
    "officialCountries": []
  },
  {
    "code": "gaa",
    "baseCode": "gaa",
    "type": "language",
    "name": "Ga",
    "estimatedSpeakers": 968495,
    "officialCountries": [
      {
        "countryCode": "GH",
        "officialStatus": "official_regional",
        "populationPercent": 2.8
      }
    ]
  },
  {
    "code": "gag",
    "baseCode": "gag",
    "type": "language",
    "name": "Gagauz",
    "estimatedSpeakers": 118784,
    "officialCountries": []
  },
  {
    "code": "gl",
    "baseCode": "gl",
    "type": "language",
    "name": "Galician",
    "estimatedSpeakers": 3323918,
    "officialCountries": [
      {
        "countryCode": "ES",
        "officialStatus": "official_regional",
        "populationPercent": 7
      }
    ]
  },
  {
    "code": "gan",
    "baseCode": "gan",
    "type": "language",
    "name": "Gan Chinese",
    "estimatedSpeakers": 24072680,
    "officialCountries": []
  },
  {
    "code": "lg",
    "baseCode": "lg",
    "type": "language",
    "name": "Ganda",
    "estimatedSpeakers": 6406790,
    "officialCountries": []
  },
  {
    "code": "gbm",
    "baseCode": "gbm",
    "type": "language",
    "name": "Garhwali",
    "estimatedSpeakers": 3804651,
    "officialCountries": []
  },
  {
    "code": "cab",
    "baseCode": "cab",
    "type": "language",
    "name": "Garifuna",
    "estimatedSpeakers": 57616,
    "officialCountries": []
  },
  {
    "code": "grt",
    "baseCode": "grt",
    "type": "language",
    "name": "Garo",
    "estimatedSpeakers": 869988,
    "officialCountries": []
  },
  {
    "code": "gay",
    "baseCode": "gay",
    "type": "language",
    "name": "Gayo",
    "estimatedSpeakers": 337874,
    "officialCountries": []
  },
  {
    "code": "gez",
    "baseCode": "gez",
    "type": "language",
    "name": "Geez",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "ka",
    "baseCode": "ka",
    "type": "language",
    "name": "Georgian",
    "estimatedSpeakers": 4324687,
    "officialCountries": [
      {
        "countryCode": "GE",
        "officialStatus": "official",
        "populationPercent": 86
      }
    ]
  },
  {
    "code": "de",
    "baseCode": "de",
    "type": "language",
    "name": "German",
    "estimatedSpeakers": 141873197,
    "officialCountries": [
      {
        "countryCode": "AT",
        "officialStatus": "official",
        "populationPercent": 97
      },
      {
        "countryCode": "BE",
        "officialStatus": "official",
        "populationPercent": 22
      },
      {
        "countryCode": "CH",
        "officialStatus": "official",
        "populationPercent": 76
      },
      {
        "countryCode": "DE",
        "officialStatus": "official",
        "populationPercent": 91
      },
      {
        "countryCode": "DK",
        "officialStatus": "official_regional",
        "populationPercent": 47
      },
      {
        "countryCode": "LI",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "LU",
        "officialStatus": "official",
        "populationPercent": 63
      },
      {
        "countryCode": "PL",
        "officialStatus": "official_regional",
        "populationPercent": 19
      }
    ]
  },
  {
    "code": "aln",
    "baseCode": "aln",
    "type": "language",
    "name": "Gheg Albanian",
    "estimatedSpeakers": 1463047,
    "officialCountries": []
  },
  {
    "code": "bbj",
    "baseCode": "bbj",
    "type": "language",
    "name": "Ghomala",
    "estimatedSpeakers": 433525,
    "officialCountries": []
  },
  {
    "code": "glk",
    "baseCode": "glk",
    "type": "language",
    "name": "Gilaki",
    "estimatedSpeakers": 4065797,
    "officialCountries": []
  },
  {
    "code": "gil",
    "baseCode": "gil",
    "type": "language",
    "name": "Gilbertese",
    "estimatedSpeakers": 69927,
    "officialCountries": [
      {
        "countryCode": "KI",
        "officialStatus": "official",
        "populationPercent": 60
      }
    ]
  },
  {
    "code": "gon",
    "baseCode": "gon",
    "type": "language",
    "name": "Gondi",
    "estimatedSpeakers": 3381912,
    "officialCountries": []
  },
  {
    "code": "gor",
    "baseCode": "gor",
    "type": "language",
    "name": "Gorontalo",
    "estimatedSpeakers": 1154404,
    "officialCountries": []
  },
  {
    "code": "grb",
    "baseCode": "grb",
    "type": "language",
    "name": "Grebo",
    "estimatedSpeakers": 538288,
    "officialCountries": []
  },
  {
    "code": "el",
    "baseCode": "el",
    "type": "language",
    "name": "Greek",
    "estimatedSpeakers": 12249402,
    "officialCountries": [
      {
        "countryCode": "CY",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "GR",
        "officialStatus": "official",
        "populationPercent": 99
      }
    ]
  },
  {
    "code": "gos",
    "baseCode": "gos",
    "type": "language",
    "name": "Gronings",
    "estimatedSpeakers": 639806,
    "officialCountries": []
  },
  {
    "code": "gub",
    "baseCode": "gub",
    "type": "language",
    "name": "Guajajára",
    "estimatedSpeakers": 18484,
    "officialCountries": []
  },
  {
    "code": "gn",
    "baseCode": "gn",
    "type": "language",
    "name": "Guarani",
    "estimatedSpeakers": 6095531,
    "officialCountries": [
      {
        "countryCode": "PY",
        "officialStatus": "official",
        "populationPercent": 80
      }
    ]
  },
  {
    "code": "gcr",
    "baseCode": "gcr",
    "type": "language",
    "name": "Guianese Creole French",
    "estimatedSpeakers": 51872,
    "officialCountries": []
  },
  {
    "code": "gu",
    "baseCode": "gu",
    "type": "language",
    "name": "Gujarati",
    "estimatedSpeakers": 65626183,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 4.5
      }
    ]
  },
  {
    "code": "gju",
    "baseCode": "gju",
    "type": "language",
    "name": "Gujari",
    "estimatedSpeakers": 504728,
    "officialCountries": []
  },
  {
    "code": "guz",
    "baseCode": "guz",
    "type": "language",
    "name": "Gusii",
    "estimatedSpeakers": 2854074,
    "officialCountries": []
  },
  {
    "code": "gwi",
    "baseCode": "gwi",
    "type": "language",
    "name": "Gwichʼin",
    "estimatedSpeakers": 310,
    "officialCountries": [
      {
        "countryCode": "CA",
        "officialStatus": "official_regional",
        "populationPercent": 0.0008
      }
    ]
  },
  {
    "code": "hoj",
    "baseCode": "hoj",
    "type": "language",
    "name": "Hadothi",
    "estimatedSpeakers": 1155487,
    "officialCountries": []
  },
  {
    "code": "ht",
    "baseCode": "ht",
    "type": "language",
    "name": "Haitian Creole",
    "estimatedSpeakers": 9520659,
    "officialCountries": [
      {
        "countryCode": "HT",
        "officialStatus": "official",
        "populationPercent": 81
      }
    ]
  },
  {
    "code": "hak",
    "baseCode": "hak",
    "type": "language",
    "name": "Hakka Chinese",
    "estimatedSpeakers": 35164403,
    "officialCountries": [
      {
        "countryCode": "TW",
        "officialStatus": "official",
        "populationPercent": 11
      }
    ]
  },
  {
    "code": "hur",
    "baseCode": "hur",
    "type": "language",
    "name": "Halkomelem",
    "estimatedSpeakers": 1397,
    "officialCountries": []
  },
  {
    "code": "hnn",
    "baseCode": "hnn",
    "type": "language",
    "name": "Hanunoo",
    "estimatedSpeakers": 18924,
    "officialCountries": []
  },
  {
    "code": "bgc",
    "baseCode": "bgc",
    "type": "language",
    "name": "Haryanvi",
    "estimatedSpeakers": 16909560,
    "officialCountries": []
  },
  {
    "code": "mey",
    "baseCode": "mey",
    "type": "language",
    "name": "Hassaniyya",
    "estimatedSpeakers": 9251611,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 0.038
      }
    ]
  },
  {
    "code": "ha",
    "baseCode": "ha",
    "type": "language",
    "name": "Hausa",
    "estimatedSpeakers": 42826888,
    "officialCountries": []
  },
  {
    "code": "haw",
    "baseCode": "haw",
    "type": "language",
    "name": "Hawaiian",
    "estimatedSpeakers": 30435,
    "officialCountries": [
      {
        "countryCode": "US",
        "officialStatus": "official_regional",
        "populationPercent": 0.0089
      }
    ]
  },
  {
    "code": "haz",
    "baseCode": "haz",
    "type": "language",
    "name": "Hazaragi",
    "estimatedSpeakers": 2367174,
    "officialCountries": []
  },
  {
    "code": "he",
    "baseCode": "he",
    "type": "language",
    "name": "Hebrew",
    "estimatedSpeakers": 9402620,
    "officialCountries": [
      {
        "countryCode": "IL",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "hz",
    "baseCode": "hz",
    "type": "language",
    "name": "Herero",
    "estimatedSpeakers": 255133,
    "officialCountries": []
  },
  {
    "code": "hil",
    "baseCode": "hil",
    "type": "language",
    "name": "Hiligaynon",
    "estimatedSpeakers": 9935268,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official_regional",
        "populationPercent": 8.4
      }
    ]
  },
  {
    "code": "srx",
    "baseCode": "srx",
    "type": "language",
    "name": "Himachali languages",
    "estimatedSpeakers": 493196,
    "officialCountries": []
  },
  {
    "code": "hi",
    "baseCode": "hi",
    "type": "language",
    "name": "Hindi",
    "estimatedSpeakers": 580318483,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official",
        "populationPercent": 41
      }
    ]
  },
  {
    "code": "ho",
    "baseCode": "ho",
    "type": "language",
    "name": "Hiri Motu",
    "estimatedSpeakers": 210970,
    "officialCountries": [
      {
        "countryCode": "PG",
        "officialStatus": "official",
        "populationPercent": 2.1
      }
    ]
  },
  {
    "code": "mww",
    "baseCode": "mww",
    "type": "language",
    "name": "Hmong Daw",
    "estimatedSpeakers": 2179939,
    "officialCountries": []
  },
  {
    "code": "hnj",
    "baseCode": "hnj",
    "type": "language",
    "name": "Hmong Njua",
    "estimatedSpeakers": 815128,
    "officialCountries": []
  },
  {
    "code": "hoc",
    "baseCode": "hoc",
    "type": "language",
    "name": "Ho",
    "estimatedSpeakers": 1395039,
    "officialCountries": []
  },
  {
    "code": "hu",
    "baseCode": "hu",
    "type": "language",
    "name": "Hungarian",
    "estimatedSpeakers": 12313192,
    "officialCountries": [
      {
        "countryCode": "AT",
        "officialStatus": "official_regional",
        "populationPercent": 0.26
      },
      {
        "countryCode": "HU",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "RS",
        "officialStatus": "official_regional",
        "populationPercent": 4.8
      }
    ]
  },
  {
    "code": "iba",
    "baseCode": "iba",
    "type": "language",
    "name": "Iban",
    "estimatedSpeakers": 864120,
    "officialCountries": []
  },
  {
    "code": "ibb",
    "baseCode": "ibb",
    "type": "language",
    "name": "Ibibio",
    "estimatedSpeakers": 3314458,
    "officialCountries": []
  },
  {
    "code": "is",
    "baseCode": "is",
    "type": "language",
    "name": "Icelandic",
    "estimatedSpeakers": 364036,
    "officialCountries": [
      {
        "countryCode": "IS",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "io",
    "baseCode": "io",
    "type": "language",
    "name": "Ido",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "ife",
    "baseCode": "ife",
    "type": "language",
    "name": "Ifè",
    "estimatedSpeakers": 115934,
    "officialCountries": []
  },
  {
    "code": "ig",
    "baseCode": "ig",
    "type": "language",
    "name": "Igbo",
    "estimatedSpeakers": 30777110,
    "officialCountries": []
  },
  {
    "code": "ilo",
    "baseCode": "ilo",
    "type": "language",
    "name": "Iloko",
    "estimatedSpeakers": 11354592,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official_regional",
        "populationPercent": 9.6
      }
    ]
  },
  {
    "code": "smn",
    "baseCode": "smn",
    "type": "language",
    "name": "Inari Sami",
    "estimatedSpeakers": 619,
    "officialCountries": []
  },
  {
    "code": "id",
    "baseCode": "id",
    "type": "language",
    "name": "Indonesian",
    "estimatedSpeakers": 180519583,
    "officialCountries": [
      {
        "countryCode": "ID",
        "officialStatus": "official",
        "populationPercent": 64
      }
    ]
  },
  {
    "code": "mvy",
    "baseCode": "mvy",
    "type": "language",
    "name": "Indus Kohistani",
    "estimatedSpeakers": 353310,
    "officialCountries": []
  },
  {
    "code": "izh",
    "baseCode": "izh",
    "type": "language",
    "name": "Ingrian",
    "estimatedSpeakers": 141,
    "officialCountries": []
  },
  {
    "code": "inh",
    "baseCode": "inh",
    "type": "language",
    "name": "Ingush",
    "estimatedSpeakers": 225314,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.16
      }
    ]
  },
  {
    "code": "moe",
    "baseCode": "moe",
    "type": "language",
    "name": "Innu-aimun",
    "estimatedSpeakers": 11638,
    "officialCountries": []
  },
  {
    "code": "ia",
    "baseCode": "ia",
    "type": "language",
    "name": "Interlingua",
    "estimatedSpeakers": 137,
    "officialCountries": []
  },
  {
    "code": "ie",
    "baseCode": "ie",
    "type": "language",
    "name": "Interlingue",
    "estimatedSpeakers": 1,
    "officialCountries": []
  },
  {
    "code": "iu",
    "baseCode": "iu",
    "type": "language",
    "name": "Inuktitut",
    "estimatedSpeakers": 42674,
    "officialCountries": [
      {
        "countryCode": "CA",
        "officialStatus": "official_regional",
        "populationPercent": 0.11
      }
    ]
  },
  {
    "code": "ik",
    "baseCode": "ik",
    "type": "language",
    "name": "Inupiaq",
    "estimatedSpeakers": 7865,
    "officialCountries": []
  },
  {
    "code": "ga",
    "baseCode": "ga",
    "type": "language",
    "name": "Irish",
    "estimatedSpeakers": 1254050,
    "officialCountries": [
      {
        "countryCode": "GB",
        "officialStatus": "official_regional",
        "populationPercent": 0.15
      },
      {
        "countryCode": "IE",
        "officialStatus": "official",
        "populationPercent": 22
      }
    ]
  },
  {
    "code": "it",
    "baseCode": "it",
    "type": "language",
    "name": "Italian",
    "estimatedSpeakers": 70475319,
    "officialCountries": [
      {
        "countryCode": "CH",
        "officialStatus": "official",
        "populationPercent": 15
      },
      {
        "countryCode": "HR",
        "officialStatus": "official_regional",
        "populationPercent": 1.6
      },
      {
        "countryCode": "IT",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "SM",
        "officialStatus": "official",
        "populationPercent": 89
      },
      {
        "countryCode": "VA",
        "officialStatus": "de_facto_official",
        "populationPercent": 82
      }
    ]
  },
  {
    "code": "itz",
    "baseCode": "itz",
    "type": "language",
    "name": "Itzá",
    "estimatedSpeakers": 1661,
    "officialCountries": []
  },
  {
    "code": "ixl",
    "baseCode": "ixl",
    "type": "language",
    "name": "Ixil",
    "estimatedSpeakers": 162471,
    "officialCountries": [
      {
        "countryCode": "GT",
        "officialStatus": "official_regional",
        "populationPercent": 0.89
      }
    ]
  },
  {
    "code": "jam",
    "baseCode": "jam",
    "type": "language",
    "name": "Jamaican Creole English",
    "estimatedSpeakers": 2682525,
    "officialCountries": []
  },
  {
    "code": "ja",
    "baseCode": "ja",
    "type": "language",
    "name": "Japanese",
    "estimatedSpeakers": 117608755,
    "officialCountries": [
      {
        "countryCode": "JP",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ]
  },
  {
    "code": "jv",
    "baseCode": "jv",
    "type": "language",
    "name": "Javanese",
    "estimatedSpeakers": 96145858,
    "officialCountries": []
  },
  {
    "code": "bze",
    "baseCode": "bze",
    "type": "language",
    "name": "Jenaama Bozo",
    "estimatedSpeakers": 186920,
    "officialCountries": []
  },
  {
    "code": "kaj",
    "baseCode": "kaj",
    "type": "language",
    "name": "Jju",
    "estimatedSpeakers": 497169,
    "officialCountries": []
  },
  {
    "code": "dyo",
    "baseCode": "dyo",
    "type": "language",
    "name": "Jola-Fonyi",
    "estimatedSpeakers": 490035,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 2.6
      }
    ]
  },
  {
    "code": "jml",
    "baseCode": "jml",
    "type": "language",
    "name": "Jumli",
    "estimatedSpeakers": 995917,
    "officialCountries": []
  },
  {
    "code": "jut",
    "baseCode": "jut",
    "type": "language",
    "name": "Jutish",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "kbd",
    "baseCode": "kbd",
    "type": "language",
    "name": "Kabardian",
    "estimatedSpeakers": 1084265,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.31
      }
    ]
  },
  {
    "code": "kea",
    "baseCode": "kea",
    "type": "language",
    "name": "Kabuverdianu",
    "estimatedSpeakers": 556023,
    "officialCountries": []
  },
  {
    "code": "kab",
    "baseCode": "kab",
    "type": "language",
    "name": "Kabyle",
    "estimatedSpeakers": 3667755,
    "officialCountries": []
  },
  {
    "code": "kfr",
    "baseCode": "kfr",
    "type": "language",
    "name": "Kachhi",
    "estimatedSpeakers": 1056848,
    "officialCountries": []
  },
  {
    "code": "gjk",
    "baseCode": "gjk",
    "type": "language",
    "name": "Kachi Koli",
    "estimatedSpeakers": 277600,
    "officialCountries": []
  },
  {
    "code": "kac",
    "baseCode": "kac",
    "type": "language",
    "name": "Kachin",
    "estimatedSpeakers": 977961,
    "officialCountries": []
  },
  {
    "code": "kgp",
    "baseCode": "kgp",
    "type": "language",
    "name": "Kaingang",
    "estimatedSpeakers": 52812,
    "officialCountries": []
  },
  {
    "code": "kkj",
    "baseCode": "kkj",
    "type": "language",
    "name": "Kako",
    "estimatedSpeakers": 167217,
    "officialCountries": []
  },
  {
    "code": "kl",
    "baseCode": "kl",
    "type": "language",
    "name": "Kalaallisut",
    "estimatedSpeakers": 55679,
    "officialCountries": [
      {
        "countryCode": "DK",
        "officialStatus": "official_regional",
        "populationPercent": 0.12
      },
      {
        "countryCode": "GL",
        "officialStatus": "official",
        "populationPercent": 84
      }
    ]
  },
  {
    "code": "kck",
    "baseCode": "kck",
    "type": "language",
    "name": "Kalanga",
    "estimatedSpeakers": 908971,
    "officialCountries": []
  },
  {
    "code": "kln",
    "baseCode": "kln",
    "type": "language",
    "name": "Kalenjin",
    "estimatedSpeakers": 4426726,
    "officialCountries": []
  },
  {
    "code": "rmf",
    "baseCode": "rmf",
    "type": "language",
    "name": "Kalo Finnish Romani",
    "estimatedSpeakers": 5008,
    "officialCountries": []
  },
  {
    "code": "kam",
    "baseCode": "kam",
    "type": "language",
    "name": "Kamba",
    "estimatedSpeakers": 4426726,
    "officialCountries": []
  },
  {
    "code": "bjj",
    "baseCode": "bjj",
    "type": "language",
    "name": "Kanauji",
    "estimatedSpeakers": 7891128,
    "officialCountries": []
  },
  {
    "code": "xnr",
    "baseCode": "xnr",
    "type": "language",
    "name": "Kangri",
    "estimatedSpeakers": 2254608,
    "officialCountries": []
  },
  {
    "code": "kn",
    "baseCode": "kn",
    "type": "language",
    "name": "Kannada",
    "estimatedSpeakers": 52137810,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 3.7
      }
    ]
  },
  {
    "code": "kr",
    "baseCode": "kr",
    "type": "language",
    "name": "Kanuri",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "kqn",
    "baseCode": "kqn",
    "type": "language",
    "name": "Kaonde",
    "estimatedSpeakers": 395183,
    "officialCountries": []
  },
  {
    "code": "cak",
    "baseCode": "cak",
    "type": "language",
    "name": "Kaqchikel",
    "estimatedSpeakers": 1606458,
    "officialCountries": [
      {
        "countryCode": "GT",
        "officialStatus": "official_regional",
        "populationPercent": 8.8
      }
    ]
  },
  {
    "code": "kaa",
    "baseCode": "kaa",
    "type": "language",
    "name": "Kara-Kalpak",
    "estimatedSpeakers": 1458023,
    "officialCountries": []
  },
  {
    "code": "krc",
    "baseCode": "krc",
    "type": "language",
    "name": "Karachay-Balkar",
    "estimatedSpeakers": 239396,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.17
      }
    ]
  },
  {
    "code": "krl",
    "baseCode": "krl",
    "type": "language",
    "name": "Karelian",
    "estimatedSpeakers": 115473,
    "officialCountries": []
  },
  {
    "code": "ks",
    "baseCode": "ks",
    "type": "language",
    "name": "Kashmiri",
    "estimatedSpeakers": 5951564,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.41
      }
    ]
  },
  {
    "code": "csb",
    "baseCode": "csb",
    "type": "language",
    "name": "Kashubian",
    "estimatedSpeakers": 50370,
    "officialCountries": [
      {
        "countryCode": "PL",
        "officialStatus": "official_regional",
        "populationPercent": 0.13
      }
    ]
  },
  {
    "code": "tkt",
    "baseCode": "tkt",
    "type": "language",
    "name": "Kathoriya Tharu",
    "estimatedSpeakers": 74694,
    "officialCountries": []
  },
  {
    "code": "kaw",
    "baseCode": "kaw",
    "type": "language",
    "name": "Kawi",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "kk",
    "baseCode": "kk",
    "type": "language",
    "name": "Kazakh",
    "estimatedSpeakers": 14411915,
    "officialCountries": [
      {
        "countryCode": "KZ",
        "officialStatus": "official",
        "populationPercent": 64
      }
    ]
  },
  {
    "code": "kek",
    "baseCode": "kek",
    "type": "language",
    "name": "Kekchí",
    "estimatedSpeakers": 1633484,
    "officialCountries": []
  },
  {
    "code": "ken",
    "baseCode": "ken",
    "type": "language",
    "name": "Kenyang",
    "estimatedSpeakers": 77415,
    "officialCountries": []
  },
  {
    "code": "kvr",
    "baseCode": "kvr",
    "type": "language",
    "name": "Kerinci",
    "estimatedSpeakers": 394187,
    "officialCountries": []
  },
  {
    "code": "kht",
    "baseCode": "kht",
    "type": "language",
    "name": "Khamti",
    "estimatedSpeakers": 12712,
    "officialCountries": []
  },
  {
    "code": "khn",
    "baseCode": "khn",
    "type": "language",
    "name": "Khandesi",
    "estimatedSpeakers": 2113695,
    "officialCountries": []
  },
  {
    "code": "kha",
    "baseCode": "kha",
    "type": "language",
    "name": "Khasi",
    "estimatedSpeakers": 1127304,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.08
      }
    ]
  },
  {
    "code": "km",
    "baseCode": "km",
    "type": "language",
    "name": "Khmer",
    "estimatedSpeakers": 15186693,
    "officialCountries": [
      {
        "countryCode": "KH",
        "officialStatus": "official",
        "populationPercent": 89
      }
    ]
  },
  {
    "code": "kjg",
    "baseCode": "kjg",
    "type": "language",
    "name": "Khmu",
    "estimatedSpeakers": 461306,
    "officialCountries": []
  },
  {
    "code": "khw",
    "baseCode": "khw",
    "type": "language",
    "name": "Khowar",
    "estimatedSpeakers": 378546,
    "officialCountries": []
  },
  {
    "code": "ki",
    "baseCode": "ki",
    "type": "language",
    "name": "Kikuyu",
    "estimatedSpeakers": 9901888,
    "officialCountries": []
  },
  {
    "code": "kmb",
    "baseCode": "kmb",
    "type": "language",
    "name": "Kimbundu",
    "estimatedSpeakers": 9300525,
    "officialCountries": []
  },
  {
    "code": "krj",
    "baseCode": "krj",
    "type": "language",
    "name": "Kinaray-a",
    "estimatedSpeakers": 461280,
    "officialCountries": []
  },
  {
    "code": "rw",
    "baseCode": "rw",
    "type": "language",
    "name": "Kinyarwanda",
    "estimatedSpeakers": 11963415,
    "officialCountries": [
      {
        "countryCode": "RW",
        "officialStatus": "official",
        "populationPercent": 77
      }
    ]
  },
  {
    "code": "kiu",
    "baseCode": "kiu",
    "type": "language",
    "name": "Kirmanjki",
    "estimatedSpeakers": 159827,
    "officialCountries": []
  },
  {
    "code": "mwk",
    "baseCode": "mwk",
    "type": "language",
    "name": "Kita Maninkakan",
    "estimatedSpeakers": 1099530,
    "officialCountries": []
  },
  {
    "code": "thq",
    "baseCode": "thq",
    "type": "language",
    "name": "Kochila Tharu",
    "estimatedSpeakers": 311224,
    "officialCountries": []
  },
  {
    "code": "bkm",
    "baseCode": "bkm",
    "type": "language",
    "name": "Kom",
    "estimatedSpeakers": 402559,
    "officialCountries": []
  },
  {
    "code": "kge",
    "baseCode": "kge",
    "type": "language",
    "name": "Komering",
    "estimatedSpeakers": 900998,
    "officialCountries": []
  },
  {
    "code": "kv",
    "baseCode": "kv",
    "type": "language",
    "name": "Komi",
    "estimatedSpeakers": 253478,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.18
      }
    ]
  },
  {
    "code": "koi",
    "baseCode": "koi",
    "type": "language",
    "name": "Komi-Permyak",
    "estimatedSpeakers": 63369,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.045
      }
    ]
  },
  {
    "code": "kg",
    "baseCode": "kg",
    "type": "language",
    "name": "Kongo",
    "estimatedSpeakers": 1731045,
    "officialCountries": [
      {
        "countryCode": "CD",
        "officialStatus": "official_regional",
        "populationPercent": 1.5
      }
    ]
  },
  {
    "code": "kok",
    "baseCode": "kok",
    "type": "language",
    "name": "Konkani",
    "estimatedSpeakers": 4509216,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.32
      }
    ]
  },
  {
    "code": "knn",
    "baseCode": "knn",
    "type": "language",
    "name": "Konkani (individual language)",
    "estimatedSpeakers": 5213781,
    "officialCountries": []
  },
  {
    "code": "ko",
    "baseCode": "ko",
    "type": "language",
    "name": "Korean",
    "estimatedSpeakers": 79278717,
    "officialCountries": [
      {
        "countryCode": "CN",
        "officialStatus": "official_regional",
        "populationPercent": 0.15
      },
      {
        "countryCode": "KP",
        "officialStatus": "official",
        "populationPercent": 88
      },
      {
        "countryCode": "KR",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "kfo",
    "baseCode": "kfo",
    "type": "language",
    "name": "Koro",
    "estimatedSpeakers": 68958,
    "officialCountries": []
  },
  {
    "code": "bqv",
    "baseCode": "bqv",
    "type": "language",
    "name": "Koro Wachi",
    "estimatedSpeakers": 50969,
    "officialCountries": []
  },
  {
    "code": "kos",
    "baseCode": "kos",
    "type": "language",
    "name": "Kosraean",
    "estimatedSpeakers": 7968,
    "officialCountries": []
  },
  {
    "code": "khq",
    "baseCode": "khq",
    "type": "language",
    "name": "Koyra Chiini",
    "estimatedSpeakers": 373840,
    "officialCountries": []
  },
  {
    "code": "ses",
    "baseCode": "ses",
    "type": "language",
    "name": "Koyraboro Senni",
    "estimatedSpeakers": 747680,
    "officialCountries": []
  },
  {
    "code": "kpe",
    "baseCode": "kpe",
    "type": "language",
    "name": "Kpelle",
    "estimatedSpeakers": 1618926,
    "officialCountries": []
  },
  {
    "code": "kri",
    "baseCode": "kri",
    "type": "language",
    "name": "Krio",
    "estimatedSpeakers": 8664998,
    "officialCountries": []
  },
  {
    "code": "kro",
    "baseCode": "kro",
    "type": "language",
    "name": "Kru languages",
    "estimatedSpeakers": 543725,
    "officialCountries": []
  },
  {
    "code": "kj",
    "baseCode": "kj",
    "type": "language",
    "name": "Kuanyama",
    "estimatedSpeakers": 981281,
    "officialCountries": []
  },
  {
    "code": "kfy",
    "baseCode": "kfy",
    "type": "language",
    "name": "Kumaoni",
    "estimatedSpeakers": 3100086,
    "officialCountries": []
  },
  {
    "code": "kum",
    "baseCode": "kum",
    "type": "language",
    "name": "Kumyk",
    "estimatedSpeakers": 281642,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.2
      }
    ]
  },
  {
    "code": "ku",
    "baseCode": "ku",
    "type": "language",
    "name": "Kurdish",
    "estimatedSpeakers": 12075882,
    "officialCountries": []
  },
  {
    "code": "kru",
    "baseCode": "kru",
    "type": "language",
    "name": "Kurukh",
    "estimatedSpeakers": 2677347,
    "officialCountries": []
  },
  {
    "code": "kxv",
    "baseCode": "kxv",
    "type": "language",
    "name": "Kuvi",
    "estimatedSpeakers": 40865,
    "officialCountries": []
  },
  {
    "code": "kdt",
    "baseCode": "kdt",
    "type": "language",
    "name": "Kuy",
    "estimatedSpeakers": 430745,
    "officialCountries": []
  },
  {
    "code": "kwk",
    "baseCode": "kwk",
    "type": "language",
    "name": "Kwakʼwala",
    "estimatedSpeakers": 815,
    "officialCountries": []
  },
  {
    "code": "nmg",
    "baseCode": "nmg",
    "type": "language",
    "name": "Kwasio",
    "estimatedSpeakers": 8980,
    "officialCountries": []
  },
  {
    "code": "ky",
    "baseCode": "ky",
    "type": "language",
    "name": "Kyrgyz",
    "estimatedSpeakers": 3445239,
    "officialCountries": [
      {
        "countryCode": "KG",
        "officialStatus": "official",
        "populationPercent": 48
      }
    ]
  },
  {
    "code": "quc",
    "baseCode": "quc",
    "type": "language",
    "name": "Kʼicheʼ",
    "estimatedSpeakers": 1569947,
    "officialCountries": [
      {
        "countryCode": "GT",
        "officialStatus": "official_regional",
        "populationPercent": 8.6
      }
    ]
  },
  {
    "code": "lld",
    "baseCode": "lld",
    "type": "language",
    "name": "Ladin",
    "estimatedSpeakers": 29263,
    "officialCountries": []
  },
  {
    "code": "lad",
    "baseCode": "lad",
    "type": "language",
    "name": "Ladino",
    "estimatedSpeakers": 122234,
    "officialCountries": []
  },
  {
    "code": "lbe",
    "baseCode": "lbe",
    "type": "language",
    "name": "Lak",
    "estimatedSpeakers": 109840,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.078
      }
    ]
  },
  {
    "code": "lki",
    "baseCode": "lki",
    "type": "language",
    "name": "Laki",
    "estimatedSpeakers": 671740,
    "officialCountries": []
  },
  {
    "code": "lkt",
    "baseCode": "lkt",
    "type": "language",
    "name": "Lakota",
    "estimatedSpeakers": 8207,
    "officialCountries": []
  },
  {
    "code": "leb",
    "baseCode": "leb",
    "type": "language",
    "name": "Lala-Bisa",
    "estimatedSpeakers": 582375,
    "officialCountries": []
  },
  {
    "code": "lmn",
    "baseCode": "lmn",
    "type": "language",
    "name": "Lambadi",
    "estimatedSpeakers": 3804651,
    "officialCountries": []
  },
  {
    "code": "ljp",
    "baseCode": "ljp",
    "type": "language",
    "name": "Lampung Api",
    "estimatedSpeakers": 1942778,
    "officialCountries": []
  },
  {
    "code": "lag",
    "baseCode": "lag",
    "type": "language",
    "name": "Langi",
    "estimatedSpeakers": 586920,
    "officialCountries": []
  },
  {
    "code": "laj",
    "baseCode": "laj",
    "type": "language",
    "name": "Lango (Uganda)",
    "estimatedSpeakers": 1872754,
    "officialCountries": []
  },
  {
    "code": "lo",
    "baseCode": "lo",
    "type": "language",
    "name": "Lao",
    "estimatedSpeakers": 5487956,
    "officialCountries": [
      {
        "countryCode": "LA",
        "officialStatus": "official",
        "populationPercent": 69
      }
    ]
  },
  {
    "code": "ltg",
    "baseCode": "ltg",
    "type": "language",
    "name": "Latgalian",
    "estimatedSpeakers": 160311,
    "officialCountries": []
  },
  {
    "code": "la",
    "baseCode": "la",
    "type": "language",
    "name": "Latin",
    "estimatedSpeakers": 820,
    "officialCountries": []
  },
  {
    "code": "lv",
    "baseCode": "lv",
    "type": "language",
    "name": "Latvian",
    "estimatedSpeakers": 1098763,
    "officialCountries": [
      {
        "countryCode": "LV",
        "officialStatus": "official",
        "populationPercent": 61
      }
    ]
  },
  {
    "code": "lzz",
    "baseCode": "lzz",
    "type": "language",
    "name": "Laz",
    "estimatedSpeakers": 21128,
    "officialCountries": []
  },
  {
    "code": "len",
    "baseCode": "len",
    "type": "language",
    "name": "Lenca",
    "estimatedSpeakers": 1326,
    "officialCountries": []
  },
  {
    "code": "lep",
    "baseCode": "lep",
    "type": "language",
    "name": "Lepcha",
    "estimatedSpeakers": 86649,
    "officialCountries": []
  },
  {
    "code": "lez",
    "baseCode": "lez",
    "type": "language",
    "name": "Lezghian",
    "estimatedSpeakers": 253478,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.18
      }
    ]
  },
  {
    "code": "lir",
    "baseCode": "lir",
    "type": "language",
    "name": "Liberian English",
    "estimatedSpeakers": 4023565,
    "officialCountries": []
  },
  {
    "code": "lij",
    "baseCode": "lij",
    "type": "language",
    "name": "Ligurian",
    "estimatedSpeakers": 524298,
    "officialCountries": []
  },
  {
    "code": "lil",
    "baseCode": "lil",
    "type": "language",
    "name": "Lillooet",
    "estimatedSpeakers": 582,
    "officialCountries": []
  },
  {
    "code": "lif",
    "baseCode": "lif",
    "type": "language",
    "name": "Limbu",
    "estimatedSpeakers": 378984,
    "officialCountries": []
  },
  {
    "code": "li",
    "baseCode": "li",
    "type": "language",
    "name": "Limburgish",
    "estimatedSpeakers": 977482,
    "officialCountries": []
  },
  {
    "code": "ln",
    "baseCode": "ln",
    "type": "language",
    "name": "Lingala",
    "estimatedSpeakers": 3986653,
    "officialCountries": [
      {
        "countryCode": "CD",
        "officialStatus": "official_regional",
        "populationPercent": 3.1
      }
    ]
  },
  {
    "code": "lis",
    "baseCode": "lis",
    "type": "language",
    "name": "Lisu",
    "estimatedSpeakers": 637218,
    "officialCountries": []
  },
  {
    "code": "lzh",
    "baseCode": "lzh",
    "type": "language",
    "name": "Literary Chinese",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "lt",
    "baseCode": "lt",
    "type": "language",
    "name": "Lithuanian",
    "estimatedSpeakers": 2405298,
    "officialCountries": [
      {
        "countryCode": "LT",
        "officialStatus": "official",
        "populationPercent": 86
      },
      {
        "countryCode": "PL",
        "officialStatus": "official_regional",
        "populationPercent": 0.021
      }
    ]
  },
  {
    "code": "jbo",
    "baseCode": "jbo",
    "type": "language",
    "name": "Lojban",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "lmo",
    "baseCode": "lmo",
    "type": "language",
    "name": "Lombard",
    "estimatedSpeakers": 3838283,
    "officialCountries": []
  },
  {
    "code": "ngl",
    "baseCode": "ngl",
    "type": "language",
    "name": "Lomwe",
    "estimatedSpeakers": 2267868,
    "officialCountries": []
  },
  {
    "code": "nds",
    "baseCode": "nds",
    "type": "language",
    "name": "Low German",
    "estimatedSpeakers": 12049256,
    "officialCountries": []
  },
  {
    "code": "sli",
    "baseCode": "sli",
    "type": "language",
    "name": "Lower Silesian",
    "estimatedSpeakers": 12011,
    "officialCountries": []
  },
  {
    "code": "dsb",
    "baseCode": "dsb",
    "type": "language",
    "name": "Lower Sorbian",
    "estimatedSpeakers": 6982,
    "officialCountries": []
  },
  {
    "code": "loz",
    "baseCode": "loz",
    "type": "language",
    "name": "Lozi",
    "estimatedSpeakers": 1143951,
    "officialCountries": []
  },
  {
    "code": "khb",
    "baseCode": "khb",
    "type": "language",
    "name": "Lü",
    "estimatedSpeakers": 269048,
    "officialCountries": []
  },
  {
    "code": "lu",
    "baseCode": "lu",
    "type": "language",
    "name": "Luba-Katanga",
    "estimatedSpeakers": 2654269,
    "officialCountries": []
  },
  {
    "code": "lua",
    "baseCode": "lua",
    "type": "language",
    "name": "Luba-Lulua",
    "estimatedSpeakers": 11078688,
    "officialCountries": [
      {
        "countryCode": "CD",
        "officialStatus": "official_regional",
        "populationPercent": 9.6
      }
    ]
  },
  {
    "code": "smj",
    "baseCode": "smj",
    "type": "language",
    "name": "Lule Sami",
    "estimatedSpeakers": 1483,
    "officialCountries": []
  },
  {
    "code": "lun",
    "baseCode": "lun",
    "type": "language",
    "name": "Lunda",
    "estimatedSpeakers": 395183,
    "officialCountries": []
  },
  {
    "code": "luo",
    "baseCode": "luo",
    "type": "language",
    "name": "Luo",
    "estimatedSpeakers": 5708147,
    "officialCountries": []
  },
  {
    "code": "lue",
    "baseCode": "lue",
    "type": "language",
    "name": "Luvale",
    "estimatedSpeakers": 311987,
    "officialCountries": []
  },
  {
    "code": "lb",
    "baseCode": "lb",
    "type": "language",
    "name": "Luxembourgish",
    "estimatedSpeakers": 449740,
    "officialCountries": [
      {
        "countryCode": "LU",
        "officialStatus": "official",
        "populationPercent": 67
      }
    ]
  },
  {
    "code": "luy",
    "baseCode": "luy",
    "type": "language",
    "name": "Luyia",
    "estimatedSpeakers": 6407104,
    "officialCountries": []
  },
  {
    "code": "ffm",
    "baseCode": "ffm",
    "type": "language",
    "name": "Maasina Fulfulde",
    "estimatedSpeakers": 1693276,
    "officialCountries": []
  },
  {
    "code": "mk",
    "baseCode": "mk",
    "type": "language",
    "name": "Macedonian",
    "estimatedSpeakers": 1612846,
    "officialCountries": [
      {
        "countryCode": "MK",
        "officialStatus": "official",
        "populationPercent": 67
      }
    ]
  },
  {
    "code": "jmc",
    "baseCode": "jmc",
    "type": "language",
    "name": "Machame",
    "estimatedSpeakers": 499220,
    "officialCountries": []
  },
  {
    "code": "mad",
    "baseCode": "mad",
    "type": "language",
    "name": "Madurese",
    "estimatedSpeakers": 17738406,
    "officialCountries": []
  },
  {
    "code": "maf",
    "baseCode": "maf",
    "type": "language",
    "name": "Mafa",
    "estimatedSpeakers": 229149,
    "officialCountries": []
  },
  {
    "code": "mag",
    "baseCode": "mag",
    "type": "language",
    "name": "Magahi",
    "estimatedSpeakers": 16909560,
    "officialCountries": []
  },
  {
    "code": "mdh",
    "baseCode": "mdh",
    "type": "language",
    "name": "Maguindanaon",
    "estimatedSpeakers": 1419324,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official_regional",
        "populationPercent": 1.2
      }
    ]
  },
  {
    "code": "vmf",
    "baseCode": "vmf",
    "type": "language",
    "name": "Main-Franconian",
    "estimatedSpeakers": 5047146,
    "officialCountries": []
  },
  {
    "code": "mai",
    "baseCode": "mai",
    "type": "language",
    "name": "Maithili",
    "estimatedSpeakers": 20333024,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 1.2
      }
    ]
  },
  {
    "code": "mak",
    "baseCode": "mak",
    "type": "language",
    "name": "Makasar",
    "estimatedSpeakers": 2055403,
    "officialCountries": []
  },
  {
    "code": "vmw",
    "baseCode": "vmw",
    "type": "language",
    "name": "Makhuwa",
    "estimatedSpeakers": 4335630,
    "officialCountries": []
  },
  {
    "code": "mgh",
    "baseCode": "mgh",
    "type": "language",
    "name": "Makhuwa-Meetto",
    "estimatedSpeakers": 1500795,
    "officialCountries": []
  },
  {
    "code": "kde",
    "baseCode": "kde",
    "type": "language",
    "name": "Makonde",
    "estimatedSpeakers": 1686553,
    "officialCountries": []
  },
  {
    "code": "mg",
    "baseCode": "mg",
    "type": "language",
    "name": "Malagasy",
    "estimatedSpeakers": 26507430,
    "officialCountries": [
      {
        "countryCode": "MG",
        "officialStatus": "official",
        "populationPercent": 90
      }
    ]
  },
  {
    "code": "ms",
    "baseCode": "ms",
    "type": "language",
    "name": "Malay",
    "estimatedSpeakers": 36798658,
    "officialCountries": [
      {
        "countryCode": "BN",
        "officialStatus": "official",
        "populationPercent": 93
      },
      {
        "countryCode": "MY",
        "officialStatus": "official",
        "populationPercent": 75
      },
      {
        "countryCode": "SG",
        "officialStatus": "official",
        "populationPercent": 14
      }
    ]
  },
  {
    "code": "ml",
    "baseCode": "ml",
    "type": "language",
    "name": "Malayalam",
    "estimatedSpeakers": 45922589,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 3.2
      }
    ]
  },
  {
    "code": "pqm",
    "baseCode": "pqm",
    "type": "language",
    "name": "Maliseet-Passamaquoddy",
    "estimatedSpeakers": 815,
    "officialCountries": []
  },
  {
    "code": "mt",
    "baseCode": "mt",
    "type": "language",
    "name": "Maltese",
    "estimatedSpeakers": 469730,
    "officialCountries": [
      {
        "countryCode": "MT",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "mam",
    "baseCode": "mam",
    "type": "language",
    "name": "Mam",
    "estimatedSpeakers": 839739,
    "officialCountries": []
  },
  {
    "code": "mdr",
    "baseCode": "mdr",
    "type": "language",
    "name": "Mandar",
    "estimatedSpeakers": 259037,
    "officialCountries": []
  },
  {
    "code": "man",
    "baseCode": "man",
    "type": "language",
    "name": "Mandingo",
    "estimatedSpeakers": 3948592,
    "officialCountries": []
  },
  {
    "code": "mfv",
    "baseCode": "mfv",
    "type": "language",
    "name": "Mandjak",
    "estimatedSpeakers": 145126,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 0.77
      }
    ]
  },
  {
    "code": "mni",
    "baseCode": "mni",
    "type": "language",
    "name": "Manipuri",
    "estimatedSpeakers": 1568600,
    "officialCountries": []
  },
  {
    "code": "knf",
    "baseCode": "knf",
    "type": "language",
    "name": "Mankanya",
    "estimatedSpeakers": 95020,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 0.21
      }
    ]
  },
  {
    "code": "mev",
    "baseCode": "mev",
    "type": "language",
    "name": "Mano",
    "estimatedSpeakers": 391482,
    "officialCountries": []
  },
  {
    "code": "gv",
    "baseCode": "gv",
    "type": "language",
    "name": "Manx",
    "estimatedSpeakers": 1661,
    "officialCountries": [
      {
        "countryCode": "IM",
        "officialStatus": "official",
        "populationPercent": 1.8
      }
    ]
  },
  {
    "code": "mxc",
    "baseCode": "mxc",
    "type": "language",
    "name": "Manyika",
    "estimatedSpeakers": 1114776,
    "officialCountries": []
  },
  {
    "code": "mi",
    "baseCode": "mi",
    "type": "language",
    "name": "Māori",
    "estimatedSpeakers": 144514,
    "officialCountries": [
      {
        "countryCode": "NZ",
        "officialStatus": "official",
        "populationPercent": 2.8
      }
    ]
  },
  {
    "code": "arn",
    "baseCode": "arn",
    "type": "language",
    "name": "Mapuche",
    "estimatedSpeakers": 279971,
    "officialCountries": []
  },
  {
    "code": "mr",
    "baseCode": "mr",
    "type": "language",
    "name": "Marathi",
    "estimatedSpeakers": 98639100,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 7
      }
    ]
  },
  {
    "code": "chm",
    "baseCode": "chm",
    "type": "language",
    "name": "Mari",
    "estimatedSpeakers": 521038,
    "officialCountries": []
  },
  {
    "code": "mh",
    "baseCode": "mh",
    "type": "language",
    "name": "Marshallese",
    "estimatedSpeakers": 59868,
    "officialCountries": [
      {
        "countryCode": "MH",
        "officialStatus": "official",
        "populationPercent": 73
      }
    ]
  },
  {
    "code": "mwr",
    "baseCode": "mwr",
    "type": "language",
    "name": "Marwari",
    "estimatedSpeakers": 16909560,
    "officialCountries": []
  },
  {
    "code": "myx",
    "baseCode": "myx",
    "type": "language",
    "name": "Masaaba",
    "estimatedSpeakers": 1429207,
    "officialCountries": []
  },
  {
    "code": "mas",
    "baseCode": "mas",
    "type": "language",
    "name": "Masai",
    "estimatedSpeakers": 1943874,
    "officialCountries": []
  },
  {
    "code": "mls",
    "baseCode": "mls",
    "type": "language",
    "name": "Masalit",
    "estimatedSpeakers": 499626,
    "officialCountries": []
  },
  {
    "code": "mzn",
    "baseCode": "mzn",
    "type": "language",
    "name": "Mazanderani",
    "estimatedSpeakers": 4419345,
    "officialCountries": []
  },
  {
    "code": "mgy",
    "baseCode": "mgy",
    "type": "language",
    "name": "Mbunga",
    "estimatedSpeakers": 944469,
    "officialCountries": []
  },
  {
    "code": "byv",
    "baseCode": "byv",
    "type": "language",
    "name": "Medumba",
    "estimatedSpeakers": 340627,
    "officialCountries": []
  },
  {
    "code": "men",
    "baseCode": "men",
    "type": "language",
    "name": "Mende",
    "estimatedSpeakers": 2555117,
    "officialCountries": []
  },
  {
    "code": "tnr",
    "baseCode": "tnr",
    "type": "language",
    "name": "Ménik",
    "estimatedSpeakers": 3393,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 0.018
      }
    ]
  },
  {
    "code": "mwv",
    "baseCode": "mwv",
    "type": "language",
    "name": "Mentawai",
    "estimatedSpeakers": 67575,
    "officialCountries": []
  },
  {
    "code": "mer",
    "baseCode": "mer",
    "type": "language",
    "name": "Meru",
    "estimatedSpeakers": 2329856,
    "officialCountries": []
  },
  {
    "code": "mgo",
    "baseCode": "mgo",
    "type": "language",
    "name": "Metaʼ",
    "estimatedSpeakers": 145541,
    "officialCountries": []
  },
  {
    "code": "mtr",
    "baseCode": "mtr",
    "type": "language",
    "name": "Mewari",
    "estimatedSpeakers": 1366856,
    "officialCountries": []
  },
  {
    "code": "wtm",
    "baseCode": "wtm",
    "type": "language",
    "name": "Mewati",
    "estimatedSpeakers": 6481998,
    "officialCountries": []
  },
  {
    "code": "mic",
    "baseCode": "mic",
    "type": "language",
    "name": "Mi'kmaw",
    "estimatedSpeakers": 9311,
    "officialCountries": []
  },
  {
    "code": "crg",
    "baseCode": "crg",
    "type": "language",
    "name": "Michif",
    "estimatedSpeakers": 1901,
    "officialCountries": []
  },
  {
    "code": "nan",
    "baseCode": "nan",
    "type": "language",
    "name": "Min Nan Chinese",
    "estimatedSpeakers": 40377925,
    "officialCountries": [
      {
        "countryCode": "TW",
        "officialStatus": "official",
        "populationPercent": 57
      }
    ]
  },
  {
    "code": "min",
    "baseCode": "min",
    "type": "language",
    "name": "Minangkabau",
    "estimatedSpeakers": 8446860,
    "officialCountries": []
  },
  {
    "code": "xmf",
    "baseCode": "xmf",
    "type": "language",
    "name": "Mingrelian",
    "estimatedSpeakers": 539106,
    "officialCountries": []
  },
  {
    "code": "mhn",
    "baseCode": "mhn",
    "type": "language",
    "name": "Mòcheno",
    "estimatedSpeakers": 1402,
    "officialCountries": []
  },
  {
    "code": "moh",
    "baseCode": "moh",
    "type": "language",
    "name": "Mohawk",
    "estimatedSpeakers": 1591,
    "officialCountries": []
  },
  {
    "code": "mdf",
    "baseCode": "mdf",
    "type": "language",
    "name": "Moksha",
    "estimatedSpeakers": 295724,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.21
      }
    ]
  },
  {
    "code": "mnw",
    "baseCode": "mnw",
    "type": "language",
    "name": "Mon",
    "estimatedSpeakers": 981772,
    "officialCountries": []
  },
  {
    "code": "lol",
    "baseCode": "lol",
    "type": "language",
    "name": "Mongo",
    "estimatedSpeakers": 703958,
    "officialCountries": []
  },
  {
    "code": "mn",
    "baseCode": "mn",
    "type": "language",
    "name": "Mongolian",
    "estimatedSpeakers": 6735779,
    "officialCountries": [
      {
        "countryCode": "CN",
        "officialStatus": "official_regional",
        "populationPercent": 0.26
      },
      {
        "countryCode": "MN",
        "officialStatus": "official",
        "populationPercent": 93
      }
    ]
  },
  {
    "code": "mop",
    "baseCode": "mop",
    "type": "language",
    "name": "Mopán Maya",
    "estimatedSpeakers": 19917,
    "officialCountries": []
  },
  {
    "code": "mfe",
    "baseCode": "mfe",
    "type": "language",
    "name": "Morisyen",
    "estimatedSpeakers": 1179450,
    "officialCountries": []
  },
  {
    "code": "ary",
    "baseCode": "ary",
    "type": "language",
    "name": "Moroccan Arabic",
    "estimatedSpeakers": 32527212,
    "officialCountries": []
  },
  {
    "code": "mos",
    "baseCode": "mos",
    "type": "language",
    "name": "Mossi",
    "estimatedSpeakers": 9216880,
    "officialCountries": []
  },
  {
    "code": "mro",
    "baseCode": "mro",
    "type": "language",
    "name": "Mru",
    "estimatedSpeakers": 30365,
    "officialCountries": []
  },
  {
    "code": "unx",
    "baseCode": "unx",
    "type": "language",
    "name": "Munda",
    "estimatedSpeakers": 676382,
    "officialCountries": []
  },
  {
    "code": "mua",
    "baseCode": "mua",
    "type": "language",
    "name": "Mundang",
    "estimatedSpeakers": 309661,
    "officialCountries": []
  },
  {
    "code": "unr",
    "baseCode": "unr",
    "type": "language",
    "name": "Mundari",
    "estimatedSpeakers": 1330184,
    "officialCountries": []
  },
  {
    "code": "mus",
    "baseCode": "mus",
    "type": "language",
    "name": "Muscogee",
    "estimatedSpeakers": 4104,
    "officialCountries": []
  },
  {
    "code": "ttt",
    "baseCode": "ttt",
    "type": "language",
    "name": "Muslim Tat",
    "estimatedSpeakers": 23430,
    "officialCountries": []
  },
  {
    "code": "gmy",
    "baseCode": "gmy",
    "type": "language",
    "name": "Mycenaean Greek",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "nqo",
    "baseCode": "nqo",
    "type": "language",
    "name": "N’Ko",
    "estimatedSpeakers": 699310,
    "officialCountries": []
  },
  {
    "code": "ars",
    "baseCode": "ars",
    "type": "language",
    "name": "Najdi Arabic",
    "estimatedSpeakers": 1096332,
    "officialCountries": []
  },
  {
    "code": "naq",
    "baseCode": "naq",
    "type": "language",
    "name": "Nama",
    "estimatedSpeakers": 308403,
    "officialCountries": []
  },
  {
    "code": "nsk",
    "baseCode": "nsk",
    "type": "language",
    "name": "Naskapi",
    "estimatedSpeakers": 1047,
    "officialCountries": []
  },
  {
    "code": "na",
    "baseCode": "na",
    "type": "language",
    "name": "Nauru",
    "estimatedSpeakers": 6924,
    "officialCountries": [
      {
        "countryCode": "NR",
        "officialStatus": "official",
        "populationPercent": 70
      }
    ]
  },
  {
    "code": "nv",
    "baseCode": "nv",
    "type": "language",
    "name": "Navajo",
    "estimatedSpeakers": 170982,
    "officialCountries": []
  },
  {
    "code": "nxq",
    "baseCode": "nxq",
    "type": "language",
    "name": "Naxi",
    "estimatedSpeakers": 339850,
    "officialCountries": []
  },
  {
    "code": "ndc",
    "baseCode": "ndc",
    "type": "language",
    "name": "Ndau",
    "estimatedSpeakers": 4347923,
    "officialCountries": []
  },
  {
    "code": "ng",
    "baseCode": "ng",
    "type": "language",
    "name": "Ndonga",
    "estimatedSpeakers": 588769,
    "officialCountries": []
  },
  {
    "code": "wni",
    "baseCode": "wni",
    "type": "language",
    "name": "Ndzwani Comorian",
    "estimatedSpeakers": 306048,
    "officialCountries": [
      {
        "countryCode": "KM",
        "officialStatus": "official",
        "populationPercent": 34
      }
    ]
  },
  {
    "code": "nap",
    "baseCode": "nap",
    "type": "language",
    "name": "Neapolitan",
    "estimatedSpeakers": 591360,
    "officialCountries": []
  },
  {
    "code": "zmi",
    "baseCode": "zmi",
    "type": "language",
    "name": "Negeri Sembilan Malay",
    "estimatedSpeakers": 414778,
    "officialCountries": []
  },
  {
    "code": "ne",
    "baseCode": "ne",
    "type": "language",
    "name": "Nepali",
    "estimatedSpeakers": 21735357,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.56
      },
      {
        "countryCode": "NP",
        "officialStatus": "official",
        "populationPercent": 44
      }
    ]
  },
  {
    "code": "new",
    "baseCode": "new",
    "type": "language",
    "name": "Newari",
    "estimatedSpeakers": 1027039,
    "officialCountries": []
  },
  {
    "code": "nij",
    "baseCode": "nij",
    "type": "language",
    "name": "Ngaju",
    "estimatedSpeakers": 1041779,
    "officialCountries": []
  },
  {
    "code": "zdj",
    "baseCode": "zdj",
    "type": "language",
    "name": "Ngazidja Comorian",
    "estimatedSpeakers": 333052,
    "officialCountries": [
      {
        "countryCode": "KM",
        "officialStatus": "official",
        "populationPercent": 37
      }
    ]
  },
  {
    "code": "nnh",
    "baseCode": "nnh",
    "type": "language",
    "name": "Ngiemboon",
    "estimatedSpeakers": 433525,
    "officialCountries": []
  },
  {
    "code": "jgo",
    "baseCode": "jgo",
    "type": "language",
    "name": "Ngomba",
    "estimatedSpeakers": 105285,
    "officialCountries": []
  },
  {
    "code": "yrl",
    "baseCode": "yrl",
    "type": "language",
    "name": "Nheengatu",
    "estimatedSpeakers": 26981,
    "officialCountries": []
  },
  {
    "code": "fuv",
    "baseCode": "fuv",
    "type": "language",
    "name": "Nigerian Fulfulde",
    "estimatedSpeakers": 15862049,
    "officialCountries": []
  },
  {
    "code": "pcm",
    "baseCode": "pcm",
    "type": "language",
    "name": "Nigerian Pidgin",
    "estimatedSpeakers": 49716870,
    "officialCountries": []
  },
  {
    "code": "noe",
    "baseCode": "noe",
    "type": "language",
    "name": "Nimadi",
    "estimatedSpeakers": 1831869,
    "officialCountries": []
  },
  {
    "code": "niu",
    "baseCode": "niu",
    "type": "language",
    "name": "Niuean",
    "estimatedSpeakers": 1120,
    "officialCountries": [
      {
        "countryCode": "NU",
        "officialStatus": "official",
        "populationPercent": 56
      }
    ]
  },
  {
    "code": "fia",
    "baseCode": "fia",
    "type": "language",
    "name": "Nobiin",
    "estimatedSpeakers": 418879,
    "officialCountries": []
  },
  {
    "code": "snf",
    "baseCode": "snf",
    "type": "language",
    "name": "Noon",
    "estimatedSpeakers": 45234,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 0.24
      }
    ]
  },
  {
    "code": "nd",
    "baseCode": "nd",
    "type": "language",
    "name": "North Ndebele",
    "estimatedSpeakers": 2058048,
    "officialCountries": [
      {
        "countryCode": "ZW",
        "officialStatus": "official",
        "populationPercent": 12
      }
    ]
  },
  {
    "code": "tts",
    "baseCode": "tts",
    "type": "language",
    "name": "Northeastern Thai",
    "estimatedSpeakers": 16781040,
    "officialCountries": []
  },
  {
    "code": "crl",
    "baseCode": "crl",
    "type": "language",
    "name": "Northern East Cree",
    "estimatedSpeakers": 5043,
    "officialCountries": []
  },
  {
    "code": "frr",
    "baseCode": "frr",
    "type": "language",
    "name": "Northern Frisian",
    "estimatedSpeakers": 10094,
    "officialCountries": [
      {
        "countryCode": "DE",
        "officialStatus": "official_regional",
        "populationPercent": 0.012
      }
    ]
  },
  {
    "code": "hno",
    "baseCode": "hno",
    "type": "language",
    "name": "Northern Hindko",
    "estimatedSpeakers": 4290188,
    "officialCountries": []
  },
  {
    "code": "kxm",
    "baseCode": "kxm",
    "type": "language",
    "name": "Northern Khmer",
    "estimatedSpeakers": 1188657,
    "officialCountries": []
  },
  {
    "code": "lrc",
    "baseCode": "lrc",
    "type": "language",
    "name": "Northern Luri",
    "estimatedSpeakers": 2112834,
    "officialCountries": []
  },
  {
    "code": "se",
    "baseCode": "se",
    "type": "language",
    "name": "Northern Sami",
    "estimatedSpeakers": 52950,
    "officialCountries": [
      {
        "countryCode": "NO",
        "officialStatus": "official_regional",
        "populationPercent": 0.29
      }
    ]
  },
  {
    "code": "nso",
    "baseCode": "nso",
    "type": "language",
    "name": "Northern Sotho",
    "estimatedSpeakers": 5681604,
    "officialCountries": [
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 9.4
      }
    ]
  },
  {
    "code": "nod",
    "baseCode": "nod",
    "type": "language",
    "name": "Northern Thai",
    "estimatedSpeakers": 6712416,
    "officialCountries": []
  },
  {
    "code": "no",
    "baseCode": "no",
    "type": "language",
    "name": "Norwegian",
    "estimatedSpeakers": 5509731,
    "officialCountries": [
      {
        "countryCode": "NO",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "nb",
    "baseCode": "nb",
    "type": "language",
    "name": "Norwegian Bokmål",
    "estimatedSpeakers": 5511222,
    "officialCountries": [
      {
        "countryCode": "NO",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "SJ",
        "officialStatus": "official",
        "populationPercent": 51
      }
    ]
  },
  {
    "code": "nn",
    "baseCode": "nn",
    "type": "language",
    "name": "Norwegian Nynorsk",
    "estimatedSpeakers": 1377433,
    "officialCountries": [
      {
        "countryCode": "NO",
        "officialStatus": "official",
        "populationPercent": 25
      }
    ]
  },
  {
    "code": "nse",
    "baseCode": "nse",
    "type": "language",
    "name": "Nsenga",
    "estimatedSpeakers": 623973,
    "officialCountries": []
  },
  {
    "code": "nus",
    "baseCode": "nus",
    "type": "language",
    "name": "Nuer",
    "estimatedSpeakers": 711407,
    "officialCountries": []
  },
  {
    "code": "nym",
    "baseCode": "nym",
    "type": "language",
    "name": "Nyamwezi",
    "estimatedSpeakers": 2226249,
    "officialCountries": []
  },
  {
    "code": "ny",
    "baseCode": "ny",
    "type": "language",
    "name": "Nyanja",
    "estimatedSpeakers": 18855692,
    "officialCountries": [
      {
        "countryCode": "MW",
        "officialStatus": "official",
        "populationPercent": 63
      }
    ]
  },
  {
    "code": "nyn",
    "baseCode": "nyn",
    "type": "language",
    "name": "Nyankole",
    "estimatedSpeakers": 3104829,
    "officialCountries": []
  },
  {
    "code": "tog",
    "baseCode": "tog",
    "type": "language",
    "name": "Nyasa Tonga",
    "estimatedSpeakers": 213280,
    "officialCountries": []
  },
  {
    "code": "nzi",
    "baseCode": "nzi",
    "type": "language",
    "name": "Nzima",
    "estimatedSpeakers": 345891,
    "officialCountries": []
  },
  {
    "code": "ann",
    "baseCode": "ann",
    "type": "language",
    "name": "Obolo",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "oc",
    "baseCode": "oc",
    "type": "language",
    "name": "Occitan",
    "estimatedSpeakers": 2055966,
    "officialCountries": [
      {
        "countryCode": "ES",
        "officialStatus": "official_regional",
        "populationPercent": 0.01
      }
    ]
  },
  {
    "code": "or",
    "baseCode": "or",
    "type": "language",
    "name": "Odia",
    "estimatedSpeakers": 45092160,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 3.2
      }
    ]
  },
  {
    "code": "ojs",
    "baseCode": "ojs",
    "type": "language",
    "name": "Oji-Cree",
    "estimatedSpeakers": 16294,
    "officialCountries": []
  },
  {
    "code": "oj",
    "baseCode": "oj",
    "type": "language",
    "name": "Ojibwa",
    "estimatedSpeakers": 27932,
    "officialCountries": []
  },
  {
    "code": "oka",
    "baseCode": "oka",
    "type": "language",
    "name": "Okanagan",
    "estimatedSpeakers": 1040,
    "officialCountries": []
  },
  {
    "code": "om",
    "baseCode": "om",
    "type": "language",
    "name": "Oromo",
    "estimatedSpeakers": 38264431,
    "officialCountries": []
  },
  {
    "code": "osa",
    "baseCode": "osa",
    "type": "language",
    "name": "Osage",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "os",
    "baseCode": "os",
    "type": "language",
    "name": "Ossetic",
    "estimatedSpeakers": 558448,
    "officialCountries": [
      {
        "countryCode": "GE",
        "officialStatus": "official_regional",
        "populationPercent": 2.2
      }
    ]
  },
  {
    "code": "pfl",
    "baseCode": "pfl",
    "type": "language",
    "name": "Palatine German",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "pau",
    "baseCode": "pau",
    "type": "language",
    "name": "Palauan",
    "estimatedSpeakers": 16179,
    "officialCountries": [
      {
        "countryCode": "PW",
        "officialStatus": "official",
        "populationPercent": 74
      }
    ]
  },
  {
    "code": "pi",
    "baseCode": "pi",
    "type": "language",
    "name": "Pali",
    "estimatedSpeakers": 137,
    "officialCountries": []
  },
  {
    "code": "pam",
    "baseCode": "pam",
    "type": "language",
    "name": "Pampanga",
    "estimatedSpeakers": 2720371,
    "officialCountries": []
  },
  {
    "code": "pag",
    "baseCode": "pag",
    "type": "language",
    "name": "Pangasinan",
    "estimatedSpeakers": 1655878,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official_regional",
        "populationPercent": 1.4
      }
    ]
  },
  {
    "code": "pap",
    "baseCode": "pap",
    "type": "language",
    "name": "Papiamento",
    "estimatedSpeakers": 216653,
    "officialCountries": [
      {
        "countryCode": "AW",
        "officialStatus": "official",
        "populationPercent": 61
      },
      {
        "countryCode": "CW",
        "officialStatus": "de_facto_official",
        "populationPercent": 81
      }
    ]
  },
  {
    "code": "kvx",
    "baseCode": "kvx",
    "type": "language",
    "name": "Parkari Koli",
    "estimatedSpeakers": 403782,
    "officialCountries": []
  },
  {
    "code": "prd",
    "baseCode": "prd",
    "type": "language",
    "name": "Parsi-Dari",
    "estimatedSpeakers": 923394,
    "officialCountries": []
  },
  {
    "code": "ps",
    "baseCode": "ps",
    "type": "language",
    "name": "Pashto",
    "estimatedSpeakers": 58062881,
    "officialCountries": [
      {
        "countryCode": "AF",
        "officialStatus": "official",
        "populationPercent": 43
      }
    ]
  },
  {
    "code": "mfa",
    "baseCode": "mfa",
    "type": "language",
    "name": "Pattani Malay",
    "estimatedSpeakers": 3496050,
    "officialCountries": []
  },
  {
    "code": "pdc",
    "baseCode": "pdc",
    "type": "language",
    "name": "Pennsylvania German",
    "estimatedSpeakers": 133366,
    "officialCountries": []
  },
  {
    "code": "fa",
    "baseCode": "fa",
    "type": "language",
    "name": "Persian",
    "estimatedSpeakers": 89208446,
    "officialCountries": [
      {
        "countryCode": "AF",
        "officialStatus": "official",
        "populationPercent": 50
      },
      {
        "countryCode": "IR",
        "officialStatus": "official",
        "populationPercent": 75
      }
    ]
  },
  {
    "code": "pcd",
    "baseCode": "pcd",
    "type": "language",
    "name": "Picard",
    "estimatedSpeakers": 752121,
    "officialCountries": []
  },
  {
    "code": "pms",
    "baseCode": "pms",
    "type": "language",
    "name": "Piedmontese",
    "estimatedSpeakers": 670614,
    "officialCountries": []
  },
  {
    "code": "pis",
    "baseCode": "pis",
    "type": "language",
    "name": "Pijin",
    "estimatedSpeakers": 595975,
    "officialCountries": []
  },
  {
    "code": "ppl",
    "baseCode": "ppl",
    "type": "language",
    "name": "Pipil",
    "estimatedSpeakers": 2718,
    "officialCountries": []
  },
  {
    "code": "crk",
    "baseCode": "crk",
    "type": "language",
    "name": "Plains Cree",
    "estimatedSpeakers": 12802,
    "officialCountries": [
      {
        "countryCode": "CA",
        "officialStatus": "official_regional",
        "populationPercent": 0.033
      }
    ]
  },
  {
    "code": "pdt",
    "baseCode": "pdt",
    "type": "language",
    "name": "Plautdietsch",
    "estimatedSpeakers": 42674,
    "officialCountries": []
  },
  {
    "code": "pon",
    "baseCode": "pon",
    "type": "language",
    "name": "Pohnpeian",
    "estimatedSpeakers": 22909,
    "officialCountries": []
  },
  {
    "code": "pko",
    "baseCode": "pko",
    "type": "language",
    "name": "Pökoot",
    "estimatedSpeakers": 401900,
    "officialCountries": []
  },
  {
    "code": "pl",
    "baseCode": "pl",
    "type": "language",
    "name": "Polish",
    "estimatedSpeakers": 41500501,
    "officialCountries": [
      {
        "countryCode": "PL",
        "officialStatus": "official",
        "populationPercent": 96
      }
    ]
  },
  {
    "code": "pnt",
    "baseCode": "pnt",
    "type": "language",
    "name": "Pontic",
    "estimatedSpeakers": 448520,
    "officialCountries": []
  },
  {
    "code": "jac",
    "baseCode": "jac",
    "type": "language",
    "name": "Popti'",
    "estimatedSpeakers": 56591,
    "officialCountries": []
  },
  {
    "code": "poc",
    "baseCode": "poc",
    "type": "language",
    "name": "Poqomam",
    "estimatedSpeakers": 16430,
    "officialCountries": []
  },
  {
    "code": "poh",
    "baseCode": "poh",
    "type": "language",
    "name": "Poqomchi'",
    "estimatedSpeakers": 219062,
    "officialCountries": []
  },
  {
    "code": "pt",
    "baseCode": "pt",
    "type": "language",
    "name": "Portuguese",
    "estimatedSpeakers": 249463919,
    "officialCountries": [
      {
        "countryCode": "AO",
        "officialStatus": "official",
        "populationPercent": 67
      },
      {
        "countryCode": "BR",
        "officialStatus": "official",
        "populationPercent": 91
      },
      {
        "countryCode": "CV",
        "officialStatus": "official",
        "populationPercent": 76
      },
      {
        "countryCode": "GQ",
        "officialStatus": "official",
        "populationPercent": 0.0001
      },
      {
        "countryCode": "GW",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "MO",
        "officialStatus": "official",
        "populationPercent": 2.3
      },
      {
        "countryCode": "MZ",
        "officialStatus": "official",
        "populationPercent": 27
      },
      {
        "countryCode": "PT",
        "officialStatus": "official",
        "populationPercent": 96
      },
      {
        "countryCode": "ST",
        "officialStatus": "official",
        "populationPercent": 85
      },
      {
        "countryCode": "TL",
        "officialStatus": "official",
        "populationPercent": 59
      }
    ]
  },
  {
    "code": "prg",
    "baseCode": "prg",
    "type": "language",
    "name": "Prussian",
    "estimatedSpeakers": 39,
    "officialCountries": []
  },
  {
    "code": "pa",
    "baseCode": "pa",
    "type": "language",
    "name": "Punjabi",
    "estimatedSpeakers": 219603180,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 2.8
      }
    ]
  },
  {
    "code": "puu",
    "baseCode": "puu",
    "type": "language",
    "name": "Punu",
    "estimatedSpeakers": 220960,
    "officialCountries": []
  },
  {
    "code": "kjb",
    "baseCode": "kjb",
    "type": "language",
    "name": "Q'anjob'al",
    "estimatedSpeakers": 219062,
    "officialCountries": []
  },
  {
    "code": "qu",
    "baseCode": "qu",
    "type": "language",
    "name": "Quechua",
    "estimatedSpeakers": 11942570,
    "officialCountries": [
      {
        "countryCode": "BO",
        "officialStatus": "official",
        "populationPercent": 32
      },
      {
        "countryCode": "EC",
        "officialStatus": "official",
        "populationPercent": 17
      },
      {
        "countryCode": "PE",
        "officialStatus": "official",
        "populationPercent": 15
      }
    ]
  },
  {
    "code": "raj",
    "baseCode": "raj",
    "type": "language",
    "name": "Rajasthani",
    "estimatedSpeakers": 1409130,
    "officialCountries": []
  },
  {
    "code": "rjs",
    "baseCode": "rjs",
    "type": "language",
    "name": "Rajbanshi",
    "estimatedSpeakers": 136939,
    "officialCountries": []
  },
  {
    "code": "thr",
    "baseCode": "thr",
    "type": "language",
    "name": "Rana Tharu",
    "estimatedSpeakers": 373469,
    "officialCountries": []
  },
  {
    "code": "rkt",
    "baseCode": "rkt",
    "type": "language",
    "name": "Rangpuri",
    "estimatedSpeakers": 17024564,
    "officialCountries": []
  },
  {
    "code": "rej",
    "baseCode": "rej",
    "type": "language",
    "name": "Rejang",
    "estimatedSpeakers": 1295185,
    "officialCountries": []
  },
  {
    "code": "rcf",
    "baseCode": "rcf",
    "type": "language",
    "name": "Réunion Creole French",
    "estimatedSpeakers": 559185,
    "officialCountries": []
  },
  {
    "code": "ria",
    "baseCode": "ria",
    "type": "language",
    "name": "Riang (India)",
    "estimatedSpeakers": 183187,
    "officialCountries": []
  },
  {
    "code": "rif",
    "baseCode": "rif",
    "type": "language",
    "name": "Riffian",
    "estimatedSpeakers": 2045261,
    "officialCountries": []
  },
  {
    "code": "bto",
    "baseCode": "bto",
    "type": "language",
    "name": "Rinconada Bikol",
    "estimatedSpeakers": 331176,
    "officialCountries": []
  },
  {
    "code": "rhg",
    "baseCode": "rhg",
    "type": "language",
    "name": "Rohingya",
    "estimatedSpeakers": 1872055,
    "officialCountries": []
  },
  {
    "code": "rgn",
    "baseCode": "rgn",
    "type": "language",
    "name": "Romagnol",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "ro",
    "baseCode": "ro",
    "type": "language",
    "name": "Romanian",
    "estimatedSpeakers": 20043507,
    "officialCountries": [
      {
        "countryCode": "MD",
        "officialStatus": "official",
        "populationPercent": 63
      },
      {
        "countryCode": "RO",
        "officialStatus": "official",
        "populationPercent": 90
      },
      {
        "countryCode": "RS",
        "officialStatus": "official_regional",
        "populationPercent": 2.1
      }
    ]
  },
  {
    "code": "rm",
    "baseCode": "rm",
    "type": "language",
    "name": "Romansh",
    "estimatedSpeakers": 44303,
    "officialCountries": [
      {
        "countryCode": "CH",
        "officialStatus": "official_regional",
        "populationPercent": 0.5
      }
    ]
  },
  {
    "code": "rof",
    "baseCode": "rof",
    "type": "language",
    "name": "Rombo",
    "estimatedSpeakers": 499220,
    "officialCountries": []
  },
  {
    "code": "rng",
    "baseCode": "rng",
    "type": "language",
    "name": "Ronga",
    "estimatedSpeakers": 1133934,
    "officialCountries": []
  },
  {
    "code": "und",
    "baseCode": "und",
    "type": "language",
    "name": "root",
    "estimatedSpeakers": 302,
    "officialCountries": []
  },
  {
    "code": "rtm",
    "baseCode": "rtm",
    "type": "language",
    "name": "Rotuman",
    "estimatedSpeakers": 2474,
    "officialCountries": []
  },
  {
    "code": "rug",
    "baseCode": "rug",
    "type": "language",
    "name": "Roviana",
    "estimatedSpeakers": 10175,
    "officialCountries": []
  },
  {
    "code": "rn",
    "baseCode": "rn",
    "type": "language",
    "name": "Rundi",
    "estimatedSpeakers": 8561763,
    "officialCountries": [
      {
        "countryCode": "BI",
        "officialStatus": "official",
        "populationPercent": 63
      }
    ]
  },
  {
    "code": "ru",
    "baseCode": "ru",
    "type": "language",
    "name": "Russian",
    "estimatedSpeakers": 201151469,
    "officialCountries": [
      {
        "countryCode": "BY",
        "officialStatus": "official",
        "populationPercent": 71
      },
      {
        "countryCode": "KG",
        "officialStatus": "official",
        "populationPercent": 36
      },
      {
        "countryCode": "KZ",
        "officialStatus": "official",
        "populationPercent": 72
      },
      {
        "countryCode": "RU",
        "officialStatus": "official",
        "populationPercent": 94
      },
      {
        "countryCode": "UA",
        "officialStatus": "de_facto_official",
        "populationPercent": 46
      }
    ]
  },
  {
    "code": "rue",
    "baseCode": "rue",
    "type": "language",
    "name": "Rusyn",
    "estimatedSpeakers": 427942,
    "officialCountries": []
  },
  {
    "code": "rwk",
    "baseCode": "rwk",
    "type": "language",
    "name": "Rwa",
    "estimatedSpeakers": 148417,
    "officialCountries": []
  },
  {
    "code": "sav",
    "baseCode": "sav",
    "type": "language",
    "name": "Saafi-Saafi",
    "estimatedSpeakers": 282713,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 1.5
      }
    ]
  },
  {
    "code": "quv",
    "baseCode": "quv",
    "type": "language",
    "name": "Sacapulteco",
    "estimatedSpeakers": 9858,
    "officialCountries": [
      {
        "countryCode": "GT",
        "officialStatus": "official_regional",
        "populationPercent": 0.054
      }
    ]
  },
  {
    "code": "sck",
    "baseCode": "sck",
    "type": "language",
    "name": "Sadri",
    "estimatedSpeakers": 2536434,
    "officialCountries": []
  },
  {
    "code": "saf",
    "baseCode": "saf",
    "type": "language",
    "name": "Safaliba",
    "estimatedSpeakers": 4151,
    "officialCountries": []
  },
  {
    "code": "ssy",
    "baseCode": "ssy",
    "type": "language",
    "name": "Saho",
    "estimatedSpeakers": 228383,
    "officialCountries": []
  },
  {
    "code": "saq",
    "baseCode": "saq",
    "type": "language",
    "name": "Samburu",
    "estimatedSpeakers": 267933,
    "officialCountries": []
  },
  {
    "code": "sm",
    "baseCode": "sm",
    "type": "language",
    "name": "Samoan",
    "estimatedSpeakers": 252638,
    "officialCountries": [
      {
        "countryCode": "AS",
        "officialStatus": "official",
        "populationPercent": 99
      },
      {
        "countryCode": "WS",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "sgs",
    "baseCode": "sgs",
    "type": "language",
    "name": "Samogitian",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "stu",
    "baseCode": "stu",
    "type": "language",
    "name": "Samtao",
    "estimatedSpeakers": 9780,
    "officialCountries": []
  },
  {
    "code": "sxn",
    "baseCode": "sxn",
    "type": "language",
    "name": "Sangir",
    "estimatedSpeakers": 259037,
    "officialCountries": []
  },
  {
    "code": "sg",
    "baseCode": "sg",
    "type": "language",
    "name": "Sango",
    "estimatedSpeakers": 2768970,
    "officialCountries": [
      {
        "countryCode": "CF",
        "officialStatus": "official",
        "populationPercent": 49
      }
    ]
  },
  {
    "code": "sbp",
    "baseCode": "sbp",
    "type": "language",
    "name": "Sangu",
    "estimatedSpeakers": 134924,
    "officialCountries": []
  },
  {
    "code": "sa",
    "baseCode": "sa",
    "type": "language",
    "name": "Sanskrit",
    "estimatedSpeakers": 16910,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.0012
      }
    ]
  },
  {
    "code": "sat",
    "baseCode": "sat",
    "type": "language",
    "name": "Santali",
    "estimatedSpeakers": 7750215,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.55
      }
    ]
  },
  {
    "code": "skr",
    "baseCode": "skr",
    "type": "language",
    "name": "Saraiki",
    "estimatedSpeakers": 30283680,
    "officialCountries": []
  },
  {
    "code": "sc",
    "baseCode": "sc",
    "type": "language",
    "name": "Sardinian",
    "estimatedSpeakers": 1036403,
    "officialCountries": []
  },
  {
    "code": "sas",
    "baseCode": "sas",
    "type": "language",
    "name": "Sasak",
    "estimatedSpeakers": 2731151,
    "officialCountries": []
  },
  {
    "code": "sdc",
    "baseCode": "sdc",
    "type": "language",
    "name": "Sassarese Sardinian",
    "estimatedSpeakers": 103640,
    "officialCountries": []
  },
  {
    "code": "stq",
    "baseCode": "stq",
    "type": "language",
    "name": "Saterland Frisian",
    "estimatedSpeakers": 1009,
    "officialCountries": []
  },
  {
    "code": "saz",
    "baseCode": "saz",
    "type": "language",
    "name": "Saurashtra",
    "estimatedSpeakers": 408648,
    "officialCountries": []
  },
  {
    "code": "sco",
    "baseCode": "sco",
    "type": "language",
    "name": "Scots",
    "estimatedSpeakers": 1711478,
    "officialCountries": []
  },
  {
    "code": "gd",
    "baseCode": "gd",
    "type": "language",
    "name": "Scottish Gaelic",
    "estimatedSpeakers": 75305,
    "officialCountries": [
      {
        "countryCode": "GB",
        "officialStatus": "official_regional",
        "populationPercent": 0.11
      }
    ]
  },
  {
    "code": "sly",
    "baseCode": "sly",
    "type": "language",
    "name": "Selayar",
    "estimatedSpeakers": 152043,
    "officialCountries": []
  },
  {
    "code": "seh",
    "baseCode": "seh",
    "type": "language",
    "name": "Sena",
    "estimatedSpeakers": 1534146,
    "officialCountries": []
  },
  {
    "code": "sr",
    "baseCode": "sr",
    "type": "language",
    "name": "Serbian",
    "estimatedSpeakers": 7234735,
    "officialCountries": [
      {
        "countryCode": "BA",
        "officialStatus": "official",
        "populationPercent": 10
      },
      {
        "countryCode": "ME",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "RS",
        "officialStatus": "official",
        "populationPercent": 99
      },
      {
        "countryCode": "XK",
        "officialStatus": "official",
        "populationPercent": 5
      }
    ]
  },
  {
    "code": "sh",
    "baseCode": "sr",
    "type": "language",
    "name": "Serbian (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "srr",
    "baseCode": "srr",
    "type": "language",
    "name": "Serer",
    "estimatedSpeakers": 2073225,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "official_regional",
        "populationPercent": 11
      }
    ]
  },
  {
    "code": "sei",
    "baseCode": "sei",
    "type": "language",
    "name": "Seri",
    "estimatedSpeakers": 915,
    "officialCountries": []
  },
  {
    "code": "crs",
    "baseCode": "crs",
    "type": "language",
    "name": "Seselwa Creole French",
    "estimatedSpeakers": 96223,
    "officialCountries": []
  },
  {
    "code": "ksb",
    "baseCode": "ksb",
    "type": "language",
    "name": "Shambala",
    "estimatedSpeakers": 1146856,
    "officialCountries": []
  },
  {
    "code": "shn",
    "baseCode": "shn",
    "type": "language",
    "name": "Shan",
    "estimatedSpeakers": 3748859,
    "officialCountries": []
  },
  {
    "code": "swv",
    "baseCode": "swv",
    "type": "language",
    "name": "Shekhawati",
    "estimatedSpeakers": 3945564,
    "officialCountries": []
  },
  {
    "code": "xsr",
    "baseCode": "xsr",
    "type": "language",
    "name": "Sherpa",
    "estimatedSpeakers": 161836,
    "officialCountries": []
  },
  {
    "code": "sn",
    "baseCode": "sn",
    "type": "language",
    "name": "Shona",
    "estimatedSpeakers": 13891824,
    "officialCountries": [
      {
        "countryCode": "ZW",
        "officialStatus": "official",
        "populationPercent": 81
      }
    ]
  },
  {
    "code": "ii",
    "baseCode": "ii",
    "type": "language",
    "name": "Sichuan Yi",
    "estimatedSpeakers": 8496240,
    "officialCountries": []
  },
  {
    "code": "scn",
    "baseCode": "scn",
    "type": "language",
    "name": "Sicilian",
    "estimatedSpeakers": 499912,
    "officialCountries": []
  },
  {
    "code": "sid",
    "baseCode": "sid",
    "type": "language",
    "name": "Sidamo",
    "estimatedSpeakers": 4149250,
    "officialCountries": []
  },
  {
    "code": "bla",
    "baseCode": "bla",
    "type": "language",
    "name": "Siksiká",
    "estimatedSpeakers": 6595,
    "officialCountries": []
  },
  {
    "code": "szl",
    "baseCode": "szl",
    "type": "language",
    "name": "Silesian",
    "estimatedSpeakers": 503702,
    "officialCountries": []
  },
  {
    "code": "sd",
    "baseCode": "sd",
    "type": "language",
    "name": "Sindhi",
    "estimatedSpeakers": 41518338,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.26
      }
    ]
  },
  {
    "code": "si",
    "baseCode": "si",
    "type": "language",
    "name": "Sinhala",
    "estimatedSpeakers": 14948168,
    "officialCountries": [
      {
        "countryCode": "LK",
        "officialStatus": "official",
        "populationPercent": 68
      }
    ]
  },
  {
    "code": "rmo",
    "baseCode": "rmo",
    "type": "language",
    "name": "Sinte Romani",
    "estimatedSpeakers": 25696,
    "officialCountries": []
  },
  {
    "code": "qum",
    "baseCode": "qum",
    "type": "language",
    "name": "Sipacapense",
    "estimatedSpeakers": 6572,
    "officialCountries": []
  },
  {
    "code": "sms",
    "baseCode": "sms",
    "type": "language",
    "name": "Skolt Sami",
    "estimatedSpeakers": 619,
    "officialCountries": [
      {
        "countryCode": "FI",
        "officialStatus": "official_regional",
        "populationPercent": 0.011
      }
    ]
  },
  {
    "code": "den",
    "baseCode": "den",
    "type": "language",
    "name": "Slave",
    "estimatedSpeakers": 2328,
    "officialCountries": [
      {
        "countryCode": "CA",
        "officialStatus": "official_regional",
        "populationPercent": 0.006
      }
    ]
  },
  {
    "code": "sk",
    "baseCode": "sk",
    "type": "language",
    "name": "Slovak",
    "estimatedSpeakers": 6809720,
    "officialCountries": [
      {
        "countryCode": "RS",
        "officialStatus": "official_regional",
        "populationPercent": 0.85
      },
      {
        "countryCode": "SK",
        "officialStatus": "official",
        "populationPercent": 90
      }
    ]
  },
  {
    "code": "sl",
    "baseCode": "sl",
    "type": "language",
    "name": "Slovenian",
    "estimatedSpeakers": 1967013,
    "officialCountries": [
      {
        "countryCode": "AT",
        "officialStatus": "official_regional",
        "populationPercent": 0.37
      },
      {
        "countryCode": "SI",
        "officialStatus": "official",
        "populationPercent": 87
      }
    ]
  },
  {
    "code": "xog",
    "baseCode": "xog",
    "type": "language",
    "name": "Soga",
    "estimatedSpeakers": 2611999,
    "officialCountries": []
  },
  {
    "code": "so",
    "baseCode": "so",
    "type": "language",
    "name": "Somali",
    "estimatedSpeakers": 18630626,
    "officialCountries": [
      {
        "countryCode": "SO",
        "officialStatus": "official",
        "populationPercent": 78
      }
    ]
  },
  {
    "code": "snk",
    "baseCode": "snk",
    "type": "language",
    "name": "Soninke",
    "estimatedSpeakers": 1297445,
    "officialCountries": []
  },
  {
    "code": "apc",
    "baseCode": "apc",
    "type": "language",
    "name": "South Levantine Arabic",
    "estimatedSpeakers": 43682528,
    "officialCountries": []
  },
  {
    "code": "nr",
    "baseCode": "nr",
    "type": "language",
    "name": "South Ndebele",
    "estimatedSpeakers": 967082,
    "officialCountries": [
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 1.6
      }
    ]
  },
  {
    "code": "alt",
    "baseCode": "alt",
    "type": "language",
    "name": "Southern Altai",
    "estimatedSpeakers": 19715,
    "officialCountries": []
  },
  {
    "code": "hnd",
    "baseCode": "hnd",
    "type": "language",
    "name": "Southern Hindko",
    "estimatedSpeakers": 1034692,
    "officialCountries": []
  },
  {
    "code": "kss",
    "baseCode": "kss",
    "type": "language",
    "name": "Southern Kisi",
    "estimatedSpeakers": 233802,
    "officialCountries": []
  },
  {
    "code": "sdh",
    "baseCode": "sdh",
    "type": "language",
    "name": "Southern Kurdish",
    "estimatedSpeakers": 3977411,
    "officialCountries": []
  },
  {
    "code": "luz",
    "baseCode": "luz",
    "type": "language",
    "name": "Southern Luri",
    "estimatedSpeakers": 1060643,
    "officialCountries": []
  },
  {
    "code": "sma",
    "baseCode": "sma",
    "type": "language",
    "name": "Southern Sami",
    "estimatedSpeakers": 297,
    "officialCountries": []
  },
  {
    "code": "st",
    "baseCode": "st",
    "type": "language",
    "name": "Southern Sotho",
    "estimatedSpeakers": 6957964,
    "officialCountries": [
      {
        "countryCode": "LS",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 7.9
      }
    ]
  },
  {
    "code": "sou",
    "baseCode": "sou",
    "type": "language",
    "name": "Southern Thai",
    "estimatedSpeakers": 5593680,
    "officialCountries": []
  },
  {
    "code": "es",
    "baseCode": "es",
    "type": "language",
    "name": "Spanish",
    "estimatedSpeakers": 507599381,
    "officialCountries": [
      {
        "countryCode": "AR",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "BO",
        "officialStatus": "official",
        "populationPercent": 61
      },
      {
        "countryCode": "CL",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "CO",
        "officialStatus": "official",
        "populationPercent": 93
      },
      {
        "countryCode": "CR",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "CU",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "DO",
        "officialStatus": "official",
        "populationPercent": 78
      },
      {
        "countryCode": "EA",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "EC",
        "officialStatus": "official",
        "populationPercent": 96
      },
      {
        "countryCode": "ES",
        "officialStatus": "official",
        "populationPercent": 99
      },
      {
        "countryCode": "GQ",
        "officialStatus": "official",
        "populationPercent": 87
      },
      {
        "countryCode": "GT",
        "officialStatus": "official",
        "populationPercent": 88
      },
      {
        "countryCode": "HN",
        "officialStatus": "official",
        "populationPercent": 91
      },
      {
        "countryCode": "IC",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "MX",
        "officialStatus": "de_facto_official",
        "populationPercent": 83
      },
      {
        "countryCode": "NI",
        "officialStatus": "official",
        "populationPercent": 78
      },
      {
        "countryCode": "PA",
        "officialStatus": "official",
        "populationPercent": 69
      },
      {
        "countryCode": "PE",
        "officialStatus": "official",
        "populationPercent": 73
      },
      {
        "countryCode": "PR",
        "officialStatus": "official",
        "populationPercent": 87
      },
      {
        "countryCode": "PY",
        "officialStatus": "official",
        "populationPercent": 3.2
      },
      {
        "countryCode": "SV",
        "officialStatus": "official",
        "populationPercent": 89
      },
      {
        "countryCode": "US",
        "officialStatus": "official_regional",
        "populationPercent": 9.6
      },
      {
        "countryCode": "UY",
        "officialStatus": "official",
        "populationPercent": 88
      },
      {
        "countryCode": "VE",
        "officialStatus": "official",
        "populationPercent": 82
      }
    ]
  },
  {
    "code": "srn",
    "baseCode": "srn",
    "type": "language",
    "name": "Sranan Tongo",
    "estimatedSpeakers": 439795,
    "officialCountries": []
  },
  {
    "code": "zgh",
    "baseCode": "zgh",
    "type": "language",
    "name": "Standard Moroccan Tamazight",
    "estimatedSpeakers": 8225272,
    "officialCountries": []
  },
  {
    "code": "apd",
    "baseCode": "apd",
    "type": "language",
    "name": "Sudanese Arabic",
    "estimatedSpeakers": 30785053,
    "officialCountries": []
  },
  {
    "code": "suk",
    "baseCode": "suk",
    "type": "language",
    "name": "Sukuma",
    "estimatedSpeakers": 5869203,
    "officialCountries": []
  },
  {
    "code": "su",
    "baseCode": "su",
    "type": "language",
    "name": "Sundanese",
    "estimatedSpeakers": 33787440,
    "officialCountries": []
  },
  {
    "code": "suz",
    "baseCode": "suz",
    "type": "language",
    "name": "Sunwar",
    "estimatedSpeakers": 40459,
    "officialCountries": []
  },
  {
    "code": "sus",
    "baseCode": "sus",
    "type": "language",
    "name": "Susu",
    "estimatedSpeakers": 1538482,
    "officialCountries": []
  },
  {
    "code": "swg",
    "baseCode": "swg",
    "type": "language",
    "name": "Swabian",
    "estimatedSpeakers": 841191,
    "officialCountries": []
  },
  {
    "code": "sw",
    "baseCode": "sw",
    "type": "language",
    "name": "Swahili",
    "estimatedSpeakers": 194102079,
    "officialCountries": [
      {
        "countryCode": "CD",
        "officialStatus": "official_regional",
        "populationPercent": 50
      },
      {
        "countryCode": "KE",
        "officialStatus": "official",
        "populationPercent": 66
      },
      {
        "countryCode": "TZ",
        "officialStatus": "official",
        "populationPercent": 90
      },
      {
        "countryCode": "UG",
        "officialStatus": "official",
        "populationPercent": 75
      }
    ]
  },
  {
    "code": "csw",
    "baseCode": "csw",
    "type": "language",
    "name": "Swampy Cree",
    "estimatedSpeakers": 4655,
    "officialCountries": []
  },
  {
    "code": "ss",
    "baseCode": "ss",
    "type": "language",
    "name": "Swati",
    "estimatedSpeakers": 2345504,
    "officialCountries": [
      {
        "countryCode": "SZ",
        "officialStatus": "official",
        "populationPercent": 58
      },
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 2.7
      }
    ]
  },
  {
    "code": "sv",
    "baseCode": "sv",
    "type": "language",
    "name": "Swedish",
    "estimatedSpeakers": 13338377,
    "officialCountries": [
      {
        "countryCode": "AX",
        "officialStatus": "official",
        "populationPercent": 99
      },
      {
        "countryCode": "FI",
        "officialStatus": "official",
        "populationPercent": 44
      },
      {
        "countryCode": "SE",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ]
  },
  {
    "code": "gsw",
    "baseCode": "gsw",
    "type": "language",
    "name": "Swiss German",
    "estimatedSpeakers": 8439156,
    "officialCountries": [
      {
        "countryCode": "CH",
        "officialStatus": "de_facto_official",
        "populationPercent": 66
      },
      {
        "countryCode": "LI",
        "officialStatus": "de_facto_official",
        "populationPercent": 85
      }
    ]
  },
  {
    "code": "syl",
    "baseCode": "syl",
    "type": "language",
    "name": "Sylheti",
    "estimatedSpeakers": 8434850,
    "officialCountries": []
  },
  {
    "code": "syr",
    "baseCode": "syr",
    "type": "language",
    "name": "Syriac",
    "estimatedSpeakers": 230464,
    "officialCountries": []
  },
  {
    "code": "shi",
    "baseCode": "shi",
    "type": "language",
    "name": "Tachelhit",
    "estimatedSpeakers": 3252721,
    "officialCountries": []
  },
  {
    "code": "rob",
    "baseCode": "rob",
    "type": "language",
    "name": "Tae'",
    "estimatedSpeakers": 309718,
    "officialCountries": []
  },
  {
    "code": "tbw",
    "baseCode": "tbw",
    "type": "language",
    "name": "Tagbanwa",
    "estimatedSpeakers": 10054,
    "officialCountries": []
  },
  {
    "code": "ty",
    "baseCode": "ty",
    "type": "language",
    "name": "Tahitian",
    "estimatedSpeakers": 94097,
    "officialCountries": [
      {
        "countryCode": "PF",
        "officialStatus": "official",
        "populationPercent": 31
      }
    ]
  },
  {
    "code": "blt",
    "baseCode": "blt",
    "type": "language",
    "name": "Tai Dam",
    "estimatedSpeakers": 729737,
    "officialCountries": []
  },
  {
    "code": "tdd",
    "baseCode": "tdd",
    "type": "language",
    "name": "Tai Nüa",
    "estimatedSpeakers": 269048,
    "officialCountries": []
  },
  {
    "code": "dav",
    "baseCode": "dav",
    "type": "language",
    "name": "Taita",
    "estimatedSpeakers": 477620,
    "officialCountries": []
  },
  {
    "code": "tg",
    "baseCode": "tg",
    "type": "language",
    "name": "Tajik",
    "estimatedSpeakers": 11226901,
    "officialCountries": [
      {
        "countryCode": "TJ",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ]
  },
  {
    "code": "tly",
    "baseCode": "tly",
    "type": "language",
    "name": "Talysh",
    "estimatedSpeakers": 1043720,
    "officialCountries": []
  },
  {
    "code": "tmh",
    "baseCode": "tmh",
    "type": "language",
    "name": "Tamashek",
    "estimatedSpeakers": 2042371,
    "officialCountries": []
  },
  {
    "code": "ta",
    "baseCode": "ta",
    "type": "language",
    "name": "Tamil",
    "estimatedSpeakers": 90608137,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 5.9
      },
      {
        "countryCode": "LK",
        "officialStatus": "official",
        "populationPercent": 15
      },
      {
        "countryCode": "SG",
        "officialStatus": "official",
        "populationPercent": 2.1
      }
    ]
  },
  {
    "code": "trv",
    "baseCode": "trv",
    "type": "language",
    "name": "Taroko",
    "estimatedSpeakers": 4719,
    "officialCountries": []
  },
  {
    "code": "twq",
    "baseCode": "twq",
    "type": "language",
    "name": "Tasawaq",
    "estimatedSpeakers": 7903,
    "officialCountries": []
  },
  {
    "code": "tt",
    "baseCode": "tt",
    "type": "language",
    "name": "Tatar",
    "estimatedSpeakers": 1971494,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 1.4
      }
    ]
  },
  {
    "code": "tsg",
    "baseCode": "tsg",
    "type": "language",
    "name": "Tausug",
    "estimatedSpeakers": 1301047,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official_regional",
        "populationPercent": 1.1
      }
    ]
  },
  {
    "code": "rmu",
    "baseCode": "rmu",
    "type": "language",
    "name": "Tavringer Romani",
    "estimatedSpeakers": 9531,
    "officialCountries": []
  },
  {
    "code": "grr",
    "baseCode": "grr",
    "type": "language",
    "name": "Taznatit",
    "estimatedSpeakers": 12226,
    "officialCountries": []
  },
  {
    "code": "ttc",
    "baseCode": "ttc",
    "type": "language",
    "name": "Tektiteko",
    "estimatedSpeakers": 4929,
    "officialCountries": []
  },
  {
    "code": "te",
    "baseCode": "te",
    "type": "language",
    "name": "Telugu",
    "estimatedSpeakers": 101457360,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 7.2
      }
    ]
  },
  {
    "code": "teo",
    "baseCode": "teo",
    "type": "language",
    "name": "Teso",
    "estimatedSpeakers": 2353060,
    "officialCountries": []
  },
  {
    "code": "tet",
    "baseCode": "tet",
    "type": "language",
    "name": "Tetum",
    "estimatedSpeakers": 889077,
    "officialCountries": [
      {
        "countryCode": "TL",
        "officialStatus": "official",
        "populationPercent": 59
      }
    ]
  },
  {
    "code": "th",
    "baseCode": "th",
    "type": "language",
    "name": "Thai",
    "estimatedSpeakers": 55936800,
    "officialCountries": [
      {
        "countryCode": "TH",
        "officialStatus": "official",
        "populationPercent": 80
      }
    ]
  },
  {
    "code": "tdh",
    "baseCode": "tdh",
    "type": "language",
    "name": "Thulung",
    "estimatedSpeakers": 37347,
    "officialCountries": []
  },
  {
    "code": "bo",
    "baseCode": "bo",
    "type": "language",
    "name": "Tibetan",
    "estimatedSpeakers": 3061778,
    "officialCountries": [
      {
        "countryCode": "CN",
        "officialStatus": "official_regional",
        "populationPercent": 0.2
      }
    ]
  },
  {
    "code": "tig",
    "baseCode": "tig",
    "type": "language",
    "name": "Tigre",
    "estimatedSpeakers": 1141913,
    "officialCountries": []
  },
  {
    "code": "ti",
    "baseCode": "ti",
    "type": "language",
    "name": "Tigrinya",
    "estimatedSpeakers": 10929719,
    "officialCountries": [
      {
        "countryCode": "ER",
        "officialStatus": "de_facto_official",
        "populationPercent": 60
      }
    ]
  },
  {
    "code": "tem",
    "baseCode": "tem",
    "type": "language",
    "name": "Timne",
    "estimatedSpeakers": 2371473,
    "officialCountries": []
  },
  {
    "code": "tiv",
    "baseCode": "tiv",
    "type": "language",
    "name": "Tiv",
    "estimatedSpeakers": 3787952,
    "officialCountries": []
  },
  {
    "code": "tpi",
    "baseCode": "tpi",
    "type": "language",
    "name": "Tok Pisin",
    "estimatedSpeakers": 7132802,
    "officialCountries": [
      {
        "countryCode": "PG",
        "officialStatus": "official",
        "populationPercent": 71
      }
    ]
  },
  {
    "code": "tkl",
    "baseCode": "tkl",
    "type": "language",
    "name": "Tokelau",
    "estimatedSpeakers": 1136,
    "officialCountries": [
      {
        "countryCode": "TK",
        "officialStatus": "official",
        "populationPercent": 69
      }
    ]
  },
  {
    "code": "tok",
    "baseCode": "tok",
    "type": "language",
    "name": "Toki Pona",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "lbw",
    "baseCode": "lbw",
    "type": "language",
    "name": "Tolaki",
    "estimatedSpeakers": 366031,
    "officialCountries": []
  },
  {
    "code": "dtm",
    "baseCode": "dtm",
    "type": "language",
    "name": "Tomo Kan Dogon",
    "estimatedSpeakers": 241897,
    "officialCountries": []
  },
  {
    "code": "toi",
    "baseCode": "toi",
    "type": "language",
    "name": "Tonga (Zambia)",
    "estimatedSpeakers": 2287901,
    "officialCountries": []
  },
  {
    "code": "to",
    "baseCode": "to",
    "type": "language",
    "name": "Tongan",
    "estimatedSpeakers": 99645,
    "officialCountries": [
      {
        "countryCode": "TO",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ]
  },
  {
    "code": "ttj",
    "baseCode": "ttj",
    "type": "language",
    "name": "Tooro",
    "estimatedSpeakers": 936377,
    "officialCountries": []
  },
  {
    "code": "fit",
    "baseCode": "fit",
    "type": "language",
    "name": "Tornedalen Finnish",
    "estimatedSpeakers": 58244,
    "officialCountries": []
  },
  {
    "code": "trw",
    "baseCode": "trw",
    "type": "language",
    "name": "Torwali",
    "estimatedSpeakers": 133753,
    "officialCountries": []
  },
  {
    "code": "tkr",
    "baseCode": "tkr",
    "type": "language",
    "name": "Tsakhur",
    "estimatedSpeakers": 17040,
    "officialCountries": []
  },
  {
    "code": "tsd",
    "baseCode": "tsd",
    "type": "language",
    "name": "Tsakonian",
    "estimatedSpeakers": 199,
    "officialCountries": []
  },
  {
    "code": "tsj",
    "baseCode": "tsj",
    "type": "language",
    "name": "Tshangla",
    "estimatedSpeakers": 132682,
    "officialCountries": []
  },
  {
    "code": "ts",
    "baseCode": "ts",
    "type": "language",
    "name": "Tsonga",
    "estimatedSpeakers": 5313551,
    "officialCountries": [
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 4.4
      }
    ]
  },
  {
    "code": "tn",
    "baseCode": "tn",
    "type": "language",
    "name": "Tswana",
    "estimatedSpeakers": 6529140,
    "officialCountries": [
      {
        "countryCode": "BW",
        "officialStatus": "official",
        "populationPercent": 62
      },
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 8.2
      }
    ]
  },
  {
    "code": "tcy",
    "baseCode": "tcy",
    "type": "language",
    "name": "Tulu",
    "estimatedSpeakers": 2113695,
    "officialCountries": []
  },
  {
    "code": "tum",
    "baseCode": "tum",
    "type": "language",
    "name": "Tumbuka",
    "estimatedSpeakers": 2368894,
    "officialCountries": []
  },
  {
    "code": "mzb",
    "baseCode": "mzb",
    "type": "language",
    "name": "Tumzabt",
    "estimatedSpeakers": 169281,
    "officialCountries": []
  },
  {
    "code": "aeb",
    "baseCode": "aeb",
    "type": "language",
    "name": "Tunisian Arabic",
    "estimatedSpeakers": 10843920,
    "officialCountries": []
  },
  {
    "code": "tr",
    "baseCode": "tr",
    "type": "language",
    "name": "Turkish",
    "estimatedSpeakers": 82419542,
    "officialCountries": [
      {
        "countryCode": "CY",
        "officialStatus": "official",
        "populationPercent": 23
      },
      {
        "countryCode": "TR",
        "officialStatus": "official",
        "populationPercent": 93
      }
    ]
  },
  {
    "code": "tk",
    "baseCode": "tk",
    "type": "language",
    "name": "Turkmen",
    "estimatedSpeakers": 7177805,
    "officialCountries": [
      {
        "countryCode": "AF",
        "officialStatus": "official_regional",
        "populationPercent": 1.7
      },
      {
        "countryCode": "TM",
        "officialStatus": "official",
        "populationPercent": 70
      }
    ]
  },
  {
    "code": "tru",
    "baseCode": "tru",
    "type": "language",
    "name": "Turoyo",
    "estimatedSpeakers": 3028,
    "officialCountries": []
  },
  {
    "code": "tvl",
    "baseCode": "tvl",
    "type": "language",
    "name": "Tuvalu",
    "estimatedSpeakers": 9973,
    "officialCountries": [
      {
        "countryCode": "TV",
        "officialStatus": "official",
        "populationPercent": 85
      }
    ]
  },
  {
    "code": "tyv",
    "baseCode": "tyv",
    "type": "language",
    "name": "Tuvinian",
    "estimatedSpeakers": 183067,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.13
      }
    ]
  },
  {
    "code": "kcg",
    "baseCode": "kcg",
    "type": "language",
    "name": "Tyap",
    "estimatedSpeakers": 220175,
    "officialCountries": []
  },
  {
    "code": "tzj",
    "baseCode": "tzj",
    "type": "language",
    "name": "Tz'utujil",
    "estimatedSpeakers": 111357,
    "officialCountries": []
  },
  {
    "code": "aoz",
    "baseCode": "aoz",
    "type": "language",
    "name": "Uab Meto",
    "estimatedSpeakers": 760217,
    "officialCountries": []
  },
  {
    "code": "udm",
    "baseCode": "udm",
    "type": "language",
    "name": "Udmurt",
    "estimatedSpeakers": 535120,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.38
      }
    ]
  },
  {
    "code": "uk",
    "baseCode": "uk",
    "type": "language",
    "name": "Ukrainian",
    "estimatedSpeakers": 24080585,
    "officialCountries": [
      {
        "countryCode": "RS",
        "officialStatus": "official_regional",
        "populationPercent": 0
      },
      {
        "countryCode": "UA",
        "officialStatus": "official",
        "populationPercent": 65
      }
    ]
  },
  {
    "code": "uli",
    "baseCode": "uli",
    "type": "language",
    "name": "Ulithian",
    "estimatedSpeakers": 2988,
    "officialCountries": []
  },
  {
    "code": "umb",
    "baseCode": "umb",
    "type": "language",
    "name": "Umbundu",
    "estimatedSpeakers": 10788609,
    "officialCountries": []
  },
  {
    "code": "hsb",
    "baseCode": "hsb",
    "type": "language",
    "name": "Upper Sorbian",
    "estimatedSpeakers": 13459,
    "officialCountries": []
  },
  {
    "code": "ur",
    "baseCode": "ur",
    "type": "language",
    "name": "Urdu",
    "estimatedSpeakers": 313093257,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 5
      },
      {
        "countryCode": "PK",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ]
  },
  {
    "code": "usp",
    "baseCode": "usp",
    "type": "language",
    "name": "Uspanteco",
    "estimatedSpeakers": 8215,
    "officialCountries": [
      {
        "countryCode": "GT",
        "officialStatus": "official_regional",
        "populationPercent": 0.045
      }
    ]
  },
  {
    "code": "ug",
    "baseCode": "ug",
    "type": "language",
    "name": "Uyghur",
    "estimatedSpeakers": 8197414,
    "officialCountries": [
      {
        "countryCode": "CN",
        "officialStatus": "official_regional",
        "populationPercent": 0.55
      }
    ]
  },
  {
    "code": "uz",
    "baseCode": "uz",
    "type": "language",
    "name": "Uzbek",
    "estimatedSpeakers": 33452882,
    "officialCountries": [
      {
        "countryCode": "AF",
        "officialStatus": "official_regional",
        "populationPercent": 4.7
      },
      {
        "countryCode": "UZ",
        "officialStatus": "official",
        "populationPercent": 85
      }
    ]
  },
  {
    "code": "vai",
    "baseCode": "vai",
    "type": "language",
    "name": "Vai",
    "estimatedSpeakers": 206616,
    "officialCountries": []
  },
  {
    "code": "ve",
    "baseCode": "ve",
    "type": "language",
    "name": "Venda",
    "estimatedSpeakers": 1499942,
    "officialCountries": [
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 2.3
      }
    ]
  },
  {
    "code": "vec",
    "baseCode": "vec",
    "type": "language",
    "name": "Venetian",
    "estimatedSpeakers": 1381574,
    "officialCountries": [
      {
        "countryCode": "BR",
        "officialStatus": "official_regional",
        "populationPercent": 0.24
      },
      {
        "countryCode": "HR",
        "officialStatus": "official_regional",
        "populationPercent": 0.7
      },
      {
        "countryCode": "IT",
        "officialStatus": "official_regional",
        "populationPercent": 1.3
      },
      {
        "countryCode": "SI",
        "officialStatus": "official_regional",
        "populationPercent": 1.4
      }
    ]
  },
  {
    "code": "vep",
    "baseCode": "vep",
    "type": "language",
    "name": "Veps",
    "estimatedSpeakers": 3661,
    "officialCountries": []
  },
  {
    "code": "vi",
    "baseCode": "vi",
    "type": "language",
    "name": "Vietnamese",
    "estimatedSpeakers": 92370781,
    "officialCountries": [
      {
        "countryCode": "VN",
        "officialStatus": "official",
        "populationPercent": 86
      }
    ]
  },
  {
    "code": "vic",
    "baseCode": "vic",
    "type": "language",
    "name": "Virgin Islands Creole English",
    "estimatedSpeakers": 3096,
    "officialCountries": []
  },
  {
    "code": "vo",
    "baseCode": "vo",
    "type": "language",
    "name": "Volapük",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "vro",
    "baseCode": "vro",
    "type": "language",
    "name": "Võro",
    "estimatedSpeakers": 68046,
    "officialCountries": []
  },
  {
    "code": "vot",
    "baseCode": "vot",
    "type": "language",
    "name": "Votic",
    "estimatedSpeakers": 0,
    "officialCountries": []
  },
  {
    "code": "vun",
    "baseCode": "vun",
    "type": "language",
    "name": "Vunjo",
    "estimatedSpeakers": 499220,
    "officialCountries": []
  },
  {
    "code": "wbq",
    "baseCode": "wbq",
    "type": "language",
    "name": "Waddar",
    "estimatedSpeakers": 2536434,
    "officialCountries": []
  },
  {
    "code": "kxp",
    "baseCode": "kxp",
    "type": "language",
    "name": "Wadiyara Koli",
    "estimatedSpeakers": 277600,
    "officialCountries": []
  },
  {
    "code": "wbr",
    "baseCode": "wbr",
    "type": "language",
    "name": "Wagdi",
    "estimatedSpeakers": 2113695,
    "officialCountries": []
  },
  {
    "code": "wls",
    "baseCode": "wls",
    "type": "language",
    "name": "Wallisian",
    "estimatedSpeakers": 9419,
    "officialCountries": []
  },
  {
    "code": "wa",
    "baseCode": "wa",
    "type": "language",
    "name": "Walloon",
    "estimatedSpeakers": 694701,
    "officialCountries": []
  },
  {
    "code": "wae",
    "baseCode": "wae",
    "type": "language",
    "name": "Walser",
    "estimatedSpeakers": 11035,
    "officialCountries": []
  },
  {
    "code": "war",
    "baseCode": "war",
    "type": "language",
    "name": "Waray",
    "estimatedSpeakers": 3434688,
    "officialCountries": [
      {
        "countryCode": "PH",
        "officialStatus": "official_regional",
        "populationPercent": 2.9
      }
    ]
  },
  {
    "code": "wbp",
    "baseCode": "wbp",
    "type": "language",
    "name": "Warlpiri",
    "estimatedSpeakers": 2489,
    "officialCountries": []
  },
  {
    "code": "guc",
    "baseCode": "guc",
    "type": "language",
    "name": "Wayuu",
    "estimatedSpeakers": 133889,
    "officialCountries": []
  },
  {
    "code": "cy",
    "baseCode": "cy",
    "type": "language",
    "name": "Welsh",
    "estimatedSpeakers": 920985,
    "officialCountries": [
      {
        "countryCode": "GB",
        "officialStatus": "official_regional",
        "populationPercent": 1.3
      }
    ]
  },
  {
    "code": "vls",
    "baseCode": "vls",
    "type": "language",
    "name": "West Flemish",
    "estimatedSpeakers": 1197760,
    "officialCountries": []
  },
  {
    "code": "bgn",
    "baseCode": "bgn",
    "type": "language",
    "name": "Western Balochi",
    "estimatedSpeakers": 2186208,
    "officialCountries": []
  },
  {
    "code": "cja",
    "baseCode": "cja",
    "type": "language",
    "name": "Western Cham",
    "estimatedSpeakers": 273019,
    "officialCountries": []
  },
  {
    "code": "fy",
    "baseCode": "fy",
    "type": "language",
    "name": "Western Frisian",
    "estimatedSpeakers": 764213,
    "officialCountries": [
      {
        "countryCode": "NL",
        "officialStatus": "official_regional",
        "populationPercent": 4.3
      }
    ]
  },
  {
    "code": "nhw",
    "baseCode": "nhw",
    "type": "language",
    "name": "Western Huasteca Nahuatl",
    "estimatedSpeakers": 509886,
    "officialCountries": []
  },
  {
    "code": "knj",
    "baseCode": "knj",
    "type": "language",
    "name": "Western Kanjobal",
    "estimatedSpeakers": 105880,
    "officialCountries": []
  },
  {
    "code": "lcp",
    "baseCode": "lcp",
    "type": "language",
    "name": "Western Lawa",
    "estimatedSpeakers": 89122,
    "officialCountries": []
  },
  {
    "code": "mrd",
    "baseCode": "mrd",
    "type": "language",
    "name": "Western Magar",
    "estimatedSpeakers": 258316,
    "officialCountries": []
  },
  {
    "code": "mrj",
    "baseCode": "mrj",
    "type": "language",
    "name": "Western Mari",
    "estimatedSpeakers": 29572,
    "officialCountries": []
  },
  {
    "code": "ojw",
    "baseCode": "ojw",
    "type": "language",
    "name": "Western Ojibwa",
    "estimatedSpeakers": 3647,
    "officialCountries": []
  },
  {
    "code": "lah",
    "baseCode": "lah",
    "type": "language",
    "name": "Western Panjabi",
    "estimatedSpeakers": 100980828,
    "officialCountries": []
  },
  {
    "code": "tdg",
    "baseCode": "tdg",
    "type": "language",
    "name": "Western Tamang",
    "estimatedSpeakers": 404591,
    "officialCountries": []
  },
  {
    "code": "wal",
    "baseCode": "wal",
    "type": "language",
    "name": "Wolaytta",
    "estimatedSpeakers": 2133900,
    "officialCountries": []
  },
  {
    "code": "wo",
    "baseCode": "wo",
    "type": "language",
    "name": "Wolof",
    "estimatedSpeakers": 13203204,
    "officialCountries": [
      {
        "countryCode": "SN",
        "officialStatus": "de_facto_official",
        "populationPercent": 70
      }
    ]
  },
  {
    "code": "wuu",
    "baseCode": "wuu",
    "type": "language",
    "name": "Wu Chinese",
    "estimatedSpeakers": 84962400,
    "officialCountries": []
  },
  {
    "code": "kao",
    "baseCode": "kao",
    "type": "language",
    "name": "Xaasongaxango",
    "estimatedSpeakers": 219906,
    "officialCountries": []
  },
  {
    "code": "xav",
    "baseCode": "xav",
    "type": "language",
    "name": "Xavánte",
    "estimatedSpeakers": 9902,
    "officialCountries": []
  },
  {
    "code": "xh",
    "baseCode": "xh",
    "type": "language",
    "name": "Xhosa",
    "estimatedSpeakers": 10901721,
    "officialCountries": [
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 18
      }
    ]
  },
  {
    "code": "hsn",
    "baseCode": "hsn",
    "type": "language",
    "name": "Xiang Chinese",
    "estimatedSpeakers": 41065160,
    "officialCountries": []
  },
  {
    "code": "xin",
    "baseCode": "xin",
    "type": "language",
    "name": "Xinca",
    "estimatedSpeakers": 4929,
    "officialCountries": [
      {
        "countryCode": "GT",
        "officialStatus": "official_regional",
        "populationPercent": 0.027
      }
    ]
  },
  {
    "code": "sah",
    "baseCode": "sah",
    "type": "language",
    "name": "Yakut",
    "estimatedSpeakers": 450627,
    "officialCountries": [
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.32
      }
    ]
  },
  {
    "code": "yav",
    "baseCode": "yav",
    "type": "language",
    "name": "Yangben",
    "estimatedSpeakers": 2291,
    "officialCountries": []
  },
  {
    "code": "yao",
    "baseCode": "yao",
    "type": "language",
    "name": "Yao",
    "estimatedSpeakers": 800424,
    "officialCountries": []
  },
  {
    "code": "yap",
    "baseCode": "yap",
    "type": "language",
    "name": "Yapese",
    "estimatedSpeakers": 6574,
    "officialCountries": []
  },
  {
    "code": "ybb",
    "baseCode": "ybb",
    "type": "language",
    "name": "Yemba",
    "estimatedSpeakers": 495458,
    "officialCountries": []
  },
  {
    "code": "yi",
    "baseCode": "yi",
    "type": "language",
    "name": "Yiddish",
    "estimatedSpeakers": 916209,
    "officialCountries": []
  },
  {
    "code": "yo",
    "baseCode": "yo",
    "type": "language",
    "name": "Yoruba",
    "estimatedSpeakers": 31761816,
    "officialCountries": [
      {
        "countryCode": "NG",
        "officialStatus": "official",
        "populationPercent": 13
      }
    ]
  },
  {
    "code": "yua",
    "baseCode": "yua",
    "type": "language",
    "name": "Yucateco",
    "estimatedSpeakers": 875958,
    "officialCountries": []
  },
  {
    "code": "zag",
    "baseCode": "zag",
    "type": "language",
    "name": "Zaghawa",
    "estimatedSpeakers": 257383,
    "officialCountries": []
  },
  {
    "code": "dje",
    "baseCode": "dje",
    "type": "language",
    "name": "Zarma",
    "estimatedSpeakers": 4478276,
    "officialCountries": []
  },
  {
    "code": "zza",
    "baseCode": "zza",
    "type": "language",
    "name": "Zaza",
    "estimatedSpeakers": 1177673,
    "officialCountries": []
  },
  {
    "code": "zea",
    "baseCode": "zea",
    "type": "language",
    "name": "Zeelandic",
    "estimatedSpeakers": 248814,
    "officialCountries": []
  },
  {
    "code": "za",
    "baseCode": "za",
    "type": "language",
    "name": "Zhuang",
    "estimatedSpeakers": 4389724,
    "officialCountries": [
      {
        "countryCode": "CN",
        "officialStatus": "official_regional",
        "populationPercent": 0.31
      }
    ]
  },
  {
    "code": "gbz",
    "baseCode": "gbz",
    "type": "language",
    "name": "Zoroastrian Dari",
    "estimatedSpeakers": 8043,
    "officialCountries": []
  },
  {
    "code": "zu",
    "baseCode": "zu",
    "type": "language",
    "name": "Zulu",
    "estimatedSpeakers": 14969091,
    "officialCountries": [
      {
        "countryCode": "ZA",
        "officialStatus": "official_regional",
        "populationPercent": 24
      }
    ]
  }
];

export const languageVariants: Language[] = [
  {
    "code": "aa-DJ",
    "baseCode": "aa",
    "type": "variant",
    "name": "Afar (Djibouti)",
    "estimatedSpeakers": 417889,
    "officialCountries": [],
    "region": "DJ"
  },
  {
    "code": "aa-ER",
    "baseCode": "aa",
    "type": "variant",
    "name": "Afar (Eritrea)",
    "estimatedSpeakers": 228383,
    "officialCountries": [],
    "region": "ER"
  },
  {
    "code": "af-NA",
    "baseCode": "af",
    "type": "variant",
    "name": "Afrikaans (Namibia)",
    "estimatedSpeakers": 2102745,
    "officialCountries": [],
    "region": "NA"
  },
  {
    "code": "sq-XK",
    "baseCode": "sq",
    "type": "variant",
    "name": "Albanian (Kosovo)",
    "estimatedSpeakers": 1818923,
    "officialCountries": [],
    "region": "XK"
  },
  {
    "code": "sq-MK",
    "baseCode": "sq",
    "type": "variant",
    "name": "Albanian (North Macedonia)",
    "estimatedSpeakers": 533905,
    "officialCountries": [],
    "region": "MK"
  },
  {
    "code": "ar-DZ",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Algeria)",
    "estimatedSpeakers": 34796650,
    "officialCountries": [],
    "region": "DZ"
  },
  {
    "code": "ar-BH",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Bahrain)",
    "estimatedSpeakers": 1363194,
    "officialCountries": [],
    "region": "BH"
  },
  {
    "code": "ar-TD",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Chad)",
    "estimatedSpeakers": 3245912,
    "officialCountries": [],
    "region": "TD"
  },
  {
    "code": "ar-KM",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Comoros)",
    "estimatedSpeakers": 594093,
    "officialCountries": [],
    "region": "KM"
  },
  {
    "code": "ar-DJ",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Djibouti)",
    "estimatedSpeakers": 72633,
    "officialCountries": [],
    "region": "DJ"
  },
  {
    "code": "ar-EG",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Egypt)",
    "estimatedSpeakers": 104572180,
    "officialCountries": [],
    "region": "EG"
  },
  {
    "code": "ar-ER",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Eritrea)",
    "estimatedSpeakers": 310854,
    "officialCountries": [],
    "region": "ER"
  },
  {
    "code": "ar-IQ",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Iraq)",
    "estimatedSpeakers": 28616712,
    "officialCountries": [],
    "region": "IQ"
  },
  {
    "code": "ar-IL",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Israel)",
    "estimatedSpeakers": 1880524,
    "officialCountries": [],
    "region": "IL"
  },
  {
    "code": "ar-JO",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Jordan)",
    "estimatedSpeakers": 11174000,
    "officialCountries": [],
    "region": "JO"
  },
  {
    "code": "ar-KW",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Kuwait)",
    "estimatedSpeakers": 3138360,
    "officialCountries": [],
    "region": "KW"
  },
  {
    "code": "ar-LB",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Lebanon)",
    "estimatedSpeakers": 4613453,
    "officialCountries": [],
    "region": "LB"
  },
  {
    "code": "ar-LY",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Libya)",
    "estimatedSpeakers": 5447332,
    "officialCountries": [],
    "region": "LY"
  },
  {
    "code": "ar-MR",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Mauritania)",
    "estimatedSpeakers": 3678834,
    "officialCountries": [],
    "region": "MR"
  },
  {
    "code": "ar-MA",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Morocco)",
    "estimatedSpeakers": 23180312,
    "officialCountries": [],
    "region": "MA"
  },
  {
    "code": "ar-OM",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Oman)",
    "estimatedSpeakers": 3160612,
    "officialCountries": [],
    "region": "OM"
  },
  {
    "code": "ar-PS",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Palestinian Territories)",
    "estimatedSpeakers": 5385010,
    "officialCountries": [],
    "region": "PS"
  },
  {
    "code": "ar-QA",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Qatar)",
    "estimatedSpeakers": 2271360,
    "officialCountries": [],
    "region": "QA"
  },
  {
    "code": "ar-SA",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Saudi Arabia)",
    "estimatedSpeakers": 36544400,
    "officialCountries": [],
    "region": "SA"
  },
  {
    "code": "ar-SO",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Somalia)",
    "estimatedSpeakers": 4425882,
    "officialCountries": [],
    "region": "SO"
  },
  {
    "code": "ar-SS",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (South Sudan)",
    "estimatedSpeakers": 3429999,
    "officialCountries": [],
    "region": "SS"
  },
  {
    "code": "ar-SD",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Sudan)",
    "estimatedSpeakers": 30785053,
    "officialCountries": [],
    "region": "SD"
  },
  {
    "code": "ar-SY",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Syria)",
    "estimatedSpeakers": 19092320,
    "officialCountries": [],
    "region": "SY"
  },
  {
    "code": "ar-TN",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Tunisia)",
    "estimatedSpeakers": 10843920,
    "officialCountries": [],
    "region": "TN"
  },
  {
    "code": "ar-AE",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (United Arab Emirates)",
    "estimatedSpeakers": 7825116,
    "officialCountries": [],
    "region": "AE"
  },
  {
    "code": "ar-EH",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Western Sahara)",
    "estimatedSpeakers": 652271,
    "officialCountries": [],
    "region": "EH"
  },
  {
    "code": "ar-YE",
    "baseCode": "ar",
    "type": "variant",
    "name": "Arabic (Yemen)",
    "estimatedSpeakers": 23783896,
    "officialCountries": [],
    "region": "YE"
  },
  {
    "code": "en-AU",
    "baseCode": "en",
    "type": "variant",
    "name": "Australian English",
    "estimatedSpeakers": 25697856,
    "officialCountries": [],
    "region": "AU"
  },
  {
    "code": "de-AT",
    "baseCode": "de",
    "type": "variant",
    "name": "Austrian German",
    "estimatedSpeakers": 8698941,
    "officialCountries": [],
    "region": "AT"
  },
  {
    "code": "az-Arab-IQ",
    "baseCode": "az",
    "type": "variant",
    "name": "Azerbaijani (Arabic, Iraq)",
    "estimatedSpeakers": 757501,
    "officialCountries": [
      {
        "countryCode": "IQ",
        "officialStatus": "official_regional",
        "populationPercent": 1.8
      }
    ],
    "script": "Arab",
    "region": "IQ"
  },
  {
    "code": "az-Arab-TR",
    "baseCode": "az",
    "type": "variant",
    "name": "Azerbaijani (Arabic, Türkiye)",
    "estimatedSpeakers": 546777,
    "officialCountries": [],
    "script": "Arab",
    "region": "TR"
  },
  {
    "code": "az-Arab",
    "baseCode": "az",
    "type": "variant",
    "name": "Azerbaijani (Arabic)",
    "estimatedSpeakers": 22517134,
    "officialCountries": [
      {
        "countryCode": "IQ",
        "officialStatus": "official_regional",
        "populationPercent": 1.8
      }
    ],
    "script": "Arab"
  },
  {
    "code": "az-Cyrl",
    "baseCode": "az",
    "type": "variant",
    "name": "Azerbaijani (Cyrillic)",
    "estimatedSpeakers": 1185333,
    "officialCountries": [
      {
        "countryCode": "AZ",
        "officialStatus": "official",
        "populationPercent": 9.9
      },
      {
        "countryCode": "RU",
        "officialStatus": "official_regional",
        "populationPercent": 0.093
      }
    ],
    "script": "Cyrl"
  },
  {
    "code": "az-Latn",
    "baseCode": "az",
    "type": "variant",
    "name": "Azerbaijani (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "bal-Arab",
    "baseCode": "bal",
    "type": "variant",
    "name": "Baluchi (Arabic)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Arab"
  },
  {
    "code": "bal-Latn",
    "baseCode": "bal",
    "type": "variant",
    "name": "Baluchi (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "bm-Nkoo",
    "baseCode": "bm",
    "type": "variant",
    "name": "Bambara (N’Ko)",
    "estimatedSpeakers": 439812,
    "officialCountries": [],
    "script": "Nkoo"
  },
  {
    "code": "bn-IN",
    "baseCode": "bn",
    "type": "variant",
    "name": "Bangla (India)",
    "estimatedSpeakers": 114139530,
    "officialCountries": [],
    "region": "IN"
  },
  {
    "code": "be-tarask",
    "baseCode": "be",
    "type": "variant",
    "name": "Belarusian (Taraskievica orthography)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "variants": [
      "tarask"
    ]
  },
  {
    "code": "bs-Cyrl",
    "baseCode": "bs",
    "type": "variant",
    "name": "Bosnian (Cyrillic)",
    "estimatedSpeakers": 3760683,
    "officialCountries": [
      {
        "countryCode": "BA",
        "officialStatus": "official",
        "populationPercent": 99
      }
    ],
    "script": "Cyrl"
  },
  {
    "code": "bs-Latn",
    "baseCode": "bs",
    "type": "variant",
    "name": "Bosnian (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "en-GB",
    "baseCode": "en",
    "type": "variant",
    "name": "British English",
    "estimatedSpeakers": 67089918,
    "officialCountries": [],
    "region": "GB"
  },
  {
    "code": "en-CA",
    "baseCode": "en",
    "type": "variant",
    "name": "Canadian English",
    "estimatedSpeakers": 33751476,
    "officialCountries": [],
    "region": "CA"
  },
  {
    "code": "fr-CA",
    "baseCode": "fr",
    "type": "variant",
    "name": "Canadian French",
    "estimatedSpeakers": 11250492,
    "officialCountries": [],
    "region": "CA"
  },
  {
    "code": "yue-Hans",
    "baseCode": "yue",
    "type": "variant",
    "name": "Cantonese (Simplified)",
    "estimatedSpeakers": 73634080,
    "officialCountries": [],
    "script": "Hans"
  },
  {
    "code": "yue-Hant-CN",
    "baseCode": "yue",
    "type": "variant",
    "name": "Cantonese (Traditional, China)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hant",
    "region": "CN"
  },
  {
    "code": "yue-Hant-MO",
    "baseCode": "yue",
    "type": "variant",
    "name": "Cantonese (Traditional, Macao SAR China)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hant",
    "region": "MO"
  },
  {
    "code": "yue-Hant",
    "baseCode": "yue",
    "type": "variant",
    "name": "Cantonese (Traditional)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hant"
  },
  {
    "code": "ca-AD",
    "baseCode": "ca",
    "type": "variant",
    "name": "Catalan (Andorra)",
    "estimatedSpeakers": 43539,
    "officialCountries": [],
    "region": "AD"
  },
  {
    "code": "ca-FR",
    "baseCode": "ca",
    "type": "variant",
    "name": "Catalan (France)",
    "estimatedSpeakers": 116237,
    "officialCountries": [],
    "region": "FR"
  },
  {
    "code": "ca-IT",
    "baseCode": "ca",
    "type": "variant",
    "name": "Catalan (Italy)",
    "estimatedSpeakers": 21338,
    "officialCountries": [],
    "region": "IT"
  },
  {
    "code": "ca-ES-valencia",
    "baseCode": "ca",
    "type": "variant",
    "name": "Catalan (Spain, Valencian)",
    "estimatedSpeakers": 8037668,
    "officialCountries": [],
    "region": "ES",
    "variants": [
      "valencia"
    ]
  },
  {
    "code": "ckb-IR",
    "baseCode": "ckb",
    "type": "variant",
    "name": "Central Kurdish (Iran)",
    "estimatedSpeakers": 556837,
    "officialCountries": [],
    "region": "IR"
  },
  {
    "code": "ccp-IN",
    "baseCode": "ccp",
    "type": "variant",
    "name": "Chakma (India)",
    "estimatedSpeakers": 394556,
    "officialCountries": [],
    "region": "IN"
  },
  {
    "code": "zh-Latn",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "zh-Hans-HK",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Simplified, Hong Kong SAR China)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hans",
    "region": "HK"
  },
  {
    "code": "zh-Hans-MO",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Simplified, Macao SAR China)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hans",
    "region": "MO"
  },
  {
    "code": "zh-Hans-MY",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Simplified, Malaysia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hans",
    "region": "MY"
  },
  {
    "code": "zh-Hans-SG",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Simplified, Singapore)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hans",
    "region": "SG"
  },
  {
    "code": "zh-Hant-HK",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Traditional, Hong Kong SAR China)",
    "estimatedSpeakers": 6932929,
    "officialCountries": [
      {
        "countryCode": "HK",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ],
    "script": "Hant",
    "region": "HK"
  },
  {
    "code": "zh-Hant-MO",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Traditional, Macao SAR China)",
    "estimatedSpeakers": 631537,
    "officialCountries": [
      {
        "countryCode": "MO",
        "officialStatus": "official",
        "populationPercent": 98
      }
    ],
    "script": "Hant",
    "region": "MO"
  },
  {
    "code": "zh-Hant-MY",
    "baseCode": "zh",
    "type": "variant",
    "name": "Chinese (Traditional, Malaysia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hant",
    "region": "MY"
  },
  {
    "code": "sw-CD",
    "baseCode": "sw",
    "type": "variant",
    "name": "Congo Swahili",
    "estimatedSpeakers": 57701500,
    "officialCountries": [],
    "region": "CD"
  },
  {
    "code": "hr-BA",
    "baseCode": "hr",
    "type": "variant",
    "name": "Croatian (Bosnia & Herzegovina)",
    "estimatedSpeakers": 455840,
    "officialCountries": [],
    "region": "BA"
  },
  {
    "code": "da-GL",
    "baseCode": "da",
    "type": "variant",
    "name": "Danish (Greenland)",
    "estimatedSpeakers": 8085,
    "officialCountries": [],
    "region": "GL"
  },
  {
    "code": "fa-AF",
    "baseCode": "fa",
    "type": "variant",
    "name": "Dari",
    "estimatedSpeakers": 20060800,
    "officialCountries": [],
    "region": "AF"
  },
  {
    "code": "nl-AW",
    "baseCode": "nl",
    "type": "variant",
    "name": "Dutch (Aruba)",
    "estimatedSpeakers": 121311,
    "officialCountries": [],
    "region": "AW"
  },
  {
    "code": "nl-BQ",
    "baseCode": "nl",
    "type": "variant",
    "name": "Dutch (Caribbean Netherlands)",
    "estimatedSpeakers": 1600,
    "officialCountries": [],
    "region": "BQ"
  },
  {
    "code": "nl-CW",
    "baseCode": "nl",
    "type": "variant",
    "name": "Dutch (Curaçao)",
    "estimatedSpeakers": 12263,
    "officialCountries": [],
    "region": "CW"
  },
  {
    "code": "nl-SX",
    "baseCode": "nl",
    "type": "variant",
    "name": "Dutch (Sint Maarten)",
    "estimatedSpeakers": 1571,
    "officialCountries": [],
    "region": "SX"
  },
  {
    "code": "nl-SR",
    "baseCode": "nl",
    "type": "variant",
    "name": "Dutch (Suriname)",
    "estimatedSpeakers": 582082,
    "officialCountries": [],
    "region": "SR"
  },
  {
    "code": "en-AS",
    "baseCode": "en",
    "type": "variant",
    "name": "English (American Samoa)",
    "estimatedSpeakers": 42578,
    "officialCountries": [],
    "region": "AS"
  },
  {
    "code": "en-AI",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Anguilla)",
    "estimatedSpeakers": 18445,
    "officialCountries": [],
    "region": "AI"
  },
  {
    "code": "en-AG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Antigua & Barbuda)",
    "estimatedSpeakers": 88265,
    "officialCountries": [],
    "region": "AG"
  },
  {
    "code": "en-AT",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Austria)",
    "estimatedSpeakers": 6546625,
    "officialCountries": [],
    "region": "AT"
  },
  {
    "code": "en-BS",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Bahamas)",
    "estimatedSpeakers": 410862,
    "officialCountries": [],
    "region": "BS"
  },
  {
    "code": "en-BB",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Barbados)",
    "estimatedSpeakers": 304139,
    "officialCountries": [],
    "region": "BB"
  },
  {
    "code": "en-BE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Belgium)",
    "estimatedSpeakers": 7066784,
    "officialCountries": [],
    "region": "BE"
  },
  {
    "code": "en-BZ",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Belize)",
    "estimatedSpeakers": 320158,
    "officialCountries": [],
    "region": "BZ"
  },
  {
    "code": "en-BM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Bermuda)",
    "estimatedSpeakers": 66976,
    "officialCountries": [],
    "region": "BM"
  },
  {
    "code": "en-BW",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Botswana)",
    "estimatedSpeakers": 1985043,
    "officialCountries": [],
    "region": "BW"
  },
  {
    "code": "en-IO",
    "baseCode": "en",
    "type": "variant",
    "name": "English (British Indian Ocean Territory)",
    "estimatedSpeakers": 3500,
    "officialCountries": [],
    "region": "IO"
  },
  {
    "code": "en-VG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (British Virgin Islands)",
    "estimatedSpeakers": 39300,
    "officialCountries": [],
    "region": "VG"
  },
  {
    "code": "en-BI",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Burundi)",
    "estimatedSpeakers": 6251,
    "officialCountries": [],
    "region": "BI"
  },
  {
    "code": "en-CM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Cameroon)",
    "estimatedSpeakers": 11767118,
    "officialCountries": [],
    "region": "CM"
  },
  {
    "code": "en-KY",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Cayman Islands)",
    "estimatedSpeakers": 65320,
    "officialCountries": [],
    "region": "KY"
  },
  {
    "code": "en-CX",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Christmas Island)",
    "estimatedSpeakers": 1404,
    "officialCountries": [],
    "region": "CX"
  },
  {
    "code": "en-CC",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Cocos [Keeling] Islands)",
    "estimatedSpeakers": 101,
    "officialCountries": [],
    "region": "CC"
  },
  {
    "code": "en-CK",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Cook Islands)",
    "estimatedSpeakers": 7761,
    "officialCountries": [],
    "region": "CK"
  },
  {
    "code": "en-CY",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Cyprus)",
    "estimatedSpeakers": 963987,
    "officialCountries": [],
    "region": "CY"
  },
  {
    "code": "en-CZ",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Czechia)",
    "estimatedSpeakers": 2926233,
    "officialCountries": [],
    "region": "CZ"
  },
  {
    "code": "en-DK",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Denmark)",
    "estimatedSpeakers": 5136900,
    "officialCountries": [],
    "region": "DK"
  },
  {
    "code": "en-Dsrt",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Deseret)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Dsrt"
  },
  {
    "code": "en-DG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Diego Garcia)",
    "estimatedSpeakers": 495,
    "officialCountries": [],
    "region": "DG"
  },
  {
    "code": "en-DM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Dominica)",
    "estimatedSpeakers": 70181,
    "officialCountries": [],
    "region": "DM"
  },
  {
    "code": "en-ER",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Eritrea)",
    "estimatedSpeakers": 3742936,
    "officialCountries": [],
    "region": "ER"
  },
  {
    "code": "en-EE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Estonia)",
    "estimatedSpeakers": 596895,
    "officialCountries": [],
    "region": "EE"
  },
  {
    "code": "en-SZ",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Eswatini)",
    "estimatedSpeakers": 910472,
    "officialCountries": [],
    "region": "SZ"
  },
  {
    "code": "en-150",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Europe)",
    "estimatedSpeakers": 279594418,
    "officialCountries": [],
    "region": "150"
  },
  {
    "code": "en-FK",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Falkland Islands)",
    "estimatedSpeakers": 2820,
    "officialCountries": [],
    "region": "FK"
  },
  {
    "code": "en-FJ",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Fiji)",
    "estimatedSpeakers": 894514,
    "officialCountries": [],
    "region": "FJ"
  },
  {
    "code": "en-FI",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Finland)",
    "estimatedSpeakers": 3938487,
    "officialCountries": [],
    "region": "FI"
  },
  {
    "code": "en-FR",
    "baseCode": "en",
    "type": "variant",
    "name": "English (France)",
    "estimatedSpeakers": 26666094,
    "officialCountries": [],
    "region": "FR"
  },
  {
    "code": "en-GM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Gambia)",
    "estimatedSpeakers": 1009332,
    "officialCountries": [],
    "region": "GM"
  },
  {
    "code": "en-GE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Georgia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "GE"
  },
  {
    "code": "en-DE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Germany)",
    "estimatedSpeakers": 53836224,
    "officialCountries": [],
    "region": "DE"
  },
  {
    "code": "en-GH",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Ghana)",
    "estimatedSpeakers": 7263711,
    "officialCountries": [],
    "region": "GH"
  },
  {
    "code": "en-GI",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Gibraltar)",
    "estimatedSpeakers": 23746,
    "officialCountries": [],
    "region": "GI"
  },
  {
    "code": "en-GD",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Grenada)",
    "estimatedSpeakers": 110036,
    "officialCountries": [],
    "region": "GD"
  },
  {
    "code": "en-GU",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Guam)",
    "estimatedSpeakers": 154274,
    "officialCountries": [],
    "region": "GU"
  },
  {
    "code": "en-GG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Guernsey)",
    "estimatedSpeakers": 67787,
    "officialCountries": [],
    "region": "GG"
  },
  {
    "code": "en-GY",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Guyana)",
    "estimatedSpeakers": 794099,
    "officialCountries": [],
    "region": "GY"
  },
  {
    "code": "en-HK",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Hong Kong SAR China)",
    "estimatedSpeakers": 3721888,
    "officialCountries": [],
    "region": "HK"
  },
  {
    "code": "en-HU",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Hungary)",
    "estimatedSpeakers": 1971150,
    "officialCountries": [],
    "region": "HU"
  },
  {
    "code": "en-IN",
    "baseCode": "en",
    "type": "variant",
    "name": "English (India)",
    "estimatedSpeakers": 267734700,
    "officialCountries": [],
    "region": "IN"
  },
  {
    "code": "en-ID",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Indonesia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "ID"
  },
  {
    "code": "en-IE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Ireland)",
    "estimatedSpeakers": 5128791,
    "officialCountries": [],
    "region": "IE"
  },
  {
    "code": "en-IM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Isle of Man)",
    "estimatedSpeakers": 92269,
    "officialCountries": [],
    "region": "IM"
  },
  {
    "code": "en-IL",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Israel)",
    "estimatedSpeakers": 7992227,
    "officialCountries": [],
    "region": "IL"
  },
  {
    "code": "en-IT",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Italy)",
    "estimatedSpeakers": 20728066,
    "officialCountries": [],
    "region": "IT"
  },
  {
    "code": "en-JM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Jamaica)",
    "estimatedSpeakers": 2767236,
    "officialCountries": [],
    "region": "JM"
  },
  {
    "code": "en-JP",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Japan)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "JP"
  },
  {
    "code": "en-JE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Jersey)",
    "estimatedSpeakers": 98218,
    "officialCountries": [],
    "region": "JE"
  },
  {
    "code": "en-KE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Kenya)",
    "estimatedSpeakers": 11066816,
    "officialCountries": [],
    "region": "KE"
  },
  {
    "code": "en-KI",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Kiribati)",
    "estimatedSpeakers": 116545,
    "officialCountries": [],
    "region": "KI"
  },
  {
    "code": "en-LV",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Latvia)",
    "estimatedSpeakers": 828575,
    "officialCountries": [],
    "region": "LV"
  },
  {
    "code": "en-LS",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Lesotho)",
    "estimatedSpeakers": 601439,
    "officialCountries": [],
    "region": "LS"
  },
  {
    "code": "en-LR",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Liberia)",
    "estimatedSpeakers": 4512918,
    "officialCountries": [],
    "region": "LR"
  },
  {
    "code": "en-LT",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Lithuania)",
    "estimatedSpeakers": 998712,
    "officialCountries": [],
    "region": "LT"
  },
  {
    "code": "en-MO",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Macao SAR China)",
    "estimatedSpeakers": 148218,
    "officialCountries": [],
    "region": "MO"
  },
  {
    "code": "en-MG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Madagascar)",
    "estimatedSpeakers": 5301486,
    "officialCountries": [],
    "region": "MG"
  },
  {
    "code": "en-MW",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Malawi)",
    "estimatedSpeakers": 13710879,
    "officialCountries": [],
    "region": "MW"
  },
  {
    "code": "en-MY",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Malaysia)",
    "estimatedSpeakers": 7258608,
    "officialCountries": [],
    "region": "MY"
  },
  {
    "code": "en-MV",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Maldives)",
    "estimatedSpeakers": 291644,
    "officialCountries": [],
    "region": "MV"
  },
  {
    "code": "en-MT",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Malta)",
    "estimatedSpeakers": 413362,
    "officialCountries": [],
    "region": "MT"
  },
  {
    "code": "en-MH",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Marshall Islands)",
    "estimatedSpeakers": 76270,
    "officialCountries": [],
    "region": "MH"
  },
  {
    "code": "en-MU",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Mauritius)",
    "estimatedSpeakers": 943560,
    "officialCountries": [],
    "region": "MU"
  },
  {
    "code": "en-FM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Micronesia)",
    "estimatedSpeakers": 56774,
    "officialCountries": [],
    "region": "FM"
  },
  {
    "code": "en-MS",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Montserrat)",
    "estimatedSpeakers": 3500,
    "officialCountries": [],
    "region": "MS"
  },
  {
    "code": "en-NA",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Namibia)",
    "estimatedSpeakers": 196256,
    "officialCountries": [],
    "region": "NA"
  },
  {
    "code": "en-NR",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Nauru)",
    "estimatedSpeakers": 9397,
    "officialCountries": [],
    "region": "NR"
  },
  {
    "code": "en-NL",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Netherlands)",
    "estimatedSpeakers": 15995160,
    "officialCountries": [],
    "region": "NL"
  },
  {
    "code": "en-NZ",
    "baseCode": "en",
    "type": "variant",
    "name": "English (New Zealand)",
    "estimatedSpeakers": 5057986,
    "officialCountries": [],
    "region": "NZ"
  },
  {
    "code": "en-NG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Nigeria)",
    "estimatedSpeakers": 125475910,
    "officialCountries": [],
    "region": "NG"
  },
  {
    "code": "en-NU",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Niue)",
    "estimatedSpeakers": 1120,
    "officialCountries": [],
    "region": "NU"
  },
  {
    "code": "en-NF",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Norfolk Island)",
    "estimatedSpeakers": 1678,
    "officialCountries": [],
    "region": "NF"
  },
  {
    "code": "en-MP",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Northern Mariana Islands)",
    "estimatedSpeakers": 49584,
    "officialCountries": [],
    "region": "MP"
  },
  {
    "code": "en-NO",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Norway)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "NO"
  },
  {
    "code": "en-PK",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Pakistan)",
    "estimatedSpeakers": 126182000,
    "officialCountries": [],
    "region": "PK"
  },
  {
    "code": "en-PW",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Palau)",
    "estimatedSpeakers": 1880,
    "officialCountries": [],
    "region": "PW"
  },
  {
    "code": "en-PG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Papua New Guinea)",
    "estimatedSpeakers": 5023100,
    "officialCountries": [],
    "region": "PG"
  },
  {
    "code": "en-PH",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Philippines)",
    "estimatedSpeakers": 75697280,
    "officialCountries": [],
    "region": "PH"
  },
  {
    "code": "en-PN",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Pitcairn Islands)",
    "estimatedSpeakers": 46,
    "officialCountries": [],
    "region": "PN"
  },
  {
    "code": "en-PL",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Poland)",
    "estimatedSpeakers": 12786279,
    "officialCountries": [],
    "region": "PL"
  },
  {
    "code": "en-PT",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Portugal)",
    "estimatedSpeakers": 2755944,
    "officialCountries": [],
    "region": "PT"
  },
  {
    "code": "en-PR",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Puerto Rico)",
    "estimatedSpeakers": 1479531,
    "officialCountries": [],
    "region": "PR"
  },
  {
    "code": "en-RO",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Romania)",
    "estimatedSpeakers": 5625942,
    "officialCountries": [],
    "region": "RO"
  },
  {
    "code": "en-RW",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Rwanda)",
    "estimatedSpeakers": 2043495,
    "officialCountries": [],
    "region": "RW"
  },
  {
    "code": "en-WS",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Samoa)",
    "estimatedSpeakers": 4386,
    "officialCountries": [],
    "region": "WS"
  },
  {
    "code": "en-SC",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Seychelles)",
    "estimatedSpeakers": 37311,
    "officialCountries": [],
    "region": "SC"
  },
  {
    "code": "en-Shaw",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Shavian)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Shaw"
  },
  {
    "code": "en-SL",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Sierra Leone)",
    "estimatedSpeakers": 3192368,
    "officialCountries": [],
    "region": "SL"
  },
  {
    "code": "en-SG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Singapore)",
    "estimatedSpeakers": 5606468,
    "officialCountries": [],
    "region": "SG"
  },
  {
    "code": "en-SX",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Sint Maarten)",
    "estimatedSpeakers": 31426,
    "officialCountries": [],
    "region": "SX"
  },
  {
    "code": "en-SK",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Slovakia)",
    "estimatedSpeakers": 1446549,
    "officialCountries": [],
    "region": "SK"
  },
  {
    "code": "en-SI",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Slovenia)",
    "estimatedSpeakers": 1237755,
    "officialCountries": [],
    "region": "SI"
  },
  {
    "code": "en-SB",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Solomon Islands)",
    "estimatedSpeakers": 726799,
    "officialCountries": [],
    "region": "SB"
  },
  {
    "code": "en-ZA",
    "baseCode": "en",
    "type": "variant",
    "name": "English (South Africa)",
    "estimatedSpeakers": 18737206,
    "officialCountries": [],
    "region": "ZA"
  },
  {
    "code": "en-GS",
    "baseCode": "en",
    "type": "variant",
    "name": "English (South Georgia & South Sandwich Islands)",
    "estimatedSpeakers": 20,
    "officialCountries": [],
    "region": "GS"
  },
  {
    "code": "en-SS",
    "baseCode": "en",
    "type": "variant",
    "name": "English (South Sudan)",
    "estimatedSpeakers": 3429999,
    "officialCountries": [],
    "region": "SS"
  },
  {
    "code": "en-ES",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Spain)",
    "estimatedSpeakers": 11347296,
    "officialCountries": [],
    "region": "ES"
  },
  {
    "code": "en-SH",
    "baseCode": "en",
    "type": "variant",
    "name": "English (St. Helena)",
    "estimatedSpeakers": 5401,
    "officialCountries": [],
    "region": "SH"
  },
  {
    "code": "en-KN",
    "baseCode": "en",
    "type": "variant",
    "name": "English (St. Kitts & Nevis)",
    "estimatedSpeakers": 54030,
    "officialCountries": [],
    "region": "KN"
  },
  {
    "code": "en-LC",
    "baseCode": "en",
    "type": "variant",
    "name": "English (St. Lucia)",
    "estimatedSpeakers": 151234,
    "officialCountries": [],
    "region": "LC"
  },
  {
    "code": "en-VC",
    "baseCode": "en",
    "type": "variant",
    "name": "English (St. Vincent & Grenadines)",
    "estimatedSpeakers": 96621,
    "officialCountries": [],
    "region": "VC"
  },
  {
    "code": "en-SD",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Sudan)",
    "estimatedSpeakers": 30785053,
    "officialCountries": [],
    "region": "SD"
  },
  {
    "code": "en-SE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Sweden)",
    "estimatedSpeakers": 9107228,
    "officialCountries": [],
    "region": "SE"
  },
  {
    "code": "en-CH",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Switzerland)",
    "estimatedSpeakers": 3987257,
    "officialCountries": [],
    "region": "CH"
  },
  {
    "code": "en-TZ",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Tanzania)",
    "estimatedSpeakers": 46548849,
    "officialCountries": [],
    "region": "TZ"
  },
  {
    "code": "en-TK",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Tokelau)",
    "estimatedSpeakers": 626,
    "officialCountries": [],
    "region": "TK"
  },
  {
    "code": "en-TO",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Tonga)",
    "estimatedSpeakers": 29369,
    "officialCountries": [],
    "region": "TO"
  },
  {
    "code": "en-TT",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Trinidad & Tobago)",
    "estimatedSpeakers": 1239894,
    "officialCountries": [],
    "region": "TT"
  },
  {
    "code": "en-TC",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Turks & Caicos Islands)",
    "estimatedSpeakers": 59230,
    "officialCountries": [],
    "region": "TC"
  },
  {
    "code": "en-TV",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Tuvalu)",
    "estimatedSpeakers": 1068,
    "officialCountries": [],
    "region": "TV"
  },
  {
    "code": "en-UM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (U.S. Outlying Islands)",
    "estimatedSpeakers": 316,
    "officialCountries": [],
    "region": "UM"
  },
  {
    "code": "en-VI",
    "baseCode": "en",
    "type": "variant",
    "name": "English (U.S. Virgin Islands)",
    "estimatedSpeakers": 78283,
    "officialCountries": [],
    "region": "VI"
  },
  {
    "code": "en-UG",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Uganda)",
    "estimatedSpeakers": 1922037,
    "officialCountries": [],
    "region": "UG"
  },
  {
    "code": "en-UA",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Ukraine)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "UA"
  },
  {
    "code": "en-AE",
    "baseCode": "en",
    "type": "variant",
    "name": "English (United Arab Emirates)",
    "estimatedSpeakers": 5016100,
    "officialCountries": [],
    "region": "AE"
  },
  {
    "code": "en-VU",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Vanuatu)",
    "estimatedSpeakers": 263946,
    "officialCountries": [],
    "region": "VU"
  },
  {
    "code": "en-001",
    "baseCode": "en",
    "type": "variant",
    "name": "English (world)",
    "estimatedSpeakers": 1728471806,
    "officialCountries": [],
    "region": "001"
  },
  {
    "code": "en-ZM",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Zambia)",
    "estimatedSpeakers": 3327856,
    "officialCountries": [],
    "region": "ZM"
  },
  {
    "code": "en-ZW",
    "baseCode": "en",
    "type": "variant",
    "name": "English (Zimbabwe)",
    "estimatedSpeakers": 7203168,
    "officialCountries": [],
    "region": "ZW"
  },
  {
    "code": "pt-PT",
    "baseCode": "pt",
    "type": "variant",
    "name": "European Portuguese",
    "estimatedSpeakers": 9798912,
    "officialCountries": [],
    "region": "PT"
  },
  {
    "code": "ee-TG",
    "baseCode": "ee",
    "type": "variant",
    "name": "Ewe (Togo)",
    "estimatedSpeakers": 1516058,
    "officialCountries": [],
    "region": "TG"
  },
  {
    "code": "fo-DK",
    "baseCode": "fo",
    "type": "variant",
    "name": "Faroese (Denmark)",
    "estimatedSpeakers": 22698,
    "officialCountries": [],
    "region": "DK"
  },
  {
    "code": "nl-BE",
    "baseCode": "nl",
    "type": "variant",
    "name": "Flemish",
    "estimatedSpeakers": 6587680,
    "officialCountries": [],
    "region": "BE"
  },
  {
    "code": "fr-DZ",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Algeria)",
    "estimatedSpeakers": 15517425,
    "officialCountries": [],
    "region": "DZ"
  },
  {
    "code": "fr-BE",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Belgium)",
    "estimatedSpeakers": 4551488,
    "officialCountries": [],
    "region": "BE"
  },
  {
    "code": "fr-BJ",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Benin)",
    "estimatedSpeakers": 4997014,
    "officialCountries": [],
    "region": "BJ"
  },
  {
    "code": "fr-BF",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Burkina Faso)",
    "estimatedSpeakers": 5760550,
    "officialCountries": [],
    "region": "BF"
  },
  {
    "code": "fr-BI",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Burundi)",
    "estimatedSpeakers": 8018159,
    "officialCountries": [],
    "region": "BI"
  },
  {
    "code": "fr-CM",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Cameroon)",
    "estimatedSpeakers": 21056948,
    "officialCountries": [],
    "region": "CM"
  },
  {
    "code": "fr-CF",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Central African Republic)",
    "estimatedSpeakers": 1638778,
    "officialCountries": [],
    "region": "CF"
  },
  {
    "code": "fr-TD",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Chad)",
    "estimatedSpeakers": 2482168,
    "officialCountries": [],
    "region": "TD"
  },
  {
    "code": "fr-KM",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Comoros)",
    "estimatedSpeakers": 234037,
    "officialCountries": [],
    "region": "KM"
  },
  {
    "code": "fr-CG",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Congo - Brazzaville)",
    "estimatedSpeakers": 3719579,
    "officialCountries": [],
    "region": "CG"
  },
  {
    "code": "fr-CD",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Congo - Kinshasa)",
    "estimatedSpeakers": 58855530,
    "officialCountries": [],
    "region": "CD"
  },
  {
    "code": "fr-CI",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Côte d’Ivoire)",
    "estimatedSpeakers": 10193812,
    "officialCountries": [],
    "region": "CI"
  },
  {
    "code": "fr-DJ",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Djibouti)",
    "estimatedSpeakers": 497487,
    "officialCountries": [],
    "region": "DJ"
  },
  {
    "code": "fr-GQ",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Equatorial Guinea)",
    "estimatedSpeakers": 520791,
    "officialCountries": [],
    "region": "GQ"
  },
  {
    "code": "fr-GF",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (French Guiana)",
    "estimatedSpeakers": 123696,
    "officialCountries": [],
    "region": "GF"
  },
  {
    "code": "fr-PF",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (French Polynesia)",
    "estimatedSpeakers": 297469,
    "officialCountries": [],
    "region": "PF"
  },
  {
    "code": "fr-GA",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Gabon)",
    "estimatedSpeakers": 1546719,
    "officialCountries": [],
    "region": "GA"
  },
  {
    "code": "fr-GP",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Guadeloupe)",
    "estimatedSpeakers": 380332,
    "officialCountries": [],
    "region": "GP"
  },
  {
    "code": "fr-GN",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Guinea)",
    "estimatedSpeakers": 3776274,
    "officialCountries": [],
    "region": "GN"
  },
  {
    "code": "fr-HT",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Haiti)",
    "estimatedSpeakers": 4936638,
    "officialCountries": [],
    "region": "HT"
  },
  {
    "code": "fr-LU",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Luxembourg)",
    "estimatedSpeakers": 617554,
    "officialCountries": [],
    "region": "LU"
  },
  {
    "code": "fr-MG",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Madagascar)",
    "estimatedSpeakers": 7952229,
    "officialCountries": [],
    "region": "MG"
  },
  {
    "code": "fr-ML",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Mali)",
    "estimatedSpeakers": 3738402,
    "officialCountries": [],
    "region": "ML"
  },
  {
    "code": "fr-MQ",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Martinique)",
    "estimatedSpeakers": 353266,
    "officialCountries": [],
    "region": "MQ"
  },
  {
    "code": "fr-MR",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Mauritania)",
    "estimatedSpeakers": 562645,
    "officialCountries": [],
    "region": "MR"
  },
  {
    "code": "fr-MU",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Mauritius)",
    "estimatedSpeakers": 956665,
    "officialCountries": [],
    "region": "MU"
  },
  {
    "code": "fr-YT",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Mayotte)",
    "estimatedSpeakers": 122220,
    "officialCountries": [],
    "region": "YT"
  },
  {
    "code": "fr-MC",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Monaco)",
    "estimatedSpeakers": 30859,
    "officialCountries": [],
    "region": "MC"
  },
  {
    "code": "fr-MA",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Morocco)",
    "estimatedSpeakers": 13459536,
    "officialCountries": [],
    "region": "MA"
  },
  {
    "code": "fr-NC",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (New Caledonia)",
    "estimatedSpeakers": 301125,
    "officialCountries": [],
    "region": "NC"
  },
  {
    "code": "fr-NE",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Niger)",
    "estimatedSpeakers": 3424564,
    "officialCountries": [],
    "region": "NE"
  },
  {
    "code": "fr-RE",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Réunion)",
    "estimatedSpeakers": 700950,
    "officialCountries": [],
    "region": "RE"
  },
  {
    "code": "fr-RW",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Rwanda)",
    "estimatedSpeakers": 790151,
    "officialCountries": [],
    "region": "RW"
  },
  {
    "code": "fr-SN",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Senegal)",
    "estimatedSpeakers": 4900350,
    "officialCountries": [],
    "region": "SN"
  },
  {
    "code": "fr-SC",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Seychelles)",
    "estimatedSpeakers": 52039,
    "officialCountries": [],
    "region": "SC"
  },
  {
    "code": "fr-BL",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (St. Barthélemy)",
    "estimatedSpeakers": 6023,
    "officialCountries": [],
    "region": "BL"
  },
  {
    "code": "fr-MF",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (St. Martin)",
    "estimatedSpeakers": 27717,
    "officialCountries": [],
    "region": "MF"
  },
  {
    "code": "fr-PM",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (St. Pierre & Miquelon)",
    "estimatedSpeakers": 5132,
    "officialCountries": [],
    "region": "PM"
  },
  {
    "code": "fr-SY",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Syria)",
    "estimatedSpeakers": 1408059,
    "officialCountries": [],
    "region": "SY"
  },
  {
    "code": "fr-TG",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Togo)",
    "estimatedSpeakers": 3656376,
    "officialCountries": [],
    "region": "TG"
  },
  {
    "code": "fr-TN",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Tunisia)",
    "estimatedSpeakers": 6385864,
    "officialCountries": [],
    "region": "TN"
  },
  {
    "code": "fr-VU",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Vanuatu)",
    "estimatedSpeakers": 98582,
    "officialCountries": [],
    "region": "VU"
  },
  {
    "code": "fr-WF",
    "baseCode": "fr",
    "type": "variant",
    "name": "French (Wallis & Futuna)",
    "estimatedSpeakers": 13250,
    "officialCountries": [],
    "region": "WF"
  },
  {
    "code": "ff-Adlm-BF",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Burkina Faso)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "BF"
  },
  {
    "code": "ff-Adlm-CM",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Cameroon)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "CM"
  },
  {
    "code": "ff-Adlm-GM",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Gambia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "GM"
  },
  {
    "code": "ff-Adlm-GH",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Ghana)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "GH"
  },
  {
    "code": "ff-Adlm-GW",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Guinea-Bissau)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "GW"
  },
  {
    "code": "ff-Adlm-LR",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Liberia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "LR"
  },
  {
    "code": "ff-Adlm-MR",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Mauritania)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "MR"
  },
  {
    "code": "ff-Adlm-NE",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Niger)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "NE"
  },
  {
    "code": "ff-Adlm-NG",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Nigeria)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "NG"
  },
  {
    "code": "ff-Adlm-SN",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Senegal)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "SN"
  },
  {
    "code": "ff-Adlm-SL",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam, Sierra Leone)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm",
    "region": "SL"
  },
  {
    "code": "ff-Adlm",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Adlam)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Adlm"
  },
  {
    "code": "ff-Latn-BF",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Burkina Faso)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "BF"
  },
  {
    "code": "ff-Latn-CM",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Cameroon)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "CM"
  },
  {
    "code": "ff-Latn-GM",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Gambia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "GM"
  },
  {
    "code": "ff-Latn-GH",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Ghana)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "GH"
  },
  {
    "code": "ff-Latn-GW",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Guinea-Bissau)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "GW"
  },
  {
    "code": "ff-Latn-GN",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Guinea)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "GN"
  },
  {
    "code": "ff-Latn-LR",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Liberia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "LR"
  },
  {
    "code": "ff-Latn-MR",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Mauritania)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "MR"
  },
  {
    "code": "ff-Latn-NE",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Niger)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "NE"
  },
  {
    "code": "ff-Latn-NG",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Nigeria)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "NG"
  },
  {
    "code": "ff-Latn-SL",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin, Sierra Leone)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "SL"
  },
  {
    "code": "ff-Latn",
    "baseCode": "ff",
    "type": "variant",
    "name": "Fula (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "gez-ER",
    "baseCode": "gez",
    "type": "variant",
    "name": "Geez (Eritrea)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "ER"
  },
  {
    "code": "de-BE",
    "baseCode": "de",
    "type": "variant",
    "name": "German (Belgium)",
    "estimatedSpeakers": 2635072,
    "officialCountries": [],
    "region": "BE"
  },
  {
    "code": "de-IT",
    "baseCode": "de",
    "type": "variant",
    "name": "German (Italy)",
    "estimatedSpeakers": 975438,
    "officialCountries": [],
    "region": "IT"
  },
  {
    "code": "de-LI",
    "baseCode": "de",
    "type": "variant",
    "name": "German (Liechtenstein)",
    "estimatedSpeakers": 40272,
    "officialCountries": [],
    "region": "LI"
  },
  {
    "code": "de-LU",
    "baseCode": "de",
    "type": "variant",
    "name": "German (Luxembourg)",
    "estimatedSpeakers": 422890,
    "officialCountries": [],
    "region": "LU"
  },
  {
    "code": "el-CY",
    "baseCode": "el",
    "type": "variant",
    "name": "Greek (Cyprus)",
    "estimatedSpeakers": 1254504,
    "officialCountries": [],
    "region": "CY"
  },
  {
    "code": "el-polyton",
    "baseCode": "el",
    "type": "variant",
    "name": "Greek (Polytonic)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "variants": [
      "polyton"
    ]
  },
  {
    "code": "ha-Arab-SD",
    "baseCode": "ha",
    "type": "variant",
    "name": "Hausa (Arabic, Sudan)",
    "estimatedSpeakers": 908411,
    "officialCountries": [],
    "script": "Arab",
    "region": "SD"
  },
  {
    "code": "ha-Arab",
    "baseCode": "ha",
    "type": "variant",
    "name": "Hausa (Arabic)",
    "estimatedSpeakers": 3319234,
    "officialCountries": [],
    "script": "Arab"
  },
  {
    "code": "ha-GH",
    "baseCode": "ha",
    "type": "variant",
    "name": "Hausa (Ghana)",
    "estimatedSpeakers": 297466,
    "officialCountries": [],
    "region": "GH"
  },
  {
    "code": "ha-NE",
    "baseCode": "ha",
    "type": "variant",
    "name": "Hausa (Niger)",
    "estimatedSpeakers": 10800548,
    "officialCountries": [],
    "region": "NE"
  },
  {
    "code": "hi-Latn",
    "baseCode": "hi",
    "type": "variant",
    "name": "Hindi (Latin)",
    "estimatedSpeakers": 1409130,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "hnj-Hmnp",
    "baseCode": "hnj",
    "type": "variant",
    "name": "Hmong Njua (Nyiakeng Puachue Hmong)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hmnp"
  },
  {
    "code": "iu-Latn",
    "baseCode": "iu",
    "type": "variant",
    "name": "Inuktitut (Latin)",
    "estimatedSpeakers": 42674,
    "officialCountries": [
      {
        "countryCode": "CA",
        "officialStatus": "official_regional",
        "populationPercent": 0.11
      }
    ],
    "script": "Latn"
  },
  {
    "code": "ga-GB",
    "baseCode": "ga",
    "type": "variant",
    "name": "Irish (United Kingdom)",
    "estimatedSpeakers": 102689,
    "officialCountries": [],
    "region": "GB"
  },
  {
    "code": "it-SM",
    "baseCode": "it",
    "type": "variant",
    "name": "Italian (San Marino)",
    "estimatedSpeakers": 31235,
    "officialCountries": [],
    "region": "SM"
  },
  {
    "code": "it-CH",
    "baseCode": "it",
    "type": "variant",
    "name": "Italian (Switzerland)",
    "estimatedSpeakers": 1329086,
    "officialCountries": [],
    "region": "CH"
  },
  {
    "code": "it-VA",
    "baseCode": "it",
    "type": "variant",
    "name": "Italian (Vatican City)",
    "estimatedSpeakers": 820,
    "officialCountries": [],
    "region": "VA"
  },
  {
    "code": "kaa-Cyrl",
    "baseCode": "kaa",
    "type": "variant",
    "name": "Kara-Kalpak (Cyrillic)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Cyrl"
  },
  {
    "code": "kaa-Latn",
    "baseCode": "kaa",
    "type": "variant",
    "name": "Kara-Kalpak (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "ks-Arab",
    "baseCode": "ks",
    "type": "variant",
    "name": "Kashmiri (Arabic)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Arab"
  },
  {
    "code": "ks-Deva",
    "baseCode": "ks",
    "type": "variant",
    "name": "Kashmiri (Devanagari)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Deva"
  },
  {
    "code": "kk-Arab",
    "baseCode": "kk",
    "type": "variant",
    "name": "Kazakh (Arabic)",
    "estimatedSpeakers": 1444926,
    "officialCountries": [],
    "script": "Arab"
  },
  {
    "code": "kk-Cyrl",
    "baseCode": "kk",
    "type": "variant",
    "name": "Kazakh (Cyrillic)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Cyrl"
  },
  {
    "code": "kk-KZ",
    "baseCode": "kk",
    "type": "variant",
    "name": "Kazakh (Kazakhstan)",
    "estimatedSpeakers": 12966400,
    "officialCountries": [],
    "region": "KZ"
  },
  {
    "code": "kok-Deva",
    "baseCode": "kok",
    "type": "variant",
    "name": "Konkani (Devanagari)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Deva"
  },
  {
    "code": "kok-Latn",
    "baseCode": "kok",
    "type": "variant",
    "name": "Konkani (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "ko-CN",
    "baseCode": "ko",
    "type": "variant",
    "name": "Korean (China)",
    "estimatedSpeakers": 2124060,
    "officialCountries": [],
    "region": "CN"
  },
  {
    "code": "ko-KP",
    "baseCode": "ko",
    "type": "variant",
    "name": "Korean (North Korea)",
    "estimatedSpeakers": 23142856,
    "officialCountries": [],
    "region": "KP"
  },
  {
    "code": "kpe-GN",
    "baseCode": "kpe",
    "type": "variant",
    "name": "Kpelle (Guinea)",
    "estimatedSpeakers": 531476,
    "officialCountries": [],
    "region": "GN"
  },
  {
    "code": "ku-Arab-IR",
    "baseCode": "ku",
    "type": "variant",
    "name": "Kurdish (Arabic, Iran)",
    "estimatedSpeakers": 494967,
    "officialCountries": [],
    "script": "Arab",
    "region": "IR"
  },
  {
    "code": "ku-Arab",
    "baseCode": "ku",
    "type": "variant",
    "name": "Kurdish (Arabic)",
    "estimatedSpeakers": 4794503,
    "officialCountries": [],
    "script": "Arab"
  },
  {
    "code": "ku-Latn-IQ",
    "baseCode": "ku",
    "type": "variant",
    "name": "Kurdish (Latin, Iraq)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "IQ"
  },
  {
    "code": "ku-Latn-SY",
    "baseCode": "ku",
    "type": "variant",
    "name": "Kurdish (Latin, Syria)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn",
    "region": "SY"
  },
  {
    "code": "ku-Latn",
    "baseCode": "ku",
    "type": "variant",
    "name": "Kurdish (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "ku-TR",
    "baseCode": "ku",
    "type": "variant",
    "name": "Kurdish (Türkiye)",
    "estimatedSpeakers": 4626573,
    "officialCountries": [],
    "region": "TR"
  },
  {
    "code": "kxv-Deva",
    "baseCode": "kxv",
    "type": "variant",
    "name": "Kuvi (Devanagari)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Deva"
  },
  {
    "code": "kxv-Latn",
    "baseCode": "kxv",
    "type": "variant",
    "name": "Kuvi (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "kxv-Orya",
    "baseCode": "kxv",
    "type": "variant",
    "name": "Kuvi (Odia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Orya"
  },
  {
    "code": "kxv-Telu",
    "baseCode": "kxv",
    "type": "variant",
    "name": "Kuvi (Telugu)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Telu"
  },
  {
    "code": "es-419",
    "baseCode": "es",
    "type": "variant",
    "name": "Latin American Spanish",
    "estimatedSpeakers": 363966079,
    "officialCountries": [],
    "region": "419"
  },
  {
    "code": "ln-AO",
    "baseCode": "ln",
    "type": "variant",
    "name": "Lingala (Angola)",
    "estimatedSpeakers": 249254,
    "officialCountries": [],
    "region": "AO"
  },
  {
    "code": "ln-CF",
    "baseCode": "ln",
    "type": "variant",
    "name": "Lingala (Central African Republic)",
    "estimatedSpeakers": 13562,
    "officialCountries": [],
    "region": "CF"
  },
  {
    "code": "ln-CG",
    "baseCode": "ln",
    "type": "variant",
    "name": "Lingala (Congo - Brazzaville)",
    "estimatedSpeakers": 146344,
    "officialCountries": [],
    "region": "CG"
  },
  {
    "code": "nds-NL",
    "baseCode": "nds",
    "type": "variant",
    "name": "Low Saxon",
    "estimatedSpeakers": 1954964,
    "officialCountries": [],
    "region": "NL"
  },
  {
    "code": "smj-NO",
    "baseCode": "smj",
    "type": "variant",
    "name": "Lule Sami (Norway)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "NO"
  },
  {
    "code": "ms-Arab-BN",
    "baseCode": "ms",
    "type": "variant",
    "name": "Malay (Arabic, Brunei)",
    "estimatedSpeakers": 24595,
    "officialCountries": [
      {
        "countryCode": "BN",
        "officialStatus": "official",
        "populationPercent": 5
      }
    ],
    "script": "Arab",
    "region": "BN"
  },
  {
    "code": "ms-Arab",
    "baseCode": "ms",
    "type": "variant",
    "name": "Malay (Arabic)",
    "estimatedSpeakers": 3403837,
    "officialCountries": [
      {
        "countryCode": "BN",
        "officialStatus": "official",
        "populationPercent": 5
      }
    ],
    "script": "Arab"
  },
  {
    "code": "ms-BN",
    "baseCode": "ms",
    "type": "variant",
    "name": "Malay (Brunei)",
    "estimatedSpeakers": 457467,
    "officialCountries": [],
    "region": "BN"
  },
  {
    "code": "ms-ID",
    "baseCode": "ms",
    "type": "variant",
    "name": "Malay (Indonesia)",
    "estimatedSpeakers": 9573108,
    "officialCountries": [],
    "region": "ID"
  },
  {
    "code": "ms-SG",
    "baseCode": "ms",
    "type": "variant",
    "name": "Malay (Singapore)",
    "estimatedSpeakers": 843984,
    "officialCountries": [],
    "region": "SG"
  },
  {
    "code": "mni-Beng",
    "baseCode": "mni",
    "type": "variant",
    "name": "Manipuri (Bangla)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Beng"
  },
  {
    "code": "mni-Mtei",
    "baseCode": "mni",
    "type": "variant",
    "name": "Manipuri (Meitei Mayek)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Mtei"
  },
  {
    "code": "mas-TZ",
    "baseCode": "mas",
    "type": "variant",
    "name": "Masai (Tanzania)",
    "estimatedSpeakers": 1011932,
    "officialCountries": [],
    "region": "TZ"
  },
  {
    "code": "es-MX",
    "baseCode": "es",
    "type": "variant",
    "name": "Mexican Spanish",
    "estimatedSpeakers": 108514200,
    "officialCountries": [],
    "region": "MX"
  },
  {
    "code": "ro-MD",
    "baseCode": "ro",
    "type": "variant",
    "name": "Moldavian",
    "estimatedSpeakers": 2267704,
    "officialCountries": [],
    "region": "MD"
  },
  {
    "code": "mn-Mong-MN",
    "baseCode": "mn",
    "type": "variant",
    "name": "Mongolian (Mongolian, Mongolia)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Mong",
    "region": "MN"
  },
  {
    "code": "mn-Mong",
    "baseCode": "mn",
    "type": "variant",
    "name": "Mongolian (Mongolian)",
    "estimatedSpeakers": 3681704,
    "officialCountries": [
      {
        "countryCode": "CN",
        "officialStatus": "official_regional",
        "populationPercent": 0.26
      }
    ],
    "script": "Mong"
  },
  {
    "code": "mww-Hmnp",
    "baseCode": "mww",
    "type": "variant",
    "name": "mww (Nyiakeng Puachue Hmong)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hmnp"
  },
  {
    "code": "ne-IN",
    "baseCode": "ne",
    "type": "variant",
    "name": "Nepali (India)",
    "estimatedSpeakers": 7891128,
    "officialCountries": [],
    "region": "IN"
  },
  {
    "code": "yrl-CO",
    "baseCode": "yrl",
    "type": "variant",
    "name": "Nheengatu (Colombia)",
    "estimatedSpeakers": 2975,
    "officialCountries": [],
    "region": "CO"
  },
  {
    "code": "yrl-VE",
    "baseCode": "yrl",
    "type": "variant",
    "name": "Nheengatu (Venezuela)",
    "estimatedSpeakers": 2000,
    "officialCountries": [],
    "region": "VE"
  },
  {
    "code": "lrc-IQ",
    "baseCode": "lrc",
    "type": "variant",
    "name": "Northern Luri (Iraq)",
    "estimatedSpeakers": 256709,
    "officialCountries": [],
    "region": "IQ"
  },
  {
    "code": "se-FI",
    "baseCode": "se",
    "type": "variant",
    "name": "Northern Sami (Finland)",
    "estimatedSpeakers": 2026,
    "officialCountries": [],
    "region": "FI"
  },
  {
    "code": "se-SE",
    "baseCode": "se",
    "type": "variant",
    "name": "Northern Sami (Sweden)",
    "estimatedSpeakers": 34946,
    "officialCountries": [],
    "region": "SE"
  },
  {
    "code": "nb-SJ",
    "baseCode": "nb",
    "type": "variant",
    "name": "Norwegian Bokmål (Svalbard & Jan Mayen)",
    "estimatedSpeakers": 1492,
    "officialCountries": [],
    "region": "SJ"
  },
  {
    "code": "oc-ES",
    "baseCode": "oc",
    "type": "variant",
    "name": "Occitan (Spain)",
    "estimatedSpeakers": 4728,
    "officialCountries": [],
    "region": "ES"
  },
  {
    "code": "oka-US",
    "baseCode": "oka",
    "type": "variant",
    "name": "Okanagan (United States)",
    "estimatedSpeakers": 342,
    "officialCountries": [],
    "region": "US"
  },
  {
    "code": "om-KE",
    "baseCode": "om",
    "type": "variant",
    "name": "Oromo (Kenya)",
    "estimatedSpeakers": 273758,
    "officialCountries": [],
    "region": "KE"
  },
  {
    "code": "os-RU",
    "baseCode": "os",
    "type": "variant",
    "name": "Ossetic (Russia)",
    "estimatedSpeakers": 450627,
    "officialCountries": [],
    "region": "RU"
  },
  {
    "code": "pi-Latn",
    "baseCode": "pi",
    "type": "variant",
    "name": "Pali (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "pap-AW",
    "baseCode": "pap",
    "type": "variant",
    "name": "Papiamento (Aruba)",
    "estimatedSpeakers": 76288,
    "officialCountries": [],
    "region": "AW"
  },
  {
    "code": "ps-PK",
    "baseCode": "ps",
    "type": "variant",
    "name": "Pashto (Pakistan)",
    "estimatedSpeakers": 40378240,
    "officialCountries": [],
    "region": "PK"
  },
  {
    "code": "pt-AO",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Angola)",
    "estimatedSpeakers": 24925407,
    "officialCountries": [],
    "region": "AO"
  },
  {
    "code": "pt-CV",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Cape Verde)",
    "estimatedSpeakers": 464371,
    "officialCountries": [],
    "region": "CV"
  },
  {
    "code": "pt-GQ",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Equatorial Guinea)",
    "estimatedSpeakers": 2,
    "officialCountries": [],
    "region": "GQ"
  },
  {
    "code": "pt-GW",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Guinea-Bissau)",
    "estimatedSpeakers": 2132330,
    "officialCountries": [],
    "region": "GW"
  },
  {
    "code": "pt-LU",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Luxembourg)",
    "estimatedSpeakers": 107401,
    "officialCountries": [],
    "region": "LU"
  },
  {
    "code": "pt-MO",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Macao SAR China)",
    "estimatedSpeakers": 14822,
    "officialCountries": [],
    "region": "MO"
  },
  {
    "code": "pt-MZ",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Mozambique)",
    "estimatedSpeakers": 9004770,
    "officialCountries": [],
    "region": "MZ"
  },
  {
    "code": "pt-ST",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (São Tomé & Príncipe)",
    "estimatedSpeakers": 190027,
    "officialCountries": [],
    "region": "ST"
  },
  {
    "code": "pt-CH",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Switzerland)",
    "estimatedSpeakers": 301259,
    "officialCountries": [],
    "region": "CH"
  },
  {
    "code": "pt-TL",
    "baseCode": "pt",
    "type": "variant",
    "name": "Portuguese (Timor-Leste)",
    "estimatedSpeakers": 889077,
    "officialCountries": [],
    "region": "TL"
  },
  {
    "code": "pa-Arab",
    "baseCode": "pa",
    "type": "variant",
    "name": "Punjabi (Arabic)",
    "estimatedSpeakers": 176654800,
    "officialCountries": [],
    "script": "Arab"
  },
  {
    "code": "pa-Guru",
    "baseCode": "pa",
    "type": "variant",
    "name": "Punjabi (Gurmukhi)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Guru"
  },
  {
    "code": "qu-BO",
    "baseCode": "qu",
    "type": "variant",
    "name": "Quechua (Bolivia)",
    "estimatedSpeakers": 3939840,
    "officialCountries": [],
    "region": "BO"
  },
  {
    "code": "qu-EC",
    "baseCode": "qu",
    "type": "variant",
    "name": "Quechua (Ecuador)",
    "estimatedSpeakers": 3112700,
    "officialCountries": [],
    "region": "EC"
  },
  {
    "code": "rhg-Rohg-BD",
    "baseCode": "rhg",
    "type": "variant",
    "name": "Rohingya (Hanifi, Bangladesh)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Rohg",
    "region": "BD"
  },
  {
    "code": "rhg-Rohg",
    "baseCode": "rhg",
    "type": "variant",
    "name": "Rohingya (Hanifi)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Rohg"
  },
  {
    "code": "ru-BY",
    "baseCode": "ru",
    "type": "variant",
    "name": "Russian (Belarus)",
    "estimatedSpeakers": 6746030,
    "officialCountries": [],
    "region": "BY"
  },
  {
    "code": "ru-KZ",
    "baseCode": "ru",
    "type": "variant",
    "name": "Russian (Kazakhstan)",
    "estimatedSpeakers": 14587200,
    "officialCountries": [],
    "region": "KZ"
  },
  {
    "code": "ru-KG",
    "baseCode": "ru",
    "type": "variant",
    "name": "Russian (Kyrgyzstan)",
    "estimatedSpeakers": 2221956,
    "officialCountries": [],
    "region": "KG"
  },
  {
    "code": "ru-MD",
    "baseCode": "ru",
    "type": "variant",
    "name": "Russian (Moldova)",
    "estimatedSpeakers": 107986,
    "officialCountries": [],
    "region": "MD"
  },
  {
    "code": "ru-UA",
    "baseCode": "ru",
    "type": "variant",
    "name": "Russian (Ukraine)",
    "estimatedSpeakers": 16404428,
    "officialCountries": [],
    "region": "UA"
  },
  {
    "code": "sat-Deva",
    "baseCode": "sat",
    "type": "variant",
    "name": "Santali (Devanagari)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Deva"
  },
  {
    "code": "sat-Olck",
    "baseCode": "sat",
    "type": "variant",
    "name": "Santali (Ol Chiki)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Olck"
  },
  {
    "code": "sr-Cyrl-BA",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Cyrillic, Bosnia & Herzegovina)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Cyrl",
    "region": "BA"
  },
  {
    "code": "sr-Cyrl-XK",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Cyrillic, Kosovo)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Cyrl",
    "region": "XK"
  },
  {
    "code": "sr-Cyrl-ME",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Cyrillic, Montenegro)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Cyrl",
    "region": "ME"
  },
  {
    "code": "sr-Cyrl",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Cyrillic)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Cyrl"
  },
  {
    "code": "sr-Latn-BA",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Latin, Bosnia & Herzegovina)",
    "estimatedSpeakers": 379867,
    "officialCountries": [
      {
        "countryCode": "BA",
        "officialStatus": "official",
        "populationPercent": 10
      }
    ],
    "script": "Latn",
    "region": "BA"
  },
  {
    "code": "sr-Latn-XK",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Latin, Kosovo)",
    "estimatedSpeakers": 98855,
    "officialCountries": [
      {
        "countryCode": "XK",
        "officialStatus": "official",
        "populationPercent": 5
      }
    ],
    "script": "Latn",
    "region": "XK"
  },
  {
    "code": "sr-Latn-ME",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Latin, Montenegro)",
    "estimatedSpeakers": 599849,
    "officialCountries": [
      {
        "countryCode": "ME",
        "officialStatus": "official",
        "populationPercent": 100
      }
    ],
    "script": "Latn",
    "region": "ME"
  },
  {
    "code": "sr-Latn",
    "baseCode": "sr",
    "type": "variant",
    "name": "Serbian (Latin)",
    "estimatedSpeakers": 7709590,
    "officialCountries": [
      {
        "countryCode": "BA",
        "officialStatus": "official",
        "populationPercent": 10
      },
      {
        "countryCode": "ME",
        "officialStatus": "official",
        "populationPercent": 100
      },
      {
        "countryCode": "RS",
        "officialStatus": "official",
        "populationPercent": 99
      },
      {
        "countryCode": "XK",
        "officialStatus": "official",
        "populationPercent": 5
      }
    ],
    "script": "Latn"
  },
  {
    "code": "shn-TH",
    "baseCode": "shn",
    "type": "variant",
    "name": "Shan (Thailand)",
    "estimatedSpeakers": 67124,
    "officialCountries": [],
    "region": "TH"
  },
  {
    "code": "zh-Hans",
    "baseCode": "zh",
    "type": "variant",
    "name": "Simplified Chinese",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Hans"
  },
  {
    "code": "sd-Arab",
    "baseCode": "sd",
    "type": "variant",
    "name": "Sindhi (Arabic)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Arab"
  },
  {
    "code": "sd-Deva",
    "baseCode": "sd",
    "type": "variant",
    "name": "Sindhi (Devanagari)",
    "estimatedSpeakers": 1972782,
    "officialCountries": [
      {
        "countryCode": "IN",
        "officialStatus": "official_regional",
        "populationPercent": 0.14
      }
    ],
    "script": "Deva"
  },
  {
    "code": "so-DJ",
    "baseCode": "so",
    "type": "variant",
    "name": "Somali (Djibouti)",
    "estimatedSpeakers": 407939,
    "officialCountries": [],
    "region": "DJ"
  },
  {
    "code": "so-ET",
    "baseCode": "so",
    "type": "variant",
    "name": "Somali (Ethiopia)",
    "estimatedSpeakers": 7113000,
    "officialCountries": [],
    "region": "ET"
  },
  {
    "code": "so-KE",
    "baseCode": "so",
    "type": "variant",
    "name": "Somali (Kenya)",
    "estimatedSpeakers": 757203,
    "officialCountries": [],
    "region": "KE"
  },
  {
    "code": "sdh-IQ",
    "baseCode": "sdh",
    "type": "variant",
    "name": "Southern Kurdish (Iraq)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "IQ"
  },
  {
    "code": "sma-NO",
    "baseCode": "sma",
    "type": "variant",
    "name": "Southern Sami (Norway)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "NO"
  },
  {
    "code": "st-LS",
    "baseCode": "st",
    "type": "variant",
    "name": "Southern Sotho (Lesotho)",
    "estimatedSpeakers": 2182999,
    "officialCountries": [],
    "region": "LS"
  },
  {
    "code": "es-AR",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Argentina)",
    "estimatedSpeakers": 46994400,
    "officialCountries": [],
    "region": "AR"
  },
  {
    "code": "es-BZ",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Belize)",
    "estimatedSpeakers": 228684,
    "officialCountries": [],
    "region": "BZ"
  },
  {
    "code": "es-BO",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Bolivia)",
    "estimatedSpeakers": 7510320,
    "officialCountries": [],
    "region": "BO"
  },
  {
    "code": "es-BR",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Brazil)",
    "estimatedSpeakers": 79219,
    "officialCountries": [],
    "region": "BR"
  },
  {
    "code": "es-IC",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Canary Islands)",
    "estimatedSpeakers": 2056618,
    "officialCountries": [],
    "region": "IC"
  },
  {
    "code": "es-EA",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Ceuta & Melilla)",
    "estimatedSpeakers": 147000,
    "officialCountries": [],
    "region": "EA"
  },
  {
    "code": "es-CL",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Chile)",
    "estimatedSpeakers": 18291406,
    "officialCountries": [],
    "region": "CL"
  },
  {
    "code": "es-CO",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Colombia)",
    "estimatedSpeakers": 46117212,
    "officialCountries": [],
    "region": "CO"
  },
  {
    "code": "es-CR",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Costa Rica)",
    "estimatedSpeakers": 5002301,
    "officialCountries": [],
    "region": "CR"
  },
  {
    "code": "es-CU",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Cuba)",
    "estimatedSpeakers": 10966000,
    "officialCountries": [],
    "region": "CU"
  },
  {
    "code": "es-DO",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Dominican Republic)",
    "estimatedSpeakers": 8436402,
    "officialCountries": [],
    "region": "DO"
  },
  {
    "code": "es-EC",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Ecuador)",
    "estimatedSpeakers": 17577600,
    "officialCountries": [],
    "region": "EC"
  },
  {
    "code": "es-SV",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (El Salvador)",
    "estimatedSpeakers": 5899543,
    "officialCountries": [],
    "region": "SV"
  },
  {
    "code": "es-GQ",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Equatorial Guinea)",
    "estimatedSpeakers": 1562372,
    "officialCountries": [],
    "region": "GQ"
  },
  {
    "code": "es-GT",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Guatemala)",
    "estimatedSpeakers": 16064576,
    "officialCountries": [],
    "region": "GT"
  },
  {
    "code": "es-HN",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Honduras)",
    "estimatedSpeakers": 8671563,
    "officialCountries": [],
    "region": "HN"
  },
  {
    "code": "es-NI",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Nicaragua)",
    "estimatedSpeakers": 5208021,
    "officialCountries": [],
    "region": "NI"
  },
  {
    "code": "es-PA",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Panama)",
    "estimatedSpeakers": 3084466,
    "officialCountries": [],
    "region": "PA"
  },
  {
    "code": "es-PY",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Paraguay)",
    "estimatedSpeakers": 240722,
    "officialCountries": [],
    "region": "PY"
  },
  {
    "code": "es-PE",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Peru)",
    "estimatedSpeakers": 23798146,
    "officialCountries": [],
    "region": "PE"
  },
  {
    "code": "es-PH",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Philippines)",
    "estimatedSpeakers": 36665870,
    "officialCountries": [],
    "region": "PH"
  },
  {
    "code": "es-PR",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Puerto Rico)",
    "estimatedSpeakers": 2626922,
    "officialCountries": [],
    "region": "PR"
  },
  {
    "code": "es-US",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (United States)",
    "estimatedSpeakers": 32828448,
    "officialCountries": [],
    "region": "US"
  },
  {
    "code": "es-UY",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Uruguay)",
    "estimatedSpeakers": 3014290,
    "officialCountries": [],
    "region": "UY"
  },
  {
    "code": "es-VE",
    "baseCode": "es",
    "type": "variant",
    "name": "Spanish (Venezuela)",
    "estimatedSpeakers": 25625246,
    "officialCountries": [],
    "region": "VE"
  },
  {
    "code": "su-Latn",
    "baseCode": "su",
    "type": "variant",
    "name": "Sundanese (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "suz-Deva",
    "baseCode": "suz",
    "type": "variant",
    "name": "suz (Devanagari)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Deva"
  },
  {
    "code": "suz-Sunu",
    "baseCode": "suz",
    "type": "variant",
    "name": "suz (Sunuwar)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Sunu"
  },
  {
    "code": "sw-KE",
    "baseCode": "sw",
    "type": "variant",
    "name": "Swahili (Kenya)",
    "estimatedSpeakers": 38442624,
    "officialCountries": [],
    "region": "KE"
  },
  {
    "code": "sw-UG",
    "baseCode": "sw",
    "type": "variant",
    "name": "Swahili (Uganda)",
    "estimatedSpeakers": 36962250,
    "officialCountries": [],
    "region": "UG"
  },
  {
    "code": "ss-SZ",
    "baseCode": "ss",
    "type": "variant",
    "name": "Swati (Eswatini)",
    "estimatedSpeakers": 660092,
    "officialCountries": [],
    "region": "SZ"
  },
  {
    "code": "sv-AX",
    "baseCode": "sv",
    "type": "variant",
    "name": "Swedish (Åland Islands)",
    "estimatedSpeakers": 25938,
    "officialCountries": [],
    "region": "AX"
  },
  {
    "code": "sv-FI",
    "baseCode": "sv",
    "type": "variant",
    "name": "Swedish (Finland)",
    "estimatedSpeakers": 2475620,
    "officialCountries": [],
    "region": "FI"
  },
  {
    "code": "fr-CH",
    "baseCode": "fr",
    "type": "variant",
    "name": "Swiss French",
    "estimatedSpeakers": 3455622,
    "officialCountries": [],
    "region": "CH"
  },
  {
    "code": "gsw-FR",
    "baseCode": "gsw",
    "type": "variant",
    "name": "Swiss German (France)",
    "estimatedSpeakers": 622209,
    "officialCountries": [],
    "region": "FR"
  },
  {
    "code": "gsw-LI",
    "baseCode": "gsw",
    "type": "variant",
    "name": "Swiss German (Liechtenstein)",
    "estimatedSpeakers": 34231,
    "officialCountries": [],
    "region": "LI"
  },
  {
    "code": "de-CH",
    "baseCode": "de",
    "type": "variant",
    "name": "Swiss High German",
    "estimatedSpeakers": 6734033,
    "officialCountries": [],
    "region": "CH"
  },
  {
    "code": "syr-SY",
    "baseCode": "syr",
    "type": "variant",
    "name": "Syriac (Syria)",
    "estimatedSpeakers": 20047,
    "officialCountries": [],
    "region": "SY"
  },
  {
    "code": "shi-Latn",
    "baseCode": "shi",
    "type": "variant",
    "name": "Tachelhit (Latin)",
    "estimatedSpeakers": 3252721,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "shi-Tfng",
    "baseCode": "shi",
    "type": "variant",
    "name": "Tachelhit (Tifinagh)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Tfng"
  },
  {
    "code": "ta-MY",
    "baseCode": "ta",
    "type": "variant",
    "name": "Tamil (Malaysia)",
    "estimatedSpeakers": 1451722,
    "officialCountries": [],
    "region": "MY"
  },
  {
    "code": "ta-SG",
    "baseCode": "ta",
    "type": "variant",
    "name": "Tamil (Singapore)",
    "estimatedSpeakers": 126598,
    "officialCountries": [],
    "region": "SG"
  },
  {
    "code": "ta-LK",
    "baseCode": "ta",
    "type": "variant",
    "name": "Tamil (Sri Lanka)",
    "estimatedSpeakers": 3297390,
    "officialCountries": [],
    "region": "LK"
  },
  {
    "code": "teo-KE",
    "baseCode": "teo",
    "type": "variant",
    "name": "Teso (Kenya)",
    "estimatedSpeakers": 431023,
    "officialCountries": [],
    "region": "KE"
  },
  {
    "code": "bo-IN",
    "baseCode": "bo",
    "type": "variant",
    "name": "Tibetan (India)",
    "estimatedSpeakers": 155004,
    "officialCountries": [],
    "region": "IN"
  },
  {
    "code": "ti-ER",
    "baseCode": "ti",
    "type": "variant",
    "name": "Tigrinya (Eritrea)",
    "estimatedSpeakers": 3806376,
    "officialCountries": [],
    "region": "ER"
  },
  {
    "code": "zh-Hant",
    "baseCode": "zh",
    "type": "variant",
    "name": "Traditional Chinese",
    "estimatedSpeakers": 39078482,
    "officialCountries": [
      {
        "countryCode": "HK",
        "officialStatus": "official",
        "populationPercent": 95
      },
      {
        "countryCode": "MO",
        "officialStatus": "official",
        "populationPercent": 98
      },
      {
        "countryCode": "TW",
        "officialStatus": "official",
        "populationPercent": 95
      }
    ],
    "script": "Hant"
  },
  {
    "code": "tn-BW",
    "baseCode": "tn",
    "type": "variant",
    "name": "Tswana (Botswana)",
    "estimatedSpeakers": 1519415,
    "officialCountries": [],
    "region": "BW"
  },
  {
    "code": "tr-CY",
    "baseCode": "tr",
    "type": "variant",
    "name": "Turkish (Cyprus)",
    "estimatedSpeakers": 303722,
    "officialCountries": [],
    "region": "CY"
  },
  {
    "code": "ur-IN",
    "baseCode": "ur",
    "type": "variant",
    "name": "Urdu (India)",
    "estimatedSpeakers": 70456500,
    "officialCountries": [],
    "region": "IN"
  },
  {
    "code": "uz-Arab",
    "baseCode": "uz",
    "type": "variant",
    "name": "Uzbek (Arabic)",
    "estimatedSpeakers": 1885715,
    "officialCountries": [
      {
        "countryCode": "AF",
        "officialStatus": "official_regional",
        "populationPercent": 4.7
      }
    ],
    "script": "Arab"
  },
  {
    "code": "uz-Cyrl",
    "baseCode": "uz",
    "type": "variant",
    "name": "Uzbek (Cyrillic)",
    "estimatedSpeakers": 5483754,
    "officialCountries": [
      {
        "countryCode": "UZ",
        "officialStatus": "official",
        "populationPercent": 15
      }
    ],
    "script": "Cyrl"
  },
  {
    "code": "uz-Latn",
    "baseCode": "uz",
    "type": "variant",
    "name": "Uzbek (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "vai-Latn",
    "baseCode": "vai",
    "type": "variant",
    "name": "Vai (Latin)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Latn"
  },
  {
    "code": "vai-Vaii",
    "baseCode": "vai",
    "type": "variant",
    "name": "Vai (Vai)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "script": "Vaii"
  },
  {
    "code": "bgn-AF",
    "baseCode": "bgn",
    "type": "variant",
    "name": "Western Balochi (Afghanistan)",
    "estimatedSpeakers": 252766,
    "officialCountries": [],
    "region": "AF"
  },
  {
    "code": "bgn-IR",
    "baseCode": "bgn",
    "type": "variant",
    "name": "Western Balochi (Iran)",
    "estimatedSpeakers": 494967,
    "officialCountries": [],
    "region": "IR"
  },
  {
    "code": "bgn-OM",
    "baseCode": "bgn",
    "type": "variant",
    "name": "Western Balochi (Oman)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "OM"
  },
  {
    "code": "bgn-AE",
    "baseCode": "bgn",
    "type": "variant",
    "name": "Western Balochi (United Arab Emirates)",
    "estimatedSpeakers": 0,
    "officialCountries": [],
    "region": "AE"
  },
  {
    "code": "yo-BJ",
    "baseCode": "yo",
    "type": "variant",
    "name": "Yoruba (Benin)",
    "estimatedSpeakers": 984706,
    "officialCountries": [],
    "region": "BJ"
  }
];

export const allLanguages: Language[] = [...languages, ...languageVariants];
