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
  modelValue?: string;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  /** Visual variant: "outline" | "filled" | "flushed". @default "outline" */
  variant?: MsInputVariant;
  /** @default "md" */
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
  disabled?: boolean;
  readonly?: boolean;
  /** Marks the control invalid (field error wires this automatically). */
  invalid?: boolean;
  name?: string;
  autocomplete?: string;
}
