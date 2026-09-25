/** Characters accepted by the PIN input. */
export type MsPinInputType = "numeric" | "alphanumeric";

/** Size scale of the PIN input. */
export type MsPinInputSize = "sm" | "md" | "lg";

export interface MsPinInputProps {
  /** Entered code (`v-model`). @default "" */
  modelValue?: string;
  /** Number of single-character boxes. @default 4 */
  length?: number;
  /** Accepted characters: digits only, or ASCII letters and digits. @default "numeric" */
  type?: MsPinInputType;
  /** Hides the entered characters (password boxes). @default false */
  mask?: boolean;
  /** Disables all boxes. @default false */
  disabled?: boolean;
  /** Size scale. @default "md" */
  size?: MsPinInputSize;
  /** Text rendered between boxes; empty renders none. @default "" */
  separator?: string;
  /** Focuses the first box on mount. @default false */
  autoFocus?: boolean;
}

export interface MsPinInputEmits {
  /** Fires on every input, deletion or paste; payload is the combined code. */
  (e: "update:modelValue", value: string): void;
  /** Fires when every box is filled; payload is the full code. */
  (e: "complete", value: string): void;
  /** Fires alongside `update:modelValue`; payload is the combined code. */
  (e: "change", value: string): void;
}
