/** Semantic color role of inline code. */
export type MsCodeTone =
  "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";

/** Visual style of inline code. */
export type MsCodeVariant = "subtle" | "outline" | "solid";

/** Size scale of inline code. */
export type MsCodeSize = "sm" | "md" | "lg";

export interface MsCodeProps {
  /** Semantic color role. @default "default" */
  tone?: MsCodeTone;
  /** Visual style. @default "subtle" */
  variant?: MsCodeVariant;
  /** Size scale. @default "md" */
  size?: MsCodeSize;
  /** Shows a button that copies the code text to the clipboard. @default false */
  copyable?: boolean;
}

export interface MsCodeEmits {
  /** Fires after the text was copied to the clipboard; payload is the copied (trimmed) text. */
  (e: "copy", text: string): void;
}
