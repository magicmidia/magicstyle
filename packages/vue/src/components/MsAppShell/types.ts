import type { InjectionKey, Ref } from "vue";

export type MsStatusBarTone = "default" | "info" | "success" | "warning" | "danger";

export interface MsAppShellProps {
  fullHeight?: boolean | undefined;
  sidebarCollapsed?: boolean | undefined;
}

export interface MsAppShellEmits {
  (e: "update:sidebarCollapsed", value: boolean): void;
}

export interface MsAppShellContext {
  sidebarCollapsed: Ref<boolean>;
  toggleSidebarCollapse: () => void;
}

export const MS_APP_SHELL_KEY: InjectionKey<MsAppShellContext> = Symbol("MS_APP_SHELL_KEY");

export interface MsTopbarProps {
  fixed?: boolean | undefined;
}

export interface MsAppShellSidebarProps {
  collapsed?: boolean | undefined;
  width?: string | undefined;
  collapsedWidth?: string | undefined;
}
export type MsSidebarProps = MsAppShellSidebarProps;

export interface MsNavigationRailProps {
  width?: string | undefined;
}

export interface MsContentProps {
  padded?: boolean | undefined;
}

export interface MsAsideProps {
  width?: string | undefined;
}

export interface MsAppShellFooterProps {
  bordered?: boolean | undefined;
}
export type MsFooterProps = MsAppShellFooterProps;

export interface MsStatusBarProps {
  tone?: MsStatusBarTone | undefined;
}
