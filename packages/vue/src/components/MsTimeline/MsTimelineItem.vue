<script setup lang="ts">
import { computed } from "vue";
import type { MsTimelineItemProps } from "./types.ts";

const props = withDefaults(defineProps<MsTimelineItemProps>(), {
  tone: "primary",
  titleTag: "h4",
  solid: false,
  active: false,
});

defineSlots<{
  /** Rich description; replaces `description`. */
  default?(): unknown;
  /** Custom indicator bullet content. */
  node?(): unknown;
  /** Rich title; replaces `title` (rendered inside `titleTag`). */
  title?(): unknown;
  /** Rich timestamp; replaces `timestamp`. */
  timestamp?(): unknown;
}>();

const itemClasses = computed(() => [
  "ms-timeline-item",
  `ms-timeline-item--tone-${props.tone}`,
  { "ms-timeline-item--solid": props.solid, "ms-timeline-item--active": props.active },
]);
</script>

<template>
  <li :class="itemClasses" :aria-current="props.active ? 'step' : undefined" data-ms-timeline-item>
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

      <component
        :is="props.titleTag"
        v-if="props.title || $slots.title"
        class="ms-timeline-item__title"
      >
        <slot name="title">{{ props.title }}</slot>
      </component>

      <div class="ms-timeline-item__description">
        <slot>{{ props.description }}</slot>
      </div>
    </div>
  </li>
</template>
