export type MsSidebarTone = "default" | "neutral" | "primary" | "accent";
export type MsSidebarPosition = "sticky" | "fixed" | "relative";
export type MsSidebarSide = "left" | "right";
export type MsSidebarWidth = "compact" | "normal" | "wide";
export type MsSidebarVariant = "default" | "bordered" | "raised" | "glass";

export interface MsSidebarProps {
  collapsed?: boolean | undefined;
  side?: MsSidebarSide | undefined;
  position?: MsSidebarPosition | undefined;
  width?: MsSidebarWidth | undefined;
  variant?: MsSidebarVariant | undefined;
  tone?: MsSidebarTone | undefined;
  showToggle?: boolean | undefined;
}

export interface MsSidebarEmits {
  (e: "update:collapsed", value: boolean): void;
  (e: "toggle"): void;
}
