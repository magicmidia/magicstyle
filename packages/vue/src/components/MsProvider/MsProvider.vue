<template>
  <component :is="as" :class="classes" v-bind="wrapperAttributes">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect, onUnmounted } from "vue";
import type { MsProviderProps } from "./types.ts";
import {
  provideThemeContext,
  useSystemColorMode,
  type ColorMode,
  type ColorModePreference,
  type Contrast,
  type Density,
  type Direction,
  type MsThemeContext,
  type RadiusDial,
} from "../../composables/use-theme-context.ts";

defineOptions({
  name: "MsProvider",
});

const props = withDefaults(defineProps<MsProviderProps>(), {
  theme: "magic",
  colorMode: "system",
  density: "comfortable",
  contrast: "normal",
  radius: "medium",
  dir: "ltr",
  target: "wrapper",
  as: "div",
});

const internalTheme = ref<string>(props.theme);
const internalColorMode = ref<ColorModePreference>(props.colorMode);
const internalDensity = ref<Density>(props.density);
const internalContrast = ref<Contrast>(props.contrast);
const internalRadius = ref<RadiusDial>(props.radius);
const internalDir = ref<Direction>(props.dir);

watch(
  () => props.theme,
  (v) => {
    internalTheme.value = v;
  },
);
watch(
  () => props.colorMode,
  (v) => {
    internalColorMode.value = v;
  },
);
watch(
  () => props.density,
  (v) => {
    internalDensity.value = v;
  },
);
watch(
  () => props.contrast,
  (v) => {
    internalContrast.value = v;
  },
);
watch(
  () => props.radius,
  (v) => {
    internalRadius.value = v;
  },
);
watch(
  () => props.dir,
  (v) => {
    internalDir.value = v;
  },
);

const systemColorMode = useSystemColorMode();

const resolvedColorMode = computed<ColorMode>(() => {
  if (internalColorMode.value === "system") {
    return systemColorMode.value;
  }
  return internalColorMode.value;
});

const resolvedAttributes = computed<Record<string, string>>(() => {
  return {
    "data-ms-theme": internalTheme.value,
    "data-ms-color-mode": resolvedColorMode.value,
    "data-ms-density": internalDensity.value,
    "data-ms-contrast": internalContrast.value,
    "data-ms-radius": internalRadius.value,
    dir: internalDir.value,
  };
});

const wrapperAttributes = computed(() => {
  if (props.target === "wrapper") {
    return resolvedAttributes.value;
  }
  return {};
});

const classes = computed(() => {
  return ["ms-provider"];
});

// If target is root, sync attributes to document.documentElement
watchEffect(() => {
  if (props.target === "root" && typeof document !== "undefined") {
    const el = document.documentElement;
    const attrs = resolvedAttributes.value;
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
  }
});

onUnmounted(() => {
  if (props.target === "root" && typeof document !== "undefined") {
    // Optionally clean up attributes if this provider unmounts
  }
});

const context: MsThemeContext = {
  theme: internalTheme,
  colorModePreference: internalColorMode,
  resolvedColorMode,
  density: internalDensity,
  contrast: internalContrast,
  radius: internalRadius,
  dir: internalDir,

  setTheme: (t: string) => {
    internalTheme.value = t;
  },
  setColorMode: (m: ColorModePreference) => {
    internalColorMode.value = m;
  },
  setDensity: (d: Density) => {
    internalDensity.value = d;
  },
  setContrast: (c: Contrast) => {
    internalContrast.value = c;
  },
  setRadius: (r: RadiusDial) => {
    internalRadius.value = r;
  },
  setDir: (d: Direction) => {
    internalDir.value = d;
  },

  resolvedAttributes,
};

provideThemeContext(context);
</script>
