<script setup lang="ts">
import { computed } from "vue";
import { MsAvatar, MsCard, MsMarquee } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const reviews = computed(() => [
  { name: "Bianca Luz", quote: t.review1 },
  { name: "Otávio Reis", quote: t.review2 },
  { name: "Natália Faria", quote: t.review3 },
  { name: "Gustavo Brandão", quote: t.review4 },
]);
</script>

<template>
  <div style="width: 100%">
    <MsMarquee :speed="45" gap="1rem" :fade="false">
      <MsCard v-for="review in reviews" :key="review.name" style="width: 280px">
        <div style="display: grid; gap: 12px">
          <p style="margin: 0">{{ review.quote }}</p>
          <div style="display: flex; align-items: center; gap: 8px">
            <MsAvatar :name="review.name" size="xs" tone="primary" />
            <strong style="font-size: 0.875rem">{{ review.name }}</strong>
          </div>
        </div>
      </MsCard>
    </MsMarquee>
  </div>
</template>
