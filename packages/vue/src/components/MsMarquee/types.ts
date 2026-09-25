export interface MsMarqueeProps {
  /** Duration of one full scroll cycle, in seconds (higher is slower). @default 25 */
  speed?: number; // duration in seconds
  /** Scrolls in the opposite direction. @default false */
  reverse?: boolean;
  /** Pauses the animation while hovered. @default true */
  pauseOnHover?: boolean;
  /** Fades the content out at both edges. @default true */
  fade?: boolean;
  /** Gap between repeated items (any CSS length). @default "1.5rem" */
  gap?: string;
}
