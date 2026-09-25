import type { MsThemeValues } from "../../theming.ts";
import type { MsMessagesOverride } from "../../i18n/messages.ts";
import type {
  ColorModePreference,
  Contrast,
  Density,
  Direction,
  RadiusDial,
} from "../../composables/use-theme-context.ts";

export interface MsProviderProps {
  /**
   * Visual theme palette. Default: "magic".
   */
  theme?: string;

  /**
   * Color mode preference: "light", "dark", or "system".
   * In DOM, "system" is resolved to "light" or "dark".
   * Default: "system".
   */
  colorMode?: ColorModePreference;

  /**
   * Spatial density scale dial: "compact", "comfortable", "spacious".
   * Default: "comfortable".
   */
  density?: Density;

  /**
   * Contrast level: "normal", "high".
   * Default: "normal".
   */
  contrast?: Contrast;

  /**
   * Corner radius dial: "sharp", "subtle", "medium", "rounded".
   * Default: "medium".
   */
  radius?: RadiusDial;

  /**
   * Text direction: "ltr", "rtl".
   * Default: "ltr".
   */
  dir?: Direction;

  /**
   * Language of the components' built-in strings and Intl formatting (BCP 47).
   * Built-in dictionaries: Portuguese (default), English and Spanish. Inherits from an
   * ancestor provider or `createMsI18n` when omitted.
   */
  locale?: string;

  /** Partial overrides for built-in strings, e.g. `{ select: { empty: "…" } }`. */
  messages?: MsMessagesOverride;

  /**
   * Target element to apply theme data attributes.
   * "root" applies attributes to document.documentElement (useful for top-level app).
   * "wrapper" applies attributes directly to the rendered container element.
   * Default: "wrapper".
   */
  target?: "root" | "wrapper";

  /**
   * HTML element tag when rendering container.
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
