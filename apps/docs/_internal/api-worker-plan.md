# arev API Worker Plan

## Goal

Expose the full `arev` library through a simple REST API deployed as a Cloudflare Worker, while keeping this package as the single source of truth for all data and business logic.

Planned public domains:

- Docs: `https://arevdata.com`
- API: `https://api.arevdata.com`

The HTTP layer should be thin. Data definitions and lookup logic must stay in the library and be reused directly by the Worker routes.

## Core Principles

1. The library stays primary.
2. The API is an adapter over exported data and functions.
3. Route behavior should mirror library behavior as closely as possible.
4. Response formats should be predictable and cache-friendly.
5. The first version should optimize for clarity, not maximum route compression.

## Recommended Package Shape

Keep everything in this package for now, but separate the library and Worker entrypoints clearly.

Suggested structure:

```text
src/
  index.ts
  api/
    index.ts
    router.ts
    response.ts
    query.ts
    errors.ts
    routes/
      countries.ts
      cities.ts
      states.ts
      continents.ts
      currencies.ts
      phoneCodes.ts
      geography.ts
      flags.ts
      languages.ts
      translations.ts
      maps.ts
      health.ts
```

This keeps the package entrypoints inside `packages/*/src/index.ts` and gives Cloudflare a dedicated Worker entrypoint at `apps/api/src/index.ts`.

## Worker Runtime Choice

Use a plain Cloudflare Worker with a small internal router instead of adding a heavy framework.

Why:

- The API surface is data-heavy and logic-light.
- Native `Request` and `Response` are enough.
- It avoids coupling the package to a larger framework before the route model stabilizes.
- Testability stays simple.

If route volume becomes hard to maintain, adding `hono` later is reasonable, but it is not required for the first version.

## API Design

Use resource-oriented routes for data collections and resource-specific routes for direct lookups.

### Base routes

```text
GET /health
GET /meta
```

`/meta` should return supported locales, available resources, version, and maybe counts for major datasets.

### Countries

```text
GET /countries
GET /countries/:alpha2
GET /countries/:alpha2/flag
GET /countries/:alpha2/geography
GET /countries/:alpha2/cities
GET /countries/:alpha2/states
GET /countries/:alpha2/currency
GET /countries/:alpha2/languages
GET /countries/:alpha2/neighbors
```

Query params:

- `lang=en`
- `recognized=true|false`
- `continent=Europe`

### Cities

```text
GET /cities
GET /cities/search?q=amst
GET /cities/capital/:alpha2
```

Query params:

- `country=NL`
- `limit=50`
- `sort=population`
- `lang=en`

### States

```text
GET /states
GET /states/:country/:code
```

Query params:

- `country=US`
- `type=province`

### Continents

```text
GET /continents
GET /continents/:code
GET /continents/:code/countries
```

### Currencies

```text
GET /currencies
GET /currencies/:code
GET /currencies/by-country/:alpha2
```

Query params:

- `lang=en`

### Phone Codes

```text
GET /phone-codes
GET /phone-codes/:code
GET /phone-codes/by-country/:alpha2
```

`/phone-codes/:code` should accept `+31` and `31`.

### Geography

```text
GET /geography
GET /geography/:alpha2
GET /geography/climate/:climate
GET /geography/landlocked
GET /geography/border/:alpha2/:alpha2B
GET /geography/distance/:alpha2/:alpha2B
GET /geography/direction/:alpha2/:alpha2B
GET /geography/hints/:guess/:target
```

### Flags

```text
GET /flags
GET /flags/:alpha2
GET /flags/:alpha2/similar
GET /flags/color/:color
GET /flags/:alpha2/svg
GET /flags/:alpha2/png?width=320
```

For `/svg` and `/png`, first version should return JSON with upstream URLs, not proxy binary assets.

### Languages

```text
GET /languages
GET /languages/:code
GET /languages/:code/variants
GET /languages/:code/countries
GET /languages/by-country/:alpha2
GET /languages/search?q=engl
```

Query params:

- `locale=en`
- `includeVariants=true|false`
- `minSpeakers=50000000`

### Translations

```text
GET /translations/languages
GET /translations/:lang
```

This is useful for clients that want the translation maps directly.

### Maps

```text
GET /maps/world
GET /maps/world/countries
GET /maps/world/countries/:code
GET /maps/countries/:alpha2/svg
GET /maps/countries/:alpha3/subdivisions
```

For `/maps/world`, support query params that map to existing helpers where practical:

- `highlight=NL,BE,DE`
- `stroke=#ffffff`
- `fill=#d9d9d9`
- `background=transparent`

Important: the first version should avoid exposing every rendering option if it makes validation messy. Start with a small safe subset.

## Response Model

Use plain JSON consistently.

Success:

```json
{
  "data": {}
}
```

Collection responses:

```json
{
  "data": [],
  "meta": {
    "count": 0
  }
}
```

Errors:

