export interface MsMarqueeProps {
  /** Duration of one full scroll cycle, in seconds (higher is slower). @default 25 */
  speed?: number; // duration in seconds
  /** Scrolls in the opposite direction. @default false */
  reverse?: boolean;
  /** Pauses the animation while hovered or while focus is inside. @default true */
  pauseOnHover?: boolean;
  /** Fades the content out at both edges. @default true */
  fade?: boolean;
  /** Gap between repeated items (any CSS length). @default "1.5rem" */
  gap?: string;
  /**
   * Shows a pause/play button (WCAG 2.2.2 pause mechanism, labels from messages
   * `marquee.pause`/`marquee.play`). With `prefers-reduced-motion: reduce` the marquee
   * starts paused. Only disable it when you provide your own pause control. @default true
   */
  controls?: boolean;
}
