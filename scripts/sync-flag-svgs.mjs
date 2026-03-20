import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const sourceDir = join(repoRoot, "node_modules", "flag-icons", "flags", "4x3");
const targetDir = join(repoRoot, "assets", "flags", "svg");
const overrideDir = join(repoRoot, "assets", "flags", "overrides");
const flagDataFile = join(repoRoot, "src", "data", "flags.ts");

const source = readFileSync(flagDataFile, "utf8");
const alpha2Codes = Array.from(
  source.matchAll(/alpha2:\s*"([A-Z]{2})"/gu),
  (match) => match[1].toLowerCase()
);

mkdirSync(targetDir, { recursive: true });
rmSync(targetDir, { recursive: true, force: true });
mkdirSync(targetDir, { recursive: true });

for (const alpha2 of alpha2Codes) {
  const fileName = `${alpha2}.svg`;
  const sourceFile = join(sourceDir, fileName);

  if (!existsSync(sourceFile)) {
    continue;
  }

  cpSync(sourceFile, join(targetDir, fileName));
}

if (existsSync(overrideDir)) {
  for (const entry of readdirSync(overrideDir)) {
    if (!entry.endsWith(".svg")) {
      continue;
    }

    cpSync(join(overrideDir, entry), join(targetDir, entry));
  }
}

console.log(`Synced SVG flags into ${targetDir}`);
