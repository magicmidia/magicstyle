/** Viewport corner the floating action button is anchored to. */
export type MsFabPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";

/** A secondary speed-dial action. */
export interface MsFabAction {
  /** Unique action id (used as the render key). */
  id: string;
  /** Accessible label and tooltip of the action button. */
  label?: string;
  /** Icon text/glyph of the action button (falls back to "✦"). */
  icon?: string;
}

export interface MsFabProps {
  /** Viewport corner the button is anchored to. @default "bottom-right" */
  position?: MsFabPosition;
  /** Optional text label shown next to the icon (extended FAB). @default "" */
  label?: string;
  /** Icon text/glyph of the main button (overridable via the `icon` slot). @default "+" */
  icon?: string;
  /** Speed-dial actions; when non-empty, clicking the main button toggles them. @default [] */
  actions?: MsFabAction[];
}

export interface MsFabEmits {
  /** Fires when the main button is clicked (also when it toggles the speed dial). */
  (e: "click"): void;
  /** Fires when a speed-dial action is clicked (the dial then closes); payload is the action. */
  (e: "action-click", action: MsFabAction): void;
}
