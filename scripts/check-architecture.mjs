#!/usr/bin/env node
/**
 * Architecture checker (doc 25 §6).
 * Impede forbidden package edges no workspace:
 *   - browser packages não dependem de tooling Node-only
 *   - core (L3) não depende de subsistemas standalone (L4)
 *   - subsystem → foundation only (não depende de outro subsystem)
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
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
let packageCount = 0;

for (const dir of manifestPaths) {
  if (!existsSync(dir)) continue;
  const { readdirSync } = await import("node:fs");
  const scan = (parent) => {
    for (const entry of readdirSync(parent, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === "node_modules" || entry.name.startsWith("."))
        continue;
      const childDir = join(parent, entry.name);
      const manifest = join(childDir, "package.json");
      if (existsSync(manifest)) collect(manifest);
      scan(childDir);
    }
  };
  const collect = (manifest) => {
    packageCount++;
    const pkg = JSON.parse(readFileSync(manifest, "utf8"));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies, ...pkg.peerDependencies };
    for (const dep of Object.keys(deps)) {
      const from = classify(pkg.name);
      const to = classify(dep);
      const edge = `${pkg.name} -> ${dep}`;
      if (from === "core" && to === "standalone")
        violations.push(`core -> standalone proibido: ${edge}`);
      if (from === "standalone" && to === "standalone")
        violations.push(`subsystem -> subsystem proibido: ${edge}`);
      if ((from === "core" || from === "standalone") && to === "node")
        violations.push(`browser package -> node tooling proibido: ${edge}`);
    }
  };
  scan(dir);
}

console.log(`[architecture] ${packageCount} pacote(s) de workspace verificados.`);
if (violations.length > 0) {
  console.error(`[architecture] VIOLAÇÕES (${violations.length}):`);
  for (const v of violations) console.error(`  - ${v}`);
  process.exit(1);
}
console.log("[architecture] OK — nenhuma aresta proibida.");
