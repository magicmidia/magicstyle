import type { MsSize } from "../MsButton/types.ts";

export type MsDialogSize = Extract<MsSize, "sm" | "md" | "lg" | "xl"> | "full";
export type MsDialogPlacement = "center" | "top" | "bottom";
export type MsDialogTone = "default" | "danger" | "warning" | "success" | "info";
export type MsDialogRole = "dialog" | "alertdialog";

export interface MsDialogProps {
  /** Controls open state (v-model:open). */
  open?: boolean;
  /** Dialog title for accessibility and header display. */
  title?: string;
  /** Dialog description for accessibility and subtext. */
  description?: string;
  /** Size width preset. @default "md" */
  size?: MsDialogSize;
  /** Placement mode: "center" (default), "top", or "bottom" (bottom sheet). */
  placement?: MsDialogPlacement;
  /** Semantic indicator tone: "default", "danger", "warning", "success", "info". */
  tone?: MsDialogTone;
  /** WAI-ARIA role: "dialog" (default) or "alertdialog" (for critical confirmations). */
  role?: MsDialogRole;
  /** Close when the Escape key is pressed. @default true */
  closeOnEscape?: boolean;
  /** Close when clicking outside the dialog content. @default true */
  closeOnOutsideClick?: boolean;
  /** Show the default close button (X) in the header. @default true */
  showClose?: boolean;
}
