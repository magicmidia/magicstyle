#!/usr/bin/env node
/**
 * Build for @magic-style/css (doc 09 §10: full + granular distribution).
 * Generates dist/ from authored layers + internal token/theme outputs.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(here, "..");
const dist = join(pkgRoot, "dist");

/*
 * Cascade layers: every shipped file declares the same order and wraps its rules
 * in its own sub-layer of `ms`, so granular imports keep a stable cascade and
 * apps can position the whole stack (e.g. `@layer theme, base, ms, components, utilities;`).
 */
const LAYER_ORDER = "@layer ms.reset, ms.tokens, ms.themes, ms.base, ms.components, ms.utilities;";

function layered(css, layer) {
  if (/@import\b/.test(css)) return `${LAYER_ORDER}\n${css}`;
  return `${LAYER_ORDER}\n@layer ${layer} {\n${css.trimEnd()}\n}\n`;
}

function emit(from, to, layer) {
  writeFileSync(to, layered(readFileSync(from, "utf8"), layer), "utf8");
}

function resolveDepFile(dep, file) {
  const jsonPath = require.resolve(`${dep}/package.json`);
  return join(dirname(jsonPath), file);
}

// Start from a clean dist so removed stylesheets are never published.
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const sources = {
  "tokens.css": [resolveDepFile("@magic-style-internal/tokens", "dist/tokens.css"), "ms.tokens"],
  "themes.css": [resolveDepFile("@magic-style-internal/themes", "dist/themes.css"), "ms.themes"],
  "reset.css": [join(pkgRoot, "src", "reset.css"), "ms.reset"],
  "base.css": [join(pkgRoot, "src", "base.css"), "ms.base"],
  "utilities.css": [join(pkgRoot, "src", "utilities.css"), "ms.utilities"],
};

for (const [name, [from, layer]] of Object.entries(sources)) {
  if (!existsSync(from)) throw new Error(`missing source artifact: ${from}`);
  emit(from, join(dist, name), layer);
}

/* Component classes ship granularly and as a bundled layer (doc 09 §10) */
const compSrcDir = join(pkgRoot, "src", "components");
const compDistDir = join(dist, "components");
mkdirSync(compDistDir, { recursive: true });

for (const file of readdirSync(compSrcDir)) {
  if (file.endsWith(".css")) {
    emit(join(compSrcDir, file), join(compDistDir, file), "ms.components");
  }
}

/* index.css = full distribution WITHOUT the opt-in reset (doc 09 §3) */
writeFileSync(
  join(dist, "index.css"),
  [
    "/* Magic-Style CSS - full layer stack minus opt-in reset. */",
    LAYER_ORDER,
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
