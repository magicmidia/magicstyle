<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import type { MsParallaxProps } from "./types.ts";

const props = withDefaults(defineProps<MsParallaxProps>(), {
  speed: 0.3,
  height: "320px",
});

const offset = ref(0);
const containerRef = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (!containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  if (rect.bottom >= 0 && rect.top <= windowHeight) {
    const relativeY = rect.top - windowHeight / 2;
    offset.value = relativeY * props.speed;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const formattedHeight = computed(() => {
  return typeof props.height === "number" ? `${props.height}px` : props.height;
});

const layerStyle = computed(() => ({
  transform: `translate3d(0, ${offset.value}px, 0)`,
}));
</script>

<template>
  <div ref="containerRef" class="ms-parallax" :style="{ height: formattedHeight }">
    <div class="ms-parallax__layer" :style="layerStyle">
      <slot name="background" />
    </div>

    <div class="ms-parallax__content">
      <slot />
    </div>
  </div>
</template>
