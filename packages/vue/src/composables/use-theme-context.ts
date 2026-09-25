import {
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  type ComputedRef,
  type InjectionKey,
  type Ref,
} from "vue";

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
 * Resolves the OS color scheme. It reads `matchMedia` only after mount (SSR and the
 * first client render agree on "light") and removes its listener on unmount.
 * Providers render `data-ms-color-mode="system"` meanwhile, which CSS resolves
 * through `prefers-color-scheme`, so there is no flash and no hydration mismatch.
 */
export function useSystemColorMode(): Ref<ColorMode> {
  const systemMode = ref<ColorMode>("light");
  if (!getCurrentInstance()) return systemMode;

  let mediaQuery: MediaQueryList | undefined;
  const handler = (event: MediaQueryListEvent) => {
    systemMode.value = event.matches ? "dark" : "light";
  };

  onMounted(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    try {
      mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      systemMode.value = mediaQuery.matches ? "dark" : "light";
      mediaQuery.addEventListener?.("change", handler);
    } catch {
      // Constrained environments without media query support keep "light".
    }
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener?.("change", handler);
  });

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
