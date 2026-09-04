<script setup lang="ts">
import { computed, useSlots } from "vue";
import type { MsButtonProps } from "./types.ts";

const props = withDefaults(defineProps<MsButtonProps>(), {
  variant: "solid",
  tone: "primary",
  size: "md",
  type: "button",
});

const slots = useSlots();

defineSlots<{
  default?(): unknown;
  prefix?(): unknown;
  suffix?(): unknown;
  "icon-start"?(): unknown;
  "icon-end"?(): unknown;
}>();

const isDisabled = computed(() => props.disabled === true || props.loading === true);
const hasLabel = computed(() => slots.default !== undefined);
</script>

<template>
  <button
    class="ms-button"
    :type="props.type"
    :disabled="isDisabled"
    :aria-busy="props.loading || undefined"
    :aria-expanded="props.open === undefined ? undefined : props.open"
    :data-ms-button="''"
    :data-variant="props.variant"
    :data-tone="props.tone"
    :data-size="props.size"
    :data-pill="props.pill || undefined"
    :data-icon-only="!hasLabel || undefined"
    :data-open="props.open || undefined"
    :data-full-width="props.fullWidth || undefined"
    :data-loading="props.loading || undefined"
  >
    <span v-if="$slots.prefix" class="ms-button-prefix" data-ms-slot="prefix">
      <slot name="prefix" />
    </span>
    <span v-if="$slots['icon-start']" class="ms-button-icon" data-ms-slot="icon-start">
      <slot name="icon-start" />
    </span>
    <span v-if="hasLabel" class="ms-button-label">
      <slot />
    </span>
    <span v-if="$slots.suffix" class="ms-button-suffix" data-ms-slot="suffix">
      <slot name="suffix" />
    </span>
    <span v-if="props.loading && !$slots.loading" class="ms-button-spinner" aria-hidden="true" />
    <span v-if="$slots['icon-end']" class="ms-button-icon" data-ms-slot="icon-end">
      <slot name="icon-end" />
    </span>
    <span v-if="props.caret" class="ms-button-caret" aria-hidden="true">
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M4 6l4 4 4-4" />
      </svg>
    </span>
  </button>
</template>
