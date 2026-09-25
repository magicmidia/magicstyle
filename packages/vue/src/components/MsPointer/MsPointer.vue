<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import type { MsPointerProps } from "./types.ts";
import { usePrefersReducedMotion } from "../../composables/use-prefers-reduced-motion.ts";

defineOptions({ name: "MsPointer" });

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

const reducedMotion = usePrefersReducedMotion();
const isMounted = ref(false);
/** The follower is decorative motion: off when disabled or with reduced motion. */
const active = computed(() => isMounted.value && !props.disabled && !reducedMotion.value);
let listening = false;

function detach(): void {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (listening) {
    window.removeEventListener("mousemove", handleMouseMove);
    listening = false;
  }
}

/** The global mousemove listener exists only while the follower is active. */
watch(active, (value) => {
  if (value && !listening) {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    listening = true;
  } else if (!value) {
    detach();
  }
});

onMounted(() => {
  isMounted.value = true;
});

onUnmounted(detach);

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
    <div
      v-if="!props.disabled && !reducedMotion"
      :class="classes"
      :style="style"
      aria-hidden="true"
    />
  </Teleport>
</template>
