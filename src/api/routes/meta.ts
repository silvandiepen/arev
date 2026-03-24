import { addressFormats } from "../../data/addressFormats.js";
import { moonPhases } from "../../data/astronomy.js";
import { cities } from "../../data/cities.js";
import { continents } from "../../data/continents.js";
import { countries } from "../../data/countries.js";
import { currencies } from "../../data/currencies.js";
import { flagData } from "../../data/flags.js";
import { countryGeography } from "../../data/geography.js";
import { allLanguages, languageVariants, languages } from "../../data/languages/index.js";
import { phoneCountryCodes } from "../../data/phoneCodes.js";
import { timezones } from "../../data/timezones.js";
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
        addressFormats: addressFormats.length,
        phoneCodes: phoneCountryCodes.length,
        timezones: timezones.length,
        cities: cities.length,
        states: states.length,
        moonPhases: moonPhases.length,
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
        "/access/signup",
        "/access/verify",
        "/access/request-upgrade",
        "/address-formats",
        "/address-formats/:alpha2",
        "/countries",
        "/countries/:alpha2",
        "/cities",
        "/cities/capital/:alpha2",
        "/astronomy",
        "/phone-codes",
        "/timezones",
        "/maps/world",
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
