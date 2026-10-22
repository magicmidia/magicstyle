/** Color role of the navbar. */
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

/** Navbar CSS positioning mode. */
export type MsNavbarPosition = "static" | "sticky" | "fixed" | "fixed-bottom";
/** Navbar surface style. */
export type MsNavbarVariant = "default" | "elevated" | "bordered" | "glass";
/** Navbar height scale. */
export type MsNavbarSize = "sm" | "md" | "lg";
/** Navbar elevation. */
export type MsNavbarShadow = "none" | "sm" | "md" | "lg" | "xl";
/** Max-width of the inner navbar container. */
export type MsNavbarContainer = "fluid" | "sm" | "md" | "lg" | "xl";

export interface MsNavbarProps {
  /** CSS positioning mode. @default "static" */
  position?: MsNavbarPosition | undefined;
  /** Surface style. @default "default" */
  variant?: MsNavbarVariant | undefined;
  /** Color role. @default "default" */
  tone?: MsNavbarTone | undefined;
  /** Height scale. @default "md" */
  size?: MsNavbarSize | undefined;
  /** Elevation; `true` maps to "md", `"none"`/`false` render no shadow. */
  shadow?: MsNavbarShadow | boolean | undefined;
  /** Wraps content in a max-width container; `true` uses "xl". */
  container?: boolean | MsNavbarContainer | undefined;
  /** Detached, floating navbar style. @default false */
  floating?: boolean | undefined;
  /** Shorthand for `position="fixed"` (takes precedence over `position`). @default false */
  fixed?: boolean | undefined;
  /** Mobile menu open state (`v-model:mobileMenuOpen`), reflected in the toggle's `aria-expanded`. @default false */
  mobileMenuOpen?: boolean | undefined;
}

export interface MsNavbarEmits {
  /** Fires when the mobile menu toggle button is clicked. */
  (e: "toggle-menu"): void;
  /** Fires when the mobile menu toggle button is clicked; payload is the new open state. */
  (e: "update:mobileMenuOpen", value: boolean): void;
}
