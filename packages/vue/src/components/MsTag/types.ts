export type MsTagVariant = "soft" | "solid" | "outline";
export type MsTagTone =
  "neutral" | "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "info";
export type MsTagSize = "sm" | "md" | "lg";

export interface MsTagProps {
  /**
   * Visual variant:
   * - "soft": subtle tinted background with matching text (default)
   * - "solid": full tone fill with inverse text
   * - "outline": transparent background with semantic border
   */
  variant?: MsTagVariant;

  /**
   * Semantic tone: "neutral", "primary", "accent", "success", "warning", "danger", "info".
   * Default: "neutral".
   */
  tone?: MsTagTone;

  /**
   * Dimensional scale: "sm" | "md" | "lg".
   * Default: "md".
   */
  size?: MsTagSize;

  /**
   * Whether to display an interactive close/remove button.
   * Default: false.
   */
  closable?: boolean;

  /**
   * Makes the tag a button (`role="button"`, focusable, Enter/Space) that emits `click`.
   * With `closable`, the tag content becomes the button and the close button is its
   * sibling, so controls are never nested.
   * Default: false.
   */
  clickable?: boolean;

  /**
   * Disables tag interaction.
   * Default: false.
   */
  disabled?: boolean;

  /**
   * Geometry shape: "rounded" | "pill" | "square".
   * Default: "rounded".
   */
  shape?: "rounded" | "pill" | "square";

  /**
   * Displays a small colored dot indicator before tag content.
   * Default: false.
   */
  dot?: boolean;
}

export interface MsTagEmits {
  /** The close button was clicked (the tag does not remove itself). */
  (e: "close", event: MouseEvent): void;
  /** A `clickable` tag was activated by click, Enter or Space. */
  (e: "click", event: MouseEvent): void;
}
