export type MsContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "fluid";

export interface MsContainerProps {
  /** Maximum width scale bound to design token breakpoints. Default: "xl". */
  maxWidth?: MsContainerMaxWidth | undefined;
  /** Applies responsive horizontal padding tokens. Default: true. */
  padded?: boolean | undefined;
  /** HTML element tag to render as root. Default: "div". */
  as?: string | undefined;
}
