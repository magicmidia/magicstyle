import type { InjectionKey } from "vue";

export type MsChoiceboxType = "radio" | "checkbox";
export type MsChoiceboxLayout = "vertical" | "horizontal" | "grid";
export type MsChoiceboxCols = 1 | 2 | 3 | 4;
export type MsChoiceboxSize = "sm" | "md" | "lg";
export type MsChoiceboxTone =
  "primary" | "success" | "warning" | "danger" | "info" | "neutral" | "accent";

/** A data-driven item (for the `items` prop); fields mirror `MsChoiceboxItem` props. */
export interface MsChoiceboxItemData {
  /** Value selected by the item. */
  value: string | number;
  /** Item title. */
  title: string;
  /** Secondary text. */
  description?: string;
  /** Small badge next to the title. */
  badge?: string;
  /** Price (or any trailing text) at the end of the header. */
  price?: string;
  /** Icon text/glyph before the title. */
  icon?: string;
  /** Makes the item unselectable. */
  disabled?: boolean;
  /** Item tone override. */
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
  /** Form field name: when set, hidden inputs submit the selected value(s) with a form. */
  name?: string;
}

export interface MsChoiceboxEmits {
  /** The selection changed: a value (radio) or the new array of values (checkbox). */
  (e: "update:modelValue", value: string | number | (string | number)[]): void;
  /** Same payload as `update:modelValue`, for non-v-model listeners. */
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
  /** Registers an item (render order) for roving focus; returns the unregister function. */
  register?: (value: string | number, disabled: () => boolean) => () => void;
  /** Whether the item with this value is the group's tab stop. */
  isTabbable?: (value: string | number) => boolean;
}

export const MS_CHOICEBOX_KEY: InjectionKey<MsChoiceboxContext> = Symbol("MS_CHOICEBOX_KEY");

export interface MsChoiceboxItemProps {
  /** Value toggled in the parent `MsChoicebox` model when the item is chosen. */
  value: string | number;
  /** Item title (rendered as an `h4`; the `title` slot replaces it). @default "" */
  title?: string | undefined;
  /** Secondary text below the header. @default "" */
  description?: string | undefined;
  /** Small badge next to the title. @default "" */
  badge?: string | undefined;
  /** Price (or any trailing text) at the end of the header. @default "" */
  price?: string | undefined;
  /** Icon text/glyph before the title. @default "" */
  icon?: string | undefined;
  /** Makes the item unselectable and removes it from the tab order. @default false */
  disabled?: boolean | undefined;
  /** Tone override; falls back to the group's tone, then "primary". */
  tone?: MsChoiceboxTone | undefined;
  /** Size override; falls back to the group's size, then "md". */
  size?: MsChoiceboxSize | undefined;
  /** Selection behavior override ("radio" or "checkbox"); falls back to the group's type. */
  type?: MsChoiceboxType | undefined;
  /** Indicator position override; falls back to the group's placement, then "left". */
  indicatorPlacement?: ("left" | "right") | undefined;
}
