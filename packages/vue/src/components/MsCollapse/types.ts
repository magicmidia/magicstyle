export type MsCollapseVariant = "bordered" | "card" | "ghost";

export interface MsCollapseProps {
  modelValue?: boolean;
  title?: string;
  disabled?: boolean;
  variant?: MsCollapseVariant;
}

export interface MsCollapseEmits {
  (e: "update:modelValue", open: boolean): void;
  (e: "toggle", open: boolean): void;
}
