export type MsPointerVariant = "dot" | "ring" | "spotlight";

export interface MsPointerProps {
  variant?: MsPointerVariant;
  disabled?: boolean;
}
