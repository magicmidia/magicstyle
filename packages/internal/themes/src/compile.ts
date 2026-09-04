import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { emitThemesCss, manifest } from "./index.ts";

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, "..", "dist");

mkdirSync(dist, { recursive: true });
writeFileSync(join(dist, "themes.css"), emitThemesCss(), "utf8");
writeFileSync(join(dist, "manifest.json"), manifest(), "utf8");

console.log("[compile] OK -> dist/themes.css, dist/manifest.json");
