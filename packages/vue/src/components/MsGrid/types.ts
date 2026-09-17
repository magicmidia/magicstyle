export type MsGridCols = 1 | 2 | 3 | 4 | 5 | 6;
export type MsGridGap = "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface MsBentoGridProps {
  cols?: MsGridCols;
  gap?: MsGridGap;
  dense?: boolean;
}

export interface MsBentoItemProps {
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  rowSpan?: 1 | 2 | 3 | 4;
  interactive?: boolean;
  variant?: "default" | "ghost" | "elevated" | "accent";
}

export interface MsMasonryGridProps {
  cols?: number;
  gap?: MsGridGap;
  items?: unknown[];
}
