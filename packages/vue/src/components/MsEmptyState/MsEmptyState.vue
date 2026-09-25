<template>
  <div :class="classes">
    <div v-if="$slots.icon" :class="iconClasses">
      <slot name="icon" />
    </div>
    <div v-else :class="iconClasses">
      <svg
        class="ms-empty-state__default-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    </div>

    <div v-if="title || $slots.title" class="ms-empty-state__title">
      <slot name="title">{{ title }}</slot>
    </div>

    <div v-if="description || $slots.description" class="ms-empty-state__description">
      <slot name="description">{{ description }}</slot>
    </div>

    <div v-if="$slots.default || $slots.actions" class="ms-empty-state__actions">
      <slot name="actions">
        <slot />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MsEmptyStateProps } from "./types.ts";

defineOptions({
  name: "MsEmptyState",
});

const props = withDefaults(defineProps<MsEmptyStateProps>(), {
  size: "md",
  variant: "dashed",
  iconTone: "neutral",
  ring: false,
});

const classes = computed(() => {
  return ["ms-empty-state", `ms-empty-state--${props.size}`, `ms-empty-state--${props.variant}`];
});

const iconClasses = computed(() => {
  return [
    "ms-empty-state__icon",
    props.iconTone !== "neutral" ? `ms-empty-state__icon--${props.iconTone}` : undefined,
    props.ring ? "ms-empty-state__icon--ring" : undefined,
  ];
});
</script>
