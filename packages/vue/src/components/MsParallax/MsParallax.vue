<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import type { MsParallaxProps } from "./types.ts";
import { usePrefersReducedMotion } from "../../composables/use-prefers-reduced-motion.ts";

defineOptions({ name: "MsParallax" });

defineSlots<{
  /** Foreground content, rendered above the moving layer. */
  default?(): unknown;
  /** Background layer that moves at `speed` relative to the page scroll. */
  background?(): unknown;
}>();

const props = withDefaults(defineProps<MsParallaxProps>(), {
  speed: 0.3,
  height: "320px",
});

const offset = ref(0);
const containerRef = ref<HTMLElement | null>(null);
let rafId: number | null = null;

const handleScroll = () => {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    rafId = null;
    if (!containerRef.value || typeof window === "undefined") return;
    const rect = containerRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.bottom >= 0 && rect.top <= windowHeight) {
      const relativeY = rect.top - windowHeight / 2;
      offset.value = relativeY * props.speed;
    }
  });
};

const reducedMotion = usePrefersReducedMotion();
const isMounted = ref(false);
let listening = false;

function stop(): void {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (listening) {
    window.removeEventListener("scroll", handleScroll);
    listening = false;
  }
}

/** Scroll-linked motion only runs in the browser and never with reduced motion. */
watch(
  [isMounted, reducedMotion],
  ([mounted, reduced]) => {
    if (!mounted || typeof window === "undefined") return;
    if (reduced) {
      stop();
      offset.value = 0;
    } else if (!listening) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      listening = true;
      handleScroll();
    }
  },
  { flush: "post" },
);

onMounted(() => {
  isMounted.value = true;
});

onUnmounted(stop);

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
