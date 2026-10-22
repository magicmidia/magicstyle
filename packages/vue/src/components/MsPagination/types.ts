/** Size scale of the pagination controls. */
export type MsPaginationSize = "sm" | "md" | "lg";

export interface MsPaginationProps {
  /** Total number of items. */
  total: number;
  /** Items per page, used to compute the page count. @default 10 */
  pageSize?: number;
  /** Current 1-based page (`v-model:currentPage`). @default 1 */
  currentPage?: number;
  /** Number of page buttons shown on each side of the current page before collapsing into ellipses. @default 1 */
  siblingCount?: number;
  /** Shows the first/last page buttons. @default true */
  showEdges?: boolean;
  /** Shows a "go to page" input. @default false */
  showJumper?: boolean;
  /** Shows the total item count (overridable via the `total` slot). @default true */
  showTotal?: boolean;
  /** Disables all controls. @default false */
  disabled?: boolean;
  /** Size scale. @default "md" */
  size?: MsPaginationSize;
}

export interface MsPaginationEmits {
  /** Fires when a different valid page is selected; payload is the new 1-based page. */
  (e: "update:currentPage", page: number): void;
  /** Fires alongside `update:currentPage`; payload is the new 1-based page. */
  (e: "change", page: number): void;
}
