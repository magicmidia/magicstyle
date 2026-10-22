export type MsKbdSize = "xs" | "sm" | "md" | "lg";
export type MsKbdVariant = "raised" | "outline" | "flat";
export type MsKbdTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";

export interface MsKbdProps {
  /** Keycap badge size scale */
  size?: MsKbdSize;
  /** Visual style variant */
  variant?: MsKbdVariant;
  /** Semantic color tone */
  tone?: MsKbdTone;
}
