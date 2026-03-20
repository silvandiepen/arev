import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const svgSourceDir = join(repoRoot, "assets", "flags", "svg");
const publicRoot = join(repoRoot, "examples", "vue-app", "public", "flags");
const svgOutputDir = join(publicRoot, "svg");
const pngRootDir = join(publicRoot, "png");
const widths = [40, 80, 160, 320, 640, 1280, 2560];

rmSync(publicRoot, { recursive: true, force: true });
mkdirSync(svgOutputDir, { recursive: true });
mkdirSync(pngRootDir, { recursive: true });

const files = readdirSync(svgSourceDir).filter((entry) => entry.endsWith(".svg"));

for (const file of files) {
  const code = file.replace(/\.svg$/u, "");
  const svg = readFileSync(join(svgSourceDir, file));

  writeFileSync(join(svgOutputDir, file), svg);

  for (const width of widths) {
    const outputDir = join(pngRootDir, `w${width}`);
    mkdirSync(outputDir, { recursive: true });

    const png = new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: width,
      },
    }).render().asPng();

    writeFileSync(join(outputDir, `${code}.png`), png);
  }
}

console.log(`Built flag assets into ${publicRoot}`);
