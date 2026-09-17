export type MsSkeletonVariant = "text" | "circle" | "avatar" | "button" | "card" | "rect";
export type MsSkeletonAnimation = "shimmer" | "pulse" | "none";
export type MsSkeletonTone = "default" | "subtle" | "contrast" | "primary";
export type MsSkeletonSpeed = "fast" | "normal" | "slow";

export interface MsSkeletonProps {
  /**
   * Geometric shape or component preset for the skeleton:
   * - "text": rounded horizontal line with bottom margin
   * - "circle": standard circle (40x40)
   * - "avatar": larger avatar circle (48x48)
   * - "button": button shape (100x38)
   * - "card": card banner (100%x160)
   * - "rect": rectangular box (100%x100)
   * Default: "text".
   */
  variant?: MsSkeletonVariant;

  /**
   * Visual loading animation:
   * - "shimmer": continuous gradient sweep (default)
   * - "pulse": subtle opacity oscillation
   * - "none": static placeholder background
   */
  animation?: MsSkeletonAnimation;

  /**
   * Color tone/contrast:
   * - "default": standard neutral gray
   * - "subtle": soft light sunken surface
   * - "contrast": higher contrast gray
   * - "primary": brand primary tint
   * Default: "default".
   */
  tone?: MsSkeletonTone;

  /**
   * Animation speed:
   * - "fast": 1.0s
   * - "normal": 1.6s
   * - "slow": 2.4s
   * Default: "normal".
   */
  speed?: MsSkeletonSpeed;

  /**
   * Explicit width (e.g. "120px", "80%", or number in pixels).
   */
  width?: string | number;

  /**
   * Explicit height (e.g. "24px", "100%", or number in pixels).
   */
  height?: string | number;

  /**
   * Number of skeleton lines to render (useful for multi-line text).
   * Default: 1.
   */
  count?: number;

  /**
   * Optional custom border radius override.
   */
  radius?: string;
}
