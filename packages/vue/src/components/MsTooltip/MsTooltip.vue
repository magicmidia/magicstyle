<template>
  <div
    ref="containerRef"
    class="ms-tooltip-container"
    @mouseenter="handleOpen"
    @mouseleave="handleClose"
    @focusin="handleOpen"
    @focusout="handleClose"
    @keydown.esc="handleCloseImmediate"
  >
    <slot />

    <!-- Always rendered (v-show) so aria-describedby is valid the moment the trigger gets focus. -->
    <div
      v-if="!disabled"
      v-show="isOpen"
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
import { computed, onUnmounted, ref, watchPostEffect } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsTooltipProps } from "./types.ts";

defineOptions({
  name: "MsTooltip",
});

const props = withDefaults(defineProps<MsTooltipProps>(), {
  placement: "top",
  tone: "primary",
  size: "md",
  arrow: true,
  showDelay: 150,
  hideDelay: 100,
  disabled: false,
});

const tooltipId = useMsId("tooltip");
const isOpen = ref(false);
const containerRef = ref<HTMLElement | null>(null);

// The description belongs on the focusable trigger inside the slot, not on the wrapper div.
watchPostEffect(() => {
  const trigger = containerRef.value?.querySelector<HTMLElement>(
    "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
  );
  if (!trigger) return;
  const ids = (trigger.getAttribute("aria-describedby") ?? "")
    .split(/\s+/)
    .filter((id) => id && id !== tooltipId);
  if (!props.disabled) ids.push(tooltipId);
  if (ids.length) trigger.setAttribute("aria-describedby", ids.join(" "));
  else trigger.removeAttribute("aria-describedby");
});

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
