<template>
  <div
    class="ms-tooltip-container"
    :aria-describedby="isOpen && !disabled ? tooltipId : undefined"
    @mouseenter="handleOpen"
    @mouseleave="handleClose"
    @focusin="handleOpen"
    @focusout="handleClose"
    @keydown.esc="handleCloseImmediate"
  >
    <slot />

    <div
      v-if="isOpen && !disabled"
      :id="tooltipId"
      role="tooltip"
      :class="tooltipClasses"
      :style="tooltipStyle"
    >
      <slot name="content">{{ content }}</slot>
      <span v-if="props.arrow" class="ms-tooltip__arrow" aria-hidden="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsTooltipProps } from "./types.ts";

defineOptions({
  name: "MsTooltip",
});

const props = withDefaults(defineProps<MsTooltipProps>(), {
  placement: "top",
  tone: "dark",
  size: "md",
  arrow: true,
  showDelay: 150,
  hideDelay: 100,
  disabled: false,
});

const tooltipId = useMsId("tooltip");
const isOpen = ref(false);

let timer: ReturnType<typeof setTimeout> | null = null;

function clearTimer() {
  if (timer !== null) {
    clearTimeout(timer);
    timer = null;
  }
}

function handleOpen() {
  if (props.disabled) return;
  clearTimer();
  if (props.showDelay > 0) {
    timer = setTimeout(() => {
      isOpen.value = true;
    }, props.showDelay);
  } else {
    isOpen.value = true;
  }
}

function handleClose() {
  clearTimer();
  if (props.hideDelay > 0) {
    timer = setTimeout(() => {
      isOpen.value = false;
    }, props.hideDelay);
  } else {
    isOpen.value = false;
  }
}

function handleCloseImmediate() {
  clearTimer();
  isOpen.value = false;
}

onUnmounted(() => {
  clearTimer();
});

const tooltipClasses = computed(() => {
  return [
    "ms-tooltip",
    `ms-tooltip--${props.placement}`,
    `ms-tooltip--tone-${props.tone}`,
    `ms-tooltip--${props.size}`,
    props.maxWidth !== undefined ? "ms-tooltip--multiline" : "",
  ];
});

const tooltipStyle = computed(() => {
  if (props.maxWidth === undefined) return undefined;
  const maxW = typeof props.maxWidth === "number" ? `${props.maxWidth}px` : props.maxWidth;
  return { maxWidth: maxW };
});
</script>
