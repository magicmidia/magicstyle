import type { ComputedRef, InjectionKey, Ref } from "vue";

export type MsTabsVariant = "line" | "pill" | "enclosed" | "solid";
export type MsTabsSize = "sm" | "md" | "lg";
export type MsTabsOrientation = "horizontal" | "vertical";
export type MsTabsActivationMode = "automatic" | "manual";

export interface MsTabsProps {
  /**
   * Controlled active tab value.
   */
  modelValue?: string | number;

  /**
   * Initial active tab value when uncontrolled.
   */
  defaultValue?: string | number;

  /**
   * Visual variant. @default "pill"
   * - "pill": shadcn segmented list — sunken track with a raised active trigger (default).
   * - "line": underline — subtle border with colored active indicator bar.
   * - "enclosed": folder-like tab cards.
   * - "solid": filled high-contrast segmented container.
   */
  variant?: MsTabsVariant;

  /**
   * Scale size: "sm" | "md" | "lg".
   */
  size?: MsTabsSize;

  /**
   * Layout orientation: "horizontal" | "vertical".
   */
  orientation?: MsTabsOrientation;

  /**
   * Whether tabs stretch equally to fill container width.
   */
  fitted?: boolean;

  /**
   * Tab activation behavior when navigating with arrow keys:
   * - "automatic": arrow keys immediately select and focus next tab.
   * - "manual": arrow keys move focus; Enter or Space activates the tab.
   */
  activationMode?: MsTabsActivationMode;

  /**
   * Allow horizontal scrolling on tabs container when tabs exceed available width.
   */
  scrollable?: boolean;

  /**
   * Show left/right navigation arrow buttons when scrollable overflow exists.
   */
  showArrows?: boolean;
}

export interface MsTabsEmits {
  (e: "update:modelValue", value: string | number): void;
  (e: "change", value: string | number): void;
}

export interface MsTabListProps {
  ariaLabel?: string;
  scrollable?: boolean;
  showArrows?: boolean;
}

export interface MsTabProps {
  /**
   * Unique identifier matching corresponding MsTabPanel.
   */
  value: string | number;

  /**
   * Disabled state preventing selection and interaction.
   */
  disabled?: boolean;
}

export interface MsTabPanelsProps {
  as?: string;
}

export interface MsTabPanelProps {
  /**
   * Value corresponding to the associated MsTab trigger.
   */
  value: string | number;

  /**
   * If true, unmounts panel when inactive instead of hiding via display: none.
   */
  lazy?: boolean;
}

export interface TabRegistryItem {
  value: string | number;
  disabled: boolean;
  element: HTMLElement | null;
}

export interface MsTabsContext {
  activeTab: Ref<string | number | undefined>;
  setActiveTab: (value: string | number) => void;
  variant: ComputedRef<MsTabsVariant>;
  size: ComputedRef<MsTabsSize>;
  orientation: ComputedRef<MsTabsOrientation>;
  activationMode: ComputedRef<MsTabsActivationMode>;
  fitted: ComputedRef<boolean>;
  scrollable: ComputedRef<boolean>;
  showArrows: ComputedRef<boolean>;
  getTabId: (value: string | number) => string;
  getPanelId: (value: string | number) => string;
  registerTab: (item: TabRegistryItem) => void;
  unregisterTab: (value: string | number) => void;
  updateTabElement: (value: string | number, el: HTMLElement | null, disabled: boolean) => void;
  /** Panels register after mount so tabs only point `aria-controls` at panels that exist. */
  registerPanel?: (value: string | number, lazy: boolean) => void;
  unregisterPanel?: (value: string | number) => void;
  /** True when the panel for `value` is in the DOM (lazy panels only while selected). */
  hasPanel?: (value: string | number) => boolean;
  onKeyDown: (event: KeyboardEvent, currentValue: string | number) => void;
}

export const TABS_CONTEXT_KEY: InjectionKey<MsTabsContext> = Symbol("ms-tabs-context");
