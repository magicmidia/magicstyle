import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { COMPONENTS } from "../../catalog/components.ts";
import type { DemoMeta } from "../../catalog/demo-meta.ts";
import type { CatalogEntry, Locale } from "../../catalog/types.ts";

const DEMOS = join(import.meta.dirname, "../../demos");

const HEADINGS: Record<Locale, { examples: string; api: string; a11y: string; apg: string }> = {
  "pt-BR": {
    examples: "Exemplos",
    api: "API",
    a11y: "Acessibilidade",
    apg: "Segue o padrão WAI-ARIA",
  },
  "en-US": {
    examples: "Examples",
    api: "API",
    a11y: "Accessibility",
    apg: "Follows the WAI-ARIA pattern",
  },
  "es-ES": {
    examples: "Ejemplos",
    api: "API",
    a11y: "Accesibilidad",
    apg: "Sigue el patrón WAI-ARIA",
  },
};

export function demoMeta(slug: string): DemoMeta | undefined {
  const file = join(DEMOS, slug, "meta.json");
  return existsSync(file) ? (JSON.parse(readFileSync(file, "utf8")) as DemoMeta) : undefined;
}

const yaml = (text: string) => JSON.stringify(text);

/** Catalog APG ids -> https://www.w3.org/WAI/ARIA/apg/patterns/<path>/ */
const APG_PATH: Record<string, string> = { menu: "menubar" };

/** Full markdown for one component page in one locale (VitePress dynamic route content). */
export function componentPage(entry: CatalogEntry, locale: Locale): string {
  const h = HEADINGS[locale];
  const meta = demoMeta(entry.slug);
  const lines: string[] = [
    "---",
    `title: ${yaml(entry.title[locale])}`,
    `description: ${yaml(entry.description[locale])}`,
    `slug: ${entry.slug}`,
    "---",
    "",
    `# ${entry.title[locale]}`,
    "",
    entry.description[locale],
    "",
    `<ComponentHeader slug="${entry.slug}" />`,
    "",
  ];
  if (meta?.intro) lines.push(meta.intro[locale], "");
  if (meta && meta.demos.length > 0) {
    lines.push(`## ${h.examples}`, "");
    for (const demo of meta.demos) {
      lines.push(`### ${demo.title[locale]}`, "");
      if (demo.description) lines.push(demo.description[locale], "");
      lines.push(`<Demo src="${entry.slug}/${demo.file}" />`, "");
    }
  }
  lines.push(`## ${h.api}`, "");
  for (const name of entry.components) lines.push(`<ApiTable component="${name}" />`, "");
  if (entry.apg || meta?.a11y) {
    lines.push(`## ${h.a11y}`, "");
    if (entry.apg) {
      lines.push(
        `${h.apg}: [${entry.apg}](https://www.w3.org/WAI/ARIA/apg/patterns/${APG_PATH[entry.apg] ?? entry.apg}/).`,
        "",
      );
    }
    if (meta?.a11y) lines.push(meta.a11y[locale], "");
  }
  return lines.join("\n");
}

export function componentRoutes(locale: Locale) {
  return COMPONENTS.map((entry) => ({
    params: { slug: entry.slug },
    content: componentPage(entry, locale),
  }));
}
