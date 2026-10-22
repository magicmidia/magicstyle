export interface MsColorPickerProps {
  /**
   * Hex color string (v-model:modelValue).
   * @default '#6366f1'
   */
  modelValue?: string;

  /**
   * Preset palette swatches.
   */
  swatches?: string[];

  /**
   * Whether to display direct text hex input.
   * @default true
   */
  showInput?: boolean;

  /**
   * Whether color picker is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface MsColorPickerEmits {
  /** Fires when a color is picked (native picker, hex input on change, or swatch); payload is the color string. */
  (e: "update:modelValue", color: string): void;
  /** Fires alongside `update:modelValue` with the same color. */
  (e: "change", color: string): void;
}
