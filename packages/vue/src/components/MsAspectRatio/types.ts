export type MsAspectRatioPreset = "16/9" | "4/3" | "1/1" | "21/9" | "9/16" | (string & {}) | number;

export interface MsAspectRatioProps {
  /** Numeric ratio (e.g. 16/9 = 1.777) or string (e.g. "16/9", "4/3", "1/1") */
  ratio?: MsAspectRatioPreset;
}
