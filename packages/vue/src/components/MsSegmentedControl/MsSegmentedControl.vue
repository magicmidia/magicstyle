<script setup lang="ts" generic="T extends string | number">
import { computed, nextTick } from "vue";
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

const itemRefs: (HTMLButtonElement | undefined)[] = [];
const setItemRef = (el: unknown, index: number) => {
  itemRefs[index] = el instanceof HTMLButtonElement ? el : undefined;
};

/** Roving tab stop: the selected segment, or the first enabled one when nothing is selected. */
const tabbableIndex = computed(() => {
  const selected = props.options.findIndex(
    (opt) => opt.value === props.modelValue && !opt.disabled,
  );
  if (selected !== -1) return selected;
  return props.options.findIndex((opt) => !opt.disabled);
});

const selectOption = (option: MsSegmentedControlOption<T>) => {
  if (props.disabled || option.disabled) return;
  emit("update:modelValue", option.value);
  emit("change", option.value);
};

const findEnabled = (from: number, step: 1 | -1): number => {
  const count = props.options.length;
  for (let i = 1; i <= count; i++) {
    const index = (from + step * i + count * count) % count;
    if (!props.options[index]?.disabled) return index;
  }
  return -1;
};

const handleKeyDown = (event: KeyboardEvent, currentIndex: number) => {
  if (props.disabled) return;
  const count = props.options.length;
  let nextIndex = -1;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextIndex = findEnabled(currentIndex, 1);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    nextIndex = findEnabled(currentIndex, -1);
  } else if (event.key === "Home") {
    nextIndex = findEnabled(count - 1, 1);
  } else if (event.key === "End") {
    nextIndex = findEnabled(0, -1);
  } else {
    return;
  }

  event.preventDefault();
  const targetOption = props.options[nextIndex];
  if (!targetOption || targetOption.disabled) return;
  selectOption(targetOption);
  void nextTick(() => itemRefs[nextIndex]?.focus());
};
</script>

<template>
  <div :class="classes" role="radiogroup" :aria-disabled="disabled ? 'true' : undefined">
    <input
      v-if="props.name"
      type="hidden"
      :name="props.name"
      :value="modelValue ?? ''"
      :disabled="disabled || undefined"
    />
    <button
      v-for="(option, index) in options"
      :key="String(option.value)"
      :ref="(el) => setItemRef(el, index)"
      type="button"
      role="radio"
      :aria-checked="modelValue === option.value"
      :tabindex="index === tabbableIndex ? 0 : -1"
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
