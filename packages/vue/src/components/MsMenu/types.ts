export interface MsMenuItem {
  /** Display label. */
  label: string;
  /** Payload emitted on select. */
  value: unknown;
  disabled?: boolean;
  /** Suffix hint (kbd shortcut, badge). */
  suffix?: string;
}
