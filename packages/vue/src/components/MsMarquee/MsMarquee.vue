<script setup lang="ts">
import { computed } from "vue";
import type { MsMarqueeProps } from "./types.ts";

const props = withDefaults(defineProps<MsMarqueeProps>(), {
  speed: 25,
  reverse: false,
  pauseOnHover: true,
  fade: true,
  gap: "1.5rem",
});

const classes = computed(() => [
  "ms-marquee",
  {
    "ms-marquee--reverse": props.reverse,
    "ms-marquee--pause-hover": props.pauseOnHover,
    "ms-marquee--fade": props.fade,
  },
]);

const style = computed(() => ({
  "--ms-marquee-duration": `${props.speed}s`,
  "--ms-marquee-gap": props.gap,
}));
</script>

<template>
  <div :class="classes" :style="style">
    <div class="ms-marquee__track">
      <slot />
    </div>
    <div class="ms-marquee__track" aria-hidden="true">
      <slot />
    </div>
  </div>
</template>
