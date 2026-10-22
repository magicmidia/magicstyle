import type { MsSize } from "../MsButton/types.ts";

export type MsNativeSelectSize = Extract<MsSize, "sm" | "md" | "lg" | "xl">;
export type MsNativeSelectVariant = "outline" | "filled" | "flushed";
export type MsNativeSelectTone = "default" | "success" | "warning" | "danger";

/** An `<option>` of the native select. */
export interface MsNativeSelectOption {
  /** Option text. */
  label: string;
  /** Option value (the `v-model` value when chosen). */
  value: string | number;
  /** Makes the option unselectable. */
  disabled?: boolean;
}

export interface MsNativeSelectProps {
  /** Selected value (`v-model`). */
  modelValue?: string | number;
  /** Options to render; when empty, the default slot (raw `<option>` elements) is used. */
  options?: MsNativeSelectOption[];
  /** Disabled first option shown while no value is selected. */
  placeholder?: string;
  /** Control height scale. @default "md" */
  size?: MsNativeSelectSize;
  /** Visual variant: "outline", "filled", "flushed". @default "outline" */
  variant?: MsNativeSelectVariant;
  /** Semantic border tone. @default "default" */
  tone?: MsNativeSelectTone;
  /** Full pill rounding. */
  pill?: boolean;
  /** Disables the select. */
  disabled?: boolean;
  /** Native `required` constraint. */
  required?: boolean;
  /** Marks the select invalid (a parent MsField error also does). */
  invalid?: boolean;
  /** Native form field name. */
  name?: string;
}
