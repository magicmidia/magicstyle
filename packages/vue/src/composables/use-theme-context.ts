import { inject, provide, ref, type ComputedRef, type InjectionKey, type Ref } from "vue";

export type ThemeName = "magic" | "graphite" | (string & {});
export type ColorModePreference = "light" | "dark" | "system";
export type ColorMode = "light" | "dark";
export type Density = "compact" | "comfortable" | "spacious";
export type Contrast = "normal" | "high";
export type RadiusDial = "sharp" | "subtle" | "medium" | "rounded";
export type Direction = "ltr" | "rtl";

export interface MsThemeContext {
  theme: Ref<string>;
  colorModePreference: Ref<ColorModePreference>;
  resolvedColorMode: ComputedRef<ColorMode>;
  density: Ref<Density>;
  contrast: Ref<Contrast>;
  radius: Ref<RadiusDial>;
  dir: Ref<Direction>;

  setTheme: (theme: string) => void;
  setColorMode: (mode: ColorModePreference) => void;
  setDensity: (density: Density) => void;
  setContrast: (contrast: Contrast) => void;
  setRadius: (radius: RadiusDial) => void;
  setDir: (dir: Direction) => void;

  resolvedAttributes: ComputedRef<Record<string, string>>;
}

export const THEME_CONTEXT_KEY: InjectionKey<MsThemeContext> = Symbol("ms-theme-context");

/**
 * Hook to resolve system color mode preference.
 */
export function useSystemColorMode(): Ref<ColorMode> {
  const systemMode = ref<ColorMode>("light");

  if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      systemMode.value = mediaQuery.matches ? "dark" : "light";

      const handler = (e: MediaQueryListEvent) => {
        systemMode.value = e.matches ? "dark" : "light";
      };

      mediaQuery.addEventListener?.("change", handler);
    } catch {
      // Fallback silently if media query fails or in constrained env
    }
  }

  return systemMode;
}

export function provideThemeContext(context: MsThemeContext): void {
  provide(THEME_CONTEXT_KEY, context);
}

export function useThemeContext(): MsThemeContext | undefined {
  return inject(THEME_CONTEXT_KEY, undefined);
}

/** Convenient alias for useThemeContext matching baseline terminology */
export const useMagicStyle = useThemeContext;
