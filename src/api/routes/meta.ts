import { cities } from "../../data/cities.js";
import { continents } from "../../data/continents.js";
import { countries } from "../../data/countries.js";
import { currencies } from "../../data/currencies.js";
import { flagData } from "../../data/flags.js";
import { countryGeography } from "../../data/geography.js";
import { allLanguages, languageVariants, languages } from "../../data/languages/index.js";
import { phoneCountryCodes } from "../../data/phoneCodes.js";
import { getSupportedLanguages } from "../../data/translations.js";
import { worldMapCountries } from "../../data/worldMap.js";
import { states } from "../../data/states.js";
import { ok } from "../response.js";

export function handleMetaRoute(): Response {
  return ok(
    {
      name: "arev",
      supportedLanguages: getSupportedLanguages(),
      resources: {
        countries: countries.length,
        phoneCodes: phoneCountryCodes.length,
        cities: cities.length,
        states: states.length,
        continents: continents.length,
        currencies: currencies.length,
        geography: countryGeography.length,
        flags: flagData.length,
        languages: languages.length,
        languageVariants: languageVariants.length,
        allLanguages: allLanguages.length,
        worldMapCountries: worldMapCountries.length,
      },
      routes: [
        "/health",
        "/meta",
        "/countries",
        "/countries/:alpha2",
        "/cities",
        "/cities/capital/:alpha2",
      ],
    },
    undefined,
    {
      headers: {
        "cache-control": "public, max-age=3600, s-maxage=86400",
      },
    }
  );
}
