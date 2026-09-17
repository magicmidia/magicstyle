<script setup lang="ts">
import { computed, useSlots } from "vue";
import type { MsSeparatorProps } from "./types.ts";

defineOptions({
  name: "MsSeparator",
});

const props = withDefaults(defineProps<MsSeparatorProps>(), {
  orientation: "horizontal",
  variant: "default",
  tone: "neutral",
  thickness: 1,
  spacing: "none",
  align: "center",
  decorative: true,
});

const slots = useSlots();

const hasLabel = computed(() => {
  return Boolean(props.label || slots.default) && props.orientation === "horizontal";
});

const separatorClasses = computed(() =>
  [
    "ms-separator",
    `ms-separator--${props.orientation}`,
    props.variant !== "default" ? `ms-separator--${props.variant}` : null,
    `ms-separator--tone-${props.tone}`,
    `ms-separator--thickness-${props.thickness}`,
    !hasLabel.value && props.spacing !== "none" ? `ms-separator--spacing-${props.spacing}` : null,
  ].filter(Boolean),
);

const groupClasses = computed(() =>
  [
    "ms-separator-group",
    `ms-separator-group--align-${props.align}`,
    `ms-separator-group--spacing-${props.spacing}`,
  ].filter(Boolean),
);

const partClasses = computed(() =>
  [
    "ms-separator",
    "ms-separator--horizontal",
    "ms-separator--part",
    props.variant !== "default" ? `ms-separator--${props.variant}` : null,
    `ms-separator--tone-${props.tone}`,
    `ms-separator--thickness-${props.thickness}`,
  ].filter(Boolean),
);
</script>

<template>
  <div
    v-if="hasLabel"
    :class="groupClasses"
    :role="decorative ? 'none' : 'separator'"
    :aria-orientation="decorative ? undefined : 'horizontal'"
    :aria-hidden="decorative ? 'true' : undefined"
  >
    <div class="ms-separator-part" :class="partClasses" aria-hidden="true" />
    <span class="ms-separator__label">
      <slot>{{ label }}</slot>
    </span>
    <div class="ms-separator-part" :class="partClasses" aria-hidden="true" />
  </div>
  <div
    v-else
    :class="separatorClasses"
    :role="decorative ? 'none' : 'separator'"
    :aria-orientation="decorative ? undefined : orientation === 'vertical' ? 'vertical' : undefined"
    :aria-hidden="decorative ? 'true' : undefined"
  />
</template>
