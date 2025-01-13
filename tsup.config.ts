import { defineConfig } from "tsup";

export default defineConfig({
    entryPoints: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    // sourcemap: true,
    clean: true,
    skipNodeModulesBundle: true,
    shims: true
    });