#!/usr/bin/env node
/**
 * Package contract check: every export points to an existing built file,
 * and every built component stylesheet is reachable through an export.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = join(here, "..");
const manifest = JSON.parse(readFileSync(join(pkgRoot, "package.json"), "utf8"));

let failures = 0;
for (const [entry, target] of Object.entries(manifest.exports ?? {})) {
  const file = join(
    pkgRoot,
    typeof target === "string" ? target : (target.import ?? target.default),
  );
  const ok = existsSync(file);
  if (!ok) failures++;
  console.log(`  ${ok ? "OK  " : "MISS"} ${entry} -> ${target}`);
}

const exportedTargets = new Set(
  Object.values(manifest.exports ?? {}).map((target) =>
    typeof target === "string" ? target : (target.import ?? target.default),
  ),
);
const componentsDir = join(pkgRoot, "dist", "components");
if (existsSync(componentsDir)) {
  for (const file of readdirSync(componentsDir)) {
    if (!file.endsWith(".css")) continue;
    const target = `./dist/components/${file}`;
    if (!exportedTargets.has(target)) {
      failures++;
      console.log(`  UNEXPORTED ${target}`);
    }
  }
}

for (const dep of Object.keys(manifest.dependencies ?? {})) {
  if (dep.startsWith("@magic-style-internal/")) {
    failures++;
    console.log(`  PRIVATE-DEP ${dep} (use devDependencies: internal packages are not published)`);
  }
}

if (failures > 0) {
  console.error(
    `[check-package] ${failures} problema(s) no contrato do pacote. Rode o build primeiro.`,
  );
  process.exit(1);
}
console.log("[check-package] exports OK");
