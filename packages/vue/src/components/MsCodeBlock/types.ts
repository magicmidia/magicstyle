/** Visual style of the code block. */
export type MsCodeBlockVariant = "bordered" | "card" | "ghost";

export interface MsCodeBlockProps {
  /** Source code to render with built-in syntax highlighting; when empty, the default slot is rendered instead. @default "" */
  code?: string;
  /** Language label shown in the header; also enables `#` comments for shell/Python/YAML-like languages. @default "" */
  language?: string;
  /** File name shown in the header. @default "" */
  filename?: string;
  /** Shows a line-number gutter. @default true */
  showLineNumbers?: boolean;
  /** Shows a header button that copies `code` to the clipboard. @default true */
  copyable?: boolean;
  /** Wraps long lines instead of scrolling horizontally. @default false */
  wrapLines?: boolean;
  /** Maximum body height (number in pixels or any CSS length); ignored while collapsed. */
  maxHeight?: string | number;
  /** Adds a footer button to expand/collapse the block. @default false */
  collapsible?: boolean;
  /** Initial collapsed state when `collapsible` is set. @default false */
  defaultCollapsed?: boolean;
  /** Visual style. @default "bordered" */
  variant?: MsCodeBlockVariant;
}

export interface MsCodeBlockEmits {
  /** Fires after `code` was copied to the clipboard; payload is the copied code. */
  (e: "copy", code: string): void;
  /** Fires when the expand/collapse button is clicked; payload is the new collapsed state. */
  (e: "toggle-collapse", collapsed: boolean): void;
}
