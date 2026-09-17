export type MsRadioSize = "sm" | "md" | "lg";
export type MsRadioTone = "primary" | "success" | "warning" | "danger";

export interface MsRadioGroupProps {
  /** Selected value (v-model). */
  modelValue?: unknown;
  disabled?: boolean;
  name?: string;
  orientation?: "horizontal" | "vertical";
  size?: MsRadioSize;
  tone?: MsRadioTone;
  card?: boolean;
}

export interface MsRadioGroupContext {
  name: string;
  disabled: boolean;
  modelValue: unknown;
  size?: MsRadioSize | undefined;
  tone?: MsRadioTone | undefined;
  card?: boolean | undefined;
  select(value: unknown): void;
}
