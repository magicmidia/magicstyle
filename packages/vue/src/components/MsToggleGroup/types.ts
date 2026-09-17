import type { InjectionKey, Ref } from "vue";

export type MsToggleGroupVariant = "solid" | "outline";
export type MsToggleGroupSize = "sm" | "md" | "lg";

export interface MsToggleGroupItemOption {
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface MsToggleGroupProps {
  modelValue?: string | string[];
  multiple?: boolean;
  mandatory?: boolean;
  variant?: MsToggleGroupVariant;
  size?: MsToggleGroupSize;
  disabled?: boolean;
  items?: MsToggleGroupItemOption[];
}

export interface MsToggleGroupEmits {
  (e: "update:modelValue", value: string | string[]): void;
  (e: "change", value: string | string[]): void;
}

export interface MsToggleGroupContext {
  modelValue: Ref<string | string[] | undefined>;
  multiple: Ref<boolean>;
  disabled: Ref<boolean>;
  size: Ref<MsToggleGroupSize>;
  selectItem: (value: string) => void;
}

export const MsToggleGroupKey: InjectionKey<MsToggleGroupContext> = Symbol("MsToggleGroupKey");
