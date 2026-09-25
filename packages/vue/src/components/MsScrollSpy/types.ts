import type { Ref } from "vue";

/** A section tracked by the scroll spy. */
export interface MsScrollSpyItem {
  /** `id` of the section element in the document. */
  id: string;
  /** Link text shown in the navigation. */
  label: string;
}

/** Scrolling element to observe: an element, a ref to one, or a CSS selector. */
export type MsScrollSpyContainer =
  HTMLElement | Ref<HTMLElement | null | undefined> | string | null;

export interface MsScrollSpyProps {
  /**
   * List of observed section IDs and navigation labels.
   */
  items: MsScrollSpyItem[];

  /**
   * Pixel threshold offset from the top of the viewport (or of `container`).
   * @default 80
   */
  offset?: number;

  /**
   * Scrollable element that contains the sections (element, ref or CSS selector,
   * resolved after mount). Defaults to the window.
   */
  container?: MsScrollSpyContainer;
}

export interface MsScrollSpyEmits {
  /** The active section changed while scrolling; payload is its id. */
  (e: "activeChange", id: string): void;
}
