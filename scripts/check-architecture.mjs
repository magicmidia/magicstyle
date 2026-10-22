#!/usr/bin/env node
/**
 * Architecture checker (doc 25 §6).
 * Impede forbidden package edges no workspace:
 *   - browser packages do not depend on Node-only tooling
 *   - core (L3) does not depend on standalone subsystems (L4)
 *   - subsystem → foundation only (never another subsystem)
 *   - internal foundation never depends on public packages
 *   - publishable packages never declare private packages as runtime dependencies
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKIPPED_DIRS = new Set(["node_modules", "dist", "coverage"]);
const manifestPaths = ["packages", "apps", "tooling", "tests"].map((d) => join(root, d));

const BROWSER_CORE = [
  "@magic-style/vue",
  "@magic-style/css",
  "@magic-style/tailwind",
  "@magic-style/schema",
];
const STANDALONE = [
  "@magic-style/datatable",
  "@magic-style/calendar",
  "@magic-style/charts",
  "@magic-style/notifications",
];
const NODE_ONLY = ["@magic-style/cli"];

function classify(name) {
  if (NODE_ONLY.includes(name)) return "node";
  if (STANDALONE.includes(name)) return "standalone";
  if (BROWSER_CORE.includes(name)) return "core";
  return name.startsWith("@magic-style-internal/") ? "internal" : "external";
}

const violations = [];
const packages = [];

const scan = (parent) => {
  for (const entry of readdirSync(parent, { withFileTypes: true })) {
    if (!entry.isDirectory() || SKIPPED_DIRS.has(entry.name) || entry.name.startsWith("."))
      continue;
    const childDir = join(parent, entry.name);
    const manifest = join(childDir, "package.json");
    if (existsSync(manifest)) packages.push(JSON.parse(readFileSync(manifest, "utf8")));
    scan(childDir);
  }
};
for (const dir of manifestPaths) {
  if (existsSync(dir)) scan(dir);
}

const privateNames = new Set(packages.filter((pkg) => pkg.private).map((pkg) => pkg.name));

for (const pkg of packages) {
  const runtimeDeps = {
    ...pkg.dependencies,
    ...pkg.optionalDependencies,
    ...pkg.peerDependencies,
  };
  if (!pkg.private) {
    for (const dep of Object.keys(runtimeDeps)) {
      if (privateNames.has(dep))
        violations.push(`publishable package -> private package at runtime: ${pkg.name} -> ${dep}`);
    }
  }
  {
    const deps = { ...runtimeDeps, ...pkg.devDependencies };
    for (const dep of Object.keys(deps)) {
      const from = classify(pkg.name);
      const to = classify(dep);
      const edge = `${pkg.name} -> ${dep}`;
      if (from === "core" && to === "standalone")
        violations.push(`forbidden core -> standalone: ${edge}`);
      if (from === "standalone" && to === "standalone")
        violations.push(`forbidden subsystem -> subsystem: ${edge}`);
      if ((from === "core" || from === "standalone") && to === "node")
        violations.push(`forbidden browser package -> node tooling: ${edge}`);
      if (from === "internal" && (to === "core" || to === "standalone" || to === "node"))
        violations.push(`forbidden internal -> public: ${edge}`);
    }
  }
}

console.log(`[architecture] ${packages.length} workspace package(s) checked.`);
if (packages.length === 0) {
  console.error("[architecture] no packages found — check not run.");
  process.exit(1);
}
if (violations.length > 0) {
  console.error(`[architecture] VIOLATIONS (${violations.length}):`);
  for (const v of violations) console.error(`  - ${v}`);
  process.exit(1);
}
console.log("[architecture] OK — no forbidden edges.");
