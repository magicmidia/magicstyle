export type MsKbdSize = "xs" | "sm" | "md" | "lg";
export type MsKbdVariant = "raised" | "outline" | "flat";
export type MsKbdTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";

export interface MsKbdProps {
  /** Escala de tamanho do keycap badge */
  size?: MsKbdSize;
  /** Variante visual de estilo */
  variant?: MsKbdVariant;
  /** Tom semântico de cor */
  tone?: MsKbdTone;
}
