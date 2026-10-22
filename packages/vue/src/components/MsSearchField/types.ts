export type MsSearchFieldSize = "sm" | "md" | "lg";
export type MsSearchFieldVariant = "outline" | "filled" | "flushed";

export interface MsSearchFieldProps {
  /** Input id; defaults to the surrounding MsField's control id or a generated one. */
  id?: string | undefined;
  /** Query text (`v-model`). @default "" */
  modelValue?: string | undefined;
  /** Placeholder text. @default messages `searchField.placeholder` ("Search..." in en-US) */
  placeholder?: string | undefined;
  /** Size scale. @default "md" */
  size?: MsSearchFieldSize | undefined;
  /** Visual variant. @default "outline" */
  variant?: MsSearchFieldVariant | undefined;
  /** Disables the input (and the clear button). @default false */
  disabled?: boolean | undefined;
  /** Makes the input read-only (no clearing). @default false */
  readonly?: boolean | undefined;
  /** Shows a spinner in the actions area (e.g. while results load). @default false */
  loading?: boolean | undefined;
  /** Shows a clear button while there is text; Escape also clears. @default true */
  clearable?: boolean | undefined;
  /** Native `autofocus` on the input. @default false */
  autofocus?: boolean | undefined;
  /**
   * Keyboard hint shown at the end (e.g. "⌘K") while the clear button is hidden. Display
   * only: the shortcut itself must be bound by the app.
   */
  shortcut?: string | undefined;
}

export interface MsSearchFieldEmits {
  /** Fires on every input and when cleared; payload is the query. */
  (e: "update:modelValue", value: string): void;
  /** Enter was pressed; payload is the current query. */
  (e: "search", query: string): void;
  /** The query was cleared (clear button or Escape). */
  (e: "clear"): void;
  /** The input received focus. */
  (e: "focus", event: FocusEvent): void;
  /** The input lost focus. */
  (e: "blur", event: FocusEvent): void;
}
