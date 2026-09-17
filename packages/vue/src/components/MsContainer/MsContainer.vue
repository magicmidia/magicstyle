<script setup lang="ts">
import { computed } from "vue";
import type { MsContainerProps } from "./types.ts";

const props = withDefaults(defineProps<MsContainerProps>(), {
  maxWidth: "xl",
  padded: true,
  as: "div",
});

defineSlots<{
  default?(): unknown;
}>();

const containerClasses = computed(() => [
  "ms-container",
  `ms-container--max-${props.maxWidth}`,
  props.padded ? "ms-container--padded" : "",
]);
</script>

<template>
  <component :is="props.as" :class="containerClasses" data-ms-container>
    <slot />
  </component>
</template>
