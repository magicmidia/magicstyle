export type MsGridCols = 1 | 2 | 3 | 4 | 5 | 6;
export type MsGridGap = "xs" | "sm" | "md" | "lg" | "xl" | number;

export interface MsBentoGridProps {
  /** Number of grid columns. @default 3 */
  cols?: MsGridCols;
  /** Gap between cells: a spacing token ("xs"–"xl") or pixels. @default "md" */
  gap?: MsGridGap;
  /** Uses `grid-auto-flow: dense` so smaller items back-fill gaps. @default false */
  dense?: boolean;
}

export interface MsBentoItemProps {
  /** Columns the item spans. @default 1 */
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Rows the item spans. @default 1 */
  rowSpan?: 1 | 2 | 3 | 4;
  /** Hover lift styling only; put a link or button inside for real interaction. @default false */
  interactive?: boolean;
  /** Surface style. @default "default" */
  variant?: "default" | "ghost" | "elevated" | "accent";
}

export interface MsMasonryGridProps {
  /** Number of columns; items are distributed round-robin. @default 3 */
  cols?: number;
  /** Gap between items: a spacing token ("xs"–"xl") or pixels. @default "md" */
  gap?: MsGridGap;
  /** Items to lay out; each is passed to the default slot as `item` with its `index`. @default [] */
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
