export interface MsRadioGroupProps {
  /** Selected value (v-model). */
  modelValue?: unknown;
  disabled?: boolean;
  name?: string;
}

export interface MsRadioGroupContext {
  name: string;
  disabled: boolean;
  modelValue: unknown;
  select(value: unknown): void;
}
