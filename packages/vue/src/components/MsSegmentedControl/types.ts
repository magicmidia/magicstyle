export type MsSegmentedControlSize = "xs" | "sm" | "md" | "lg" | "xl";
export type MsSegmentedControlShape = "rounded" | "pill" | "square";
export type MsSegmentedControlTone = "neutral" | "primary" | "accent";

export interface MsSegmentedControlOption<T = string | number> {
  label: string;
  value: T;
  disabled?: boolean | undefined;
  icon?: string | undefined;
}

export interface MsSegmentedControlProps<T = string | number> {
  modelValue?: T | undefined;
  options: MsSegmentedControlOption<T>[];
  size?: MsSegmentedControlSize | undefined;
  shape?: MsSegmentedControlShape | undefined;
  tone?: MsSegmentedControlTone | undefined;
  fullWidth?: boolean | undefined;
  disabled?: boolean | undefined;
  name?: string | undefined;
}

export interface MsSegmentedControlEmits<T = string | number> {
  (e: "update:modelValue", value: T): void;
  (e: "change", value: T): void;
}
