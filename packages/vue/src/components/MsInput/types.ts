import type { MsSize } from "../MsButton/types.ts";

export type MsInputSize = Extract<MsSize, "xs" | "sm" | "md" | "lg" | "xl" | "xxl">;
export type MsInputTone =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "success"
  | "info"
  | "warning"
  | "danger";

export type MsInputVariant = "outline" | "filled" | "flushed";

export interface MsInputProps {
  /** Text value (`v-model`). */
  modelValue?: string;
  /** Native input type ("text", "email", "password", "number"…). @default "text" */
  type?: string;
  /** Native placeholder text (leave empty when using `floatingLabel`). */
  placeholder?: string;
  /** Visual variant: "outline" | "filled" | "flushed". @default "outline" */
  variant?: MsInputVariant;
  /** Control height scale. @default "md" */
  size?: MsInputSize;
  /** Border/focus tint. @default "default" */
  tone?: MsInputTone;
  /** Shows a spinner in the suffix and blocks input. */
  processing?: boolean;
  /** Opt-in floating label (placeholder must stay empty). */
  floatingLabel?: string;
  /** Fully rounded pill input style. */
  pill?: boolean;
  /** Displays a clear button when text is present. */
  clearable?: boolean;
  /** Shows an eye button to reveal/hide password when type is password. */
  passwordToggle?: boolean;
  /** Disables the input. */
  disabled?: boolean;
  /** Makes the input read-only (also hides the clear button). */
  readonly?: boolean;
  /** Marks the control invalid (field error wires this automatically). */
  invalid?: boolean;
  /** Native form field name. */
  name?: string;
  /** Native `autocomplete` hint (e.g. "email", "current-password", "off"). */
  autocomplete?: string;
}
