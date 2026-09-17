export type MsSnippetVariant = "default" | "bordered" | "flat";
export type MsSnippetSize = "sm" | "md" | "lg";
export type MsSnippetTone = "neutral" | "primary" | "success" | "warning" | "danger" | "info";

export interface MsSnippetItem {
  id?: string;
  label: string;
  code: string;
  language?: string;
  prompt?: string;
}

export interface MsSnippetProps {
  /** Single code snippet or command */
  code?: string;
  /** Multi-tab snippets array (e.g. pnpm, npm, yarn, bun) */
  tabs?: MsSnippetItem[];
  /** Active tab index or ID (supports v-model:activeTab) */
  activeTab?: string | number;
  /** Command prompt symbol (default "$ ") */
  prompt?: string;
  /** Whether to copy the prompt symbol along with the code */
  copyPrompt?: boolean;
  /** Timeout in ms to reset copy button state */
  copyTimeout?: number;
  /** Visual variant */
  variant?: MsSnippetVariant;
  /** Component size */
  size?: MsSnippetSize;
  /** Semantic tone accent */
  tone?: MsSnippetTone;
  /** Allow text wrapping */
  wrapLines?: boolean;
  /** Whether copy button is visible */
  copyable?: boolean;
}

export interface MsSnippetEmits {
  (e: "update:activeTab", tab: string | number): void;
  (e: "copy", payload: { code: string; tab?: string | number }): void;
  (e: "tab-change", tab: MsSnippetItem, index: number): void;
}
