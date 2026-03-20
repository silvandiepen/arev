import { handleHealthRoute } from "./routes/health.js";
import { handleMetaRoute } from "./routes/meta.js";
import { methodNotAllowed, notFound } from "./response.js";

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export async function routeRequest(request: Request): Promise<Response> {
  if (request.method !== "GET") {
    return methodNotAllowed();
  }

  const url = new URL(request.url);
  const pathname = normalizePathname(url.pathname);

  switch (pathname) {
    case "/health":
      return handleHealthRoute();
    case "/meta":
      return handleMetaRoute();
    default:
      return notFound();
  }
}
