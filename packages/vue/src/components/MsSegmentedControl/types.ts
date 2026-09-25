/** Size scale of the segmented control. */
export type MsSegmentedControlSize = "xs" | "sm" | "md" | "lg" | "xl";
/** Border-radius geometry of the segmented control. */
export type MsSegmentedControlShape = "rounded" | "pill" | "square";
/** Color role of the active segment. */
export type MsSegmentedControlTone = "neutral" | "primary" | "accent";

/** A selectable segment. */
export interface MsSegmentedControlOption<T = string | number> {
  /** Visible segment text. */
  label: string;
  /** Value emitted when the segment is selected. */
  value: T;
  /** Prevents selecting this segment (skipped by arrow-key navigation). */
  disabled?: boolean | undefined;
  /** Icon text/glyph shown before the label. */
  icon?: string | undefined;
}

export interface MsSegmentedControlProps<T = string | number> {
  /** Selected value (`v-model`). */
  modelValue?: T | undefined;
  /** Segments to render. */
  options: MsSegmentedControlOption<T>[];
  /** Size scale. @default "md" */
  size?: MsSegmentedControlSize | undefined;
  /** Border-radius geometry. @default "rounded" */
  shape?: MsSegmentedControlShape | undefined;
  /** Color role of the active segment. @default "neutral" */
  tone?: MsSegmentedControlTone | undefined;
  /** Stretches the control to the container width. @default false */
  fullWidth?: boolean | undefined;
  /** Disables all segments. @default false */
  disabled?: boolean | undefined;
  /** Form field name; when set, a hidden input submits the selected value with the form. */
  name?: string | undefined;
}

export interface MsSegmentedControlEmits<T = string | number> {
  /** Fires when a segment is selected by click or arrow keys; payload is its value. */
  (e: "update:modelValue", value: T): void;
  /** Fires alongside `update:modelValue`; payload is the selected value. */
  (e: "change", value: T): void;
}
