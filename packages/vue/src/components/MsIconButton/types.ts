/** Visual style of the icon button. */
export type MsIconButtonVariant = "solid" | "soft" | "outline" | "ghost";
/** Semantic color role of the icon button. */
export type MsIconButtonTone =
  "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "danger";
/** Size scale of the icon button. */
export type MsIconButtonSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
/** Border-radius geometry of the icon button. */
export type MsIconButtonShape = "rounded" | "circle" | "square";

export interface MsIconButtonProps {
  /**
   * Accessible name of the button. Icon-only content has no text, so either
   * `label` or `aria-label`/`ariaLabel` must be provided.
   */
  label?: string | undefined;
  /**
   * Accessible name of the button. `aria-label="…"` in templates binds to this prop.
   * @deprecated Prefer `label` (or the plain `aria-label` attribute).
   */
  ariaLabel?: string | undefined;
  /** Visual style. @default "solid" */
  variant?: MsIconButtonVariant;
  /** Semantic color role. @default "primary" */
  tone?: MsIconButtonTone;
  /** Size scale. @default "md" */
  size?: MsIconButtonSize;
  /** Shorthand for `shape="circle"` (ignored when `shape` is set). @default false */
  circle?: boolean;
  /** Border-radius geometry; takes precedence over `circle`. Falls back to "rounded". */
  shape?: MsIconButtonShape;
  /** Pressed/active state; when defined, sets `aria-pressed` (toggle button). */
  active?: boolean;
  /** Disables the button. @default false */
  disabled?: boolean;
  /** Shows a spinner instead of the icon and blocks interaction. @default false */
  loading?: boolean;
  /** Native button type. @default "button" */
  type?: "button" | "submit" | "reset";
}

export interface MsIconButtonEmits {
  /** Fires on click unless the button is disabled or loading; payload is the native event. */
  (e: "click", event: MouseEvent): void;
}
