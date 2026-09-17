<script setup lang="ts">
import { computed, inject } from "vue";
import type { MsTimelineItemProps } from "./types.ts";
import { MS_TIMELINE_KEY } from "./types.ts";

const props = withDefaults(defineProps<MsTimelineItemProps>(), {
  tone: "primary",
});

defineSlots<{
  default?(): unknown;
  node?(): unknown;
  title?(): unknown;
  timestamp?(): unknown;
}>();

const timeline = inject(MS_TIMELINE_KEY, null);

const itemClasses = computed(() => ["ms-timeline-item", `ms-timeline-item--tone-${props.tone}`]);
</script>

<template>
  <li :class="itemClasses" data-ms-timeline-item>
    <div class="ms-timeline-item__connector" aria-hidden="true" />

    <div class="ms-timeline-item__node" aria-hidden="true">
      <slot name="node">
        <span>•</span>
      </slot>
    </div>

    <div class="ms-timeline-item__content">
      <div v-if="props.timestamp || $slots.timestamp" class="ms-timeline-item__timestamp">
        <slot name="timestamp">{{ props.timestamp }}</slot>
      </div>

      <h4 v-if="props.title || $slots.title" class="ms-timeline-item__title">
        <slot name="title">{{ props.title }}</slot>
      </h4>

      <div class="ms-timeline-item__description">
        <slot>{{ props.description }}</slot>
      </div>
    </div>
  </li>
</template>
