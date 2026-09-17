import type { ComputedRef, InjectionKey } from "vue";

export type MsTableDensity = "xs" | "sm" | "md" | "lg" | "xl";
export type MsTableVariant = "default" | "surface" | "flush";
export type MsTableCellAlign = "left" | "center" | "right";
export type MsTableSortDirection = "asc" | "desc" | "none";

export interface MsTableProps {
  /** Enables alternating zebra stripes on rows */
  striped?: boolean | undefined;
  /** Enables borders around all cells */
  bordered?: boolean | undefined;
  /** Enables hover highlight effect on rows. @default true */
  hoverable?: boolean | undefined;
  /** Controls table padding and font scale. @default "md" */
  density?: MsTableDensity | undefined;
  /** Visual container surface style: "default", "surface", "flush". */
  variant?: MsTableVariant | undefined;
  /** Keeps header row fixed during vertical scroll */
  stickyHeader?: boolean | undefined;
  /** Optional accessible table caption */
  caption?: string | undefined;
}

export interface MsTableRowProps {
  /** Highlights the row as selected */
  selected?: boolean | undefined;
  /** Adds pointer cursor and interactive feedback */
  clickable?: boolean | undefined;
}

export interface MsTableHeaderCellProps {
  /** Cell text alignment. @default "left" */
  align?: MsTableCellAlign | undefined;
  /** Enables sortable header indicator */
  sortable?: boolean | undefined;
  /** Current sorting direction. @default "none" */
  sortDirection?: MsTableSortDirection | undefined;
  /** Optional explicit width (e.g. "120px", "20%") */
  width?: string | undefined;
}

export interface MsTableCellProps {
  /** Cell text alignment. @default "left" */
  align?: MsTableCellAlign | undefined;
}

export interface MsTableContext {
  density: ComputedRef<MsTableDensity>;
  striped: ComputedRef<boolean>;
  bordered: ComputedRef<boolean>;
  hoverable: ComputedRef<boolean>;
}

export const MS_TABLE_KEY: InjectionKey<MsTableContext> = Symbol("MsTable");
