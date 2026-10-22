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
  /** Input placeholder text (defaults to the messages `datePicker.placeholder*` for the mode) */
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
  /** Fires when a value is picked or cleared: a `YYYY-MM-DD` date, a `[start, end]` tuple (range), `HH:mm` (time), `YYYY-MM-DD HH:mm` (datetime), or `""` when cleared. */
  (e: "update:modelValue", value: MsDatePickerModelValue): void;
  /** Fires alongside `update:modelValue` with the same payload. */
  (e: "change", value: MsDatePickerModelValue): void;
}
