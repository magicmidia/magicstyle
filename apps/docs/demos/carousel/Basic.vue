<script setup lang="ts">
import { computed, ref } from "vue";
import { MsCarousel, MsCarouselSlide } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const active = ref(0);

const slides = computed(() => [
  {
    title: t.slide1Title,
    text: t.slide1Text,
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    title: t.slide2Title,
    text: t.slide2Text,
    background: "linear-gradient(135deg, #0ea5e9, #14b8a6)",
  },
  {
    title: t.slide3Title,
    text: t.slide3Text,
    background: "linear-gradient(135deg, #f97316, #ec4899)",
  },
]);
</script>

<template>
  <div style="width: 100%; max-width: 640px">
    <MsCarousel v-model="active" :total-slides="slides.length">
      <MsCarouselSlide v-for="slide in slides" :key="slide.title">
        <div
          :style="{
            background: slide.background,
            color: '#fff',
            width: '100%',
            minHeight: '260px',
            display: 'grid',
            placeContent: 'center',
            gap: '8px',
            padding: '32px 64px',
            textAlign: 'center',
          }"
        >
          <strong style="font-size: 1.5rem">{{ slide.title }}</strong>
          <span style="opacity: 0.9">{{ slide.text }}</span>
        </div>
      </MsCarouselSlide>
    </MsCarousel>
  </div>
</template>
