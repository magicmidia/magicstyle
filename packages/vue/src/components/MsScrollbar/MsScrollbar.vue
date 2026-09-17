<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import type { MsScrollbarProps } from "./types";

defineOptions({
  name: "MsScrollbar",
});

const props = withDefaults(defineProps<MsScrollbarProps>(), {
  tag: "div",
  orientation: "vertical",
  size: "normal",
  visibility: "auto",
  tone: "default",
  arrows: false,
  trackColor: undefined,
  thumbColor: undefined,
  thumbRadius: undefined,
  radius: undefined,
  maxHeight: undefined,
  maxWidth: undefined,
});

const isScrolling = ref(false);
let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

function onScrollOrWheel() {
  if (props.visibility !== "auto") return;
  isScrolling.value = true;
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  scrollTimeout = setTimeout(() => {
    isScrolling.value = false;
  }, 1000);
}

onBeforeUnmount(() => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
});

const classes = computed(() => [
  "ms-scrollbar",
  `ms-scrollbar--${props.orientation}`,
  `ms-scrollbar--size-${props.size}`,
  `ms-scrollbar--visibility-${props.visibility}`,
  props.arrows ? "ms-scrollbar--arrows" : undefined,
  isScrolling.value ? "is-scrolling" : undefined,
  props.tone !== "default" ? `ms-scrollbar--tone-${props.tone}` : undefined,
]);

const rootStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.maxHeight !== undefined) {
    style.maxHeight =
      typeof props.maxHeight === "number" ? `${props.maxHeight}px` : props.maxHeight;
  }
  if (props.maxWidth !== undefined) {
    style.maxWidth = typeof props.maxWidth === "number" ? `${props.maxWidth}px` : props.maxWidth;
  }
  if (props.trackColor) {
    style["--ms-scrollbar-track"] = props.trackColor;
  }
  if (props.thumbColor) {
    style["--ms-scrollbar-thumb"] = props.thumbColor;
    style["--ms-scrollbar-thumb-hover"] = `color-mix(in srgb, ${props.thumbColor} 80%, black 20%)`;
  }
  const effectiveRadius = props.thumbRadius ?? props.radius;
  if (effectiveRadius !== undefined) {
    style["--ms-scrollbar-radius"] =
      typeof effectiveRadius === "number" ? `${effectiveRadius}px` : effectiveRadius;
  }
  return style;
});
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :style="rootStyle"
    :data-orientation="orientation"
    :data-size="size"
    :data-visibility="visibility"
    :data-tone="tone"
    :data-arrows="arrows ? 'true' : 'false'"
    @scroll.passive="onScrollOrWheel"
    @wheel.passive="onScrollOrWheel"
    @touchmove.passive="onScrollOrWheel"
  >
    <slot />
  </component>
</template>
