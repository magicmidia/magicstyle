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
  (e: "update:modelValue", color: string): void;
  (e: "change", color: string): void;
}
