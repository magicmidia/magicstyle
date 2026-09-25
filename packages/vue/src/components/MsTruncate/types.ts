export type MsTruncatePosition = "end" | "middle";

export interface MsTruncateProps {
  text?: string;
  lines?: number;
  expandable?: boolean;
  expanded?: boolean;
  /** @default messages `truncate.more` ("Ver mais" in pt-BR) */
  expandText?: string;
  /** @default messages `truncate.less` ("Ver menos" in pt-BR) */
  collapseText?: string;
  showTooltip?: boolean;
  position?: MsTruncatePosition;
  middleChars?: number;
}

export interface MsTruncateEmits {
  (e: "update:expanded", value: boolean): void;
  (e: "toggle", expanded: boolean): void;
}
