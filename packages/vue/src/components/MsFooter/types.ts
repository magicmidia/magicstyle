export type MsFooterLayout = "simple" | "compact" | "centered" | "multi-column";
export type MsFooterVariant = "default" | "bordered" | "sunken" | "inverse";
export type MsFooterTone = "default" | "neutral" | "primary" | "accent";
export type MsFooterShadow = "none" | "sm" | "md" | "lg";
export type MsFooterPosition = "static" | "sticky" | "fixed";
export type MsFooterContainer = "fluid" | "sm" | "md" | "lg" | "xl";

export interface MsFooterColumnItem {
  label: string;
  href?: string | undefined;
}

export interface MsFooterColumn {
  title: string;
  links: MsFooterColumnItem[];
}

export interface MsFooterProps {
  layout?: MsFooterLayout | undefined;
  variant?: MsFooterVariant | undefined;
  tone?: MsFooterTone | undefined;
  shadow?: MsFooterShadow | boolean | undefined;
  position?: MsFooterPosition | undefined;
  fixed?: boolean | undefined;
  container?: boolean | MsFooterContainer | undefined;
  columns?: MsFooterColumn[] | undefined;
  copyright?: string | undefined;
}
