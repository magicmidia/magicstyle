<template>
  <span
    :class="classes"
    :tabindex="clickable && !disabled ? 0 : undefined"
    :role="clickable ? 'button' : undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span v-if="props.dot" class="ms-tag__dot" aria-hidden="true" />

    <span v-if="$slots.icon || $slots.prefix" class="ms-tag__icon">
      <slot name="icon">
        <slot name="prefix" />
      </slot>
    </span>

    <span ref="contentRef" class="ms-tag__content">
      <slot />
    </span>

    <span v-if="$slots.suffix" class="ms-tag__suffix">
      <slot name="suffix" />
    </span>

    <button
      v-if="closable"
      type="button"
      class="ms-tag__close"
      :aria-label="removeLabel"
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
import { computed, onMounted, onUpdated, ref } from "vue";
import type { MsTagEmits, MsTagProps } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

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

const t = useMsMessages();

function handleClick(event: MouseEvent) {
  if (props.disabled) return;
  if (props.clickable) {
    emit("click", event);
  }
}

const contentRef = ref<HTMLElement | null>(null);
const contentText = ref("");
const syncContentText = () => {
  contentText.value = contentRef.value?.textContent?.trim() ?? "";
};
onMounted(syncContentText);
onUpdated(syncContentText);

/** "Remove <tag text>" once the text is known; the generic label otherwise (e.g. during SSR). */
const removeLabel = computed(() =>
  contentText.value ? t.value.tag.removeLabel(contentText.value) : t.value.tag.remove,
);

function handleKeydown(event: KeyboardEvent) {
  // Only the tag itself acts as a button; keys from the close button must keep their default.
  if (event.target !== event.currentTarget) return;
  if (props.disabled || !props.clickable) return;
  const key = event.key.toLowerCase();
  if (key !== "enter" && key !== " " && key !== "space" && key !== "spacebar") return;
  event.preventDefault();
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
