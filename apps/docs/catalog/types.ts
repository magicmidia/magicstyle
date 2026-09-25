export type Locale = "pt-BR" | "en-US" | "es-ES";
export type Localized = Record<Locale, string>;

export type CategoryId =
  "actions" | "forms" | "pickers" | "overlays" | "feedback" | "navigation" | "layout" | "data";

export interface Category {
  id: CategoryId;
  title: Localized;
}

export interface CatalogEntry {
  /** URL slug: /components/<slug> (and /pt/, /es/). */
  slug: string;
  /** Folder in packages/vue/src/components. */
  dir: string;
  /** Exported component names documented on this page (API tables, in order). */
  components: string[];
  category: CategoryId;
  status?: "new" | "beta";
  title: Localized;
  description: Localized;
  /** WAI-ARIA APG pattern slug, when the component implements one. */
  apg?: string;
}
