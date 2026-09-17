export type MsFieldOrientation = "vertical" | "horizontal";
export type MsFieldSize = "sm" | "md" | "lg";

export interface MsFieldProps {
  /** Accessible label above the control. */
  label?: string | undefined;
  /** Helper text below the control. */
  description?: string | undefined;
  /** Error text; renders below and marks controls invalid. */
  error?: string | undefined;
  /** Marks the label with the required indicator. */
  required?: boolean | undefined;
  /** Shows optional indicator text. */
  optional?: boolean | undefined;
  /** Layout orientation: "vertical" (default) or "horizontal". */
  orientation?: MsFieldOrientation | undefined;
  /** Text sizing scale: "sm", "md" (default), "lg". */
  size?: MsFieldSize | undefined;
}
