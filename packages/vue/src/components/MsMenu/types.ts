export type MsMenuItemTone = "neutral" | "danger" | "success";

export interface MsMenuItem {
  /** Display label. */
  label: string;
  /** Payload emitted on select. */
  value: unknown;
  /** Skipped by keyboard navigation and cannot be selected. */
  disabled?: boolean | undefined;
  /** Suffix hint (kbd shortcut, badge). */
  suffix?: string | undefined;
  /** Prefix hint (icon, emoji, symbol). */
  prefix?: string | undefined;
  /** Semantic tone for destructive or special actions. */
  tone?: MsMenuItemTone | undefined;
  /** Renders a separator divider line before this item. */
  divider?: boolean | undefined;
}
