<script setup lang="ts">
import { computed } from "vue";
import { MsCarousel, MsCarouselSlide } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const promos = computed(() => [
  { title: t.promo1, background: "linear-gradient(120deg, #1e3a8a, #3b82f6)" },
  { title: t.promo2, background: "linear-gradient(120deg, #064e3b, #10b981)" },
  { title: t.promo3, background: "linear-gradient(120deg, #7c2d12, #f59e0b)" },
]);
</script>

<template>
  <div style="width: 100%; max-width: 640px">
    <MsCarousel autoplay :interval="5000" :total-slides="promos.length">
      <MsCarouselSlide v-for="promo in promos" :key="promo.title">
        <div
          :style="{
            background: promo.background,
            color: '#fff',
            width: '100%',
            minHeight: '200px',
            display: 'grid',
            placeContent: 'center',
            padding: '24px 64px',
            fontSize: '1.375rem',
            fontWeight: 600,
            textAlign: 'center',
          }"
        >
          {{ promo.title }}
        </div>
      </MsCarouselSlide>
    </MsCarousel>
  </div>
</template>
