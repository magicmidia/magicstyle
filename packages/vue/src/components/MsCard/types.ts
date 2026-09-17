export type MsCardVariant = "raised" | "flat" | "outline" | "sunken" | "glass";
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
  /** Enables hover/active interaction styling. @default false */
  interactive?: boolean;
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
  /** Semantic brand accent tone. */
  tone?: "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
}
