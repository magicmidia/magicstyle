<script setup lang="ts">
import { computed, inject } from "vue";
import { MS_CAROUSEL_KEY } from "./types.ts";

defineSlots<{
  default?(): unknown;
}>();

const carousel = inject(MS_CAROUSEL_KEY, null);
const index = carousel?.registerSlide?.() ?? -1;
const isActive = computed(() => !carousel || index === -1 || carousel.activeSlide.value === index);
const label = computed(() =>
  index >= 0 && carousel?.totalSlides ? `${index + 1} de ${carousel.totalSlides.value}` : undefined,
);
</script>

<template>
  <!-- Off-screen slides are inert: not focusable, not read. -->
  <div
    class="ms-carousel-slide"
    role="group"
    aria-roledescription="slide"
    :aria-label="label"
    :inert="!isActive || undefined"
    data-ms-carousel-slide
  >
    <slot />
  </div>
</template>
