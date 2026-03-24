import type { ApiEnv } from "./env.js";
import {
  handleAccessSignup,
  handleAccessUpgradeRequest,
  handleAccessVerify,
} from "./routes/access.js";
import {
  handleAddressFormatDetails,
  handleAddressFormatsCollection,
} from "./routes/addressFormats.js";
import { handleAstronomyRoute } from "./routes/astronomy.js";
import { handleCapitalCity, handleCitiesCollection } from "./routes/cities.js";
import { handleCountriesCollection, handleCountryDetails } from "./routes/countries.js";
import { handleHealthRoute } from "./routes/health.js";
import { handleWorldMapRoute } from "./routes/maps.js";
import { handleMetaRoute } from "./routes/meta.js";
import { handlePhoneCodesCollection } from "./routes/phoneCodes.js";
import { handleTimezonesCollection } from "./routes/timezones.js";
import { methodNotAllowed, noContent, notFound } from "./response.js";

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export async function routeRequest(
  request: Request,
  env?: ApiEnv
): Promise<Response> {
  if (request.method === "OPTIONS") {
    return noContent();
  }

  const url = new URL(request.url);
  const pathname = normalizePathname(url.pathname);
  const segments = pathname.split("/").filter(Boolean);

  if (request.method === "GET") {
    switch (pathname) {
      case "/health":
        return handleHealthRoute();
      case "/meta":
        return handleMetaRoute();
      case "/address-formats":
        return handleAddressFormatsCollection();
      case "/countries":
        return handleCountriesCollection(request);
      case "/cities":
        return handleCitiesCollection(request);
      case "/astronomy":
        return handleAstronomyRoute(request);
      case "/phone-codes":
        return handlePhoneCodesCollection(request);
      case "/timezones":
        return handleTimezonesCollection(request);
      case "/maps/world":
        return handleWorldMapRoute(request);
      case "/access/verify":
        return handleAccessVerify(request, env);
      case "/access/signup":
      case "/access/request-upgrade":
        return methodNotAllowed("POST");
      default:
        break;
    }

    if (segments[0] === "countries" && segments.length === 2) {
      return handleCountryDetails(request, segments[1]);
    }

    if (segments[0] === "address-formats" && segments.length === 2) {
      return handleAddressFormatDetails(segments[1]);
    }

    if (segments[0] === "cities" && segments[1] === "capital" && segments.length === 3) {
      return handleCapitalCity(request, segments[2]);
    }

    return notFound();
  }

  if (request.method === "POST") {
    if (pathname === "/access/signup") {
      return handleAccessSignup(request, env);
    }

    if (pathname === "/access/request-upgrade") {
      return handleAccessUpgradeRequest(request, env);
    }

    if (pathname === "/access/verify") {
      return methodNotAllowed("GET");
    }

    return methodNotAllowed();
  }

  if (pathname.startsWith("/access/")) {
    return methodNotAllowed("GET, POST");
  }

  return methodNotAllowed();
}
