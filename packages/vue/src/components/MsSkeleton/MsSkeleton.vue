<template>
  <div v-if="count > 1" class="ms-skeleton-group" aria-hidden="true">
    <div v-for="index in count" :key="index" :class="itemClasses" :style="getItemStyle(index)" />
  </div>
  <div v-else :class="itemClasses" :style="singleStyle" aria-hidden="true" />
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from "vue";
import type { MsSkeletonProps } from "./types.ts";

defineOptions({
  name: "MsSkeleton",
});

const props = withDefaults(defineProps<MsSkeletonProps>(), {
  variant: "text",
  animation: "pulse",
  tone: "default",
  speed: "normal",
  count: 1,
});

function formatDim(val?: string | number): string | undefined {
  if (val === undefined) return undefined;
  return typeof val === "number" ? `${val}px` : val;
}

const itemClasses = computed(() => {
  return [
    "ms-skeleton",
    `ms-skeleton--${props.variant}`,
    `ms-skeleton--${props.animation}`,
    `ms-skeleton--tone-${props.tone}`,
    `ms-skeleton--speed-${props.speed}`,
  ];
});

const baseStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {};
  const w = formatDim(props.width);
  const h = formatDim(props.height);

  if (w) style.width = w;
  if (h) style.height = h;
  if (props.radius) style.borderRadius = props.radius;

  return style;
});

const singleStyle = computed<CSSProperties>(() => {
  return baseStyle.value;
});

function getItemStyle(index: number): CSSProperties {
  const style: CSSProperties = { ...baseStyle.value };
  // If rendering text lines and no explicit width was set, make the last line slightly shorter (e.g. 70%) for natural typography
  if (props.variant === "text" && !props.width && index === props.count && props.count > 1) {
    style.width = "70%";
  }
  return style;
}
</script>
