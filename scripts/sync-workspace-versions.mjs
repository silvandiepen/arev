import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const rootPackagePath = resolve(workspaceRoot, "package.json");
const rootPackage = JSON.parse(readFileSync(rootPackagePath, "utf8"));
const version = rootPackage.version;

for (const workspace of rootPackage.workspaces ?? []) {
  const packageJsonPath = resolve(workspaceRoot, workspace, "package.json");
  const pkg = JSON.parse(readFileSync(packageJsonPath, "utf8"));

  pkg.version = version;

  for (const dependencyField of ["dependencies", "peerDependencies", "optionalDependencies"]) {
    const dependencies = pkg[dependencyField];
    if (!dependencies) continue;

    for (const [name] of Object.entries(dependencies)) {
      if (name.startsWith("@arevs/")) {
        dependencies[name] = version;
      }
    }
  }

  writeFileSync(packageJsonPath, `${JSON.stringify(pkg, null, 2)}\n`);
}
