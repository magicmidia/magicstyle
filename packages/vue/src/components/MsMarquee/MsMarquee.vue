<script setup lang="ts">
import { computed, ref } from "vue";
import type { MsMarqueeProps } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import { usePrefersReducedMotion } from "../../composables/use-prefers-reduced-motion.ts";

defineOptions({ name: "MsMarquee" });

const props = withDefaults(defineProps<MsMarqueeProps>(), {
  speed: 25,
  reverse: false,
  pauseOnHover: true,
  fade: true,
  gap: "1.5rem",
  controls: true,
});

defineSlots<{
  /** Items to scroll; rendered twice (the copy is aria-hidden) for a seamless loop. */
  default?(): unknown;
}>();

const t = useMsMessages();
const reducedMotion = usePrefersReducedMotion();

/** Explicit user choice from the pause/play button; `null` follows the motion preference. */
const userPaused = ref<boolean | null>(null);
/** WCAG 2.2.2: moving content can be paused; reduced-motion users start paused. */
const paused = computed(() => userPaused.value ?? reducedMotion.value);

function togglePaused(): void {
  userPaused.value = !paused.value;
}

const classes = computed(() => [
  "ms-marquee",
  {
    "ms-marquee--reverse": props.reverse,
    "ms-marquee--pause-hover": props.pauseOnHover,
    "ms-marquee--fade": props.fade,
    "ms-marquee--paused": paused.value,
    // An explicit "play" overrides the CSS reduced-motion pause.
    "ms-marquee--playing": userPaused.value === false,
  },
]);

const style = computed(() => ({
  "--ms-marquee-duration": `${props.speed}s`,
  "--ms-marquee-gap": props.gap,
}));
</script>

<template>
  <div :class="classes" :style="style" :data-paused="paused || undefined">
    <!-- The viewport carries the fade mask, so the control next to it stays fully visible. -->
    <div class="ms-marquee__viewport">
      <div class="ms-marquee__track">
        <slot />
      </div>
      <div class="ms-marquee__track" aria-hidden="true">
        <slot />
      </div>
    </div>
    <button
      v-if="props.controls"
      type="button"
      class="ms-marquee__control"
      :aria-label="paused ? t.marquee.play : t.marquee.pause"
      :title="paused ? t.marquee.play : t.marquee.pause"
      @click="togglePaused"
    >
      <svg v-if="paused" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
        <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
      </svg>
      <svg v-else viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
        <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" />
      </svg>
    </button>
  </div>
</template>
