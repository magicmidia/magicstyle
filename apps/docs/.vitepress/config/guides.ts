import type { Localized } from "../../catalog/types.ts";

export interface GuideEntry {
  slug: string;
  group: "start" | "foundations";
  title: Localized;
}

export const GUIDES: GuideEntry[] = [
  {
    slug: "introduction",
    group: "start",
    title: { "pt-BR": "Introdução", "en-US": "Introduction", "es-ES": "Introducción" },
  },
  {
    slug: "installation",
    group: "start",
    title: { "pt-BR": "Instalação", "en-US": "Installation", "es-ES": "Instalación" },
  },
  {
    slug: "laravel-inertia",
    group: "start",
    title: {
      "pt-BR": "Laravel + Inertia",
      "en-US": "Laravel + Inertia",
      "es-ES": "Laravel + Inertia",
    },
  },
  {
    slug: "theming",
    group: "foundations",
    title: { "pt-BR": "Temas", "en-US": "Theming", "es-ES": "Temas" },
  },
  {
    slug: "dark-mode",
    group: "foundations",
    title: { "pt-BR": "Modo escuro", "en-US": "Dark mode", "es-ES": "Modo oscuro" },
  },
  {
    slug: "i18n",
    group: "foundations",
    title: {
      "pt-BR": "Idiomas (i18n)",
      "en-US": "Internationalization",
      "es-ES": "Idiomas (i18n)",
    },
  },
  { slug: "rtl", group: "foundations", title: { "pt-BR": "RTL", "en-US": "RTL", "es-ES": "RTL" } },
  {
    slug: "accessibility",
    group: "foundations",
    title: { "pt-BR": "Acessibilidade", "en-US": "Accessibility", "es-ES": "Accesibilidad" },
  },
  { slug: "ssr", group: "foundations", title: { "pt-BR": "SSR", "en-US": "SSR", "es-ES": "SSR" } },
  {
    slug: "migration",
    group: "start",
    title: { "pt-BR": "Migração", "en-US": "Migration", "es-ES": "Migración" },
  },
  {
    slug: "changelog",
    group: "start",
    title: { "pt-BR": "Changelog", "en-US": "Changelog", "es-ES": "Registro de cambios" },
  },
];
