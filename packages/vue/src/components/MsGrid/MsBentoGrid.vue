<script setup lang="ts">
import { computed } from "vue";
import type { MsBentoGridProps } from "./types.ts";

const props = withDefaults(defineProps<MsBentoGridProps>(), {
  cols: 3,
  gap: "md",
  dense: false,
});

const gapValues: Record<string, string> = {
  xs: "var(--ms-space-2, 8px)",
  sm: "var(--ms-space-3, 12px)",
  md: "var(--ms-space-4, 16px)",
  lg: "var(--ms-space-6, 24px)",
  xl: "var(--ms-space-8, 32px)",
};

const style = computed(() => {
  const gapVal =
    typeof props.gap === "number" ? `${props.gap}px` : gapValues[props.gap] || props.gap;
  return {
    "--ms-bento-cols": props.cols,
    "--ms-bento-gap": gapVal,
  };
});

const classes = computed(() => [
  "ms-bento-grid",
  {
    "ms-bento-grid--dense": props.dense,
  },
]);
</script>

<template>
  <div :class="classes" :style="style">
    <slot />
  </div>
</template>
