export type MsPasswordInputSize = "sm" | "md" | "lg";

/** A password rule shown in the criteria list and counted by the strength meter. */
export interface MsPasswordCriterion {
  /** Stable id (built-in ids also select the localized label). */
  id: string;
  /** Rule text shown in the criteria list. */
  label: string;
  /** Returns true when the password satisfies the rule. */
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
  /** Password value (`v-model`). @default "" */
  modelValue?: string;
  /** Placeholder text. @default from messages (`passwordInput.placeholder`) */
  placeholder?: string;
  /** Size scale. @default "md" */
  size?: MsPasswordInputSize;
  /** Disables the input and the visibility toggle. @default false */
  disabled?: boolean;
  /** Marks the input invalid (a parent MsField error also does). @default false */
  invalid?: boolean;
  /** Shows the show/hide password button. @default true */
  showToggle?: boolean;
  /** Shows a 4-step strength meter based on how many criteria are met. @default false */
  showStrengthMeter?: boolean;
  /** Lists the criteria with a met/unmet state. @default false */
  showCriteria?: boolean;
  /** Custom rules; defaults to the built-in `defaultCriteria` with localized labels. */
  criteria?: MsPasswordCriterion[];
}

export interface MsPasswordInputEmits {
  /** Fires on every input; payload is the new password. */
  (e: "update:modelValue", value: string): void;
  /**
   * The strength score changed: 0 when empty, 1 for ≤1 met criterion, 2 for 2, 3 for 3–4
   * and 4 for 5 or more.
   */
  (e: "strength-change", score: number): void;
}
