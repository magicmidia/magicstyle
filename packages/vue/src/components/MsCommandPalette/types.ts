export interface MsCommandItem {
  id: string;
  label: string;
  group?: string;
  icon?: string;
  shortcut?: string;
  disabled?: boolean;
}

export interface MsCommandPaletteProps {
  modelValue?: boolean;
  /**
   * Commands to list. Without items the palette shows its empty state.
   * @default []
   */
  items?: MsCommandItem[];
  /**
   * Search input placeholder (also the input and listbox accessible name).
   * @default messages.commandPalette.placeholder
   */
  placeholder?: string;
  /**
   * Text shown when no command matches.
   * @default messages.commandPalette.empty
   */
  emptyText?: string;
  /**
   * Registers the global Ctrl/⌘+K shortcut. Disable on secondary instances.
   * @default true
   */
  hotkey?: boolean;
}

export interface MsCommandPaletteEmits {
  (e: "update:modelValue", open: boolean): void;
  (e: "select", item: MsCommandItem): void;
}
