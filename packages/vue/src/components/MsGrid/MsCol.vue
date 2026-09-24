<script setup lang="ts">
import { computed } from "vue";
import type { MsColProps } from "./types.ts";

const props = defineProps<MsColProps>();

const classes = computed(() => [
  "ms-col",
  props.span !== undefined ? `ms-col--span-${props.span}` : null,
  props.offset !== undefined ? `ms-col--offset-${props.offset}` : null,
  props.sm !== undefined ? `ms-col--sm-${props.sm}` : null,
  props.md !== undefined ? `ms-col--md-${props.md}` : null,
  props.lg !== undefined ? `ms-col--lg-${props.lg}` : null,
  props.xl !== undefined ? `ms-col--xl-${props.xl}` : null,
]);

const style = computed(() => {
  if (props.order !== undefined) {
    return { order: props.order };
  }
  return {};
});
</script>

<template>
  <div :class="classes" :style="style">
    <slot />
  </div>
</template>
