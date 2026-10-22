import type { InjectionKey, Ref } from "vue";

/** Semantic color role of the status bar. */
export type MsStatusBarTone = "default" | "info" | "success" | "warning" | "danger";

export interface MsAppShellProps {
  /** Stretches the shell to the full viewport height. @default true */
  fullHeight?: boolean | undefined;
  /** Collapsed state of the shell sidebar, shared with child `MsSidebar` (supports `v-model:sidebarCollapsed`). @default false */
  sidebarCollapsed?: boolean | undefined;
}

export interface MsAppShellEmits {
  /** Fires when the sidebar collapse state is toggled via the shell context; payload is the new collapsed state. */
  (e: "update:sidebarCollapsed", value: boolean): void;
}

/** Context provided by `MsAppShell` to its descendants. */
export interface MsAppShellContext {
  /** Current collapsed state of the shell sidebar. */
  sidebarCollapsed: Ref<boolean>;
  /** Toggles the sidebar collapse state and emits `update:sidebarCollapsed`. */
  toggleSidebarCollapse: () => void;
}

/** Injection key for the `MsAppShell` context. */
export const MS_APP_SHELL_KEY: InjectionKey<MsAppShellContext> = Symbol("MS_APP_SHELL_KEY");

export interface MsTopbarProps {
  /** Fixes the topbar in place while content scrolls. @default false */
  fixed?: boolean | undefined;
}

export interface MsAppShellSidebarProps {
  /** Collapsed state; when set explicitly it overrides the shell's `sidebarCollapsed` context. */
  collapsed?: boolean | undefined;
  /** Expanded width (any CSS length), applied while not collapsed. */
  width?: string | undefined;
  /** Width (any CSS length) applied while collapsed. */
  collapsedWidth?: string | undefined;
}
/** Props of the app-shell `MsSidebar` region. */
export type MsSidebarProps = MsAppShellSidebarProps;

export interface MsNavigationRailProps {
  /** Rail width (any CSS length). */
  width?: string | undefined;
}

export interface MsContentProps {
  /** Applies inner padding to the main content area. @default true */
  padded?: boolean | undefined;
}

export interface MsAsideProps {
  /** Aside width (any CSS length). */
  width?: string | undefined;
}

export interface MsAppShellFooterProps {
  /**
   * Draws the top border (`--ms-color-border-subtle`) that separates the footer from the
   * content; set `false` for a borderless footer. @default true
   */
  bordered?: boolean | undefined;
}
/** Props of the app-shell `MsFooter` region. */
export type MsFooterProps = MsAppShellFooterProps;

export interface MsStatusBarProps {
  /** Semantic color role. @default "default" */
  tone?: MsStatusBarTone | undefined;
}
