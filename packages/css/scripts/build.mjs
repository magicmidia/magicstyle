#!/usr/bin/env node
/**
 * Build for @magic-style/css (doc 09 §10: full + granular distribution).
 * Generates dist/ from authored layers + internal token/theme outputs.
 */
import { copyFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(here, "..");
const dist = join(pkgRoot, "dist");

function resolveDepFile(dep, file) {
  const jsonPath = require.resolve(`${dep}/package.json`);
  return join(dirname(jsonPath), file);
}

mkdirSync(dist, { recursive: true });

const sources = {
  "tokens.css": resolveDepFile("@magic-style-internal/tokens", "dist/tokens.css"),
  "themes.css": resolveDepFile("@magic-style-internal/themes", "dist/themes.css"),
  "reset.css": join(pkgRoot, "src", "reset.css"),
  "base.css": join(pkgRoot, "src", "base.css"),
  "utilities.css": join(pkgRoot, "src", "utilities.css"),
};

for (const [name, from] of Object.entries(sources)) {
  if (!existsSync(from)) throw new Error(`missing source artifact: ${from}`);
  copyFileSync(from, join(dist, name));
}

/* Component classes ship granularly and as a bundled layer (doc 09 §10) */
mkdirSync(join(dist, "components"), { recursive: true });
for (const file of [
  "index.css",
  "button.css",
  "button-group.css",
  "menu.css",
  "field.css",
  "input.css",
  "checkbox.css",
  "radio.css",
  "switch.css",
]) {
  copyFileSync(join(pkgRoot, "src", "components", file), join(dist, "components", file));
}

/* index.css = full distribution WITHOUT the opt-in reset (doc 09 §3) */
writeFileSync(
  join(dist, "index.css"),
  [
    "/* Magic-Style CSS - full layer stack minus opt-in reset. */",
    '@import "./tokens.css";',
    '@import "./themes.css";',
    '@import "./base.css";',
    '@import "./components/index.css";',
    '@import "./utilities.css";',
    "",
  ].join("\n"),
  "utf8",
);

console.log("[build] @magic-style/css OK -> dist/ (index, tokens, themes, reset, base, utilities)");
