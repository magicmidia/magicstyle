import type { MsInputSize, MsInputTone } from "../MsInput/types.ts";

export type MsTextareaResize = "none" | "vertical" | "horizontal" | "both";

export interface MsTextareaProps {
  modelValue?: string | undefined;
  placeholder?: string | undefined;
  rows?: number | undefined;
  tone?: MsInputTone | undefined;
  size?: MsInputSize | undefined;
  resize?: MsTextareaResize | undefined;
  disabled?: boolean | undefined;
  readonly?: boolean | undefined;
  invalid?: boolean | undefined;
  name?: string | undefined;
  maxLength?: number | undefined;
  showCount?: boolean | undefined;
  autoGrow?: boolean | undefined;
  maxRows?: number | undefined;
}

export interface MsTextareaEmits {
  (e: "update:modelValue", value: string): void;
  (e: "input", event: Event): void;
  (e: "change", event: Event): void;
}
