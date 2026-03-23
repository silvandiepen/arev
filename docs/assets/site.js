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
];

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
        ["Flags", resources.flags],
        ["Languages", resources.allLanguages],
        ["Currencies", resources.currencies],
        ["World map paths", resources.worldMapCountries],
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

customElements.define("arev-dataset-stats", ArevDatasetStats);
customElements.define("arev-api-playground", ArevApiPlayground);
customElements.define("arev-country-lookup", ArevCountryLookup);
customElements.define("arev-phone-code-demo", ArevPhoneCodeDemo);
customElements.define("arev-capital-finder", ArevCapitalFinder);
customElements.define("arev-world-map-demo", ArevWorldMapDemo);
