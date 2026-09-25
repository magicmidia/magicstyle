<script setup lang="ts">
import { computed } from "vue";
import { MsAvatar, MsCarousel, MsCarouselSlide } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const reviews = computed(() => [
  { name: "Patrícia Gomes", role: t.review1Role, quote: t.review1Quote },
  { name: "Henrique Barros", role: t.review2Role, quote: t.review2Quote },
  { name: "Lívia Santos", role: t.review3Role, quote: t.review3Quote },
]);
</script>

<template>
  <div style="width: 100%; max-width: 560px">
    <MsCarousel :total-slides="reviews.length" :show-arrows="false">
      <MsCarouselSlide v-for="review in reviews" :key="review.name">
        <figure
          style="
            display: grid;
            justify-items: center;
            gap: 16px;
            margin: 0;
            padding: 32px 32px 48px;
            text-align: center;
          "
        >
          <blockquote style="margin: 0; font-size: 1.0625rem">{{ review.quote }}</blockquote>
          <figcaption style="display: flex; align-items: center; gap: 12px; text-align: start">
            <MsAvatar :name="review.name" tone="primary" size="sm" />
            <span style="display: grid">
              <strong>{{ review.name }}</strong>
              <small style="opacity: 0.7">{{ review.role }}</small>
            </span>
          </figcaption>
        </figure>
      </MsCarouselSlide>
    </MsCarousel>
  </div>
</template>
