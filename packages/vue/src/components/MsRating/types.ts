import type { MsTone } from "../MsButton/types.ts";

export type MsRatingSize = "sm" | "md" | "lg";
export type MsRatingTone = MsTone;

export interface MsRatingProps {
  /**
   * Semantic tone.
   * @default 'warning'
   */
  tone?: MsRatingTone;

  /**
   * Current rating value.
   * @default 0
   */
  modelValue?: number;

  /**
   * Maximum number of rating stars.
   * @default 5
   */
  max?: number;

  /**
   * Sizing scale.
   * @default 'md'
   */
  size?: MsRatingSize;

  /**
   * Whether the rating is read-only.
   * @default false
   */
  readonly?: boolean;

  /**
   * Whether the rating is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface MsRatingEmits {
  /** Fires when a star is clicked or the value is changed with the arrow keys (not when `readonly`/`disabled`); payload is the new rating. */
  (e: "update:modelValue", value: number): void;
  /** Fires alongside `update:modelValue` with the same rating. */
  (e: "change", value: number): void;
}
