export type MsChatBubblePlacement = "start" | "end";
export type MsChatBubbleVariant = "solid" | "soft" | "outline";
export type MsChatBubbleTone =
  "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "danger";

export interface MsChatBubbleProps {
  /**
   * Message alignment: 'start' for received/left, 'end' for sent/right.
   * @default 'start'
   */
  placement?: MsChatBubblePlacement;

  /**
   * Surface fill style.
   * @default 'soft'
   */
  variant?: MsChatBubbleVariant;

  /**
   * Semantic color theme.
   * @default 'neutral'
   */
  tone?: MsChatBubbleTone;

  /**
   * Sender display name.
   */
  name?: string;

  /**
   * Optional timestamp text.
   */
  timestamp?: string;

  /**
   * Delivery status indicator ("sending", "sent" or "read"), with a localized label.
   */
  status?: "sending" | "sent" | "read";

  /**
   * Shows the animated three-dot "is typing" indicator instead of the message content,
   * as a `role="status"` with a localized label (messages `chatBubble.typing`).
   * @default false
   */
  typing?: boolean;
}
