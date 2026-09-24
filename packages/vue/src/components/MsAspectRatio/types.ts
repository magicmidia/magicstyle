export type MsAspectRatioPreset = "16/9" | "4/3" | "1/1" | "21/9" | "9/16" | (string & {}) | number;

export interface MsAspectRatioProps {
  /** Proporção numérica (ex: 16/9 = 1.777) ou string (ex: "16/9", "4/3", "1/1") */
  ratio?: MsAspectRatioPreset;
}
