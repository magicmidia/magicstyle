<template>
  <div :class="rootClasses">
    <div v-if="label || showValue || $slots.label || $slots.value" class="ms-progress__header">
      <div class="ms-progress__label">
        <slot name="label">{{ label }}</slot>
      </div>
      <div v-if="showValue || $slots.value" class="ms-progress__value">
        <slot name="value" :percentage="percentage" :value="modelValue">
          {{ isIndeterminate ? "..." : `${percentage}%` }}
        </slot>
      </div>
    </div>

    <div
      role="progressbar"
      :aria-valuenow="isIndeterminate ? undefined : modelValue"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuetext="isIndeterminate ? 'Carregando...' : `${percentage}%`"
      :aria-label="label"
      :class="trackClasses"
    >
      <div class="ms-progress__bar" :style="barStyle">
        <span
          v-if="inlineValue && !isIndeterminate && percentage > 8"
          class="ms-progress__bar-text"
        >
          {{ percentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MsProgressProps } from "./types.ts";

defineOptions({
  name: "MsProgress",
});

const props = withDefaults(defineProps<MsProgressProps>(), {
  min: 0,
  max: 100,
  size: "md",
  tone: "primary",
  shape: "pill",
  gradient: false,
  inlineValue: false,
  indeterminate: false,
  showValue: false,
  striped: false,
  animated: false,
});

const isIndeterminate = computed(() => {
  return props.indeterminate || props.modelValue === undefined;
});

const percentage = computed(() => {
  if (isIndeterminate.value) return 0;
  const range = props.max - props.min;
  if (range <= 0) return 0;
  const val = props.modelValue ?? 0;
  const clamped = Math.min(Math.max(val, props.min), props.max);
  return Math.round(((clamped - props.min) / range) * 100);
});

const barStyle = computed(() => {
  if (isIndeterminate.value) return {};
  return {
    width: `${percentage.value}%`,
  };
});

const rootClasses = computed(() => {
  return [
    "ms-progress",
    `ms-progress--${props.size}`,
    `ms-progress--${props.tone}`,
    `ms-progress--shape-${props.shape}`,
    {
      "ms-progress--gradient": props.gradient,
    },
  ];
});

const trackClasses = computed(() => {
  return [
    "ms-progress__track",
    {
      "ms-progress__track--indeterminate": isIndeterminate.value,
      "ms-progress__track--striped": props.striped,
      "ms-progress__track--animated": props.animated,
    },
  ];
});
</script>
