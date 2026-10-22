export interface MsCommandItem {
  id: string;
  label: string;
  group?: string;
  /** Icon text/glyph shown before the label. @default "❖" */
  icon?: string;
  shortcut?: string;
  disabled?: boolean;
}

export interface MsCommandPaletteProps {
  /** Open state (`v-model`); Ctrl/⌘+K toggles it when `hotkey` is on. @default false */
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
  /** The palette opened or closed (hotkey, Escape, selection). */
  (e: "update:modelValue", open: boolean): void;
  /** A command was chosen (the palette then closes). */
  (e: "select", item: MsCommandItem): void;
}
