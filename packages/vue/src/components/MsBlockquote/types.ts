/** Visual style of the blockquote. */
export type MsBlockquoteVariant = "bordered" | "card" | "minimal" | "filled";

/** Semantic color role of the blockquote. */
export type MsBlockquoteTone = "default" | "primary" | "accent" | "warning" | "info";

/** Size scale of the blockquote. */
export type MsBlockquoteSize = "sm" | "md" | "lg";

export interface MsBlockquoteProps {
  /** Visible title of the quote's source, rendered in a `<cite>` in the footer. @default "" */
  cite?: string;
  /** URL of the quote's source, set as the native `cite` attribute of `<blockquote>`. @default "" */
  citeUrl?: string;
  /** Author name shown in the footer (also the avatar alt text). @default "" */
  author?: string;
  /** Author role or title shown below the name. @default "" */
  authorRole?: string;
  /** Author avatar image URL. @default "" */
  authorAvatar?: string;
  /** Semantic color role. @default "default" */
  tone?: MsBlockquoteTone;
  /** Visual style. @default "bordered" */
  variant?: MsBlockquoteVariant;
  /** Size scale. @default "md" */
  size?: MsBlockquoteSize;
  /** Shows the decorative quote icon when truthy; use the `icon` slot for custom content. @default false */
  icon?: boolean | string;
}
