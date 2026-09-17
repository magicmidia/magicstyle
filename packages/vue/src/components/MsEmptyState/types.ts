export type MsEmptyStateSize = "sm" | "md" | "lg";
export type MsEmptyStateVariant = "dashed" | "plain" | "card";
export type MsEmptyStateIconTone = "neutral" | "primary" | "success" | "warning" | "danger";

export interface MsEmptyStateProps {
  /**
   * Main title heading of the empty state.
   */
  title?: string;

  /**
   * Secondary supporting text explaining why content is missing or action to take.
   */
  description?: string;

  /**
   * Scale size: "sm" | "md" | "lg".
   * Default: "md".
   */
  size?: MsEmptyStateSize;

  /**
   * Container visual style:
   * - "dashed": subtle dashed border outline (default)
   * - "plain": no border, transparent background
   * - "card": solid border with elevation shadow
   */
  variant?: MsEmptyStateVariant;

  /**
   * Semantic tone for the icon badge.
   * Default: "neutral".
   */
  iconTone?: MsEmptyStateIconTone;
}
