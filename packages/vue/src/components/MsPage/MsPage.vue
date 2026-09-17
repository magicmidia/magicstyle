<script setup lang="ts">
import { computed } from "vue";
import type { MsPageProps } from "./types";

const props = withDefaults(defineProps<MsPageProps>(), {
  fluid: false,
  compact: false,
});

const classes = computed(() => [
  "ms-page",
  {
    "ms-page--fluid": props.fluid,
    "ms-page--compact": props.compact,
  },
]);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
