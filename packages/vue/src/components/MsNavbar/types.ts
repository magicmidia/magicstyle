export type MsNavbarTone =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "success"
  | "info"
  | "warning"
  | "danger";

export type MsNavbarPosition = "static" | "sticky" | "fixed" | "fixed-bottom";
export type MsNavbarVariant = "default" | "elevated" | "bordered" | "glass";
export type MsNavbarSize = "sm" | "md" | "lg";
export type MsNavbarShadow = "none" | "sm" | "md" | "lg" | "xl";
export type MsNavbarContainer = "fluid" | "sm" | "md" | "lg" | "xl";

export interface MsNavbarProps {
  position?: MsNavbarPosition | undefined;
  variant?: MsNavbarVariant | undefined;
  tone?: MsNavbarTone | undefined;
  size?: MsNavbarSize | undefined;
  shadow?: MsNavbarShadow | boolean | undefined;
  container?: boolean | MsNavbarContainer | undefined;
  floating?: boolean | undefined;
  fixed?: boolean | undefined;
  mobileMenuOpen?: boolean | undefined;
}

export interface MsNavbarEmits {
  (e: "toggle-menu"): void;
  (e: "update:mobileMenuOpen", value: boolean): void;
}
