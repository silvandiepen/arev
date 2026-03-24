const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  { value: "fr", label: "Francais" },
  { value: "es", label: "Espanol" },
  { value: "ja", label: "Japanese" },
  { value: "zh", label: "Chinese" },
];

const API_PRESETS = [
  { label: "Dataset meta", value: "/meta" },
  { label: "Malta country record", value: "/countries/MT" },
  { label: "Recognized countries in Europe", value: "/countries?continent=Europe&recognized=true" },
  { label: "Top Japanese cities", value: "/cities?country=JP&sort=population&limit=5" },
  { label: "Shared +1 dialling code", value: "/phone-codes?phoneCode=+1&limit=10" },
  { label: "Malta timezones", value: "/timezones?country=MT" },
  { label: "Astronomy snapshot", value: "/astronomy?date=2026-03-23T00:00:00.000Z&hemisphere=north" },
];

const MOON_PHASE_SYMBOLS = {
  "new-moon": "N",
  "waxing-crescent": "WC",
  "first-quarter": "FQ",
  "waxing-gibbous": "WG",
  "full-moon": "FM",
  "waning-gibbous": "Wg",
  "last-quarter": "LQ",
  "waning-crescent": "Wc",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatMaybeNumber(value) {
  return typeof value === "number" ? formatNumber(value) : "Unknown";
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function todayInputValue() {
  return new Date().toISOString().slice(0, 10);
}

function normalizePath(path) {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function resolveApiBase(element) {
  const explicitBase = element.getAttribute("api-base");
  if (explicitBase) {
    return explicitBase.replace(/\/$/, "");
  }

  if (typeof window.AREV_API_BASE === "string" && window.AREV_API_BASE) {
    return window.AREV_API_BASE.replace(/\/$/, "");
  }

  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return "http://127.0.0.1:8787";
  }

  return "https://api.arevdata.com";
}

async function requestJson(element, path) {
  const apiBase = resolveApiBase(element);
  const normalizedPath = normalizePath(path);
  const url = `${apiBase}${normalizedPath}`;
  const startedAt = performance.now();
  const response = await fetch(url);
  const text = await response.text();
  const durationMs = Math.round(performance.now() - startedAt);

  let payload = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch (error) {
      throw new Error(`Invalid JSON response from ${url}`);
    }
  }

  if (!response.ok) {
    const message = payload?.error?.message ?? `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return { apiBase, durationMs, normalizedPath, payload, response, url };
}

function languageOptionsMarkup(selectedValue) {
  return LANGUAGE_OPTIONS.map(
    (option) =>
      `<option value="${option.value}"${option.value === selectedValue ? " selected" : ""}>${option.label}</option>`
  ).join("");
}

class ArevDatasetStats extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.renderShell();
    this.load();
  }

  renderShell() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Live API data</div>
        <div class="arev-demo__header">
          <div>
            <h3>Dataset snapshot</h3>
            <p>These counts are fetched from the public API metadata endpoint, not hardcoded into the page.</p>
          </div>
          <div class="arev-demo__meta">
            <a href="${escapeHtml(resolveApiBase(this))}/meta" target="_blank" rel="noreferrer">Open /meta</a>
          </div>
        </div>
        <p class="arev-demo__status" data-role="status">Loading dataset counts...</p>
        <div class="arev-demo__metric-grid" data-role="metrics"></div>
        <div class="arev-demo__pill-list" data-role="languages"></div>
      </section>
    `;
  }

  async load() {
    const status = this.querySelector('[data-role="status"]');
    const metrics = this.querySelector('[data-role="metrics"]');
    const languages = this.querySelector('[data-role="languages"]');

    try {
      const { durationMs, payload } = await requestJson(this, "/meta");
      const resources = payload.data.resources;
      const metricEntries = [
        ["Countries", resources.countries],
        ["Cities", resources.cities],
        ["States", resources.states],
        ["Phone codes", resources.phoneCodes],
        ["Timezones", resources.timezones],
        ["Flags", resources.flags],
        ["Languages", resources.allLanguages],
        ["Currencies", resources.currencies],
        ["World map paths", resources.worldMapCountries],
        ["Moon phases", resources.moonPhases],
        ["Planets", resources.planets],
        ["Moons", resources.moons],
        ["Stars", resources.stars],
      ];

      metrics.innerHTML = metricEntries
        .map(
          ([label, value]) => `
            <div class="arev-demo__card arev-demo__metric">
              <div class="arev-demo__metric-value">${escapeHtml(formatNumber(value))}</div>
              <div class="arev-demo__metric-label">${escapeHtml(label)}</div>
            </div>
          `
        )
        .join("");

      languages.innerHTML = payload.data.supportedLanguages
        .map((language) => `<span class="arev-demo__pill">${escapeHtml(language)}</span>`)
        .join("");

      status.dataset.tone = "success";
      status.textContent = `Loaded from ${resolveApiBase(this)} in ${durationMs} ms.`;
    } catch (error) {
      status.dataset.tone = "error";
      status.textContent = error.message;
      metrics.innerHTML = "";
      languages.innerHTML = "";
    }
  }
}

class ArevApiPlayground extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.render();
    this.bind();
    this.run();
  }

  render() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Interactive endpoint test</div>
        <div class="arev-demo__header">
          <div>
            <h3>API playground</h3>
            <p>Try real routes from the browser and inspect the JSON response shape directly.</p>
          </div>
          <div class="arev-demo__meta">${escapeHtml(resolveApiBase(this))}</div>
        </div>
        <form class="arev-demo__surface">
          <div class="arev-demo__controls">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Preset</span>
              <select name="preset">${API_PRESETS.map((preset) => `<option value="${preset.value}">${escapeHtml(preset.label)}</option>`).join("")}</select>
            </label>
            <label class="arev-demo__field">
              <span class="arev-demo__label">Path</span>
              <input name="path" type="text" value="${escapeHtml(API_PRESETS[0].value)}" spellcheck="false" />
            </label>
          </div>
          <div class="arev-demo__actions">
            <button type="submit">Run request</button>
            <p class="arev-demo__status" data-role="status">Ready.</p>
          </div>
        </form>
        <div class="arev-demo__response">
          <pre class="arev-demo__pre" data-role="output"></pre>
        </div>
      </section>
    `;
  }

  bind() {
    this.form = this.querySelector("form");
    this.preset = this.querySelector('select[name="preset"]');
    this.path = this.querySelector('input[name="path"]');
    this.status = this.querySelector('[data-role="status"]');
    this.output = this.querySelector('[data-role="output"]');

    this.preset.addEventListener("change", () => {
      this.path.value = this.preset.value;
      this.run();
    });

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.run();
    });
  }

  async run() {
    this.status.dataset.tone = "";
    this.status.textContent = "Fetching response...";
    this.output.textContent = "";

    try {
      const { durationMs, payload, response, url } = await requestJson(this, this.path.value.trim());
      this.status.dataset.tone = "success";
      this.status.textContent = `${response.status} OK in ${durationMs} ms`;
      this.output.textContent = `// ${url}\n${JSON.stringify(payload, null, 2)}`;
    } catch (error) {
      this.status.dataset.tone = "error";
      this.status.textContent = error.message;
      this.output.textContent = "";
    }
  }
}

