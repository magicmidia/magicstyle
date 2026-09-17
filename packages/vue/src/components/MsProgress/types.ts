export type MsProgressSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type MsProgressTone = "primary" | "accent" | "neutral" | "success" | "warning" | "danger";
export type MsProgressShape = "pill" | "rounded" | "square";

export interface MsProgressProps {
  /**
   * Current numeric progress value.
   * If undefined and indeterminate is true, displays indeterminate animation.
   */
  modelValue?: number;

  /**
   * Minimum possible value.
   * Default: 0.
   */
  min?: number;

  /**
   * Maximum possible value.
   * Default: 100.
   */
  max?: number;

  /**
   * Scale size:
   * - "2xs": 2px
   * - "xs": 4px
   * - "sm": 6px
   * - "md": 8px (default)
   * - "lg": 12px
   * - "xl": 16px
   * - "2xl": 24px
   */
  size?: MsProgressSize;

  /**
   * Semantic tone: "primary", "accent", "neutral", "success", "warning", "danger".
   * Default: "primary".
   */
  tone?: MsProgressTone;

  /**
   * Shape of the track and bar:
   * - "pill": fully rounded (default)
   * - "rounded": subtle corner radius
   * - "square": 0 radius
   */
  shape?: MsProgressShape;

  /**
   * Whether to apply a dual-tone vibrant gradient to the progress bar.
   */
  gradient?: boolean;

  /**
   * Whether to render the percentage value directly inside the progress bar.
   * Best used with sizes "lg", "xl", or "2xl".
   */
  inlineValue?: boolean;

  /**
   * Whether the progress is in an indeterminate/continuous loading state.
   */
  indeterminate?: boolean;

  /**
   * Accessible description of the task in progress.
   */
  label?: string;

  /**
   * Whether to display the percentage value next to the label.
   */
  showValue?: boolean;

  /**
   * Applies striped pattern to the progress indicator.
   */
  striped?: boolean;

  /**
   * Animates stripes across the progress bar.
   */
  animated?: boolean;
}
