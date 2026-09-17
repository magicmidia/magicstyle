<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import type { MsAnimatedNumberProps } from "./types.ts";

const props = withDefaults(defineProps<MsAnimatedNumberProps>(), {
  duration: 800,
  decimals: 0,
});

const displayValue = ref(props.value);
let animationFrameId: number | null = null;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function animate(start: number, target: number, duration: number) {
  if (duration <= 0) {
    displayValue.value = target;
    return;
  }

  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    displayValue.value = start + (target - start) * easedProgress;

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      displayValue.value = target;
      animationFrameId = null;
    }
  };

  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  animationFrameId = requestAnimationFrame(step);
}

watch(
  () => props.value,
  (newVal, oldVal) => {
    animate(oldVal ?? 0, newVal, props.duration);
  },
);

onMounted(() => {
  animate(0, props.value, props.duration);
});

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});

const formattedText = computed(() => {
  let numStr: string;
  if (props.format) {
    numStr = props.format(displayValue.value);
  } else {
    numStr = displayValue.value.toFixed(props.decimals);
  }

  const prefix = props.prefix || "";
  const suffix = props.suffix || "";
  return `${prefix}${numStr}${suffix}`;
});
</script>

<template>
  <span class="ms-animated-number" aria-live="polite" data-ms-animated-number>
    {{ formattedText }}
  </span>
</template>
