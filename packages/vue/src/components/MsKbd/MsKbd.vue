<script setup lang="ts">
import { computed } from "vue";
import type { MsKbdProps } from "./types.ts";

const props = withDefaults(defineProps<MsKbdProps>(), {
  size: "sm",
  variant: "raised",
  tone: "neutral",
});

const classes = computed(() => [
  "ms-kbd",
  `ms-kbd--size-${props.size}`,
  `ms-kbd--variant-${props.variant}`,
  props.tone !== "neutral" ? `ms-kbd--tone-${props.tone}` : null,
]);
</script>

<template>
  <kbd :class="classes">
    <slot />
  </kbd>
</template>
