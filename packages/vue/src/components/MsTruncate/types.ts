export type MsTruncatePosition = "end" | "middle";

export interface MsTruncateProps {
  text?: string;
  lines?: number;
  expandable?: boolean;
  expanded?: boolean;
  /** @default messages `truncate.more` ("Show more" in en-US) */
  expandText?: string;
  /** @default messages `truncate.less` ("Show less" in en-US) */
  collapseText?: string;
  showTooltip?: boolean;
  position?: MsTruncatePosition;
  middleChars?: number;
}

export interface MsTruncateEmits {
  (e: "update:expanded", value: boolean): void;
  (e: "toggle", expanded: boolean): void;
}
