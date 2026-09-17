export type MsGlimpsePlacement = "top" | "bottom" | "left" | "right";

export interface MsGlimpseProps {
  /** Target link URL */
  href?: string;
  /** Link anchor label */
  label?: string;
  /** Preview title */
  title?: string;
  /** Preview description */
  description?: string;
  /** Preview OpenGraph / Thumbnail image URL */
  image?: string;
  /** Custom domain display (e.g. github.com) */
  domain?: string;
  /** Favicon URL */
  favicon?: string;
  /** Badge label (e.g. Docs, v1.2, Repo) */
  badge?: string;
  /** Floating placement */
  placement?: MsGlimpsePlacement;
  /** Delay in ms before opening hovercard */
  showDelay?: number;
  /** Delay in ms before closing hovercard */
  hideDelay?: number;
  /** Whether preview data is currently loading */
  loading?: boolean;
  /** Whether preview hover is disabled */
  disabled?: boolean;
  /** Target attribute for link */
  target?: string;
  /** Rel attribute for link */
  rel?: string;
}

export interface MsGlimpseEmits {
  (e: "open"): void;
  (e: "close"): void;
}
