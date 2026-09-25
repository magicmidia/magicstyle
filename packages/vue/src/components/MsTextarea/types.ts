import type { MsInputSize, MsInputTone } from "../MsInput/types.ts";

/** Directions in which the user can resize the textarea. */
export type MsTextareaResize = "none" | "vertical" | "horizontal" | "both";

export interface MsTextareaProps {
  /** Text value (`v-model`). @default "" */
  modelValue?: string | undefined;
  /** Native placeholder text. */
  placeholder?: string | undefined;
  /** Visible text rows. @default 3 */
  rows?: number | undefined;
  /** Semantic color role (forced to "danger" while invalid). @default "default" */
  tone?: MsInputTone | undefined;
  /** Size scale. @default "md" */
  size?: MsInputSize | undefined;
  /** Directions in which the user can resize the textarea. @default "vertical" */
  resize?: MsTextareaResize | undefined;
  /** Disables the textarea. @default false */
  disabled?: boolean | undefined;
  /** Makes the textarea read-only. @default false */
  readonly?: boolean | undefined;
  /** Marks the textarea as invalid (also inherited from a parent field). */
  invalid?: boolean | undefined;
  /** Native form field name. */
  name?: string | undefined;
  /** Maximum number of characters (native `maxlength`; also shown by the counter). */
  maxLength?: number | undefined;
  /** Shows a character counter in the footer. @default false */
  showCount?: boolean | undefined;
  /** Grows the height to fit the content. @default false */
  autoGrow?: boolean | undefined;
  /** Maximum rows for `autoGrow`; currently not applied by the component. */
  maxRows?: number | undefined;
}

export interface MsTextareaEmits {
  /** Fires on every input; payload is the new text. */
  (e: "update:modelValue", value: string): void;
  /** Native `input` event, forwarded after `update:modelValue`. */
  (e: "input", event: Event): void;
  /** Native `change` event, forwarded when the value is committed (e.g. on blur). */
  (e: "change", event: Event): void;
}
