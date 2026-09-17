export type MsPaginationSize = "sm" | "md" | "lg";

export interface MsPaginationProps {
  total: number;
  pageSize?: number;
  currentPage?: number;
  siblingCount?: number;
  showEdges?: boolean;
  showJumper?: boolean;
  showTotal?: boolean;
  disabled?: boolean;
  size?: MsPaginationSize;
}

export interface MsPaginationEmits {
  (e: "update:currentPage", page: number): void;
  (e: "update:pageSize", size: number): void;
  (e: "change", page: number): void;
}
