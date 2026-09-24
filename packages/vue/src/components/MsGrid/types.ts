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
  /** Espaçamento em pixels (horizontal ou [horizontal, vertical]) */
  gutter?: number | [number, number];
  /** Alinhamento horizontal dos filhos */
  justify?: MsRowJustify;
  /** Alinhamento vertical dos filhos */
  align?: MsRowAlign;
  /** Permite quebra de linha (padrão: true) */
  wrap?: boolean;
}

export interface MsColProps {
  /** Quantidade de colunas ocupadas (1 a 12) */
  span?: number | "auto" | "flex-1";
  /** Quantidade de colunas deslocadas à esquerda (1 a 11) */
  offset?: number;
  /** Ordem flexbox */
  order?: number;
  /** Span em telas pequenas (>= 640px) */
  sm?: number;
  /** Span em telas médias (>= 768px) */
  md?: number;
  /** Span em telas grandes (>= 1024px) */
  lg?: number;
  /** Span em telas extra-grandes (>= 1280px) */
  xl?: number;
}
