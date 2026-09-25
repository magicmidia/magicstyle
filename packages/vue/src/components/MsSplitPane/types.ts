/** Layout axis of the split pane: side by side or stacked. */
export type MsSplitDirection = "horizontal" | "vertical";

export interface MsSplitPaneProps {
  /** Layout axis: "horizontal" places panes side by side, "vertical" stacks them. @default "horizontal" */
  direction?: MsSplitDirection;
  /** Size of the first pane as a percentage of the container (`v-model:split`). @default 50 */
  split?: number; // percentage 1 to 99
  /** Minimum first-pane size, in percent. @default 15 */
  min?: number;
  /** Maximum first-pane size, in percent. @default 85 */
  max?: number;
}

export interface MsSplitPaneEmits {
  /** Fires when the split changes by dragging or keyboard; payload is the new rounded, clamped percentage. */
  (e: "update:split", split: number): void;
  /** Fires alongside `update:split`; payload is the new percentage. */
  (e: "resize", split: number): void;
}
