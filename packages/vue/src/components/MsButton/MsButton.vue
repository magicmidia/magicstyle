<script setup lang="ts">
import { computed, useSlots, type Component } from "vue";
import type { MsButtonProps } from "./types.ts";

const props = withDefaults(defineProps<MsButtonProps>(), {
  variant: "solid",
  tone: "primary",
  size: "md",
  type: "button",
  // Tri-state: undefined means "not a disclosure trigger" (no aria-expanded). Without
  // this default Vue casts the absent boolean to false and every button got
  // aria-expanded="false".
  open: undefined,
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

/** Element or component to render: `as` wins, then `<a>` for `href`, else a native button. */
const tag = computed<string | Component>(() => props.as ?? (props.href ? "a" : "button"));
const isNativeButton = computed(() => tag.value === "button");

/** State/data attributes shared by every rendered element (doc 09 §8). */
const stateAttrs = computed<Record<string, unknown>>(() => ({
  "aria-busy": props.loading || undefined,
  "aria-expanded": props.open === undefined ? undefined : props.open,
  "data-ms-button": "",
  "data-variant": props.variant,
  "data-tone": props.tone,
  "data-size": props.size,
  "data-pill": props.pill || undefined,
  "data-shape": props.shape || (props.pill ? "pill" : undefined),
  "data-wide": props.wide || undefined,
  "data-block": props.block || undefined,
  "data-responsive": props.responsive || undefined,
  "data-wave": props.wave || undefined,
  "data-icon-only": !hasLabel.value || undefined,
  "data-open": props.open || undefined,
  "data-full-width": props.fullWidth || props.block || undefined,
  "data-loading": props.loading || undefined,
}));

/**
 * Link/component-specific attributes. Keys are only present when they apply, so an `undefined`
 * value never overrides what a custom `as` component renders (e.g. RouterLink's `href`).
 */
const elementAttrs = computed<Record<string, unknown>>(() => {
  if (isDisabled.value) return { "aria-disabled": "true", tabindex: -1 };
  return props.href === undefined ? {} : { href: props.href };
});

/**
 * Links and custom components cannot be natively disabled: drop the `href`, expose
 * `aria-disabled`, remove them from the tab order and swallow activation.
 */
function onClickCapture(event: MouseEvent): void {
  if (isNativeButton.value || !isDisabled.value) return;
  event.preventDefault();
  event.stopImmediatePropagation();
}
</script>

<template>
  <button
    v-if="isNativeButton"
    class="ms-button"
    :type="props.type"
    :disabled="isDisabled"
    v-bind="stateAttrs"
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
  <component
    :is="tag"
    v-else
    class="ms-button"
    v-bind="{ ...elementAttrs, ...stateAttrs }"
    @click.capture="onClickCapture"
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
  </component>
</template>
