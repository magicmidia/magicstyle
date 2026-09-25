/** Background pattern drawn behind the canvas content. */
export type MsCanvasPattern =
  | "dots"
  | "grid"
  | "cross"
  | "lines"
  | "isometric"
  | "diagonal-stripes"
  | "honeycomb"
  | "waves"
  | "checkerboard"
  | "plus"
  | "blueprint";

export interface MsCanvasProps {
  /** Background pattern. @default "dots" */
  pattern?: MsCanvasPattern;
  /** Pattern cell size in pixels. @default 20 */
  size?: number;
  /** Enables the interactive canvas styling (`ms-canvas--interactive`). @default false */
  interactive?: boolean;
}
