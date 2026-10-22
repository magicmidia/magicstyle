/** Visual style of the collapse panel. */
export type MsCollapseVariant = "bordered" | "card" | "ghost";

export interface MsCollapseProps {
  /** Open state (`v-model`). @default false */
  modelValue?: boolean;
  /** Header title text (overridable via the `title` or `header` slot). @default "" */
  title?: string;
  /** Disables toggling the panel. @default false */
  disabled?: boolean;
  /** Visual style. @default "bordered" */
  variant?: MsCollapseVariant;
}

export interface MsCollapseEmits {
  /** Fires when the header is clicked to toggle the panel; payload is the new open state. */
  (e: "update:modelValue", open: boolean): void;
  /** Fires alongside `update:modelValue` on each toggle; payload is the new open state. */
  (e: "toggle", open: boolean): void;
}
