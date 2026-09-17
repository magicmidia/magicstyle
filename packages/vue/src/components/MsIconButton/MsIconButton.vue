<script setup lang="ts">
import { computed } from "vue";
import type { MsIconButtonProps, MsIconButtonEmits } from "./types";
import MsSpinner from "../MsSpinner/MsSpinner.vue";

const props = withDefaults(defineProps<MsIconButtonProps>(), {
  variant: "solid",
  tone: "primary",
  size: "md",
  circle: false,
  disabled: false,
  loading: false,
  type: "button",
});

const emit = defineEmits<MsIconButtonEmits>();

const resolvedShape = computed(() => {
  if (props.shape) return props.shape;
  if (props.circle) return "circle";
  return "rounded";
});

const classes = computed(() => [
  "ms-icon-button",
  `ms-icon-button--${props.variant}`,
  `ms-icon-button--${props.tone}`,
  `ms-icon-button--${props.size}`,
  `ms-icon-button--shape-${resolvedShape.value}`,
  {
    "ms-icon-button--circle": resolvedShape.value === "circle",
    "ms-icon-button--active": props.active,
    "is-loading": props.loading,
  },
]);

const isDisabled = computed(() => props.disabled || props.loading);

const spinnerSize = computed(() => {
  if (props.size === "2xs" || props.size === "xs" || props.size === "sm") return "sm";
  if (props.size === "lg" || props.size === "xl") return "lg";
  return "md";
});

const handleClick = (event: MouseEvent) => {
  if (isDisabled.value) {
    event.preventDefault();
    return;
  }
  emit("click", event);
};
</script>

<template>
  <button
    :class="classes"
    :type="type"
    :aria-label="ariaLabel"
    :aria-pressed="active !== undefined ? (active ? 'true' : 'false') : undefined"
    :disabled="isDisabled"
    :aria-disabled="isDisabled ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
    @click="handleClick"
  >
    <MsSpinner v-if="loading" :size="spinnerSize" tone="neutral" />
    <slot v-else />
  </button>
</template>
