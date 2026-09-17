<template>
  <span
    :class="classes"
    :tabindex="clickable && !disabled ? 0 : undefined"
    :role="clickable ? 'button' : undefined"
    @click="handleClick"
    @keydown.enter.prevent="handleKeyEnter"
    @keydown.space.prevent="handleKeyEnter"
  >
    <span v-if="props.dot" class="ms-tag__dot" aria-hidden="true" />

    <span v-if="$slots.icon || $slots.prefix" class="ms-tag__icon">
      <slot name="icon">
        <slot name="prefix" />
      </slot>
    </span>

    <span class="ms-tag__content">
      <slot />
    </span>

    <span v-if="$slots.suffix" class="ms-tag__suffix">
      <slot name="suffix" />
    </span>

    <button
      v-if="closable"
      type="button"
      class="ms-tag__close"
      aria-label="Remover"
      :disabled="disabled"
      @click.stop="handleClose"
    >
      <svg
        class="ms-tag__close-icon"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4l8 8m0-8l-8 8" />
      </svg>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { MsTagEmits, MsTagProps } from "./types.ts";

defineOptions({
  name: "MsTag",
});

const props = withDefaults(defineProps<MsTagProps>(), {
  variant: "soft",
  tone: "neutral",
  size: "md",
  closable: false,
  clickable: false,
  disabled: false,
  shape: "rounded",
  dot: false,
});

const emit = defineEmits<MsTagEmits>();

function handleClick(event: MouseEvent) {
  if (props.disabled) return;
  if (props.clickable) {
    emit("click", event);
  }
}

function handleKeyEnter(event: Event) {
  if (props.disabled || !props.clickable) return;
  emit("click", event as unknown as MouseEvent);
}

function handleClose(event: MouseEvent) {
  if (props.disabled) return;
  emit("close", event);
}

const classes = computed(() => {
  return [
    "ms-tag",
    `ms-tag--${props.variant}`,
    `ms-tag--${props.tone}`,
    `ms-tag--${props.size}`,
    props.shape !== "rounded" ? `ms-tag--${props.shape}` : null,
    {
      "ms-tag--closable": props.closable,
      "ms-tag--clickable": props.clickable,
      "ms-tag--disabled": props.disabled,
    },
  ];
});
</script>
