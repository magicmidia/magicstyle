<script setup lang="ts">
import { computed } from "vue";
import type { MsStatusBarProps } from "./types";

const props = withDefaults(defineProps<MsStatusBarProps>(), {
  tone: "default",
});

const classes = computed(() => [
  "ms-status-bar",
  props.tone !== "default" ? `ms-status-bar--${props.tone}` : null,
]);
</script>

<template>
  <div :class="classes" role="status">
    <slot />
  </div>
</template>
