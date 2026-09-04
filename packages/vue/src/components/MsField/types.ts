export interface MsFieldProps {
  /** Accessible label above the control. */
  label?: string;
  /** Helper text below the control. */
  description?: string;
  /** Error text; renders below and marks controls invalid. */
  error?: string;
  /** Marks the label with the required indicator. */
  required?: boolean;
}
