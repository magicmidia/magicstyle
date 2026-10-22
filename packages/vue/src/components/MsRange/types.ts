export type MsRangeTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "warning" | "danger" | "info";
export type MsRangeSize = "sm" | "md" | "lg";

export interface MsRangeProps {
  /**
   * Current slider numeric value.
   * @default 0
   */
  modelValue?: number;

  /**
   * Minimum allowable value.
   * @default 0
   */
  min?: number;

  /**
   * Maximum allowable value.
   * @default 100
   */
  max?: number;

  /**
   * Granularity step increment.
   * @default 1
   */
  step?: number;

  /**
   * Whether the slider is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to display the numerical value alongside the slider.
   * @default false
   */
  showValue?: boolean;

  /**
   * Semantic tone color.
   * @default 'primary'
   */
  tone?: MsRangeTone;

  /**
   * Sizing scale.
   * @default 'md'
   */
  size?: MsRangeSize;
}

export interface MsRangeEmits {
  /** Fires continuously while the slider moves (native `input`); payload is the new value. */
  (e: "update:modelValue", value: number): void;
  /** Fires when the user commits a value (native `change`, e.g. on release); payload is the value. */
  (e: "change", value: number): void;
}
