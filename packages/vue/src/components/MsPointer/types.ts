/** Visual style of the custom cursor follower. */
export type MsPointerVariant = "dot" | "ring" | "spotlight";

export interface MsPointerProps {
  /** Visual style of the cursor follower. @default "dot" */
  variant?: MsPointerVariant;
  /** Hides the follower and stops tracking the mouse. @default false */
  disabled?: boolean;
}
