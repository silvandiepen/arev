import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createPackageConfig } from "../../vite.package.config.js";

const packageDir = dirname(fileURLToPath(import.meta.url));

export default createPackageConfig({
  packageDir,
  globalName: "ArevsAstronomy",
});
