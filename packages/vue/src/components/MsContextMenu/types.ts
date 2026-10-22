export interface MsContextMenuItem {
  id?: string;
  label?: string;
  icon?: string;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
  action?: () => void;
}

export interface MsContextMenuProps {
  /**
   * Array of menu action items and dividers.
   */
  items?: MsContextMenuItem[];

  /**
   * Whether context menu triggering is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface MsContextMenuEmits {
  /** Fires when an enabled item is chosen (after its `action` runs); the menu then closes. */
  (e: "select", item: MsContextMenuItem): void;
}
