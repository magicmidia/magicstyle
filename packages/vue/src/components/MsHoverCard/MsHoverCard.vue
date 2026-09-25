<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from "vue";
import type { MsHoverCardProps } from "./types.ts";

const props = withDefaults(defineProps<MsHoverCardProps>(), {
  openDelay: 200,
  closeDelay: 150,
  placement: "bottom",
  width: "300px",
});

const isOpen = ref(false);
let openTimer: ReturnType<typeof setTimeout> | null = null;
let closeTimer: ReturnType<typeof setTimeout> | null = null;

const clearTimers = () => {
  if (openTimer) {
    clearTimeout(openTimer);
    openTimer = null;
  }
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
};

const handleMouseEnter = () => {
  clearTimers();
  if (isOpen.value) return;
  openTimer = setTimeout(() => {
    isOpen.value = true;
  }, props.openDelay);
};

const handleMouseLeave = () => {
  clearTimers();
  if (!isOpen.value) return;
  closeTimer = setTimeout(() => {
    isOpen.value = false;
  }, props.closeDelay);
};

const close = () => {
  clearTimers();
  isOpen.value = false;
};

onBeforeUnmount(() => {
  clearTimers();
});

const contentStyle = computed(() => ({
  "--ms-hover-card-width": typeof props.width === "number" ? `${props.width}px` : props.width,
}));

const contentClasses = computed(() => [
  "ms-hover-card__content",
  `ms-hover-card__content--placement-${props.placement}`,
]);
</script>

<template>
  <div
    class="ms-hover-card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focusin="handleMouseEnter"
    @focusout="handleMouseLeave"
    @keydown.esc="close"
  >
    <div class="ms-hover-card__trigger">
      <slot />
    </div>

    <!-- Supplementary preview for pointer users; not a tooltip (it may hold interactive content). -->
    <div v-if="isOpen" :class="contentClasses" :style="contentStyle">
      <slot name="content" />
    </div>
  </div>
</template>
