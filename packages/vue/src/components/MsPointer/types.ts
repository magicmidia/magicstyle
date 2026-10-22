/** Visual style of the custom cursor follower. */
export type MsPointerVariant = "dot" | "ring" | "spotlight";

export interface MsPointerProps {
  /** Visual style of the cursor follower. @default "dot" */
  variant?: MsPointerVariant;
  /**
   * Hides the follower and removes the global mouse listener. The follower is also off
   * when the user prefers reduced motion. @default false
   */
  disabled?: boolean;
}
