export type MsConfirmTone =
  "primary" | "secondary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger";

export interface MsConfirmDialogProps {
  /**
   * Controlled open state.
   */
  open?: boolean;

  /**
   * Tone theme affecting the icon and confirmation button.
   * @default 'danger'
   */
  tone?: MsConfirmTone;

  /**
   * Header title text.
   * @default messages `confirmDialog.title` ("Confirm action" in en-US)
   */
  title?: string;

  /**
   * Body explanatory message.
   */
  message?: string;

  /**
   * Label for the confirmation action button.
   * @default messages `confirmDialog.confirm` ("Confirm" in en-US)
   */
  confirmLabel?: string;

  /**
   * Label for the cancel button.
   * @default messages `confirmDialog.cancel` ("Cancel" in en-US)
   */
  cancelLabel?: string;

  /**
   * Whether the confirm action is in a pending/loading state.
   * @default false
   */
  loading?: boolean;

  /**
   * Whether clicking backdrop dismisses dialog.
   * @default true
   */
  closeOnBackdrop?: boolean;

  /**
   * Whether pressing Escape key dismisses dialog.
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Teleport target selector.
   * @default 'body'
   */
  teleportTo?: string;
}

export interface MsConfirmDialogEmits {
  /** Fires with `false` when the dialog is cancelled (cancel button, Escape or backdrop click); not while `loading`. */
  (e: "update:open", value: boolean): void;
  /** Fires when the confirm button is clicked; the dialog stays open until `open` is set to `false`. */
  (e: "confirm"): void;
  /** Fires after `update:open` when the dialog is cancelled. */
  (e: "cancel"): void;
}
