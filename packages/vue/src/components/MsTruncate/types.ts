export type MsTruncatePosition = "end" | "middle";

export interface MsTruncateProps {
  /** Text to truncate (the default slot can replace it for end truncation). @default "" */
  text?: string;
  /** Maximum visible lines; values above 1 use a multi-line clamp. @default 1 */
  lines?: number;
  /**
   * Shows a "show more/less" toggle (with `aria-expanded`) when the text actually overflows.
   * Measured after mount, so server-rendered markup has no toggle. @default false
   */
  expandable?: boolean;
  /** Expanded state (`v-model:expanded`); expanded text is shown in full. @default false */
  expanded?: boolean;
  /** Label of the toggle while collapsed. @default messages `truncate.more` ("Show more" in en-US) */
  expandText?: string;
  /** Label of the toggle while expanded. @default messages `truncate.less` ("Show less" in en-US) */
  collapseText?: string;
  /** Sets the full text as the native `title` tooltip while collapsed. @default true */
  showTooltip?: boolean;
  /**
   * Where the ellipsis goes: "end", or "middle" (single line only, keeps the last
   * `middleChars` characters visible, e.g. for hashes and file names). @default "end"
   */
  position?: MsTruncatePosition;
  /** Characters kept after the ellipsis in `position="middle"`. @default 10 */
  middleChars?: number;
}

export interface MsTruncateEmits {
  /** Fires when the toggle changes the expanded state. */
  (e: "update:expanded", value: boolean): void;
  /** Fires when the toggle is used; payload is the new expanded state. */
  (e: "toggle", expanded: boolean): void;
}
