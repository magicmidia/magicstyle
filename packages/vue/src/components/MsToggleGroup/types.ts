import type { InjectionKey, Ref } from "vue";

/** Visual style of the toggle group. */
export type MsToggleGroupVariant = "solid" | "outline";
/** Size scale of the toggle group. */
export type MsToggleGroupSize = "sm" | "md" | "lg";

/** A data-driven toggle item (for the `items` prop). */
export interface MsToggleGroupItemOption {
  /** Value selected by the item. */
  value: string;
  /** Item text (falls back to `value`). */
  label?: string;
  /** Disables the item. */
  disabled?: boolean;
}

export interface MsToggleGroupProps {
  /** Selected value (`v-model`): a string, or an array of strings when `multiple` is set. */
  modelValue?: string | string[];
  /** Allows selecting several items at once. @default false */
  multiple?: boolean;
  /** Prevents deselecting the last selected item. @default false */
  mandatory?: boolean;
  /** Visual style. @default "solid" */
  variant?: MsToggleGroupVariant;
  /** Size scale. @default "md" */
  size?: MsToggleGroupSize;
  /** Disables all items. @default false */
  disabled?: boolean;
  /** Items to render when no default slot content is given. @default [] */
  items?: MsToggleGroupItemOption[];
}

export interface MsToggleGroupEmits {
  /** Fires when an item is toggled; payload is the new value (`""` when deselected in single mode, array in multiple mode). */
  (e: "update:modelValue", value: string | string[]): void;
  /** Fires alongside `update:modelValue` with the same payload. */
  (e: "change", value: string | string[]): void;
}

/** Context provided by `MsToggleGroup` to its items. */
export interface MsToggleGroupContext {
  /** Current selected value(s). */
  modelValue: Ref<string | string[] | undefined>;
  /** Whether multiple selection is enabled. */
  multiple: Ref<boolean>;
  /** Whether the whole group is disabled. */
  disabled: Ref<boolean>;
  /** Size scale of the group. */
  size: Ref<MsToggleGroupSize>;
  /** Toggles the item with the given value and emits the new selection. */
  selectItem: (value: string) => void;
}

/** Injection key for the `MsToggleGroup` context. */
export const MsToggleGroupKey: InjectionKey<MsToggleGroupContext> = Symbol("MsToggleGroupKey");
