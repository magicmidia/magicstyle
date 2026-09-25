export type MsIconButtonVariant = "solid" | "soft" | "outline" | "ghost";
export type MsIconButtonTone =
  "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "danger";
export type MsIconButtonSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
export type MsIconButtonShape = "rounded" | "circle" | "square";

export interface MsIconButtonProps {
  ariaLabel: string;
  variant?: MsIconButtonVariant;
  tone?: MsIconButtonTone;
  size?: MsIconButtonSize;
  circle?: boolean;
  shape?: MsIconButtonShape;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface MsIconButtonEmits {
  (e: "click", event: MouseEvent): void;
}
