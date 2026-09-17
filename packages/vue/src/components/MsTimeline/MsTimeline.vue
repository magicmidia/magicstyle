<script setup lang="ts">
import { computed, provide, toRef } from "vue";
import type { MsTimelineProps } from "./types.ts";
import { MS_TIMELINE_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsTimelineProps>(), {
  direction: "vertical",
});

defineSlots<{
  default?(): unknown;
}>();

provide(MS_TIMELINE_KEY, {
  direction: toRef(props, "direction"),
});

const timelineClasses = computed(() => [
  "ms-timeline",
  `ms-timeline--direction-${props.direction}`,
]);
</script>

<template>
  <ol :class="timelineClasses" data-ms-timeline>
    <slot />
  </ol>
</template>
