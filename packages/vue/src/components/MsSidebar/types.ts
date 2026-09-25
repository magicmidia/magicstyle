/** Color role of the sidebar. */
export type MsSidebarTone = "default" | "neutral" | "primary" | "accent";
/** Sidebar CSS positioning mode. */
export type MsSidebarPosition = "sticky" | "fixed" | "relative";
/** Side of the layout the sidebar is attached to. */
export type MsSidebarSide = "left" | "right";
/** Preset sidebar width. */
export type MsSidebarWidth = "compact" | "normal" | "wide";
/** Sidebar surface style. */
export type MsSidebarVariant = "default" | "bordered" | "raised" | "glass";

export interface MsSidebarProps {
  /** Collapsed state (`v-model:collapsed`); when set explicitly it overrides an enclosing `MsAppShell` context. @default false */
  collapsed?: boolean | undefined;
  /** Side of the layout the sidebar is attached to. @default "left" */
  side?: MsSidebarSide | undefined;
  /** CSS positioning mode. @default "sticky" */
  position?: MsSidebarPosition | undefined;
  /** Preset width. @default "normal" */
  width?: MsSidebarWidth | undefined;
  /** Surface style. @default "default" */
  variant?: MsSidebarVariant | undefined;
  /** Color role. @default "default" */
  tone?: MsSidebarTone | undefined;
  /** Shows a collapse/expand toggle button in the header. @default false */
  showToggle?: boolean | undefined;
}

export interface MsSidebarEmits {
  /** Fires when the toggle button is clicked; payload is the new collapsed state. */
  (e: "update:collapsed", value: boolean): void;
  /** Fires when the toggle button is clicked (also toggles an enclosing `MsAppShell`). */
  (e: "toggle"): void;
}