```json
{
  "error": {
    "code": "not_found",
    "message": "Country not found"
  }
}
```

Recommended status codes:

- `200` for success
- `400` for invalid query/path input
- `404` for unknown resource
- `405` for unsupported method
- `500` for unexpected runtime failures

## Mapping Strategy

The Worker should call the existing exports directly.

Examples:

- `GET /countries/:alpha2` -> `getCountryByCode(alpha2, lang)`
- `GET /cities/search?q=tok` -> `searchCities(q, lang)`
- `GET /languages/search?q=engl` -> `searchLanguages(q, { includeVariants, locale, minSpeakers })`
- `GET /geography/hints/:guess/:target` -> `getGeoHints(guess, target)`

This is the critical design rule: do not reimplement lookup logic in the route handlers.

## Validation and Query Parsing

Add small helpers for:

- boolean parsing
- number parsing
- comma-separated list parsing
- enum validation
- alpha-2 and alpha-3 normalization

Examples:

- `parseBoolean("true")`
- `parseInteger("50")`
- `parseCsv("NL,BE,DE")`
- `normalizeCountryCode("nl") -> "NL"`

Centralizing this keeps handlers small and consistent.

## Bundle Size and Performance

This matters because the Worker will include large static datasets.

The main risks are:

1. Large Worker bundle size.
2. Cold starts caused by parsing large modules.
3. Duplicating imports between library and API entrypoints.

Recommended mitigations:

1. Reuse the existing data files and avoid copying or transforming them at runtime.
2. Keep route modules thin and import only what each route needs.
3. Measure final Worker bundle size before expanding the API surface further.
4. Consider splitting especially heavy features later if Cloudflare size limits become a problem.

The language dataset looks like the biggest likely pressure point.

If needed later, there are two fallback options:

1. Put the large datasets into KV/R2 or static assets and load them through the Worker.
2. Split the deployment into multiple Workers by domain area.

I would not start there. First measure the simple in-package Worker.

## Caching

Most endpoints are static and should be aggressively cacheable.

Recommended headers:

- `Cache-Control: public, max-age=3600, s-maxage=86400`

Potentially longer for immutable data:

- `Cache-Control: public, max-age=86400, s-maxage=604800`

For endpoints driven only by static data, Cloudflare cache should work very well.

## Testing Strategy

Add API-focused tests next to the Worker code.

Suggested test areas:

1. Route success cases.
2. Input validation failures.
3. Not-found behavior.
4. Query-param handling.
5. Response shape consistency.

Suggested files:

```text
src/api/routes/countries.test.ts
src/api/routes/languages.test.ts
src/api/routes/geography.test.ts
src/api/router.test.ts
```

Use the Worker `fetch()` handler directly in tests.

## Build and Deployment

Add Cloudflare-specific files later:

```text
wrangler.jsonc
```

Suggested scripts:

```json
{
  "build:api": "tsc -p tsconfig.json",
  "dev:api": "wrangler dev src/api/index.ts",
  "deploy:api": "wrangler deploy src/api/index.ts"
}
```

The exact build command may change depending on whether Wrangler handles bundling directly. The important part is to keep the library build and Worker deployment concerns separate.

## Recommended Implementation Order

### Phase 1: Minimal Worker skeleton

- Add `src/api/index.ts`
- Add a tiny router
- Add `json()` and `error()` response helpers
- Add `/health` and `/meta`

### Phase 2: Core read-only resources

- `countries`
- `cities`
- `states`
- `continents`
- `currencies`
- `phone-codes`

### Phase 3: Function-backed routes

- `languages`
- `geography`
- `flags`
- `maps`

### Phase 4: Hardening

- cache headers
- route tests
- not-found and validation consistency
- README API docs
- Wrangler config and deployment workflow

## Important Decisions To Make Early

1. Should all collection endpoints support pagination, or should the first version always return the full dataset?
2. Should map endpoints return JSON metadata only, or raw SVG text where relevant?
3. Do we want to expose translated responses through `lang`, `locale`, or both depending on domain?
4. Do we want one Worker for everything, or do we keep the option open to split later by domain?

My recommendation for v1:

1. No pagination unless an endpoint is clearly large or search-based.
2. Return raw SVG only for explicit SVG endpoints.
3. Use `lang` for translated data and `locale` only where the library already uses locale semantics for language names.
4. Start with one Worker.

## Risks

1. The Worker bundle may become too large once languages and maps are included.
2. Route sprawl can get messy if handlers are not grouped by domain from the start.
3. If route behavior diverges from library behavior, the API will become a second source of truth.
4. Some existing library helpers return plain values or strings, while the API needs normalized JSON envelopes.

## Recommendation

Build this as a thin Cloudflare Worker adapter inside the same package, with the library unchanged as the underlying source of truth.

Do not start by trying to expose every single function through generic RPC-like routes. A clear REST surface over the current domain groups will be easier to understand, cache, test, and document.
