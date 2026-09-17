export type MsPinInputType = "numeric" | "alphanumeric";

export type MsPinInputSize = "sm" | "md" | "lg";

export interface MsPinInputProps {
  modelValue?: string;
  length?: number;
  type?: MsPinInputType;
  mask?: boolean;
  disabled?: boolean;
  size?: MsPinInputSize;
  separator?: string;
  autoFocus?: boolean;
}

export interface MsPinInputEmits {
  (e: "update:modelValue", value: string): void;
  (e: "complete", value: string): void;
  (e: "change", value: string): void;
}
