import type { InjectionKey, Ref } from "vue";

export type MsSidebarMenuTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";

export type MsSidebarMenuDensity = "compact" | "normal" | "spacious";
export type MsSidebarMenuShape = "rounded" | "pill" | "square";

export interface MsSidebarMenuItemData {
  id: string;
  label: string;
  icon?: string | undefined;
  badge?: string | number | undefined;
  badgeTone?: MsSidebarMenuTone | undefined;
  href?: string | undefined;
  disabled?: boolean | undefined;
  active?: boolean | undefined;
  open?: boolean | undefined;
  children?: MsSidebarMenuItemData[] | undefined;
}

export interface MsSidebarMenuGroupData {
  title?: string | undefined;
  items: MsSidebarMenuItemData[];
}

export interface MsSidebarMenuProps {
  modelValue?: string | undefined;
  items?: (MsSidebarMenuItemData | MsSidebarMenuGroupData)[] | undefined;
  tone?: MsSidebarMenuTone | undefined;
  density?: MsSidebarMenuDensity | undefined;
  shape?: MsSidebarMenuShape | undefined;
  collapsed?: boolean | undefined;
  accordion?: boolean | undefined;
}

export interface MsSidebarMenuEmits {
  (e: "update:modelValue", value: string): void;
  (e: "select", item: MsSidebarMenuItemData): void;
  (e: "toggle", payload: { id: string; open: boolean }): void;
}

export interface MsSidebarMenuGroupProps {
  title?: string | undefined;
}

export interface MsSidebarMenuItemProps {
  id?: string | undefined;
  label?: string | undefined;
  icon?: string | undefined;
  badge?: string | number | undefined;
  badgeTone?: MsSidebarMenuTone | undefined;
  href?: string | undefined;
  disabled?: boolean | undefined;
  active?: boolean | undefined;
  open?: boolean | undefined;
  hasChildren?: boolean | undefined;
}

export interface MsSidebarMenuContext {
  activeId: Ref<string | undefined>;
  tone: Ref<MsSidebarMenuTone>;
  density: Ref<MsSidebarMenuDensity>;
  shape: Ref<MsSidebarMenuShape>;
  collapsed: Ref<boolean>;
  openMap: Ref<Record<string, boolean>>;
  selectItem: (id: string, item?: MsSidebarMenuItemData) => void;
  toggleOpen: (id: string) => void;
  isItemActive: (id: string) => boolean;
  isItemOpen: (id: string) => boolean;
}

export const sidebarMenuContextKey: InjectionKey<MsSidebarMenuContext> =
  Symbol("msSidebarMenuContext");
