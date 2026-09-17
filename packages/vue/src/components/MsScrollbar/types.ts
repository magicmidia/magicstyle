export type MsScrollbarOrientation = "vertical" | "horizontal" | "both";
export type MsScrollbarSize = "thin" | "normal" | "thick";
export type MsScrollbarVisibility = "auto" | "always" | "none";
export type MsScrollbarTone =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "success"
  | "info"
  | "warning"
  | "danger";

export interface MsScrollbarProps {
  tag?: string | undefined;
  orientation?: MsScrollbarOrientation | undefined;
  size?: MsScrollbarSize | undefined;
  visibility?: MsScrollbarVisibility | undefined;
  tone?: MsScrollbarTone | undefined;
  arrows?: boolean | undefined;
  trackColor?: string | undefined;
  thumbColor?: string | undefined;
  thumbRadius?: string | number | undefined;
  radius?: string | number | undefined;
  maxHeight?: string | number | undefined;
  maxWidth?: string | number | undefined;
}
