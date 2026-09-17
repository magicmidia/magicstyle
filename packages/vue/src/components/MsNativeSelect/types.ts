import type { MsSize } from "../MsButton/types.ts";

export type MsNativeSelectSize = Extract<MsSize, "sm" | "md" | "lg" | "xl">;
export type MsNativeSelectVariant = "outline" | "filled" | "flushed";
export type MsNativeSelectTone = "default" | "success" | "warning" | "danger";

export interface MsNativeSelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface MsNativeSelectProps {
  modelValue?: string | number;
  options?: MsNativeSelectOption[];
  placeholder?: string;
  /** @default "md" */
  size?: MsNativeSelectSize;
  /** Visual variant: "outline", "filled", "flushed". @default "outline" */
  variant?: MsNativeSelectVariant;
  /** Semantic border tone. @default "default" */
  tone?: MsNativeSelectTone;
  /** Full pill rounding. */
  pill?: boolean;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  name?: string;
}
