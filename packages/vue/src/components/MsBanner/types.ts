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
  /** Optional title text prefix. */
  title?: string | undefined;
  /** Optional primary action button label. */
  actionLabel?: string | undefined;
  /** Allows the banner to be closed by the user. Default: false. */
  dismissible?: boolean | undefined;
}

export interface MsBannerEmits {
  (e: "dismiss"): void;
  (e: "action"): void;
}
