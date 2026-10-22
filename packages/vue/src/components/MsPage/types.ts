export interface MsPageProps {
  /** Removes the max-width constraint so the page spans the full width. @default false */
  fluid?: boolean | undefined;
  /** Uses tighter page spacing. @default false */
  compact?: boolean | undefined;
}

export interface MsPageHeaderProps {
  /** Page title rendered as an `h1` (overridable via the `title` slot). */
  title?: string | undefined;
  /** Supporting text under the title (overridable via the `description` slot). */
  description?: string | undefined;
}

export interface MsPageActionsProps {
  /** Horizontal alignment of the actions. @default "end" */
  align?: "start" | "end" | "center" | undefined;
}
