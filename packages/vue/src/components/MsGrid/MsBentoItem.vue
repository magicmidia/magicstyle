<script setup lang="ts">
import { computed } from "vue";
import type { MsBentoItemProps } from "./types.ts";

const props = withDefaults(defineProps<MsBentoItemProps>(), {
  colSpan: 1,
  rowSpan: 1,
  interactive: false,
  variant: "default",
});

const classes = computed(() => [
  "ms-bento-item",
  `ms-bento-item--col-${props.colSpan}`,
  `ms-bento-item--row-${props.rowSpan}`,
  `ms-bento-item--${props.variant}`,
  {
    "ms-bento-item--interactive": props.interactive,
  },
]);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