class ArevCountryLookup extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.render();
    this.bind();
    this.lookup();
  }

  render() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Interactive record lookup</div>
        <div class="arev-demo__header">
          <div>
            <h3>Country lookup</h3>
            <p>Fetch a country record by ISO alpha-2 code and switch the response language to preview translations.</p>
          </div>
        </div>
        <form class="arev-demo__surface">
          <div class="arev-demo__controls">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Country code</span>
              <input name="countryCode" type="text" maxlength="2" value="MT" spellcheck="false" />
            </label>
            <label class="arev-demo__field">
              <span class="arev-demo__label">Language</span>
              <select name="lang">${languageOptionsMarkup("en")}</select>
            </label>
          </div>
          <div class="arev-demo__actions">
            <button type="submit">Fetch country</button>
            <p class="arev-demo__status" data-role="status">Ready.</p>
          </div>
        </form>
        <div class="arev-demo__card" data-role="result"></div>
      </section>
    `;
  }

  bind() {
    this.form = this.querySelector("form");
    this.countryCode = this.querySelector('input[name="countryCode"]');
    this.lang = this.querySelector('select[name="lang"]');
    this.status = this.querySelector('[data-role="status"]');
    this.result = this.querySelector('[data-role="result"]');

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.lookup();
    });
  }

  async lookup() {
    const code = this.countryCode.value.trim().toUpperCase();
    const lang = this.lang.value;

    this.countryCode.value = code;
    this.status.dataset.tone = "";
    this.status.textContent = "Fetching country...";

    try {
      const { durationMs, payload } = await requestJson(this, `/countries/${encodeURIComponent(code)}?lang=${encodeURIComponent(lang)}`);
      const country = payload.data;

      this.result.innerHTML = `
        <div class="arev-demo__country">
          <div class="arev-demo__country-header">
            <div class="arev-demo__flag">${escapeHtml(country.flag)}</div>
            <div>
              <h3>${escapeHtml(country.name)}</h3>
              <p class="arev-demo__meta">${escapeHtml(country.alpha2)} · ${escapeHtml(country.alpha3)} · ${escapeHtml(country.numeric)}</p>
            </div>
          </div>
          <div class="arev-demo__key-values">
            <div><strong>Capital</strong>${escapeHtml(country.capital)}</div>
            <div><strong>Continent</strong>${escapeHtml(country.continent)}</div>
            <div><strong>Phone code</strong>${escapeHtml(country.phoneCode)}</div>
            <div><strong>Currency</strong>${escapeHtml(country.currencyName ?? country.currency)}</div>
            <div><strong>Languages</strong>${escapeHtml(country.languages.join(", "))}</div>
            <div><strong>Recognized</strong>${country.recognized ? "Yes" : "No"}</div>
          </div>
        </div>
      `;

      this.status.dataset.tone = "success";
      this.status.textContent = `Loaded ${country.name} in ${durationMs} ms.`;
    } catch (error) {
      this.status.dataset.tone = "error";
      this.status.textContent = error.message;
      this.result.innerHTML = `<p class="arev-demo__empty">No country matched that code.</p>`;
    }
  }
}

class ArevPhoneCodeDemo extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.render();
    this.bind();
    this.lookupCountry();
    this.lookupSharedCode();
  }

  render() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Interactive picker data</div>
        <div class="arev-demo__header">
          <div>
            <h3>Phone code picker</h3>
            <p>Test the exact country lookup and inspect all entries that share a dialling prefix like <code>+1</code>.</p>
          </div>
        </div>
        <div class="arev-demo__split">
          <form class="arev-demo__surface" data-form="country">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Country code</span>
              <input name="countryCode" type="text" maxlength="2" value="MT" spellcheck="false" />
            </label>
            <div class="arev-demo__actions">
              <button type="submit">Find phone code</button>
              <p class="arev-demo__status" data-role="country-status">Ready.</p>
            </div>
            <div class="arev-demo__card" data-role="country-result"></div>
          </form>
          <form class="arev-demo__surface" data-form="shared">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Shared dialling code</span>
              <input name="phoneCode" type="text" value="+1" spellcheck="false" />
            </label>
            <div class="arev-demo__actions">
              <button type="submit">Show matching entries</button>
              <p class="arev-demo__status" data-role="shared-status">Ready.</p>
            </div>
            <div class="arev-demo__grid" data-role="shared-result"></div>
          </form>
        </div>
      </section>
    `;
  }

  bind() {
    this.countryForm = this.querySelector('[data-form="country"]');
    this.sharedForm = this.querySelector('[data-form="shared"]');
    this.countryCode = this.querySelector('input[name="countryCode"]');
    this.phoneCode = this.querySelector('input[name="phoneCode"]');
    this.countryStatus = this.querySelector('[data-role="country-status"]');
    this.sharedStatus = this.querySelector('[data-role="shared-status"]');
    this.countryResult = this.querySelector('[data-role="country-result"]');
    this.sharedResult = this.querySelector('[data-role="shared-result"]');

    this.countryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.lookupCountry();
    });

    this.sharedForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.lookupSharedCode();
    });
  }

  async lookupCountry() {
    const code = this.countryCode.value.trim().toUpperCase();
    this.countryCode.value = code;
    this.countryStatus.dataset.tone = "";
    this.countryStatus.textContent = "Looking up country...";

    try {
      const { durationMs, payload } = await requestJson(this, `/phone-codes?country=${encodeURIComponent(code)}`);
      const entry = payload.data[0];

      if (!entry) {
        throw new Error("No phone code entry found for that country code");
      }

      this.countryResult.innerHTML = `
        <div class="arev-demo__country">
          <div class="arev-demo__country-header">
            <div class="arev-demo__flag">${escapeHtml(entry.flag)}</div>
            <div>
              <h3>${escapeHtml(entry.country)}</h3>
              <p class="arev-demo__meta">${escapeHtml(entry.code)} · ${escapeHtml(entry.phoneCode)}</p>
            </div>
          </div>
        </div>
      `;

      this.countryStatus.dataset.tone = "success";
      this.countryStatus.textContent = `Loaded in ${durationMs} ms.`;
    } catch (error) {
      this.countryStatus.dataset.tone = "error";
      this.countryStatus.textContent = error.message;
      this.countryResult.innerHTML = `<p class="arev-demo__empty">No match.</p>`;
    }
  }

  async lookupSharedCode() {
    const phoneCode = this.phoneCode.value.trim();
    this.sharedStatus.dataset.tone = "";
    this.sharedStatus.textContent = "Loading shared code entries...";

    try {
      const { durationMs, payload } = await requestJson(this, `/phone-codes?phoneCode=${encodeURIComponent(phoneCode)}&limit=18`);
      const entries = payload.data;

      this.sharedResult.innerHTML = entries
        .map(
          (entry) => `
            <div class="arev-demo__list-item">
              <strong>${escapeHtml(entry.flag)} ${escapeHtml(entry.country)}</strong>
              <span class="arev-demo__meta">${escapeHtml(entry.code)} · ${escapeHtml(entry.phoneCode)}</span>
            </div>
          `
        )
        .join("");

      this.sharedStatus.dataset.tone = "success";
      this.sharedStatus.textContent = `${entries.length} entries loaded in ${durationMs} ms.`;
    } catch (error) {
      this.sharedStatus.dataset.tone = "error";
      this.sharedStatus.textContent = error.message;
      this.sharedResult.innerHTML = "";
    }
  }
}

