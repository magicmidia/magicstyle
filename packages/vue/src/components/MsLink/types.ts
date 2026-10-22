/** Color style of the link. */
export type MsLinkVariant = "default" | "primary" | "muted" | "subtle" | "danger";

/** When the link underline is shown. */
export type MsLinkUnderline = "always" | "hover" | "none";

export interface MsLinkProps {
  /** Link URL (sanitized before rendering). @default "" */
  href?: string;
  /** Color style. @default "primary" */
  variant?: MsLinkVariant;
  /** When the underline is shown. @default "hover" */
  underline?: MsLinkUnderline;
  /** Marks the link as external (new tab + external icon); when omitted it is inferred from an absolute `http(s)://` or `//` href. */
  external?: boolean;
  /** Disables the link: removes href/target, sets `aria-disabled` and blocks clicks. @default false */
  disabled?: boolean;
  /** Native `download` attribute (`true` or a suggested file name). */
  download?: boolean | string;
  /** Native `rel`; external links default to "noopener noreferrer", which is always added for `target="_blank"`. */
  rel?: string;
  /** Native `target`; external links default to "_blank". */
  target?: string;
}

export interface MsLinkEmits {
  /** Fires on click unless the link is disabled; payload is the native event. */
  (e: "click", event: MouseEvent): void;
}
