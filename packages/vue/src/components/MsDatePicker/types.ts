export type MsDatePickerMode = "date" | "range" | "time" | "datetime";

export interface MsDatePickerRangeValue {
  start: string;
  end: string;
}

export type MsDatePickerModelValue =
  string | [string, string] | MsDatePickerRangeValue | null | undefined;

export interface MsDatePickerProps {
  /** Model value: date string, [start, end] array, or range object */
  modelValue?: MsDatePickerModelValue;
  /** Picker mode: single date, date range, hour/time only, or mixed datetime */
  mode?: MsDatePickerMode;
  /** Input placeholder text */
  placeholder?: string | undefined;
  /** Minimum selectable date (YYYY-MM-DD) */
  minDate?: string | undefined;
  /** Maximum selectable date (YYYY-MM-DD) */
  maxDate?: string | undefined;
  /** 24-hour format flag for time pickers (default true) */
  format24h?: boolean | undefined;
  /** Step interval for minutes selection (default 5) */
  minuteStep?: number | undefined;
  /** Disabled state */
  disabled?: boolean | undefined;
  /** Show clear button */
  clearable?: boolean | undefined;
}

export interface MsDatePickerEmits {
  (e: "update:modelValue", value: MsDatePickerModelValue): void;
  (e: "change", value: MsDatePickerModelValue): void;
}
