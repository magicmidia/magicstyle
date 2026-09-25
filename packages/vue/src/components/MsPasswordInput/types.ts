export type MsPasswordInputSize = "sm" | "md" | "lg";

export interface MsPasswordCriterion {
  id: string;
  label: string;
  validator: (password: string) => boolean;
}

/**
 * Built-in criteria. When `criteria` is not passed, MsPasswordInput uses these
 * validators with labels from the messages (`passwordInput.criteria[id]`).
 */
export const defaultCriteria: MsPasswordCriterion[] = [
  { id: "length", label: "At least 8 characters", validator: (p) => p.length >= 8 },
  { id: "lowercase", label: "At least 1 lowercase letter", validator: (p) => /[a-z]/.test(p) },
  { id: "uppercase", label: "At least 1 uppercase letter", validator: (p) => /[A-Z]/.test(p) },
  { id: "number", label: "At least 1 number", validator: (p) => /[0-9]/.test(p) },
  {
    id: "symbol",
    label: "At least 1 special character",
    validator: (p) => /[^A-Za-z0-9]/.test(p),
  },
];

export interface MsPasswordInputProps {
  modelValue?: string;
  /** @default from messages (`passwordInput.placeholder`) */
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
