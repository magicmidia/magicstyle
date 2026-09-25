export type MsSpinnerSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type MsSpinnerTone = "primary" | "neutral" | "success" | "warning" | "danger" | "current";
export type MsSpinnerThickness = "thin" | "normal" | "thick";
export type MsSpinnerSpeed = "fast" | "normal" | "slow";

export interface MsSpinnerProps {
  /**
   * Dimension of the spinner:
   * - "2xs": 8px
   * - "xs": 12px
   * - "sm": 16px
   * - "md": 24px (default)
   * - "lg": 32px
   * - "xl": 48px
   * - "2xl": 64px
   */
  size?: MsSpinnerSize;

  /**
   * Semantic tone: "primary", "neutral", "success", "warning", "danger", "current".
   * Default: "primary".
   */
  tone?: MsSpinnerTone;

  /**
   * Stroke thickness: "thin", "normal", "thick".
   * Default: "normal".
   */
  thickness?: MsSpinnerThickness;

  /**
   * Animation rotation speed: "fast", "normal", "slow".
   * Default: "normal".
   */
  speed?: MsSpinnerSpeed;

  /**
   * Accessible screen-reader description announced via aria-live.
   * @default messages `spinner.label` ("Carregando..." in pt-BR)
   */
  label?: string;
}
