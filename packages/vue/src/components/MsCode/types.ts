export type MsCodeTone =
  "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";

export type MsCodeVariant = "subtle" | "outline" | "solid";

export type MsCodeSize = "sm" | "md" | "lg";

export interface MsCodeProps {
  tone?: MsCodeTone;
  variant?: MsCodeVariant;
  size?: MsCodeSize;
  copyable?: boolean;
}

export interface MsCodeEmits {
  (e: "copy", text: string): void;
}
