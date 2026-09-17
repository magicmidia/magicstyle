export type MsBlockquoteVariant = "bordered" | "card" | "minimal" | "filled";

export type MsBlockquoteTone = "default" | "primary" | "accent" | "warning" | "info";

export type MsBlockquoteSize = "sm" | "md" | "lg";

export interface MsBlockquoteProps {
  cite?: string;
  author?: string;
  authorRole?: string;
  authorAvatar?: string;
  tone?: MsBlockquoteTone;
  variant?: MsBlockquoteVariant;
  size?: MsBlockquoteSize;
  icon?: boolean | string;
}
