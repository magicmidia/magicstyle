import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(pkgRoot, "dist");
const read = (file: string): string => readFileSync(join(dist, file), "utf8");
/** Strips block comments so assertions see real declarations only. */
const stripComments = (css: string): string => css.replace(/\/\*[\s\S]*?\*\//g, "");

describe("@magic-style/css distribution (doc 09 §10)", () => {
  it("builds all granular entry points", () => {
    for (const file of [
      "index.css",
      "tokens.css",
      "themes.css",
      "reset.css",
      "base.css",
      "utilities.css",
    ]) {
      expect(() => read(file), `missing dist/${file}`).not.toThrow();
    }
  });

  it("full import stacks layers WITHOUT the opt-in reset (doc 09 §3)", () => {
    const index = read("index.css");
    expect(index).toContain('@import "./tokens.css";');
    expect(index).toContain('@import "./themes.css";');
    expect(index).toContain('@import "./base.css";');
    expect(index).toContain('@import "./utilities.css";');
    expect(index).not.toContain('@import "./reset.css";');
  });

  it("tokens and themes artifacts flow through unchanged", () => {
    expect(read("tokens.css")).toContain("--ms-color-surface-default:");
    expect(read("themes.css")).toContain('[data-ms-theme="graphite"]');
  });
});

describe("CSS architecture contracts (doc 09)", () => {
  const authored = ["reset.css", "base.css", "utilities.css"].map((f) => read(f));

  it("uses no architectural !important (§4)", () => {
    for (const css of authored) {
      expect(stripComments(css)).not.toContain("!important");
    }
  });

  it("reduced-motion is guarded through motion tokens, not blanket rules", () => {
    const base = read("base.css");
    expect(base).toContain("prefers-reduced-motion: reduce");
    expect(base).toContain("--ms-motion-duration-base: 0ms");
  });

  it("focus uses focus-visible with ring tokens (§6)", () => {
    const base = read("base.css");
    expect(base).toMatch(/:focus-visible\s*\{/);
    expect(base).toContain("var(--ms-focus-ring-width)");
    expect(base).toContain("forced-colors: active");
  });

  it("exposes input-modality environment signal (§6)", () => {
    expect(read("base.css")).toContain("--ms-pointer-coarse: 1");
  });

  it("utilities are semantic ms-* classes, low specificity", () => {
    const utilities = read("utilities.css");
    for (const cls of [
      ".ms-visually-hidden",
      ".ms-visually-hidden-focusable",
      ".ms-text-numeric",
      ".ms-truncate",
    ]) {
      expect(utilities).toContain(cls);
    }
    expect(utilities).not.toMatch(/\.[a-z-]+\s+\.ms-/); // no descendant chains on utilities
  });

  it("reset stays self-contained and opt-in", () => {
    const reset = read("reset.css");
    expect(reset).toContain("box-sizing: border-box");
    expect(reset).toContain("OPT-IN");
  });
});
