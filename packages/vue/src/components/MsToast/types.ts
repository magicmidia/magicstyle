export type MsToastTone =
  "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "danger";
export type MsToastPlacement =
  "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";

export interface MsToastOptions {
  id?: string;
  title?: string;
  message: string;
  tone?: MsToastTone;
  placement?: MsToastPlacement;
  duration?: number; // ms, 0 = persistent
  dismissible?: boolean;
}

export interface MsToastItem extends MsToastOptions {
  id: string;
  tone: MsToastTone;
  placement: MsToastPlacement;
  duration: number;
  dismissible: boolean;
}

export interface MsToastProps {
  toast: MsToastItem;
}

export interface MsToastEmits {
  (e: "dismiss", id: string): void;
}
