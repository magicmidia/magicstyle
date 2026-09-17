export type MsTruncatePosition = "end" | "middle";

export interface MsTruncateProps {
  text?: string;
  lines?: number;
  expandable?: boolean;
  expanded?: boolean;
  expandText?: string;
  collapseText?: string;
  showTooltip?: boolean;
  position?: MsTruncatePosition;
  middleChars?: number;
}

export interface MsTruncateEmits {
  (e: "update:expanded", value: boolean): void;
  (e: "toggle", expanded: boolean): void;
}
