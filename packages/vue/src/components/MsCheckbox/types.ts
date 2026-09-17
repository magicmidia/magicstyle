import type { MsSize, MsTone } from "../MsButton/types.ts";

export type MsCheckboxSize = Extract<MsSize, "sm" | "md" | "lg">;
export type MsCheckboxTone = Extract<
  MsTone,
  "primary" | "success" | "warning" | "danger" | "accent"
>;

export interface MsCheckboxProps {
  /** Checked state (v-model:checked). */
  checked?: boolean;
  /** Indeterminate visual state (aria-checked="mixed"). */
  indeterminate?: boolean;
  /** Primary label text. */
  label?: string;
  /** Secondary description/helper text. */
  description?: string;
  /** Scale size: "sm" | "md" | "lg". @default "md" */
  size?: MsCheckboxSize;
  /** Semantic active tone. @default "primary" */
  tone?: MsCheckboxTone;
  /** Card container style for selectable options. @default false */
  card?: boolean;
  /** Disabled state. */
  disabled?: boolean;
  /** Value when inside form/array groups. */
  value?: unknown;
  /** Name attribute. */
  name?: string;
}
