export type MsTooltipPlacement = "top" | "bottom" | "left" | "right";
export type MsTooltipTone = "dark" | "light" | "primary";
export type MsTooltipSize = "sm" | "md" | "lg";

export interface MsTooltipProps {
  /**
   * Tooltip text message to display. Can also be supplied via #content slot.
   */
  content?: string;

  /**
   * Placement relative to the trigger element: "top", "bottom", "left", "right".
   * Default: "top".
   */
  placement?: MsTooltipPlacement;

  /**
   * Visual surface tone: "dark", "light", "primary".
   * Default: "dark".
   */
  tone?: MsTooltipTone;

  /**
   * Dimensional scale: "sm", "md", "lg".
   * Default: "md".
   */
  size?: MsTooltipSize;

  /**
   * Displays the directional pointer arrow.
   * Default: true.
   */
  arrow?: boolean;

  /**
   * Optional maximum width (e.g. 240, "200px") allowing multiline wrapping.
   */
  maxWidth?: string | number;

  /**
   * Delay in milliseconds before showing tooltip on hover/focus.
   * Default: 150.
   */
  showDelay?: number;

  /**
   * Delay in milliseconds before hiding tooltip on leave/blur.
   * Default: 100.
   */
  hideDelay?: number;

  /**
   * Disables tooltip display.
   * Default: false.
   */
  disabled?: boolean;
}
