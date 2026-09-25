export type MsHoverCardPlacement = "bottom" | "top" | "left" | "right";

export interface MsHoverCardProps {
  /** Delay in ms before opening */
  openDelay?: number;
  /** Delay in ms before closing after the pointer leaves */
  closeDelay?: number;
  /** Placement of the floating card relative to the trigger */
  placement?: MsHoverCardPlacement;
  /** Custom card width (e.g. "320px") */
  width?: string | number;
}
