<script setup lang="ts">
import { computed, provide } from "vue";
import type { MsRowProps } from "./types.ts";

const props = withDefaults(defineProps<MsRowProps>(), {
  wrap: true,
});

const gutterStyle = computed(() => {
  if (!props.gutter) return {};
  if (Array.isArray(props.gutter)) {
    return {
      "--ms-row-gap-x": `${props.gutter[0]}px`,
      "--ms-row-gap-y": `${props.gutter[1]}px`,
    };
  }
  return {
    "--ms-row-gap-x": `${props.gutter}px`,
    "--ms-row-gap-y": `${props.gutter}px`,
  };
});

const classes = computed(() => [
  "ms-row",
  props.wrap === false ? "ms-row--no-wrap" : null,
  props.justify ? `ms-row--justify-${props.justify}` : null,
  props.align ? `ms-row--align-${props.align}` : null,
]);

provide("msRowGutter", props.gutter);
</script>

<template>
  <div :class="classes" :style="gutterStyle">
    <slot />
  </div>
</template>
