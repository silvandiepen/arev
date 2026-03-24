import { addressFormats, getAddressFormatByCountry } from "../../data/addressFormats.js";
import { notFound, ok } from "../response.js";

function getCacheHeaders(): Record<string, string> {
  return {
    "cache-control": "public, max-age=3600, s-maxage=86400",
  };
}

export function handleAddressFormatsCollection(): Response {
  return ok(
    addressFormats,
    {
      count: addressFormats.length,
    },
    {
      headers: getCacheHeaders(),
    }
  );
}

export function handleAddressFormatDetails(alpha2: string): Response {
  const addressFormat = getAddressFormatByCountry(alpha2);

  if (!addressFormat) {
    return notFound("Address format not found");
  }

  return ok(addressFormat, undefined, {
    headers: getCacheHeaders(),
  });
}
