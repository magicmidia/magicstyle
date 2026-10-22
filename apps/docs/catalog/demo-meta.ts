import type { Localized } from "./types.ts";

/** demos/<slug>/meta.json — ordered examples shown on a component page. */
export interface DemoMeta {
  /** Optional intro paragraph (markdown) under the page description. */
  intro?: Localized;
  demos: {
    /** SFC file name in demos/<slug>/ without .vue. */
    file: string;
    title: Localized;
    description?: Localized;
  }[];
  /** Accessibility notes (markdown): keyboard support, ARIA, caveats. */
  a11y?: Localized;
}
