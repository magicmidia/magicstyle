<script setup lang="ts">
import { computed } from "vue";
import type { MsProgressRadialProps } from "./types.ts";

const props = withDefaults(defineProps<MsProgressRadialProps>(), {
  value: 0,
  max: 100,
  size: "md",
  tone: "primary",
  strokeWidth: 6,
  indeterminate: false,
  showValue: true,
});

defineSlots<{
  default?(): unknown;
}>();

const sizeDimensions: Record<string, number> = {
  sm: 40,
  md: 64,
  lg: 96,
  xl: 128,
};

const diameter = computed(() => sizeDimensions[props.size] || 64);
const radius = computed(() => (diameter.value - props.strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);

const percentage = computed(() => {
  if (props.max <= 0) return 0;
  const clamped = Math.min(Math.max(props.value, 0), props.max);
  return Math.round((clamped / props.max) * 100);
});

const strokeDashoffset = computed(() => {
  if (props.indeterminate) return 0;
  return circumference.value - (percentage.value / 100) * circumference.value;
});

const radialClasses = computed(() => [
  "ms-progress-radial",
  `ms-progress-radial--size-${props.size}`,
  `ms-progress-radial--tone-${props.tone}`,
  props.indeterminate ? "ms-progress-radial--indeterminate" : "",
]);
</script>

<template>
  <div
    :class="radialClasses"
    role="progressbar"
    :aria-valuenow="props.indeterminate ? undefined : percentage"
    :aria-valuemin="0"
    :aria-valuemax="props.max"
    data-ms-progress-radial
  >
    <svg
      class="ms-progress-radial__svg"
      :width="diameter"
      :height="diameter"
      :viewBox="`0 0 ${diameter} ${diameter}`"
    >
      <!-- Background track -->
      <circle
        class="ms-progress-radial__track"
        :cx="diameter / 2"
        :cy="diameter / 2"
        :r="radius"
        :stroke-width="props.strokeWidth"
      />
      <!-- Progress Fill -->
      <circle
        class="ms-progress-radial__fill"
        :cx="diameter / 2"
        :cy="diameter / 2"
        :r="radius"
        :stroke-width="props.strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
      />
    </svg>

    <div v-if="(showValue && !indeterminate) || $slots.default" class="ms-progress-radial__label">
      <slot>{{ percentage }}%</slot>
    </div>
  </div>
</template>
