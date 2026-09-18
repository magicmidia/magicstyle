<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import type { MsPointerProps } from "./types.ts";

const props = withDefaults(defineProps<MsPointerProps>(), {
  variant: "dot",
  disabled: false,
});

const x = ref(-100);
const y = ref(-100);
const isHovering = ref(false);

let rafId: number | null = null;

const handleMouseMove = (e: MouseEvent) => {
  if (props.disabled) return;
  const clientX = e.clientX;
  const clientY = e.clientY;
  const target = e.target as HTMLElement | null;

  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    rafId = null;
    x.value = clientX;
    y.value = clientY;

    if (target) {
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.closest("button") !== null ||
        target.closest("a") !== null;
      isHovering.value = isInteractive;
    }
  });
};

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
  }
});

onUnmounted(() => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (typeof window !== "undefined") {
    window.removeEventListener("mousemove", handleMouseMove);
  }
});

const classes = computed(() => [
  "ms-pointer",
  `ms-pointer--${props.variant}`,
  {
    "ms-pointer--hover": isHovering.value,
  },
]);

const style = computed(() => ({
  transform: `translate3d(${x.value}px, ${y.value}px, 0) translate(-50%, -50%)`,
}));
</script>

<template>
  <Teleport to="body">
    <div v-if="!props.disabled" :class="classes" :style="style" aria-hidden="true" />
  </Teleport>
</template>
