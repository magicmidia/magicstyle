import type { InjectionKey, Ref } from "vue";

/** Color role of the sidebar menu (active item) and item badges. */
export type MsSidebarMenuTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";

/** Vertical spacing of the menu items. */
export type MsSidebarMenuDensity = "compact" | "normal" | "spacious";
/** Border-radius geometry of the menu items. */
export type MsSidebarMenuShape = "rounded" | "pill" | "square";

/** A data-driven menu item (for the `items` prop). */
export interface MsSidebarMenuItemData {
  /** Unique item id; the value selected via `v-model`. */
  id: string;
  /** Item text. */
  label: string;
  /** Icon text/glyph shown before the label. */
  icon?: string | undefined;
  /** Badge content shown after the label. */
  badge?: string | number | undefined;
  /** Color role of the badge. */
  badgeTone?: MsSidebarMenuTone | undefined;
  /** Link URL; renders the item as a sanitized anchor instead of a button. */
  href?: string | undefined;
  /** Disables the item. */
  disabled?: boolean | undefined;
  /** Forces the active style regardless of the selected id. */
  active?: boolean | undefined;
  /** Initial open state of the item's submenu. */
  open?: boolean | undefined;
  /** Submenu items (rendered one level deep). */
  children?: MsSidebarMenuItemData[] | undefined;
}

/** A titled group of data-driven menu items. */
export interface MsSidebarMenuGroupData {
  /** Group heading. */
  title?: string | undefined;
  /** Items listed in the group. */
  items: MsSidebarMenuItemData[];
}

export interface MsSidebarMenuProps {
  /** Id of the active item (`v-model`). */
  modelValue?: string | undefined;
  /** Items and groups to render when no default slot content is given. */
  items?: (MsSidebarMenuItemData | MsSidebarMenuGroupData)[] | undefined;
  /** Color role of the active item. @default "primary" */
  tone?: MsSidebarMenuTone | undefined;
  /** Vertical spacing of the items. @default "normal" */
  density?: MsSidebarMenuDensity | undefined;
  /** Border-radius geometry of the items. @default "rounded" */
  shape?: MsSidebarMenuShape | undefined;
  /** Renders the menu in its collapsed (icon-only) style. @default false */
  collapsed?: boolean | undefined;
  /** Opening a submenu closes the other open submenus. @default false */
  accordion?: boolean | undefined;
}

export interface MsSidebarMenuEmits {
  /** Fires when a leaf item with an id is selected; payload is the item id. */
  (e: "update:modelValue", value: string): void;
  /** Fires when a leaf item is selected; payload is the item data. */
  (e: "select", item: MsSidebarMenuItemData): void;
  /** Fires when an item's submenu is opened or closed; payload has the item id and new open state. */
  (e: "toggle", payload: { id: string; open: boolean }): void;
}

export interface MsSidebarMenuGroupProps {
  /** Group heading (overridable via the `title` slot). */
  title?: string | undefined;
}

export interface MsSidebarMenuItemProps {
  /** Item id; required to take part in the parent menu's selection and open state. */
  id?: string | undefined;
  /** Item text (overridable via the default slot). @default "" */
  label?: string | undefined;
  /** Icon text/glyph shown before the label (overridable via the `icon` slot). */
  icon?: string | undefined;
  /** Badge content shown after the label (overridable via the `badge` slot). */
  badge?: string | number | undefined;
  /** Color role of the badge. */
  badgeTone?: MsSidebarMenuTone | undefined;
  /** Link URL; renders the item as a sanitized anchor instead of a button. */
  href?: string | undefined;
  /** Disables the item. @default false */
  disabled?: boolean | undefined;
  /** Forces the active style regardless of the selected id. */
  active?: boolean | undefined;
  /** Open state of the submenu when the item is not controlled by a parent menu. */
  open?: boolean | undefined;
  /** Marks the item as a submenu parent: shows an arrow and toggles the `sub` slot on click. @default false */
  hasChildren?: boolean | undefined;
}

/** Context provided by `MsSidebarMenu` to its items. */
export interface MsSidebarMenuContext {
  /** Id of the active item. */
  activeId: Ref<string | undefined>;
  /** Color role of the active item. */
  tone: Ref<MsSidebarMenuTone>;
  /** Vertical spacing of the items. */
  density: Ref<MsSidebarMenuDensity>;
  /** Border-radius geometry of the items. */
  shape: Ref<MsSidebarMenuShape>;
  /** Whether the menu is collapsed. */
  collapsed: Ref<boolean>;
  /** Open state of submenus, keyed by item id. */
  openMap: Ref<Record<string, boolean>>;
  /** Marks an item as active and emits `update:modelValue` (and `select` when item data is given). */
  selectItem: (id: string, item?: MsSidebarMenuItemData) => void;
  /** Toggles an item's submenu (honoring `accordion`) and emits `toggle`. */
  toggleOpen: (id: string) => void;
  /** Returns whether the item with the given id is active. */
  isItemActive: (id: string) => boolean;
  /** Returns whether the submenu of the item with the given id is open. */
  isItemOpen: (id: string) => boolean;
}

/** Injection key for the `MsSidebarMenu` context. */
export const sidebarMenuContextKey: InjectionKey<MsSidebarMenuContext> =
  Symbol("msSidebarMenuContext");
