import type { Component } from "vue";

export type MsCardVariant = "raised" | "flat" | "outline" | "sunken" | "soft" | "glass";
export type MsCardPadding = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type MsCardOrientation = "vertical" | "horizontal";

export interface MsCardProps {
  /** Surface style. @default "raised" */
  variant?: MsCardVariant;
  /** Inner padding scale. @default "md" */
  padding?: MsCardPadding;
  /** Primary card title. */
  title?: string;
  /** Secondary subtitle/description. */
  description?: string;
  /**
   * Button-like card: focusable, emits `click` on click/Enter/Space and gets hover/active
   * styling. Ignored when `href` is set (the anchor already provides link semantics).
   * @default false
   */
  interactive?: boolean;
  /** Renders the card as an `<a href>` link card (hover/focus styling, no button semantics). */
  href?: string;
  /**
   * Root element tag or component (e.g. `"article"`, `"section"`, `RouterLink` with `to`).
   * Ignored when `href` is set. @default "div"
   */
  as?: string | Component;
  /** Subtle lift and elevation on hover. @default false */
  hoverable?: boolean;
  /** Cover image URL. */
  coverSrc?: string;
  /** Cover image alt text. */
  coverAlt?: string;
  /** Adds a divider border line below the card header. */
  headerDivider?: boolean;
  /** Adds a divider border line above the card footer. */
  footerDivider?: boolean;
  /** Layout orientation: "vertical" | "horizontal". @default "vertical" */
  orientation?: MsCardOrientation;
  /**
   * Semantic brand accent tone: a top accent border on most variants, or a tinted surface
   * with `variant="soft"`.
   */
  tone?: "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
}
