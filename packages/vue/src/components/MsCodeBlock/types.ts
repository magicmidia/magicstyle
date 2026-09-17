export type MsCodeBlockVariant = "bordered" | "card" | "ghost";

export interface MsCodeBlockProps {
  code?: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
  wrapLines?: boolean;
  maxHeight?: string | number;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  variant?: MsCodeBlockVariant;
}

export interface MsCodeBlockEmits {
  (e: "copy", code: string): void;
  (e: "toggle-collapse", collapsed: boolean): void;
}
