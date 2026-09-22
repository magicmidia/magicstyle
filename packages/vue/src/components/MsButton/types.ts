export type MsButtonVariant =
  | "solid"
  | "squared"
  | "gradient"
  | "soft"
  | "outline"
  | "ghost"
  | "dashed"
  | "link"
  | "text"
  | "glass";
export type MsTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
export type MsSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type MsButtonShape = "square" | "rounded" | "rounded-sm" | "rounded-lg" | "pill";

export interface MsButtonProps {
  /** Visual style. @default "solid" */
  variant?: MsButtonVariant;
  /** Semantic color role. @default "primary" */
  tone?: MsTone;
  /** Control height scale: xs/sm/md/lg/xl/xxl. @default "md" */
  size?: MsSize;
  /** Opt-in pill shape (full rounding). */
  pill?: boolean;
  /** Explicit border-radius geometry. */
  shape?: MsButtonShape;
  /** Prominent CTA with extended horizontal width. */
  wide?: boolean;
  /** Full container width. */
  block?: boolean;
  /** Full container width on mobile screens (max-width: 640px). */
  responsive?: boolean;
  /** Luminous wave ripple effect on click. */
  wave?: boolean;
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
