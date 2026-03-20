import { describe, expect, it } from "vitest";
import { countries } from "../data/countries.js";
import { handleApiRequest } from "./index.js";

describe("api worker", () => {
  it("returns health status", async () => {
    const response = await handleApiRequest(new Request("https://example.com/health"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(body).toEqual({
      data: {
        status: "ok",
      },
    });
  });

  it("returns API metadata", async () => {
    const response = await handleApiRequest(new Request("https://example.com/meta"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data.name).toBe("arev");
    expect(body.data.resources.countries).toBe(countries.length);
    expect(body.data.routes).toContain("/health");
    expect(body.data.routes).toContain("/meta");
  });

  it("rejects unsupported methods", async () => {
    const response = await handleApiRequest(new Request("https://example.com/health", { method: "POST" }));
    const body = await response.json();

    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("GET");
    expect(body).toEqual({
      error: {
        code: "method_not_allowed",
        message: "Method not allowed",
      },
    });
  });

  it("returns not found for unknown routes", async () => {
    const response = await handleApiRequest(new Request("https://example.com/unknown"));
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body).toEqual({
      error: {
        code: "not_found",
        message: "Route not found",
      },
    });
  });
});
