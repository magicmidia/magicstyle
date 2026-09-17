import type { MsButtonVariant, MsSize, MsTone } from "../MsButton/types.ts";
import type { MsMenuItem } from "../MsMenu/types.ts";

export type MsDropdownAlign = "left" | "right";

export interface MsDropdownButtonProps {
  items: readonly MsMenuItem[];
  label?: string | undefined;
  variant?: MsButtonVariant | undefined;
  tone?: MsTone | undefined;
  size?: MsSize | undefined;
  pill?: boolean | undefined;
  align?: MsDropdownAlign | undefined;
  fullWidth?: boolean | undefined;
}
