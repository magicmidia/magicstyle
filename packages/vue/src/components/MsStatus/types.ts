export type MsStatusTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
export type MsStatusSize = "sm" | "md" | "lg";

export interface MsStatusProps {
  /**
   * Semantic tone color.
   * @default 'success'
   */
  tone?: MsStatusTone;

  /**
   * Sizing scale.
   * @default 'md'
   */
  size?: MsStatusSize;

  /**
   * Whether to animate a live pulsing radar ring around the status dot.
   * @default false
   */
  pulse?: boolean;

  /**
   * Text label accompanying the status dot.
   */
  label?: string;
}
