export type MsSelectSize = "xs" | "sm" | "md" | "lg" | "xl";
export type MsSelectTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
export type MsSelectVariant = "outline" | "filled" | "flushed";
export type MsSelectShape = "rounded" | "square" | "rounded-sm" | "rounded-lg" | "pill";
export type MsSelectPlacement = "bottom" | "top" | "auto";

export interface MsSelectOption {
  value: string | number;
  label: string;
  disabled?: boolean | undefined;
  description?: string | undefined;
  group?: string | undefined;
  [key: string]: unknown;
}

export interface MsSelectGroup {
  group: string;
  options: MsSelectOption[];
}

export type MsSelectOptionOrGroup = MsSelectOption | MsSelectGroup;

export interface MsSelectProps {
  modelValue?: string | number | (string | number)[] | null | undefined;
  options?: MsSelectOptionOrGroup[] | undefined;
  multiple?: boolean | undefined;
  searchable?: boolean | undefined;
  clearable?: boolean | undefined;
  loading?: boolean | undefined;
  creatable?: boolean | undefined;
  disabled?: boolean | undefined;
  invalid?: boolean | undefined;
  /** @default messages `select.placeholder` ("Select..." in en-US) */
  placeholder?: string | undefined;
  /** @default messages `select.searchPlaceholder` ("Search..." in en-US) */
  searchPlaceholder?: string | undefined;
  size?: MsSelectSize | undefined;
  tone?: MsSelectTone | undefined;
  variant?: MsSelectVariant | undefined;
  shape?: MsSelectShape | undefined;
  pill?: boolean | undefined;
  placement?: MsSelectPlacement | undefined;
  maxTagCount?: number | undefined;
  counter?: boolean | undefined;
  conditionalCounter?: number | undefined;
  searchLimit?: number | undefined;
  minSearchLength?: number | undefined;
  floatingLabel?: string | undefined;
  teleport?: boolean | string | undefined;
  prefix?: string | undefined;
  name?: string | undefined;
  open?: boolean | undefined;
  filterFn?: ((option: MsSelectOption, query: string) => boolean) | undefined;
}

export interface MsSelectEmits {
  (e: "update:modelValue", value: string | number | (string | number)[] | null): void;
  (e: "update:open", open: boolean): void;
  (e: "change", value: string | number | (string | number)[] | null): void;
  (e: "search", query: string): void;
  (e: "create", label: string): void;
  (e: "clear"): void;
  (e: "open-change", open: boolean): void;
}
