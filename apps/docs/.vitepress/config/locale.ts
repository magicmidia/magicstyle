import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { CATEGORIES } from "../../catalog/categories.ts";
import { COMPONENTS } from "../../catalog/components.ts";
import type { Locale } from "../../catalog/types.ts";
import { GUIDES } from "./guides.ts";
import { REPO_URL, VERSION } from "./shared.ts";

interface Copy {
  description: string;
  docs: string;
  components: string;
  themes: string;
  gallery: string;
  tokens: string;
  start: string;
  foundations: string;
  outline: string;
  prev: string;
  next: string;
  updated: string;
  appearance: string;
  lightTitle: string;
  darkTitle: string;
  top: string;
  menu: string;
  lang: string;
  edit: string;
  notFound: string;
  home: string;
  footer: string;
}

const COPY: Record<Locale, Copy> = {
  "pt-BR": {
    description:
      "Componentes Vue 3 acessíveis, com temas, tokens DTCG e SSR para Laravel + Inertia e qualquer app Vue.",
    docs: "Documentação",
    components: "Componentes",
    themes: "Temas",
    gallery: "Galeria de temas",
    tokens: "Tokens",
    start: "Primeiros passos",
    foundations: "Fundamentos",
    outline: "Nesta página",
    prev: "Anterior",
    next: "Próxima",
    updated: "Atualizado em",
    appearance: "Aparência",
    lightTitle: "Mudar para o tema claro",
    darkTitle: "Mudar para o tema escuro",
    top: "Voltar ao topo",
    menu: "Menu",
    lang: "Idioma",
    edit: "Editar esta página no GitHub",
    notFound: "Página não encontrada",
    home: "Voltar ao início",
    footer: "Distribuído sob a licença MIT.",
  },
  "en-US": {
    description:
      "Accessible Vue 3 components with themes, DTCG tokens and SSR for Laravel + Inertia and any Vue app.",
    docs: "Docs",
    components: "Components",
    themes: "Themes",
    gallery: "Theme gallery",
    tokens: "Tokens",
    start: "Getting started",
    foundations: "Foundations",
    outline: "On this page",
    prev: "Previous",
    next: "Next",
    updated: "Last updated",
    appearance: "Appearance",
    lightTitle: "Switch to light theme",
    darkTitle: "Switch to dark theme",
    top: "Return to top",
    menu: "Menu",
    lang: "Language",
    edit: "Edit this page on GitHub",
    notFound: "Page not found",
    home: "Take me home",
    footer: "Released under the MIT License.",
  },
  "es-ES": {
    description:
      "Componentes Vue 3 accesibles, con temas, tokens DTCG y SSR para Laravel + Inertia y cualquier app Vue.",
    docs: "Documentación",
    components: "Componentes",
    themes: "Temas",
    gallery: "Galería de temas",
    tokens: "Tokens",
    start: "Primeros pasos",
    foundations: "Fundamentos",
    outline: "En esta página",
    prev: "Anterior",
    next: "Siguiente",
    updated: "Actualizado el",
    appearance: "Apariencia",
    lightTitle: "Cambiar al tema claro",
    darkTitle: "Cambiar al tema oscuro",
    top: "Volver arriba",
    menu: "Menú",
    lang: "Idioma",
    edit: "Editar esta página en GitHub",
    notFound: "Página no encontrada",
    home: "Volver al inicio",
    footer: "Publicado bajo la licencia MIT.",
  },
};

const collator = (locale: Locale) => new Intl.Collator(locale);

function sidebar(locale: Locale, base: string): DefaultTheme.SidebarItem[] {
  const c = COPY[locale];
  const guide = (group: "start" | "foundations") =>
    GUIDES.filter((g) => g.group === group).map((g) => ({
      text: g.title[locale],
      link: `${base}guide/${g.slug}`,
    }));
  const foundations = [
    ...guide("foundations"),
    { text: c.gallery, link: `${base}themes` },
    { text: c.tokens, link: `${base}tokens` },
  ];
  const categories = CATEGORIES.map((category) => ({
    text: category.title[locale],
    collapsed: false,
    items: COMPONENTS.filter((entry) => entry.category === category.id)
      .sort((a, b) => collator(locale).compare(a.title[locale], b.title[locale]))
      .map((entry) => ({ text: entry.title[locale], link: `${base}components/${entry.slug}` })),
  })).filter((group) => group.items.length > 0);
  return [
    { text: c.start, items: guide("start") },
    { text: c.foundations, items: foundations },
    ...categories,
  ];
}

export function localeConfig(
  locale: Locale,
  prefix: string,
): LocaleSpecificConfig<DefaultTheme.Config> & { label: string; lang: string } {
  const c = COPY[locale];
  const base = `/${prefix}`;
  const firstComponent = COMPONENTS[0]?.slug ?? "button";
  const items = sidebar(locale, base);
  return {
    label: locale === "pt-BR" ? "Português" : locale === "en-US" ? "English" : "Español",
    lang: locale,
    description: c.description,
    themeConfig: {
      nav: [
        { text: c.docs, link: `${base}guide/introduction`, activeMatch: `^${base}guide/` },
        {
          text: c.components,
          link: `${base}components/${firstComponent}`,
          activeMatch: `^${base}components/`,
        },
        { text: c.themes, link: `${base}themes` },
        {
          text: `v${VERSION}`,
          items: [
            { text: GUIDE_TITLE(locale, "changelog"), link: `${base}guide/changelog` },
            { text: "npm", link: "https://www.npmjs.com/package/@magic-style/vue" },
          ],
        },
      ],
      sidebar: {
        [`${base}guide/`]: items,
        [`${base}components/`]: items,
        [`${base}themes`]: items,
        [`${base}tokens`]: items,
      },
      outline: { level: [2, 3], label: c.outline },
      docFooter: { prev: c.prev, next: c.next },
      lastUpdated: { text: c.updated },
      editLink: { pattern: `${REPO_URL}/edit/main/apps/docs/src/:path`, text: c.edit },
      darkModeSwitchLabel: c.appearance,
      lightModeSwitchTitle: c.lightTitle,
      darkModeSwitchTitle: c.darkTitle,
      returnToTopLabel: c.top,
      sidebarMenuLabel: c.menu,
      langMenuLabel: c.lang,
      notFound: { title: c.notFound, linkText: c.home, quote: "" },
      footer: { message: c.footer, copyright: "© Magic Mídia" },
    },
  };
}

function GUIDE_TITLE(locale: Locale, slug: string): string {
  return GUIDES.find((g) => g.slug === slug)?.title[locale] ?? slug;
}

type SearchTranslations = NonNullable<DefaultTheme.LocalSearchOptions["translations"]>;

export const SEARCH_TRANSLATIONS: Record<Locale, SearchTranslations> = {
  "pt-BR": {
    button: { buttonText: "Buscar", buttonAriaLabel: "Buscar" },
    modal: {
      displayDetails: "Mostrar detalhes",
      resetButtonTitle: "Limpar busca",
      backButtonTitle: "Fechar busca",
      noResultsText: "Nenhum resultado para",
      footer: { selectText: "selecionar", navigateText: "navegar", closeText: "fechar" },
    },
  },
  "en-US": {},
  "es-ES": {
    button: { buttonText: "Buscar", buttonAriaLabel: "Buscar" },
    modal: {
      displayDetails: "Mostrar detalles",
      resetButtonTitle: "Borrar búsqueda",
      backButtonTitle: "Cerrar búsqueda",
      noResultsText: "Sin resultados para",
      footer: { selectText: "seleccionar", navigateText: "navegar", closeText: "cerrar" },
    },
  },
};
