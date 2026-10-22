import type { MsSize, MsTone } from "../MsButton/types.ts";

export type MsSwitchSize = Extract<MsSize, "sm" | "md" | "lg">;
export type MsSwitchTone = Extract<MsTone, "primary" | "success" | "warning" | "danger" | "accent">;
export type MsSwitchLabelPlacement = "left" | "right";

export interface MsSwitchProps {
  /** Checked state for `v-model` (e.g. `v-model="form.remember"`). */
  modelValue?: boolean | undefined;
  /** Checked state for `v-model:checked`. `modelValue` wins when both are bound. */
  checked?: boolean | undefined;
  /** Primary label text. */
  label?: string;
  /** Secondary description or helper text. */
  description?: string;
  /** Sizing scale: "sm" | "md" | "lg". @default "md" */
  size?: MsSwitchSize;
  /** Semantic active tone. @default "primary" */
  tone?: MsSwitchTone;
  /** Label position relative to track. @default "right" */
  labelPlacement?: MsSwitchLabelPlacement;
  /** Disabled state. */
  disabled?: boolean;
  /** Form name attribute. */
  name?: string;
  /** Form value attribute. */
  value?: string;
}
