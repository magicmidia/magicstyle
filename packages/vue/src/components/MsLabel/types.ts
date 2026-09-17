export type MsLabelSize = "sm" | "md" | "lg";

export interface MsLabelProps {
  for?: string;
  required?: boolean;
  optional?: boolean;
  optionalText?: string;
  tooltip?: string;
  size?: MsLabelSize;
  disabled?: boolean;
}
