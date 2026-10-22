/** Size scale of the label. */
export type MsLabelSize = "sm" | "md" | "lg";

export interface MsLabelProps {
  /** Id of the associated form control (native `for` attribute). */
  for?: string;
  /** Shows a required asterisk. @default false */
  required?: boolean;
  /** Shows an "optional" hint (ignored when `required` is set). @default false */
  optional?: boolean;
  /** Text of the optional hint. @default messages.label.optional */
  optionalText?: string;
  /** Tooltip text shown on a help icon next to the label. */
  tooltip?: string;
  /** Size scale. @default "md" */
  size?: MsLabelSize;
  /** Renders the label in its disabled style. @default false */
  disabled?: boolean;
}
