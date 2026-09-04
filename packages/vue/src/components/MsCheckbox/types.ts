export interface MsCheckboxProps {
  /** Checked state (v-model:checked). */
  checked?: boolean;
  /** Indeterminate visual state (aria-checked="mixed"). */
  indeterminate?: boolean;
  label?: string;
  disabled?: boolean;
  value?: unknown;
  name?: string;
}
