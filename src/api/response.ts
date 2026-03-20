export interface JsonSuccessBody<T> {
  data: T;
  meta?: Record<string, unknown>;
}

export interface JsonErrorBody {
  error: {
    code: string;
    message: string;
  };
}

function withDefaultHeaders(init?: ResponseInit): Headers {
  const headers = new Headers(init?.headers);

  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json; charset=utf-8");
  }

  return headers;
}

export function json<T>(body: JsonSuccessBody<T> | JsonErrorBody, init?: ResponseInit): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: withDefaultHeaders(init),
  });
}

export function ok<T>(data: T, meta?: Record<string, unknown>, init?: ResponseInit): Response {
  return json(
    meta ? { data, meta } : { data },
    {
      status: 200,
      ...init,
    }
  );
}

export function error(status: number, code: string, message: string, init?: ResponseInit): Response {
  return json(
    {
      error: {
        code,
        message,
      },
    },
    {
      status,
      ...init,
    }
  );
}

export function methodNotAllowed(allow = "GET"): Response {
  return error(405, "method_not_allowed", "Method not allowed", {
    headers: {
      allow,
    },
  });
}

export function notFound(message = "Route not found"): Response {
  return error(404, "not_found", message);
}
