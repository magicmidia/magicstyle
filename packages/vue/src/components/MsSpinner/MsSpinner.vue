<template>
  <span role="status" aria-live="polite" :class="classes">
    <svg
      class="ms-spinner__svg"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle class="ms-spinner__track" cx="12" cy="12" r="9.5" :stroke-width="strokeWidth" />
      <circle
        class="ms-spinner__indicator"
        cx="12"
        cy="12"
        r="9.5"
        :stroke-width="strokeWidth"
        stroke-dasharray="45 20"
        stroke-linecap="round"
      />
    </svg>
    <span class="ms-visually-hidden">{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MsSpinnerProps } from "./types.ts";

defineOptions({
  name: "MsSpinner",
});

const props = withDefaults(defineProps<MsSpinnerProps>(), {
  size: "md",
  tone: "primary",
  thickness: "normal",
  speed: "normal",
  label: "Carregando...",
});

const strokeWidth = computed(() => {
  switch (props.thickness) {
    case "thin":
      return 1.5;
    case "thick":
      return 3.5;
    case "normal":
    default:
      return 2.5;
  }
});

const classes = computed(() => {
  return [
    "ms-spinner",
    `ms-spinner--${props.size}`,
    `ms-spinner--${props.tone}`,
    `ms-spinner--${props.thickness}`,
    props.speed !== "normal" ? `ms-spinner--speed-${props.speed}` : "",
  ];
});
</script>
