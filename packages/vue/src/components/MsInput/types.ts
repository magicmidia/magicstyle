import type { MsSize } from "../MsButton/types.ts";

export type MsInputSize = Extract<MsSize, "sm" | "md" | "lg" | "xl" | "xxl">;
export type MsInputTone = "default" | "success" | "info" | "warning" | "danger";

export interface MsInputProps {
  modelValue?: string;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  /** @default "md" */
  size?: MsInputSize;
  /** Border/focus tint. @default "default" */
  tone?: MsInputTone;
  /** Shows a spinner in the suffix and blocks input. */
  processing?: boolean;
  /** Opt-in floating label (placeholder must stay empty). */
  floatingLabel?: string;
  disabled?: boolean;
  readonly?: boolean;
  /** Marks the control invalid (field error wires this automatically). */
  invalid?: boolean;
  name?: string;
  autocomplete?: string;
}
