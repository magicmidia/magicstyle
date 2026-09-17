export type MsSeparatorOrientation = "horizontal" | "vertical";
export type MsSeparatorVariant = "default" | "subtle" | "strong" | "dashed" | "dotted" | "gradient";
export type MsSeparatorTone =
  "neutral" | "muted" | "strong" | "primary" | "accent" | "success" | "warning" | "danger";
export type MsSeparatorThickness = 1 | 2 | 4 | "1" | "2" | "4";
export type MsSeparatorSpacing = "none" | "sm" | "md" | "lg";
export type MsSeparatorAlign = "center" | "start" | "end";

export interface MsSeparatorProps {
  /**
   * Layout direction: "horizontal" | "vertical".
   * Default: "horizontal".
   */
  orientation?: MsSeparatorOrientation;

  /**
   * Visual line style: "default" | "subtle" | "strong" | "dashed" | "dotted" | "gradient".
   * Default: "default".
   */
  variant?: MsSeparatorVariant;

  /**
   * Color tone: "neutral" | "muted" | "strong" | "primary" | "accent" | "success" | "warning" | "danger".
   * Default: "neutral".
   */
  tone?: MsSeparatorTone;

  /**
   * Line thickness in pixels: 1 | 2 | 4.
   * Default: 1.
   */
  thickness?: MsSeparatorThickness;

  /**
   * Margin spacing around separator: "none" | "sm" | "md" | "lg".
   * Default: "none".
   */
  spacing?: MsSeparatorSpacing;

  /**
   * Optional text label to render embedded in a horizontal separator (e.g. "OU").
   */
  label?: string;

  /**
   * Alignment of embedded text label: "center" | "start" | "end".
   * Default: "center".
   */
  align?: MsSeparatorAlign;

  /**
   * If true, separator is hidden from accessibility tree (decorative).
   * Default: true.
   */
  decorative?: boolean;
}
