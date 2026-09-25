import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { emitThemesCss, manifest, themeJsonSchema } from "./index.ts";

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, "..", "dist");

mkdirSync(dist, { recursive: true });
writeFileSync(join(dist, "themes.css"), emitThemesCss(), "utf8");
writeFileSync(join(dist, "manifest.json"), manifest(), "utf8");
const schema = `${JSON.stringify(themeJsonSchema(), null, 2)}\n`;
writeFileSync(join(dist, "theme.schema.json"), schema, "utf8");
// Referenced by "$schema" in src/themes/*.json for editor autocompletion.
writeFileSync(join(here, "theme.schema.json"), schema, "utf8");

console.log("[compile] OK -> dist/themes.css, dist/manifest.json, dist/theme.schema.json");
