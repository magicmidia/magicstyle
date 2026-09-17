<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { MsCollapseProps, MsCollapseEmits } from "./types.ts";

const props = withDefaults(defineProps<MsCollapseProps>(), {
  modelValue: false,
  title: "",
  disabled: false,
  variant: "bordered",
});

const emit = defineEmits<MsCollapseEmits>();

const isOpen = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
  },
);

const toggle = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
  emit("update:modelValue", isOpen.value);
  emit("toggle", isOpen.value);
};

const classes = computed(() => [
  "ms-collapse",
  `ms-collapse--${props.variant}`,
  {
    "ms-collapse--open": isOpen.value,
    "ms-collapse--disabled": props.disabled,
  },
]);
</script>

<template>
  <div :class="classes" :data-variant="props.variant">
    <button
      type="button"
      class="ms-collapse__header"
      :disabled="props.disabled"
      :aria-expanded="isOpen ? 'true' : 'false'"
      @click="toggle"
    >
      <div class="ms-collapse__title">
        <slot name="header">
          <slot name="title">{{ props.title }}</slot>
        </slot>
      </div>

      <div class="ms-collapse__actions">
        <slot name="extra" />
        <slot name="chevron" :open="isOpen">
          <svg
            class="ms-collapse__chevron"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </slot>
      </div>
    </button>

    <div class="ms-collapse__wrapper" :aria-hidden="!isOpen">
      <div class="ms-collapse__content">
        <div class="ms-collapse__inner">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
