<script setup lang="ts">
import { computed } from "vue";
import type { MsStatusProps } from "./types.ts";

const props = withDefaults(defineProps<MsStatusProps>(), {
  tone: "success",
  size: "md",
  pulse: false,
});

defineSlots<{
  default?(): unknown;
}>();

const statusClasses = computed(() => [
  "ms-status",
  `ms-status--tone-${props.tone}`,
  `ms-status--size-${props.size}`,
]);
</script>

<template>
  <span :class="statusClasses" data-ms-status>
    <span class="ms-status__indicator" aria-hidden="true">
      <span v-if="props.pulse" class="ms-status__pulse" />
      <span class="ms-status__dot" />
    </span>
    <span v-if="props.label || $slots.default" class="ms-status__label">
      <slot>{{ props.label }}</slot>
    </span>
  </span>
</template>
