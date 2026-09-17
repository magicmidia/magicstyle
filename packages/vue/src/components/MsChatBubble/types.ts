export type MsChatBubblePlacement = "start" | "end";
export type MsChatBubbleVariant = "solid" | "soft" | "outline";
export type MsChatBubbleTone = "primary" | "neutral" | "info" | "success" | "warning" | "danger";

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
   * Delivery status indicator.
   */
  status?: "sending" | "sent" | "read";
}
