import { fileURLToPath } from "node:url";
import { defineConfig, type HeadConfig } from "vitepress";
import { LOCALES, SITE_URL, head, localeFreePath, localizedUrl } from "./shared.ts";
import { SEARCH_TRANSLATIONS, localeConfig } from "./locale.ts";
import { demoPlugin } from "../plugins/demo.ts";

const alias = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  title: "Magic-Style",
  titleTemplate: ":title — Magic-Style",
  srcDir: "src",
  cleanUrls: true,
  lastUpdated: true,
  head: head as unknown as HeadConfig[],
  locales: {
    root: localeConfig("pt-BR", ""),
    en: { ...localeConfig("en-US", "en/"), link: "/en/" },
    es: { ...localeConfig("es-ES", "es/"), link: "/es/" },
  },
  themeConfig: {
    logo: { src: "/logo.svg", alt: "" },
    siteTitle: "Magic-Style",
    socialLinks: [{ icon: "github", link: "https://github.com/magicmidia/magicstyle" }],
    search: {
      provider: "local",
      options: {
        locales: {
          root: { translations: SEARCH_TRANSLATIONS["pt-BR"] },
          en: { translations: SEARCH_TRANSLATIONS["en-US"] },
          es: { translations: SEARCH_TRANSLATIONS["es-ES"] },
        },
      },
    },
  },
  sitemap: { hostname: SITE_URL },
  markdown: {
    config(md) {
      md.use(demoPlugin);
    },
  },
  transformHead({ pageData }): HeadConfig[] {
    if (pageData.isNotFound) return [];
    const path = localeFreePath(pageData.relativePath);
    const tags: HeadConfig[] = LOCALES.map((locale) => [
      "link",
      { rel: "alternate", hreflang: locale.lang, href: localizedUrl(locale.prefix, path) },
    ]);
    tags.push(["link", { rel: "alternate", hreflang: "x-default", href: localizedUrl("", path) }]);
    const prefix =
      LOCALES.find((l) => l.prefix && pageData.relativePath.startsWith(l.prefix))?.prefix ?? "";
    tags.push(["link", { rel: "canonical", href: localizedUrl(prefix, path) }]);
    tags.push(["meta", { property: "og:title", content: pageData.title || "Magic-Style" }]);
    if (pageData.description) {
      tags.push(["meta", { property: "og:description", content: pageData.description }]);
    }
    return tags;
  },
  vite: {
    resolve: {
      dedupe: ["vue"],
      alias: { "@demos": alias("../../demos"), "@catalog": alias("../../catalog") },
    },
  },
});
