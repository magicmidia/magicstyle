import type { MsInputTone } from "../MsInput/types.ts";

export interface MsTextareaProps {
  modelValue?: string;
  placeholder?: string;
  rows?: number;
  tone?: MsInputTone;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  name?: string;
}
