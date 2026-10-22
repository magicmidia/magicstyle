/** An entry of the icon picker catalog. */
export interface MsIconItem {
  /** Stable icon id; this is the `v-model` value. Built-in ids resolve to bundled SVG paths. */
  id: string;
  /** Human-readable name: shown on the trigger when selected, used for search and labels. */
  name: string;
  /** Category used by the category filter buttons. */
  category?: string;
  /** Custom SVG inner markup (paths etc.); sanitized and rendered only on the client. */
  svg?: string;
}

export interface MsIconPickerProps {
  /** Selected icon id (`v-model`). The trigger shows the matching icon and its name. @default "" */
  modelValue?: string;
  /** Icon catalog to pick from. Defaults to the built-in set of ~30 interface icons. */
  icons?: MsIconItem[];
  /** Trigger text when nothing is selected. @default from messages (`iconPicker.placeholder`) */
  placeholder?: string;
  /** Disables the trigger so the picker cannot be opened. @default false */
  disabled?: boolean;
}

export interface MsIconPickerEmits {
  /** Fires when an icon is picked; payload is the icon id. */
  (e: "update:modelValue", value: string): void;
  /** Fires when an icon is picked; payload is the full catalog item. */
  (e: "select", icon: MsIconItem): void;
}
