export type MsSplitDirection = "horizontal" | "vertical";

export interface MsSplitPaneProps {
  direction?: MsSplitDirection;
  split?: number; // percentage 1 to 99
  min?: number;
  max?: number;
}

export interface MsSplitPaneEmits {
  (e: "update:split", split: number): void;
  (e: "resize", split: number): void;
}
