import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(pkgRoot, "dist");
const vueSrc = join(pkgRoot, "..", "vue", "src");
const stripComments = (css: string): string => css.replace(/\/\*[\s\S]*?\*\//g, "");

function walk(dir: string, match: RegExp): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return walk(path, match);
    return match.test(name) ? [path] : [];
  });
}

const cssFiles = walk(dist, /\.css$/).map((path) => ({
  name: relative(dist, path),
  css: stripComments(readFileSync(path, "utf8")),
}));

/** Custom properties declared in any shipped stylesheet. */
const declared = new Set(
  cssFiles.flatMap(({ css }) => [...css.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]!)),
);
/** Custom properties set at runtime by Vue components (inline :style). */
const runtimeDeclared = new Set(
  walk(vueSrc, /\.(vue|ts)$/).flatMap((path) =>
    [...readFileSync(path, "utf8").matchAll(/(--ms-[\w-]+)/g)].map((m) => m[1]!),
  ),
);

describe("custom property contract", () => {
  it("every var() without a fallback references a declared property", () => {
    const missing: string[] = [];
    for (const { name, css } of cssFiles) {
      for (const match of css.matchAll(/var\(\s*(--[\w-]+)\s*\)/g)) {
        const prop = match[1]!;
        if (!declared.has(prop) && !runtimeDeclared.has(prop)) missing.push(`${name}: ${prop}`);
      }
    }
    expect([...new Set(missing)]).toEqual([]);
  });

  it("base.css does not redeclare theme-owned color aliases", () => {
    const base = cssFiles.find((file) => file.name === "base.css")!.css;
    expect(base).not.toMatch(
      /--ms-color-(primary|secondary|accent|neutral|success|info|warning|danger)(-subtle|-soft-bg|-soft-fg)?\s*:/,
    );
  });

  it("derived tokens re-resolve on every theming scope", () => {
    const themes = cssFiles.find((file) => file.name === "themes.css")!.css;
    const derivedRule =
      /([^{}]+)\{[^{}]*--ms-color-surface-default:\s*var\(--ms-color-base-100\)/.exec(themes);
    expect(derivedRule).not.toBeNull();
    const selectors = derivedRule![1]!.split(",").map((s) => s.trim());
    expect(selectors).toEqual(
      expect.arrayContaining([":root", "[data-ms-theme]", "[data-ms-color-mode]"]),
    );
  });

  it("semantic elevation tokens are emitted", () => {
    for (const name of ["card", "button", "dropdown", "modal", "input"]) {
      expect(declared.has(`--ms-elevation-${name}`), `--ms-elevation-${name}`).toBe(true);
    }
  });
});

describe("cascade layers and color scheme", () => {
  const order = "@layer ms.reset, ms.tokens, ms.themes, ms.base, ms.components, ms.utilities;";

  it("every shipped stylesheet declares the ms layer order and wraps its rules", () => {
    for (const { name, css } of cssFiles) {
      expect(css.trimStart().startsWith(order), `${name} declares layer order first`).toBe(true);
      if (!/@import\b/.test(css)) {
        expect(css, `${name} wraps rules in a sub-layer`).toMatch(/@layer ms\.[a-z]+ \{/);
      }
    }
  });

  it("themes set color-scheme and support CSS-only system mode", () => {
    const themes = cssFiles.find((file) => file.name === "themes.css")!.css;
    expect(themes).toMatch(/\[data-ms-color-mode="dark"\],[^{]*\{\s*color-scheme: dark;/);
    expect(themes).toMatch(
      /@media \(prefers-color-scheme: dark\)\s*\{\s*\[data-ms-color-mode="system"\],/,
    );
  });

  it("density dial scales control heights on any element", () => {
    const themes = cssFiles.find((file) => file.name === "themes.css")!.css;
    expect(themes).toMatch(
      /\[data-ms-density\],\s*\[data-ms-radius\]\s*\{[^}]*--ms-control-height-md: round\(calc\(var\(--ms-layout-field-height-md\) \* var\(--ms-density-scale, 1\)\), 1px\)/,
    );
    expect(themes).toContain('[data-ms-density="compact"]');
  });
});
