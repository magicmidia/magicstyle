<template>
  <component :is="as" :class="classes" :style="overrideStyle" v-bind="resolvedAttributes">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { MsThemeScopeProps } from "./types.ts";
import { msThemeOverridesToStyle } from "../../theme-overrides.ts";
import {
  provideThemeContext,
  useSystemColorMode,
  useThemeContext,
  type ColorMode,
  type ColorModePreference,
  type Contrast,
  type Density,
  type Direction,
  type MsThemeContext,
  type RadiusDial,
} from "../../composables/use-theme-context.ts";

defineOptions({
  name: "MsThemeScope",
});

const props = withDefaults(defineProps<MsThemeScopeProps>(), {
  as: "div",
});

const parentContext = useThemeContext();
const systemColorMode = useSystemColorMode();

const localTheme = ref<string | undefined>(props.theme);
const localColorMode = ref<ColorModePreference | undefined>(props.colorMode);
const localDensity = ref<Density | undefined>(props.density);
const localContrast = ref<Contrast | undefined>(props.contrast);
const localRadius = ref<RadiusDial | undefined>(props.radius);
const localDir = ref<Direction | undefined>(props.dir);

watch(
  () => props.theme,
  (v) => {
    localTheme.value = v;
  },
);
watch(
  () => props.colorMode,
  (v) => {
    localColorMode.value = v;
  },
);
watch(
  () => props.density,
  (v) => {
    localDensity.value = v;
  },
);
watch(
  () => props.contrast,
  (v) => {
    localContrast.value = v;
  },
);
watch(
  () => props.radius,
  (v) => {
    localRadius.value = v;
  },
);
watch(
  () => props.dir,
  (v) => {
    localDir.value = v;
  },
);

const effectiveTheme = computed<string>(() => {
  return localTheme.value ?? parentContext?.theme.value ?? "magic";
});

const effectiveColorModePref = computed<ColorModePreference>(() => {
  return localColorMode.value ?? parentContext?.colorModePreference.value ?? "system";
});

const effectiveResolvedColorMode = computed<ColorMode>(() => {
  if (effectiveColorModePref.value === "system") {
    return systemColorMode.value;
  }
  return effectiveColorModePref.value;
});

const effectiveDensity = computed<Density>(() => {
  return localDensity.value ?? parentContext?.density.value ?? "comfortable";
});

const effectiveContrast = computed<Contrast>(() => {
  return localContrast.value ?? parentContext?.contrast.value ?? "normal";
});

const effectiveRadius = computed<RadiusDial>(() => {
  return localRadius.value ?? parentContext?.radius.value ?? "medium";
});

const effectiveDir = computed<Direction>(() => {
  return localDir.value ?? parentContext?.dir.value ?? "ltr";
});

const resolvedAttributes = computed<Record<string, string>>(() => {
  return {
    "data-ms-theme": effectiveTheme.value,
    // "system" is resolved by CSS (prefers-color-scheme): identical SSR/client markup, no flash.
    "data-ms-color-mode":
      effectiveColorModePref.value === "system" ? "system" : effectiveResolvedColorMode.value,
    "data-ms-density": effectiveDensity.value,
    "data-ms-contrast": effectiveContrast.value,
    "data-ms-radius": effectiveRadius.value,
    dir: effectiveDir.value,
  };
});

const overrideStyle = computed(() => msThemeOverridesToStyle(props.overrides));

const classes = computed(() => {
  return ["ms-theme-scope"];
});

// Provide child context reflecting overrides
const context: MsThemeContext = {
  theme: effectiveTheme,
  colorModePreference: effectiveColorModePref,
  resolvedColorMode: effectiveResolvedColorMode,
  density: effectiveDensity,
  contrast: effectiveContrast,
  radius: effectiveRadius,
  dir: effectiveDir,

  setTheme: (t: string) => {
    localTheme.value = t;
  },
  setColorMode: (m: ColorModePreference) => {
    localColorMode.value = m;
  },
  setDensity: (d: Density) => {
    localDensity.value = d;
  },
  setContrast: (c: Contrast) => {
    localContrast.value = c;
  },
  setRadius: (r: RadiusDial) => {
    localRadius.value = r;
  },
  setDir: (d: Direction) => {
    localDir.value = d;
  },

  resolvedAttributes,
};

provideThemeContext(context);
</script>
