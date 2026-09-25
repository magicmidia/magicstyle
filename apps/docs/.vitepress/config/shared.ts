import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { NO_FLASH_SCRIPT } from "../theme/composables/useSitePrefs.ts";

export const SITE_URL = process.env.MS_DOCS_URL ?? "https://magic-style.dev";
export const REPO_URL = "https://github.com/magicmidia/magicstyle";

const vuePkg = JSON.parse(
  readFileSync(
    fileURLToPath(new URL("../../../../packages/vue/package.json", import.meta.url)),
    "utf8",
  ),
) as { version: string };
export const VERSION = vuePkg.version;

export const LOCALES = [
  { key: "root", prefix: "", lang: "pt-BR", label: "Português" },
  { key: "en", prefix: "en/", lang: "en-US", label: "English" },
  { key: "es", prefix: "es/", lang: "es-ES", label: "Español" },
] as const;

export type LocaleKey = (typeof LOCALES)[number]["key"];

export const head = [
  ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ["meta", { name: "theme-color", content: "#2563eb" }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:site_name", content: "Magic-Style" }],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["script", {}, NO_FLASH_SCRIPT],
] as const;

/** Page path without its locale prefix, e.g. "en/guide/theming.md" -> "guide/theming". */
export function localeFreePath(relativePath: string): string {
  const withoutPrefix = relativePath.replace(/^(en|es)\//, "");
  return withoutPrefix.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
}

export function localizedUrl(prefix: string, path: string): string {
  return `${SITE_URL}/${prefix}${path}`.replace(/\/+$/, "/");
}
