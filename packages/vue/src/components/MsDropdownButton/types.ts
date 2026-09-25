import type { MsButtonVariant, MsSize, MsTone } from "../MsButton/types.ts";
import type { MsMenuItem } from "../MsMenu/types.ts";

/** Horizontal alignment of the dropdown menu relative to the trigger. */
export type MsDropdownAlign = "left" | "right";

export interface MsDropdownButtonProps {
  /** Menu items rendered in the dropdown `MsMenu`. */
  items: readonly MsMenuItem[];
  /** Trigger button text. */
  label?: string | undefined;
  /** Visual style of the trigger button. @default "solid" */
  variant?: MsButtonVariant | undefined;
  /** Semantic color role of the trigger button. @default "primary" */
  tone?: MsTone | undefined;
  /** Trigger button size scale. @default "md" */
  size?: MsSize | undefined;
  /** Pill shape (full rounding) for the trigger button. */
  pill?: boolean | undefined;
  /** Aligns the menu to the left or right edge of the trigger. @default "left" */
  align?: MsDropdownAlign | undefined;
  /** Stretches the trigger button to the container width. @default false */
  fullWidth?: boolean | undefined;
}
