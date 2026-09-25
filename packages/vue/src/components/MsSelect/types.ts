export type MsSelectSize = "xs" | "sm" | "md" | "lg" | "xl";
export type MsSelectTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";
export type MsSelectVariant = "outline" | "filled" | "flushed";
export type MsSelectShape = "rounded" | "square" | "rounded-sm" | "rounded-lg" | "pill";
export type MsSelectPlacement = "bottom" | "top" | "auto";

/** A selectable option. Extra keys are kept and available in the `option` slot. */
export interface MsSelectOption {
  /** Option value (what `v-model` holds). */
  value: string | number;
  /** Visible text; also what the default search matches. */
  label: string;
  /** Makes the option unselectable and skipped by keyboard navigation. */
  disabled?: boolean | undefined;
  /** Secondary text rendered under the label. */
  description?: string | undefined;
  /** Group the option belongs to (set automatically for options of an `MsSelectGroup`). */
  group?: string | undefined;
  [key: string]: unknown;
}

/** A labelled group of options. */
export interface MsSelectGroup {
  /** Group header text. */
  group: string;
  /** Options inside the group. */
  options: MsSelectOption[];
}

export type MsSelectOptionOrGroup = MsSelectOption | MsSelectGroup;

export interface MsSelectProps {
  /** Selected value (`v-model`): a value, an array of values with `multiple`, or `null`. */
  modelValue?: string | number | (string | number)[] | null | undefined;
  /** Options and option groups to choose from. */
  options?: MsSelectOptionOrGroup[] | undefined;
  /** Allows selecting several values (shown as removable tags). @default false */
  multiple?: boolean | undefined;
  /** Adds a search box to the dropdown that filters the options. @default false */
  searchable?: boolean | undefined;
  /** Shows a clear button while a value is selected. @default false */
  clearable?: boolean | undefined;
  /** Shows a spinner in the control (e.g. while options load). @default false */
  loading?: boolean | undefined;
  /**
   * With `searchable`, offers a "Create …" option for queries without an exact match;
   * choosing it emits `create` and selects the typed text. @default false
   */
  creatable?: boolean | undefined;
  /** Disables the control. */
  disabled?: boolean | undefined;
  /** Marks the control invalid (a parent MsField error also does). */
  invalid?: boolean | undefined;
  /** Text shown while nothing is selected. @default messages `select.placeholder` ("Select..." in en-US) */
  placeholder?: string | undefined;
  /** Placeholder of the dropdown search box. @default messages `select.searchPlaceholder` ("Search..." in en-US) */
  searchPlaceholder?: string | undefined;
  /** Size scale. @default "md" */
  size?: MsSelectSize | undefined;
  /** Accent color for focus and selection. @default "primary" */
  tone?: MsSelectTone | undefined;
  /** Visual variant. @default "outline" */
  variant?: MsSelectVariant | undefined;
  /** Corner geometry of the control. @default "rounded" */
  shape?: MsSelectShape | undefined;
  /** Shorthand for `shape="pill"`. @default false */
  pill?: boolean | undefined;
  /** Side the dropdown opens on: "bottom" or "top" ("auto" currently opens below). @default "bottom" */
  placement?: MsSelectPlacement | undefined;
  /**
   * With `multiple`, the number of tags shown before a "+N more" badge; `0` shows only
   * a count.
   */
  maxTagCount?: number | undefined;
  /** With `multiple`, shows a selection count instead of tags. @default false */
  counter?: boolean | undefined;
  /**
   * With `multiple`, shows every tag until the selection exceeds this number, then only
   * that many tags plus a "+N more" badge (overrides `maxTagCount`).
   */
  conditionalCounter?: number | undefined;
  /** Maximum number of options listed (after filtering); unlimited when unset or 0. */
  searchLimit?: number | undefined;
  /** Minimum query length before the search filters the options. @default 0 */
  minSearchLength?: number | undefined;
  /** Floating label text inside the control (the placeholder shows only while open). */
  floatingLabel?: string | undefined;
  /**
   * Teleports the dropdown (fixed-positioned under the control): `true` for `body` or a
   * CSS selector. Useful inside clipping containers.
   */
  teleport?: boolean | string | undefined;
  /** Leading text/glyph in the control (the `prefix`/`icon` slots replace it). */
  prefix?: string | undefined;
  /** Form field name; a hidden input submits the value (single selection only). */
  name?: string | undefined;
  /** Controlled open state (`v-model:open`); uncontrolled when omitted. */
  open?: boolean | undefined;
  /** Custom search predicate (receives the trimmed, lower-cased query); defaults to a label substring match. */
  filterFn?: ((option: MsSelectOption, query: string) => boolean) | undefined;
}

export interface MsSelectEmits {
  /** The selection changed; `null` (single) or `[]` (multiple) after clearing. */
  (e: "update:modelValue", value: string | number | (string | number)[] | null): void;
  /** The dropdown opened or closed (for `v-model:open`). */
  (e: "update:open", open: boolean): void;
  /** Same payload as `update:modelValue`, for non-v-model listeners. */
  (e: "change", value: string | number | (string | number)[] | null): void;
  /** The search query changed; payload is the query. */
  (e: "search", query: string): void;
  /** A new option was created from the query (`creatable`); payload is its label. */
  (e: "create", label: string): void;
  /** The clear button was used. */
  (e: "clear"): void;
  /** The dropdown opened or closed (alias of `update:open`). */
  (e: "open-change", open: boolean): void;
}