class ArevCapitalFinder extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.render();
    this.bind();
    this.lookup();
  }

  render() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Interactive city lookup</div>
        <div class="arev-demo__header">
          <div>
            <h3>Capital finder</h3>
            <p>Resolve a country code to its capital city and inspect the translated name and geographic coordinates.</p>
          </div>
        </div>
        <form class="arev-demo__surface">
          <div class="arev-demo__controls">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Country code</span>
              <input name="countryCode" type="text" maxlength="2" value="JP" spellcheck="false" />
            </label>
            <label class="arev-demo__field">
              <span class="arev-demo__label">Language</span>
              <select name="lang">${languageOptionsMarkup("en")}</select>
            </label>
          </div>
          <div class="arev-demo__actions">
            <button type="submit">Find capital</button>
            <p class="arev-demo__status" data-role="status">Ready.</p>
          </div>
        </form>
        <div class="arev-demo__card" data-role="result"></div>
      </section>
    `;
  }

  bind() {
    this.form = this.querySelector("form");
    this.countryCode = this.querySelector('input[name="countryCode"]');
    this.lang = this.querySelector('select[name="lang"]');
    this.status = this.querySelector('[data-role="status"]');
    this.result = this.querySelector('[data-role="result"]');

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.lookup();
    });
  }

  async lookup() {
    const code = this.countryCode.value.trim().toUpperCase();
    const lang = this.lang.value;
    this.countryCode.value = code;
    this.status.dataset.tone = "";
    this.status.textContent = "Fetching capital city...";

    try {
      const { durationMs, payload } = await requestJson(this, `/cities/capital/${encodeURIComponent(code)}?lang=${encodeURIComponent(lang)}`);
      const city = payload.data;

      this.result.innerHTML = `
        <div class="arev-demo__country">
          <div class="arev-demo__country-header">
            <div>
              <h3>${escapeHtml(city.name)}</h3>
              <p class="arev-demo__meta">${escapeHtml(city.country)} · capital city</p>
            </div>
          </div>
          <div class="arev-demo__key-values">
            <div><strong>Latitude</strong>${escapeHtml(city.lat.toFixed(4))}</div>
            <div><strong>Longitude</strong>${escapeHtml(city.lon.toFixed(4))}</div>
            <div><strong>Population</strong>${escapeHtml(formatMaybeNumber(city.population))}</div>
            <div><strong>State / region</strong>${escapeHtml(city.state ?? "None")}</div>
          </div>
        </div>
      `;

      this.status.dataset.tone = "success";
      this.status.textContent = `Loaded in ${durationMs} ms.`;
    } catch (error) {
      this.status.dataset.tone = "error";
      this.status.textContent = error.message;
      this.result.innerHTML = `<p class="arev-demo__empty">No capital found.</p>`;
    }
  }
}

class ArevWorldMapDemo extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.render();
    this.bind();
    this.load();
  }

  render() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Interactive SVG rendering</div>
        <div class="arev-demo__header">
          <div>
            <h3>World map highlighter</h3>
            <p>Enter one <code>CODE #hex</code> pair per line to render a highlighted SVG map via the API.</p>
          </div>
        </div>
        <form class="arev-demo__surface">
          <div class="arev-demo__layout">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Highlights</span>
              <textarea name="highlights" spellcheck="false">MT #d97706
JP #0f766e
BR #0284c7
ZA #be123c</textarea>
            </label>
            <div class="arev-demo__grid">
              <label class="arev-demo__field">
                <span class="arev-demo__label">Base fill</span>
                <input name="fill" type="color" value="#d0d0d0" />
              </label>
              <label class="arev-demo__field">
                <span class="arev-demo__label">Stroke</span>
                <input name="stroke" type="color" value="#ffffff" />
              </label>
              <label class="arev-demo__field">
                <span class="arev-demo__label">Hover fill</span>
                <input name="hoverFill" type="color" value="#93c5fd" />
              </label>
            </div>
          </div>
          <div class="arev-demo__actions">
            <button type="submit">Render map</button>
            <p class="arev-demo__status" data-role="status">Ready.</p>
          </div>
        </form>
        <div class="arev-demo__legend" data-role="legend"></div>
        <div class="arev-demo__map-frame">
          <div data-role="map"></div>
        </div>
      </section>
    `;
  }

  bind() {
    this.form = this.querySelector("form");
    this.highlights = this.querySelector('textarea[name="highlights"]');
    this.fill = this.querySelector('input[name="fill"]');
    this.stroke = this.querySelector('input[name="stroke"]');
    this.hoverFill = this.querySelector('input[name="hoverFill"]');
    this.status = this.querySelector('[data-role="status"]');
    this.legend = this.querySelector('[data-role="legend"]');
    this.map = this.querySelector('[data-role="map"]');

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.load();
    });
  }

  parseHighlights() {
    return this.highlights.value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [code, fill] = line.split(/\s+/);
        if (!code || !fill) {
          throw new Error("Each highlight line must use the format CODE #hex");
        }

        return {
          code: code.toUpperCase(),
          fill: fill.toLowerCase(),
        };
      });
  }

  async load() {
    this.status.dataset.tone = "";
    this.status.textContent = "Rendering world map...";

    try {
      const highlights = this.parseHighlights();
      const params = new URLSearchParams();
      params.set("highlight", highlights.map((entry) => `${entry.code}:${entry.fill}`).join(","));
      params.set("fill", this.fill.value);
      params.set("stroke", this.stroke.value);
      params.set("hoverFill", this.hoverFill.value);

      const { durationMs, payload } = await requestJson(this, `/maps/world?${params.toString()}`);
      this.map.innerHTML = payload.data.svg;
      this.legend.innerHTML = payload.data.highlights
        .map(
          (entry) => `
            <span class="arev-demo__legend-item">
              <span class="arev-demo__swatch" style="background:${escapeHtml(entry.fill)}"></span>
              ${escapeHtml(entry.code)}
            </span>
          `
        )
        .join("");
      this.status.dataset.tone = "success";
      this.status.textContent = `Rendered ${payload.data.highlightCount} highlights in ${durationMs} ms.`;
    } catch (error) {
      this.status.dataset.tone = "error";
      this.status.textContent = error.message;
      this.legend.innerHTML = "";
      this.map.innerHTML = "";
    }
  }
}

