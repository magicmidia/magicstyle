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

/* --- 12-Column Responsive Grid --- */
export type MsRowJustify =
  "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly";

export type MsRowAlign = "top" | "middle" | "bottom" | "stretch";

export interface MsRowProps {
  /** Spacing in pixels (horizontal or [horizontal, vertical]) */
  gutter?: number | [number, number];
  /** Horizontal alignment of children */
  justify?: MsRowJustify;
  /** Vertical alignment of children */
  align?: MsRowAlign;
  /** Allows wrapping (default: true) */
  wrap?: boolean;
}

export interface MsColProps {
  /** Number of columns spanned (1 to 12) */
  span?: number | "auto" | "flex-1";
  /** Number of columns offset from the left (1 to 11) */
  offset?: number;
  /** Flexbox order */
  order?: number;
  /** Span on small screens (>= 640px) */
  sm?: number;
  /** Span on medium screens (>= 768px) */
  md?: number;
  /** Span on large screens (>= 1024px) */
  lg?: number;
  /** Span on extra-large screens (>= 1280px) */
  xl?: number;
}
