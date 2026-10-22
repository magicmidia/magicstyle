export type MsDrawerPlacement = "left" | "right" | "top" | "bottom";
export type MsDrawerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface MsDrawerProps {
  /**
   * Controls whether the drawer is open (two-way binding via v-model:open).
   */
  open?: boolean;

  /**
   * Screen edge from which the drawer slides out.
   * @default 'right'
   */
  placement?: MsDrawerPlacement;

  /**
   * Width (or height for top/bottom) dimension preset.
   * @default 'md'
   */
  size?: MsDrawerSize;

  /**
   * Drawer header title.
   */
  title?: string;

  /**
   * Secondary supporting text beneath the title.
   */
  description?: string;

  /**
   * Whether pressing Escape closes the drawer.
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Whether clicking the backdrop closes the drawer.
   * @default true
   */
  closeOnBackdrop?: boolean;

  /**
   * Whether to show the top-right close icon button.
   * @default true
   */
  showClose?: boolean;

  /**
   * Target container for Teleport.
   * @default 'body'
   */
  teleportTo?: string;
}

export interface MsDrawerEmits {
  /** Fires with `false` when the drawer requests to close (close button, Escape or backdrop click). */
  (e: "update:open", value: boolean): void;
  /** Fires after `update:open` whenever the drawer requests to close. */
  (e: "close"): void;
  /** Fires when `open` becomes `true` (including on mount). */
  (e: "open"): void;
}
