import type { MsTone } from "../MsButton/types.ts";

export type MsAlertVariant = "soft" | "solid" | "outline";
export type MsAlertSize = "sm" | "md" | "lg";
export type MsAlertAlign = "center" | "start";
export type MsAlertIconStyle = "plain" | "featured";
export type MsAlertTone = MsTone;

export interface MsAlertProps {
  /** Visual variant. @default "soft" */
  variant?: MsAlertVariant;
  /** Semantic role. @default "info" */
  tone?: MsAlertTone;
  /** Scale size: "sm" | "md" | "lg". @default "md" */
  size?: MsAlertSize;
  /** Vertical alignment of icon and actions: "center" (default) | "start". */
  align?: MsAlertAlign;
  /** Icon presentation style: "plain" | "featured" (badge background). @default "plain" */
  iconStyle?: MsAlertIconStyle;
  /** Primary alert title. */
  title?: string;
  /** Secondary description (can also use default slot). */
  description?: string;
  /** Whether the alert can be closed by the user. @default false */
  dismissible?: boolean;
}
