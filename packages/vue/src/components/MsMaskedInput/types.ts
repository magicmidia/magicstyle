export type MsMaskPreset = "cpf" | "cnpj" | "phone" | "date" | "cep" | "credit-card";

export type MsMaskedInputSize = "sm" | "md" | "lg";

export interface MsMaskedInputProps {
  modelValue?: string;
  unmasked?: string;
  mask?: MsMaskPreset | string;
  placeholder?: string;
  size?: MsMaskedInputSize;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  clearable?: boolean;
}

export interface MsMaskedInputEmits {
  (e: "update:modelValue", value: string): void;
  (e: "update:unmasked", value: string): void;
  (e: "complete", value: string): void;
}
