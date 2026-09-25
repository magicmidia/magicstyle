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
   * Color mode preference: "light", "dark", "system" or "inherit".
   * "system" renders `data-ms-color-mode="system"`, which CSS resolves through
   * `prefers-color-scheme`. "inherit" (meant for `target="wrapper"`) sets no
   * `data-ms-color-mode`, so the wrapper follows the nearest ancestor's mode (e.g. a
   * nested provider that only changes the locale or density). While `theme` equals the
   * inherited theme, `data-ms-theme` is omitted too, because a theme scope re-declares
   * its light palette; a different `theme` with "inherit" therefore renders light colors.
   * Default: "system".
   */
  colorMode?: ColorModePreference | "inherit";

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
   * Built-in dictionaries: English (default), Portuguese and Spanish. Inherits from an
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
