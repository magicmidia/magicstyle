<script setup lang="ts">
import { computed } from "vue";
import type { MsPageActionsProps } from "./types";

const props = withDefaults(defineProps<MsPageActionsProps>(), {
  align: "end",
});

const classes = computed(() => [
  "ms-page-actions",
  props.align ? `ms-page-actions--${props.align}` : null,
]);
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
