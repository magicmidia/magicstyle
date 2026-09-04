export type MsButtonVariant = "solid" | "squared" | "gradient" | "soft" | "outline" | "ghost";
export type MsTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
export type MsSize = "sm" | "md" | "lg" | "xl" | "xxl";

export interface MsButtonProps {
  /** Visual style. @default "solid" */
  variant?: MsButtonVariant;
  /** Semantic color role. @default "primary" */
  tone?: MsTone;
  /** Control height scale: sm/md/lg/xl/xxl. @default "md" */
  size?: MsSize;
  /** Opt-in pill shape (full rounding). */
  pill?: boolean;
  /** Renders a dropdown caret and sets aria-expanded. */
  caret?: boolean;
  /** Controlled open state for caret buttons (aria-expanded + rotation). */
  open?: boolean;
  /** Shows spinner and blocks interaction. */
  loading?: boolean;
  disabled?: boolean;
  /** Native button type. @default "button" */
  type?: "button" | "submit" | "reset";
  /** Stretches to fill the container width. */
  fullWidth?: boolean;
}
