export type MsBannerTone =
  "primary" | "secondary" | "accent" | "neutral" | "info" | "warning" | "danger" | "success";
export type MsBannerVariant = "soft" | "solid" | "outline";
export type MsBannerPosition = "top" | "bottom" | "inline";

export interface MsBannerProps {
  /** Semantic color tone. Default: "info". */
  tone?: MsBannerTone | undefined;
  /** Visual surface variant. Default: "soft". */
  variant?: MsBannerVariant | undefined;
  /** Display positioning: "top" (sticky header), "bottom" (sticky footer), "inline". Default: "inline". */
  position?: MsBannerPosition | undefined;
  /** Optional bold title before the message; also becomes the region's accessible name. */
  title?: string | undefined;
  /** Optional primary action button label. */
  actionLabel?: string | undefined;
  /** Allows the banner to be closed by the user. Default: false. */
  dismissible?: boolean | undefined;
}

export interface MsBannerEmits {
  /** The dismiss button was clicked (the banner hides itself). */
  (e: "dismiss"): void;
  /** The default `actionLabel` button was clicked. */
  (e: "action"): void;
}
