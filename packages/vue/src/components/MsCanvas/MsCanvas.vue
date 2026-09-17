<script setup lang="ts">
import { computed } from "vue";
import type { MsCanvasProps } from "./types.ts";

const props = withDefaults(defineProps<MsCanvasProps>(), {
  pattern: "dots",
  size: 20,
  interactive: false,
});

const classes = computed(() => [
  "ms-canvas",
  `ms-canvas--${props.pattern}`,
  {
    "ms-canvas--interactive": props.interactive,
  },
]);

const style = computed(() => ({
  "--ms-canvas-size": `${props.size}px`,
}));
</script>

<template>
  <div :class="classes" :style="style" :data-pattern="props.pattern">
    <div class="ms-canvas__pattern" aria-hidden="true" />
    <div class="ms-canvas__content">
      <slot />
    </div>
  </div>
</template>
