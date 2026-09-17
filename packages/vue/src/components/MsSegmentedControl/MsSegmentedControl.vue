<script setup lang="ts" generic="T extends string | number">
import { computed } from "vue";
import type {
  MsSegmentedControlProps,
  MsSegmentedControlEmits,
  MsSegmentedControlOption,
} from "./types";

const props = withDefaults(defineProps<MsSegmentedControlProps<T>>(), {
  size: "md",
  shape: "rounded",
  tone: "neutral",
  fullWidth: false,
  disabled: false,
});

const emit = defineEmits<MsSegmentedControlEmits<T>>();

const classes = computed(() => [
  "ms-segmented-control",
  `ms-segmented-control--${props.size}`,
  props.shape !== "rounded" ? `ms-segmented-control--${props.shape}` : "",
  props.tone !== "neutral" ? `ms-segmented-control--tone-${props.tone}` : "",
  {
    "ms-segmented-control--full-width": props.fullWidth,
    "ms-segmented-control--disabled": props.disabled,
  },
]);

const selectOption = (option: MsSegmentedControlOption<T>) => {
  if (props.disabled || option.disabled) return;
  emit("update:modelValue", option.value);
  emit("change", option.value);
};

const handleKeyDown = (event: KeyboardEvent, currentIndex: number) => {
  if (props.disabled) return;
  const enabledOptions = props.options.filter((opt) => !opt.disabled);
  if (enabledOptions.length === 0) return;

  let nextIndex = currentIndex;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    nextIndex = (currentIndex + 1) % props.options.length;
    while (props.options[nextIndex]?.disabled && nextIndex !== currentIndex) {
      nextIndex = (nextIndex + 1) % props.options.length;
    }
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    nextIndex = (currentIndex - 1 + props.options.length) % props.options.length;
    while (props.options[nextIndex]?.disabled && nextIndex !== currentIndex) {
      nextIndex = (nextIndex - 1 + props.options.length) % props.options.length;
    }
  }

  const targetOption = props.options[nextIndex];
  if (targetOption && !targetOption.disabled) {
    selectOption(targetOption);
  }
};
</script>

<template>
  <div :class="classes" role="radiogroup" :aria-disabled="disabled ? 'true' : undefined">
    <button
      v-for="(option, index) in options"
      :key="String(option.value)"
      type="button"
      role="radio"
      :aria-checked="modelValue === option.value"
      :tabindex="modelValue === option.value ? 0 : -1"
      :disabled="disabled || option.disabled"
      class="ms-segmented-control__item"
      :class="{ 'is-active': modelValue === option.value }"
      @click="selectOption(option)"
      @keydown="handleKeyDown($event, index)"
    >
      <slot name="option" :option="option" :active="modelValue === option.value">
        <span v-if="option.icon" class="ms-segmented-control__icon" aria-hidden="true">{{
          option.icon
        }}</span>
        <span>{{ option.label }}</span>
      </slot>
    </button>
  </div>
</template>
