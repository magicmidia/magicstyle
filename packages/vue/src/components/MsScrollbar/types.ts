/** Scroll axis (or axes) of the scroll container. */
export type MsScrollbarOrientation = "vertical" | "horizontal" | "both";
/** Scrollbar thickness. */
export type MsScrollbarSize = "thin" | "normal" | "thick";
/** Scrollbar visibility: shown while scrolling, always shown, or hidden. */
export type MsScrollbarVisibility = "auto" | "always" | "none";
/** Color role of the scrollbar thumb. */
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
  /** Root element tag. @default "div" */
  tag?: string | undefined;
  /** Scroll axis (or axes). @default "vertical" */
  orientation?: MsScrollbarOrientation | undefined;
  /** Scrollbar thickness. @default "normal" */
  size?: MsScrollbarSize | undefined;
  /** Visibility; "auto" reveals the scrollbar while scrolling and hides it 1s after it stops. @default "auto" */
  visibility?: MsScrollbarVisibility | undefined;
  /** Color role of the thumb. @default "default" */
  tone?: MsScrollbarTone | undefined;
  /** Enables the scrollbar arrow-button styling. @default false */
  arrows?: boolean | undefined;
  /** Custom track color (any CSS color). */
  trackColor?: string | undefined;
  /** Custom thumb color (any CSS color); the hover color is derived from it. */
  thumbColor?: string | undefined;
  /** Thumb border radius (number in pixels or any CSS length); takes precedence over `radius`. */
  thumbRadius?: string | number | undefined;
  /** Scrollbar border radius (number in pixels or any CSS length); fallback for `thumbRadius`. */
  radius?: string | number | undefined;
  /** Maximum container height (number in pixels or any CSS length). */
  maxHeight?: string | number | undefined;
  /** Maximum container width (number in pixels or any CSS length). */
  maxWidth?: string | number | undefined;
}
