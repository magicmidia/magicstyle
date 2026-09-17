export type MsProgressRadialSize = "sm" | "md" | "lg" | "xl";
export type MsProgressRadialTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "danger" | "info";

export interface MsProgressRadialProps {
  /**
   * Current progress value between 0 and max.
   * @default 0
   */
  value?: number;

  /**
   * Maximum potential value representing 100%.
   * @default 100
   */
  max?: number;

  /**
   * Sizing scale preset.
   * @default 'md'
   */
  size?: MsProgressRadialSize;

  /**
   * Semantic tone color.
   * @default 'primary'
   */
  tone?: MsProgressRadialTone;

  /**
   * Stroke width in pixels.
   * @default 6
   */
  strokeWidth?: number;

  /**
   * Whether to spin continuously in indeterminate mode.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Whether to display the percentage label in center.
   * @default true
   */
  showValue?: boolean;
}
