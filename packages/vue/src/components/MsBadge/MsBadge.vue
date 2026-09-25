<script setup lang="ts">
import { computed, useSlots } from "vue";
import type { MsBadgeProps } from "./types.ts";

defineOptions({
  name: "MsBadge",
});

const props = withDefaults(defineProps<MsBadgeProps>(), {
  variant: "solid",
  tone: "primary",
  size: "md",
  pill: false,
  dot: false,
  maxCount: 99,
  showZero: false,
  dotOnly: false,
  pulse: false,
  bordered: false,
  as: "span",
});

const slots = useSlots();

const displayContent = computed(() => {
  if (props.dotOnly) return "";
  if (props.count !== undefined) {
    if (props.count > props.maxCount) {
      return `${props.maxCount}+`;
    }
    return String(props.count);
  }
  return undefined;
});

const shouldRenderBadge = computed(() => {
  if (props.dotOnly) return true;
  if (props.count !== undefined) {
    if (props.count === 0 && !props.showZero) return false;
    return true;
  }
  return true;
});

const isWrapper = computed(() => {
  return Boolean(props.placement) && Boolean(slots.default);
});

const badgeClasses = computed(() =>
  [
    "ms-badge",
    props.dotOnly ? "ms-badge--dot-only" : null,
    props.pulse ? "ms-badge--pulse" : null,
    props.bordered ? "ms-badge--bordered" : null,
    props.placement ? "ms-badge--corner" : null,
    props.placement ? `ms-badge--placement-${props.placement}` : null,
  ].filter(Boolean),
);
</script>

<template>
  <span v-if="isWrapper" class="ms-badge-wrapper">
    <slot />
    <span
      v-if="shouldRenderBadge"
      :class="badgeClasses"
      :data-variant="props.variant"
      :data-tone="props.tone"
      :data-size="props.size"
      :data-pill="props.pill || undefined"
      :data-placement="props.placement"
      :data-pulse="props.pulse || undefined"
      :data-bordered="props.bordered || undefined"
    >
      <span v-if="props.dot && !props.dotOnly" class="ms-badge-dot" aria-hidden="true" />
      {{ displayContent }}
    </span>
  </span>

  <component
    :is="props.as"
    v-else-if="shouldRenderBadge"
    :class="badgeClasses"
    :data-variant="props.variant"
    :data-tone="props.tone"
    :data-size="props.size"
    :data-pill="props.pill || undefined"
    :data-placement="props.placement"
    :data-pulse="props.pulse || undefined"
    :data-bordered="props.bordered || undefined"
  >
    <span v-if="props.dot && !props.dotOnly" class="ms-badge-dot" aria-hidden="true" />
    <slot>{{ displayContent }}</slot>
  </component>
</template>
