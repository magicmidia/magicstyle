export type MsRadioSize = "sm" | "md" | "lg";
export type MsRadioTone = "primary" | "success" | "warning" | "danger";

export interface MsRadioGroupProps {
  /** Selected value (v-model). */
  modelValue?: unknown;
  /** Disables every radio in the group. */
  disabled?: boolean;
  /** Native `name` shared by the radios (a unique one is generated when omitted). */
  name?: string;
  /** Layout direction of the radios. @default "horizontal" */
  orientation?: "horizontal" | "vertical";
  /** Default size for the radios (a radio's own `size` wins). @default "md" */
  size?: MsRadioSize;
  /** Default checked color for the radios (a radio's own `tone` wins). @default "primary" */
  tone?: MsRadioTone;
  /** Renders the radios as selectable cards (a radio's own `card` wins). @default false */
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
