export interface MsParallaxProps {
  /**
   * Scroll factor applied to the `background` layer offset (larger values move it more).
   * Ignored (no motion) when the user prefers reduced motion. @default 0.3
   */
  speed?: number; // e.g. 0.2 (slower) or 0.8 (faster)
  /** Container height (number in pixels or any CSS length). @default "320px" */
  height?: string | number;
}
