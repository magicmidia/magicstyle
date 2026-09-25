/** Footer content layout. */
export type MsFooterLayout = "simple" | "compact" | "centered" | "multi-column";
/** Footer surface style. */
export type MsFooterVariant = "default" | "bordered" | "sunken" | "inverse";
/** Footer color role. */
export type MsFooterTone = "default" | "neutral" | "primary" | "accent";
/** Footer elevation. */
export type MsFooterShadow = "none" | "sm" | "md" | "lg";
/** Footer CSS positioning mode. */
export type MsFooterPosition = "static" | "sticky" | "fixed";
/** Max-width of the inner footer container. */
export type MsFooterContainer = "fluid" | "sm" | "md" | "lg" | "xl";

/** A link inside a footer column. */
export interface MsFooterColumnItem {
  /** Link text. */
  label: string;
  /** Link URL (sanitized; unsafe or missing values fall back to "#"). */
  href?: string | undefined;
}

/** A titled group of footer links. */
export interface MsFooterColumn {
  /** Column heading. */
  title: string;
  /** Links listed in the column. */
  links: MsFooterColumnItem[];
}

export interface MsFooterProps {
  /** Content layout. @default "simple" */
  layout?: MsFooterLayout | undefined;
  /** Surface style. @default "default" */
  variant?: MsFooterVariant | undefined;
  /** Color role. @default "default" */
  tone?: MsFooterTone | undefined;
  /** Elevation; `true` maps to "md", `"none"`/`false` render no shadow. */
  shadow?: MsFooterShadow | boolean | undefined;
  /** CSS positioning mode. @default "static" */
  position?: MsFooterPosition | undefined;
  /** Shorthand for `position="fixed"` (takes precedence over `position`). @default false */
  fixed?: boolean | undefined;
  /** Wraps content in a max-width container; `true` uses "xl". */
  container?: boolean | MsFooterContainer | undefined;
  /** Link columns rendered in the grid (overridable via the `columns` slot). */
  columns?: MsFooterColumn[] | undefined;
  /** Copyright text in the bottom area (overridable via the `copyright` slot). */
  copyright?: string | undefined;
}
