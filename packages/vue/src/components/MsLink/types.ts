export type MsLinkVariant = "default" | "primary" | "muted" | "subtle" | "danger";

export type MsLinkUnderline = "always" | "hover" | "none";

export interface MsLinkProps {
  href?: string;
  variant?: MsLinkVariant;
  underline?: MsLinkUnderline;
  external?: boolean;
  disabled?: boolean;
  download?: boolean | string;
  rel?: string;
  target?: string;
}

export interface MsLinkEmits {
  (e: "click", event: MouseEvent): void;
}
