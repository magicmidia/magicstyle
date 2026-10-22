<script setup lang="ts">
import { computed } from "vue";
import type { MsContentProps } from "./types";

const props = withDefaults(defineProps<MsContentProps>(), {
  padded: true,
});

const classes = computed(() => [
  "ms-content",
  {
    "ms-content--padded": props.padded,
  },
]);

defineSlots<{
  /** Main page content, rendered inside `<main>`. */
  default?(): unknown;
}>();
</script>

<template>
  <main :class="classes">
    <slot />
  </main>
</template>
