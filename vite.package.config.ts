import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type UserConfig } from "vite";
import dts from "vite-plugin-dts";

const workspaceRoot = dirname(fileURLToPath(import.meta.url));

interface CreatePackageConfigOptions {
  packageDir: string;
  globalName: string;
}

export function createPackageConfig({
  packageDir,
  globalName,
}: CreatePackageConfigOptions): UserConfig {
  const sourceDir = resolve(packageDir, "src");

  return defineConfig({
    root: packageDir,
    publicDir: false,
    plugins: [
      dts({
        include: [
          resolve(packageDir, "src/**/*"),
          resolve(workspaceRoot, "src/**/*"),
          resolve(workspaceRoot, "packages/*/src/**/*"),
        ],
        outDir: resolve(packageDir, "dist/types"),
        rollupTypes: false,
        tsconfigPath: resolve(workspaceRoot, "tsconfig.package.json"),
      }),
    ],
    build: {
      outDir: resolve(packageDir, "dist"),
      emptyOutDir: true,
      lib: {
        entry: resolve(sourceDir, "index.ts"),
        name: globalName,
        fileName: "index",
      },
      rollupOptions: {
        external: [],
        output: [
          {
            entryFileNames: "[name].js",
            format: "es",
            preserveModules: true,
            preserveModulesRoot: sourceDir,
          },
          {
            entryFileNames: "[name].cjs",
            exports: "named",
            format: "cjs",
            preserveModules: true,
            preserveModulesRoot: sourceDir,
          },
        ],
      },
      sourcemap: true,
      minify: false,
    },
  });
}
