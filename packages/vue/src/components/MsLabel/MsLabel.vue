<script setup lang="ts">
import { computed } from "vue";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsLabelProps } from "./types.ts";

const props = withDefaults(defineProps<MsLabelProps>(), {
  required: false,
  optional: false,
  size: "md",
  disabled: false,
});

const t = useMsMessages();

const classes = computed(() => [
  "ms-label",
  `ms-label--${props.size}`,
  {
    "ms-label--disabled": props.disabled,
  },
]);
</script>

<template>
  <label
    :class="classes"
    :for="props.for"
    :data-size="props.size"
    :data-disabled="props.disabled ? '' : undefined"
    :data-required="props.required ? '' : undefined"
  >
    <slot />

    <span
      v-if="props.required"
      class="ms-label__required"
      aria-hidden="true"
      :title="t.label.required"
      >*</span
    >

    <span v-else-if="props.optional" class="ms-label__optional">{{
      props.optionalText ?? t.label.optional
    }}</span>

    <span
      v-if="props.tooltip || $slots.tooltip"
      class="ms-label__tooltip-trigger"
      :title="props.tooltip"
      tabindex="0"
      role="tooltip"
    >
      <slot name="tooltip">
        <svg
          class="ms-label__tooltip-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </slot>
    </span>

    <slot name="extra" />
  </label>
</template>
