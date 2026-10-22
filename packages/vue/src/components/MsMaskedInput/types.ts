/** Built-in mask presets (Brazilian document, phone, date and postal-code formats, plus credit card). */
export type MsMaskPreset = "cpf" | "cnpj" | "phone" | "date" | "cep" | "credit-card";

/** Size scale of the masked input. */
export type MsMaskedInputSize = "sm" | "md" | "lg";

export interface MsMaskedInputProps {
  /** Masked value (`v-model`). @default "" */
  modelValue?: string;
  /** Digits-only value without mask characters (`v-model:unmasked`); output only, not read by the component. @default "" */
  unmasked?: string;
  /** Preset name or custom pattern where `9` matches a digit and any other character is a literal; empty disables masking. @default "" */
  mask?: MsMaskPreset | string;
  /** Placeholder text; falls back to the active mask pattern. @default "" */
  placeholder?: string;
  /** Size scale. @default "md" */
  size?: MsMaskedInputSize;
  /** Disables the input. @default false */
  disabled?: boolean;
  /** Makes the input read-only. @default false */
  readonly?: boolean;
  /** Marks the input as invalid (also inherited from a parent field). @default false */
  invalid?: boolean;
  /** Shows a clear button while the input has a value. @default false */
  clearable?: boolean;
}

export interface MsMaskedInputEmits {
  /** Fires on input and on clear; payload is the masked value. */
  (e: "update:modelValue", value: string): void;
  /** Fires on input and on clear; payload is the digits-only value (the raw value when no mask is set). */
  (e: "update:unmasked", value: string): void;
  /** Fires when the masked value fills the whole pattern; payload is the masked value. */
  (e: "complete", value: string): void;
}