class ArevTimezoneDemo extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.render();
    this.bind();
    this.lookupCountry();
  }

  render() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Interactive timezone mapping</div>
        <div class="arev-demo__header">
          <div>
            <h3>Timezone explorer</h3>
            <p>Look up the zones used by a country, then highlight the selected timezone footprint on the bundled world map.</p>
          </div>
          <div class="arev-demo__meta">${escapeHtml(resolveApiBase(this))}</div>
        </div>
        <form class="arev-demo__surface">
          <div class="arev-demo__controls">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Country / territory code</span>
              <input name="country" type="text" value="MT" maxlength="2" spellcheck="false" />
            </label>
            <label class="arev-demo__field">
              <span class="arev-demo__label">Timezone name</span>
              <input name="timezone" type="text" value="Europe/Malta" spellcheck="false" />
            </label>
          </div>
          <div class="arev-demo__actions">
            <button type="button" data-action="country">Load country timezones</button>
            <button type="button" data-action="timezone">Load timezone</button>
            <p class="arev-demo__status" data-role="status">Ready.</p>
          </div>
        </form>
        <div class="arev-demo__split">
          <div class="arev-demo__card" data-role="summary"></div>
          <div class="arev-demo__card" data-role="list"></div>
        </div>
        <div class="arev-demo__map-frame">
          <div data-role="map"></div>
        </div>
      </section>
    `;
  }

  bind() {
    this.country = this.querySelector('input[name="country"]');
    this.timezone = this.querySelector('input[name="timezone"]');
    this.status = this.querySelector('[data-role="status"]');
    this.summary = this.querySelector('[data-role="summary"]');
    this.list = this.querySelector('[data-role="list"]');
    this.map = this.querySelector('[data-role="map"]');
    this.countryButton = this.querySelector('[data-action="country"]');
    this.timezoneButton = this.querySelector('[data-action="timezone"]');

    this.countryButton.addEventListener("click", () => {
      this.lookupCountry();
    });

    this.timezoneButton.addEventListener("click", () => {
      this.loadTimezone(this.timezone.value.trim());
    });

    this.list.addEventListener("click", (event) => {
      const button = event.target.closest("[data-zone]");
      if (!(button instanceof HTMLElement)) {
        return;
      }

      this.loadTimezone(button.dataset.zone ?? "");
    });
  }

  renderTimezoneList(countryCode, zones, selectedName) {
    this.list.innerHTML = `
      <div class="arev-demo__country">
        <div class="arev-demo__country-header">
          <div>
            <h3>${escapeHtml(countryCode)}</h3>
            <p class="arev-demo__meta">${escapeHtml(`${zones.length} timezone${zones.length === 1 ? "" : "s"} from the IANA zone1970 dataset`)}</p>
          </div>
        </div>
        <div class="arev-demo__list">
          ${zones
            .map(
              (zone) => `
                <button type="button" data-zone="${escapeHtml(zone.name)}"${zone.name === selectedName ? ' disabled="true"' : ""}>
                  ${escapeHtml(zone.name)}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  renderSummary(zone) {
    const territoryMarkup = zone.territories
      .map((territory) => `<span class="arev-demo__pill">${escapeHtml(`${territory.flag} ${territory.name}`)}</span>`)
      .join("");

    this.summary.innerHTML = `
      <div class="arev-demo__country">
        <div class="arev-demo__country-header">
          <div>
            <h3>${escapeHtml(zone.name)}</h3>
            <p class="arev-demo__meta">${escapeHtml(zone.displayName)} · principal location ${escapeHtml(`${zone.latitude.toFixed(4)}, ${zone.longitude.toFixed(4)}`)}</p>
          </div>
        </div>
        <div class="arev-demo__key-values">
          <div><strong>Region</strong>${escapeHtml(zone.region)}</div>
          <div><strong>Territories</strong>${escapeHtml(String(zone.territories.length))}</div>
          <div><strong>Mappable codes</strong>${escapeHtml(zone.mappableCountryCodes.join(", ") || "None")}</div>
          <div><strong>Comment</strong>${escapeHtml(zone.comment ?? "None")}</div>
        </div>
        <div class="arev-demo__pill-list">${territoryMarkup}</div>
      </div>
    `;
  }

  async renderMap(zone) {
    if (!zone.mappableCountryCodes.length) {
      this.map.innerHTML = `<p class="arev-demo__empty">No bundled world-map shapes are available for this timezone footprint.</p>`;
      return;
    }

    const params = new URLSearchParams();
    params.set(
      "highlight",
      zone.mappableCountryCodes.map((code) => `${code}:#e97132`).join(",")
    );
    params.set("fill", "#efe9dd");
    params.set("stroke", "#ffffff");
    params.set("hoverFill", "#f59e0b");

    const { payload } = await requestJson(this, `/maps/world?${params.toString()}`);
    this.map.innerHTML = payload.data.svg;
  }

  async lookupCountry() {
    const code = this.country.value.trim().toUpperCase();
    this.country.value = code;
    this.status.dataset.tone = "";
    this.status.textContent = "Loading country timezones...";

    try {
      const { durationMs, payload } = await requestJson(
        this,
        `/timezones?country=${encodeURIComponent(code)}`
      );
      const zones = payload.data;

      if (!zones.length) {
        throw new Error("No timezone records matched that country or territory code.");
      }

      this.timezone.value = zones[0].name;
      this.renderTimezoneList(code, zones, zones[0].name);
      this.renderSummary(zones[0]);
      await this.renderMap(zones[0]);
      this.status.dataset.tone = "success";
      this.status.textContent = `Loaded ${zones.length} timezone${zones.length === 1 ? "" : "s"} in ${durationMs} ms.`;
    } catch (error) {
      this.status.dataset.tone = "error";
      this.status.textContent = error.message;
      this.summary.innerHTML = "";
      this.list.innerHTML = "";
      this.map.innerHTML = "";
    }
  }

  async loadTimezone(name) {
    const zoneName = name.trim();
    this.timezone.value = zoneName;
    this.status.dataset.tone = "";
    this.status.textContent = "Loading timezone...";

    try {
      const { durationMs, payload } = await requestJson(
        this,
        `/timezones?zone=${encodeURIComponent(zoneName)}`
      );
      const zone = payload.data[0];

      if (!zone) {
        throw new Error("No timezone matched that IANA identifier.");
      }

      this.renderSummary(zone);
      await this.renderMap(zone);

      const countryCode = this.country.value.trim().toUpperCase();
      if (countryCode) {
        const { payload: countryPayload } = await requestJson(
          this,
          `/timezones?country=${encodeURIComponent(countryCode)}`
        );
        const countryZones = countryPayload.data;
        this.renderTimezoneList(countryCode, countryZones, zone.name);
      }

      this.status.dataset.tone = "success";
      this.status.textContent = `Loaded ${zone.name} in ${durationMs} ms.`;
    } catch (error) {
      this.status.dataset.tone = "error";
      this.status.textContent = error.message;
      this.summary.innerHTML = "";
      this.map.innerHTML = "";
    }
  }
}

