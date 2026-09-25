export type MsSearchFieldSize = "sm" | "md" | "lg";
export type MsSearchFieldVariant = "outline" | "filled" | "flushed";

export interface MsSearchFieldProps {
  id?: string | undefined;
  modelValue?: string | undefined;
  /** @default messages `searchField.placeholder` ("Pesquisar..." in pt-BR) */
  placeholder?: string | undefined;
  size?: MsSearchFieldSize | undefined;
  variant?: MsSearchFieldVariant | undefined;
  disabled?: boolean | undefined;
  readonly?: boolean | undefined;
  loading?: boolean | undefined;
  clearable?: boolean | undefined;
  autofocus?: boolean | undefined;
  shortcut?: string | undefined;
}

export interface MsSearchFieldEmits {
  (e: "update:modelValue", value: string): void;
  (e: "search", query: string): void;
  (e: "clear"): void;
  (e: "focus", event: FocusEvent): void;
  (e: "blur", event: FocusEvent): void;
}
