import type { MsSize, MsTone } from "../MsButton/types.ts";

export type MsBadgeVariant = "soft" | "solid" | "outline";
export type MsBadgeSize = Extract<MsSize, "xs" | "sm" | "md" | "lg" | "xl">;
export type MsBadgeTone = MsTone;
export type MsBadgePlacement = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export interface MsBadgeProps {
  /** Visual variant. @default "solid" */
  variant?: MsBadgeVariant;
  /** Semantic tone. @default "primary" */
  tone?: MsBadgeTone;
  /** Size scale. @default "md" */
  size?: MsBadgeSize;
  /** Rounded pill badge. */
  pill?: boolean;
  /** Displays a small circular dot indicator before content. */
  dot?: boolean;
  /** Numeric counter value to display. */
  count?: number;
  /** Maximum counter value before displaying '+'. @default 99 */
  maxCount?: number;
  /** Whether to render the badge when count is 0. @default false */
  showZero?: boolean;
  /** Corner anchor placement when badge wraps child elements. */
  placement?: MsBadgePlacement;
  /** Dot-only mode (renders a small circular dot badge without text). */
  dotOnly?: boolean;
  /** Animated radar pulse effect. */
  pulse?: boolean;
  /** Inverted outline ring around badge for separation against dark/busy backgrounds. */
  bordered?: boolean;
}