class ArevSunMoonDemo extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "true") {
      return;
    }

    this.dataset.ready = "true";
    this.render();
    this.bind();
    this.load();
  }

  render() {
    this.innerHTML = `
      <section class="arev-demo">
        <div class="arev-demo__eyebrow">Interactive astronomy data</div>
        <div class="arev-demo__header">
          <div>
            <h3>Sun and moon lookup</h3>
            <p>Resolve a date to its approximate moon phase and the current meteorological season for either hemisphere.</p>
          </div>
          <div class="arev-demo__meta">${escapeHtml(resolveApiBase(this))}</div>
        </div>
        <form class="arev-demo__surface">
          <div class="arev-demo__controls">
            <label class="arev-demo__field">
              <span class="arev-demo__label">Date</span>
              <input name="date" type="date" value="${todayInputValue()}" />
            </label>
            <label class="arev-demo__field">
              <span class="arev-demo__label">Hemisphere</span>
              <select name="hemisphere">
                <option value="north">Northern Hemisphere</option>
                <option value="south">Southern Hemisphere</option>
              </select>
            </label>
          </div>
          <div class="arev-demo__actions">
            <button type="submit">Load astronomy data</button>
            <p class="arev-demo__status" data-role="status">Ready.</p>
          </div>
        </form>
        <div class="arev-demo__split">
          <div class="arev-demo__card" data-role="moon"></div>
          <div class="arev-demo__card" data-role="sun"></div>
        </div>
        <div class="arev-demo__pill-list" data-role="phase-list"></div>
      </section>
    `;
  }

  bind() {
    this.form = this.querySelector("form");
    this.date = this.querySelector('input[name="date"]');
    this.hemisphere = this.querySelector('select[name="hemisphere"]');
    this.status = this.querySelector('[data-role="status"]');
    this.moon = this.querySelector('[data-role="moon"]');
    this.sun = this.querySelector('[data-role="sun"]');
    this.phaseList = this.querySelector('[data-role="phase-list"]');

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.load();
    });
  }

  async load() {
    this.status.dataset.tone = "";
    this.status.textContent = "Loading astronomy snapshot...";

    try {
      const params = new URLSearchParams({
        date: this.date.value,
        hemisphere: this.hemisphere.value,
      });
      const { durationMs, payload } = await requestJson(this, `/astronomy?${params.toString()}`);
      const { moon, sun, references } = payload.data;
      const phaseSymbol = MOON_PHASE_SYMBOLS[moon.key] ?? moon.name.slice(0, 2).toUpperCase();

      this.moon.innerHTML = `
        <div class="arev-demo__country">
          <div class="arev-demo__country-header">
            <div class="arev-demo__flag arev-demo__flag--mono">${escapeHtml(phaseSymbol)}</div>
            <div>
              <h3>${escapeHtml(moon.name)}</h3>
              <p class="arev-demo__meta">${escapeHtml(moon.description)}</p>
            </div>
          </div>
          <div class="arev-demo__key-values">
            <div><strong>Illumination</strong>${escapeHtml(formatPercent(moon.illumination))}</div>
            <div><strong>Age</strong>${escapeHtml(`${moon.ageDays.toFixed(2)} days`)}</div>
            <div><strong>Cycle position</strong>${escapeHtml(formatPercent(moon.fraction))}</div>
          </div>
        </div>
      `;

      this.sun.innerHTML = `
        <div class="arev-demo__country">
          <div class="arev-demo__country-header">
            <div>
              <h3>${escapeHtml(sun.season.label)}</h3>
              <p class="arev-demo__meta">Meteorological season calculated from the selected date and hemisphere.</p>
            </div>
          </div>
          <div class="arev-demo__key-values">
            <div><strong>Season</strong>${escapeHtml(sun.season.name)}</div>
            <div><strong>Hemisphere</strong>${escapeHtml(sun.season.hemisphere)}</div>
            <div><strong>Data source</strong>arevdata astronomy helpers</div>
          </div>
        </div>
      `;

      this.phaseList.innerHTML = references.moonPhases
        .map(
          (phase) => `
            <span class="arev-demo__pill">
              <strong>${escapeHtml(MOON_PHASE_SYMBOLS[phase.key] ?? phase.name.slice(0, 2).toUpperCase())}</strong>
              ${escapeHtml(phase.name)}
            </span>
          `
        )
        .join("");

      this.status.dataset.tone = "success";
      this.status.textContent = `Loaded in ${durationMs} ms.`;
    } catch (error) {
      this.status.dataset.tone = "error";
      this.status.textContent = error.message;
      this.moon.innerHTML = "";
      this.sun.innerHTML = "";
      this.phaseList.innerHTML = "";
    }
  }
}

customElements.define("arev-dataset-stats", ArevDatasetStats);
customElements.define("arev-api-playground", ArevApiPlayground);
customElements.define("arev-country-lookup", ArevCountryLookup);
customElements.define("arev-phone-code-demo", ArevPhoneCodeDemo);
customElements.define("arev-capital-finder", ArevCapitalFinder);
customElements.define("arev-world-map-demo", ArevWorldMapDemo);
customElements.define("arev-timezone-demo", ArevTimezoneDemo);
customElements.define("arev-sun-moon-demo", ArevSunMoonDemo);
