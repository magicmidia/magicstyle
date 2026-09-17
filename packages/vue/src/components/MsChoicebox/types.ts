import type { InjectionKey } from "vue";

export type MsChoiceboxType = "radio" | "checkbox";
export type MsChoiceboxLayout = "vertical" | "horizontal" | "grid";
export type MsChoiceboxCols = 1 | 2 | 3 | 4;
export type MsChoiceboxSize = "sm" | "md" | "lg";
export type MsChoiceboxTone =
  "primary" | "success" | "warning" | "danger" | "info" | "neutral" | "accent";

export interface MsChoiceboxItemData {
  value: string | number;
  title: string;
  description?: string;
  badge?: string;
  price?: string;
  icon?: string;
  disabled?: boolean;
  tone?: MsChoiceboxTone;
}

export interface MsChoiceboxProps {
  /** Array of items if not using slot items */
  items?: MsChoiceboxItemData[];
  /** Model value: string/number for radio, array for checkbox */
  modelValue?: string | number | (string | number)[];
  /** Selection type */
  type?: MsChoiceboxType;
  /** Layout direction */
  layout?: MsChoiceboxLayout;
  /** Grid column count when layout="grid" */
  columns?: MsChoiceboxCols;
  /** Size scale */
  size?: MsChoiceboxSize;
  /** Semantic tone */
  tone?: MsChoiceboxTone;
  /** Indicator position */
  indicatorPlacement?: "left" | "right";
  /** Group disabled state */
  disabled?: boolean;
  /** Group form name */
  name?: string;
}

export interface MsChoiceboxEmits {
  (e: "update:modelValue", value: string | number | (string | number)[]): void;
  (e: "change", value: string | number | (string | number)[]): void;
}

export interface MsChoiceboxContext {
  type: MsChoiceboxType;
  size: MsChoiceboxSize;
  tone: MsChoiceboxTone;
  indicatorPlacement: "left" | "right";
  disabled: boolean;
  name: string;
  isSelected: (value: string | number) => boolean;
  toggleValue: (value: string | number) => void;
}

export const MS_CHOICEBOX_KEY: InjectionKey<MsChoiceboxContext> = Symbol("MS_CHOICEBOX_KEY");

export interface MsChoiceboxItemProps {
  value: string | number;
  title?: string | undefined;
  description?: string | undefined;
  badge?: string | undefined;
  price?: string | undefined;
  icon?: string | undefined;
  disabled?: boolean | undefined;
  tone?: MsChoiceboxTone | undefined;
  size?: MsChoiceboxSize | undefined;
  type?: MsChoiceboxType | undefined;
  indicatorPlacement?: ("left" | "right") | undefined;
}
