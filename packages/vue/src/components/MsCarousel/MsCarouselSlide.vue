<script setup lang="ts">
import { computed, inject, onBeforeUnmount } from "vue";
import { MS_CAROUSEL_KEY } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

defineSlots<{
  /** Slide content. */
  default?(): unknown;
}>();

const t = useMsMessages();

const carousel = inject(MS_CAROUSEL_KEY, null);
const index = carousel?.registerSlide?.() ?? -1;
if (index >= 0 && carousel?.unregisterSlide) onBeforeUnmount(carousel.unregisterSlide);
const isActive = computed(() => !carousel || index === -1 || carousel.activeSlide.value === index);
const label = computed(() =>
  index >= 0 && carousel?.totalSlides
    ? t.value.carousel.slide(index + 1, carousel.totalSlides.value)
    : undefined,
);
</script>

<template>
  <!-- Off-screen slides are inert: not focusable, not read. -->
  <div
    class="ms-carousel-slide"
    role="group"
    :aria-roledescription="t.carousel.slideRoleDescription"
    :aria-label="label"
    :inert="!isActive || undefined"
    data-ms-carousel-slide
  >
    <slot />
  </div>
</template>
