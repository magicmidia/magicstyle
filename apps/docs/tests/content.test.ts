import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { COMPONENTS } from "../catalog/components.ts";
import { CATEGORIES } from "../catalog/categories.ts";
import { GUIDES } from "../.vitepress/config/guides.ts";
import { LANDING } from "../.vitepress/theme/landing/copy.ts";
import { PAGES } from "../.vitepress/theme/pages/strings.ts";
import { UI } from "../.vitepress/theme/i18n/ui.ts";
import { blockSlugs, checkSlug } from "../scripts/check-demos.ts";

const LOCALES = ["en-US", "pt-BR", "es-ES"] as const;
const ROOT = join(import.meta.dirname, "../../..");
const COMPONENTS_DIR = join(ROOT, "packages/vue/src/components");
const SRC = join(import.meta.dirname, "../src");

/** Deep key paths of an object (array items by index). */
function shape(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object") return [prefix];
  return Object.entries(value).flatMap(([key, child]) => shape(child, `${prefix}.${key}`));
}

describe("component catalog", () => {
  it("documents every component folder of @magic-style/vue", () => {
    const dirs = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
    const documented = new Set(COMPONENTS.map((entry) => entry.dir));
    expect(dirs.filter((dir) => !documented.has(dir))).toEqual([]);
  });

  it("only lists components exported by the package", () => {
    const index = readFileSync(join(ROOT, "packages/vue/src/index.ts"), "utf8");
    const missing = COMPONENTS.flatMap((entry) => entry.components).filter(
      (name) => !new RegExp(`\\b${name}\\b`).test(index),
    );
    expect(missing).toEqual([]);
  });

  it("has unique slugs, known categories and copy in the 3 languages", () => {
    const slugs = COMPONENTS.map((entry) => entry.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    const categories = new Set(CATEGORIES.map((category) => category.id));
    for (const entry of COMPONENTS) {
      expect(categories.has(entry.category), entry.slug).toBe(true);
      for (const locale of LOCALES) {
        expect(entry.title[locale]?.trim(), `${entry.slug} title ${locale}`).toBeTruthy();
        expect(
          entry.description[locale]?.trim(),
          `${entry.slug} description ${locale}`,
        ).toBeTruthy();
      }
    }
  });

  it.each(COMPONENTS.map((entry) => entry.slug))("demos/%s are complete and valid", (slug) => {
    expect(checkSlug(slug)).toEqual([]);
  });
});

describe("blocks", () => {
  it("has blocks", () => {
    expect(blockSlugs().length).toBeGreaterThanOrEqual(6);
  });

  it.each(blockSlugs())("demos/blocks/%s is complete and valid", (slug) => {
    expect(checkSlug(`blocks/${slug}`, { catalog: false })).toEqual([]);
  });
});

describe("site content", () => {
  it.each(GUIDES.map((guide) => guide.slug))("guide %s exists in the 3 languages", (slug) => {
    for (const dir of ["guide", "pt/guide", "es/guide"]) {
      expect(existsSync(join(SRC, dir, `${slug}.md`)), `${dir}/${slug}.md`).toBe(true);
    }
  });

  it("has the landing, themes and tokens pages in the 3 languages", () => {
    for (const page of ["index.md", "themes.md", "tokens.md", "blocks.md"]) {
      for (const dir of ["", "pt", "es"]) {
        expect(existsSync(join(SRC, dir, page)), join(dir, page)).toBe(true);
      }
    }
  });

  it.each([
    ["landing copy", LANDING],
    ["page strings", PAGES],
    ["site chrome", UI],
  ] as const)("%s has the same keys in every language", (_name, table) => {
    const reference = shape(table["en-US"]).sort();
    for (const locale of LOCALES) expect(shape(table[locale]).sort(), locale).toEqual(reference);
  });
});
