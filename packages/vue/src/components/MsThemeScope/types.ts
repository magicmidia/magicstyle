import type { MsThemeValues } from "../../theming.ts";
import type {
  ColorModePreference,
  Contrast,
  Density,
  Direction,
  RadiusDial,
} from "../../composables/use-theme-context.ts";

export interface MsThemeScopeProps {
  /**
   * Override visual theme for this scope.
   */
  theme?: string;

  /**
   * Override color mode preference: "light", "dark", or "system".
   */
  colorMode?: ColorModePreference;

  /**
   * Override density scale: "compact", "comfortable", "spacious".
   */
  density?: Density;

  /**
   * Override contrast level: "normal", "high".
   */
  contrast?: Contrast;

  /**
   * Override corner radius dial: "sharp", "subtle", "medium", "rounded".
   */
  radius?: RadiusDial;

  /**
   * Override direction: "ltr", "rtl".
   */
  dir?: Direction;

  /**
   * Tag to render for the scope container.
   * Default: "div".
   */
  as?: string;

  /**
   * Runtime theme customization: contract values (see MS_THEME_CONTRACT) applied as
   * CSS variables on this scope. Everything derived (hover, subtle, text…) follows.
   * @example { "color-primary": "#7c3aed", "color-primary-content": "#fff", "radius-field": "10px" }
   */
  overrides?: MsThemeValues;
}
