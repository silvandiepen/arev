import { ok } from "../response.js";

export function handleHealthRoute(): Response {
  return ok(
    {
      status: "ok",
    },
    undefined,
    {
      headers: {
        "cache-control": "no-store",
      },
    }
  );
}
