export type MsPasswordInputSize = "sm" | "md" | "lg";

export interface MsPasswordCriterion {
  id: string;
  label: string;
  validator: (password: string) => boolean;
}

export const defaultCriteria: MsPasswordCriterion[] = [
  { id: "length", label: "Mínimo de 8 caracteres", validator: (p) => p.length >= 8 },
  { id: "lowercase", label: "Pelo menos 1 letra minúscula", validator: (p) => /[a-z]/.test(p) },
  { id: "uppercase", label: "Pelo menos 1 letra maiúscula", validator: (p) => /[A-Z]/.test(p) },
  { id: "number", label: "Pelo menos 1 número", validator: (p) => /[0-9]/.test(p) },
  {
    id: "symbol",
    label: "Pelo menos 1 caractere especial",
    validator: (p) => /[^A-Za-z0-9]/.test(p),
  },
];

export interface MsPasswordInputProps {
  modelValue?: string;
  placeholder?: string;
  size?: MsPasswordInputSize;
  disabled?: boolean;
  invalid?: boolean;
  showToggle?: boolean;
  showStrengthMeter?: boolean;
  showCriteria?: boolean;
  criteria?: MsPasswordCriterion[];
}

export interface MsPasswordInputEmits {
  (e: "update:modelValue", value: string): void;
  (e: "strength-change", score: number): void;
}
