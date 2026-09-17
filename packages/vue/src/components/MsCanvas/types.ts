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
  pattern?: MsCanvasPattern;
  size?: number;
  interactive?: boolean;
}
