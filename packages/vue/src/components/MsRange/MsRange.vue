<script setup lang="ts">
import { computed } from "vue";
import type { MsRangeProps, MsRangeEmits } from "./types.ts";

const props = withDefaults(defineProps<MsRangeProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  showValue: false,
  tone: "primary",
  size: "md",
});

const emit = defineEmits<MsRangeEmits>();

defineSlots<{
  default?(): unknown;
  value?(props: { value: number }): unknown;
}>();

const percentage = computed(() => {
  if (props.max <= props.min) return 0;
  const clamped = Math.min(Math.max(props.modelValue, props.min), props.max);
  return ((clamped - props.min) / (props.max - props.min)) * 100;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const val = Number(target.value);
  emit("update:modelValue", val);
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const val = Number(target.value);
  emit("change", val);
};

const rangeClasses = computed(() => [
  "ms-range",
  `ms-range--tone-${props.tone}`,
  `ms-range--size-${props.size}`,
]);
</script>

<template>
  <div class="ms-range-wrapper" data-ms-range-wrapper>
    <input
      type="range"
      :class="rangeClasses"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :value="props.modelValue"
      :disabled="props.disabled"
      :style="{ '--ms-range-percent': `${percentage}%` }"
      data-ms-range
      @input="handleInput"
      @change="handleChange"
    />

    <span v-if="props.showValue || $slots.value" class="ms-range__value">
      <slot name="value" :value="props.modelValue">{{ props.modelValue }}</slot>
    </span>
  </div>
</template>
