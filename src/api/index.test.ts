import { describe, expect, it } from "vitest";
import { countries } from "../data/countries.js";
import { getCountryByCode } from "../data/countries.js";
import { handleApiRequest } from "./index.js";

describe("api worker", () => {
  it("returns health status", async () => {
    const response = await handleApiRequest(new Request("https://example.com/health"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
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
    expect(body.data.routes).toContain("/countries");
    expect(body.data.routes).toContain("/cities");
  });

  it("returns the countries collection", async () => {
    const response = await handleApiRequest(new Request("https://example.com/countries?recognized=true"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.meta.count).toBeGreaterThan(150);
    expect(body.data.every((country: { recognized: boolean }) => country.recognized)).toBe(true);
  });

  it("returns a country by alpha-2 code", async () => {
    const response = await handleApiRequest(new Request("https://example.com/countries/nl"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data).toEqual(getCountryByCode("NL", "en"));
  });

  it("returns validation errors for invalid country filters", async () => {
    const response = await handleApiRequest(new Request("https://example.com/countries?recognized=maybe"));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error.code).toBe("invalid_query");
  });

  it("returns the cities collection with search and limit", async () => {
    const response = await handleApiRequest(new Request("https://example.com/cities?q=am&limit=5&sort=population"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.meta.count).toBeLessThanOrEqual(5);
    expect(body.data.length).toBeLessThanOrEqual(5);
  });

  it("returns the capital city for a country", async () => {
    const response = await handleApiRequest(new Request("https://example.com/cities/capital/nl"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data.name).toBe("Amsterdam");
    expect(body.data.capital).toBe(true);
  });

  it("returns validation errors for invalid city query params", async () => {
    const response = await handleApiRequest(new Request("https://example.com/cities?limit=0"));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error.code).toBe("invalid_query");
  });

  it("returns phone code records for a country", async () => {
    const response = await handleApiRequest(new Request("https://example.com/phone-codes?country=mt"));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.meta.count).toBe(1);
    expect(body.data[0].code).toBe("MT");
    expect(body.data[0].phoneCode).toBe("+356");
  });

  it("returns all records that share a dialling code", async () => {
    const response = await handleApiRequest(
      new Request("https://example.com/phone-codes?phoneCode=1&limit=8")
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.meta.count).toBeLessThanOrEqual(8);
    expect(body.data.length).toBeGreaterThan(1);
    expect(body.data.every((entry: { phoneCode: string }) => entry.phoneCode === "+1")).toBe(true);
  });

  it("returns a world map SVG payload", async () => {
    const response = await handleApiRequest(
      new Request("https://example.com/maps/world?highlight=MT:%23d97706,JP:%230f766e")
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.data.highlightCount).toBe(2);
    expect(body.data.svg).toContain("<svg");
    expect(body.data.svg).toContain('id="MT"');
    expect(body.data.svg).toContain('id="JP"');
  });

  it("rejects invalid world map highlight query values", async () => {
    const response = await handleApiRequest(
      new Request("https://example.com/maps/world?highlight=MT:not-a-color")
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error.code).toBe("invalid_query");
  });

  it("handles CORS preflight requests", async () => {
    const response = await handleApiRequest(
      new Request("https://example.com/countries", { method: "OPTIONS" })
    );

    expect(response.status).toBe(204);
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
    expect(response.headers.get("access-control-allow-methods")).toContain("OPTIONS");
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
