<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsCarousel, MsCarouselSlide } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const step = ref(0);

const steps = computed(() => [
  { title: t.step1Title, text: t.step1Text },
  { title: t.step2Title, text: t.step2Text },
  { title: t.step3Title, text: t.step3Text },
  { title: t.step4Title, text: t.step4Text },
]);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 560px">
    <MsCarousel
      v-model="step"
      :total-slides="steps.length"
      :loop="false"
      :show-arrows="false"
      :show-indicators="false"
    >
      <MsCarouselSlide v-for="item in steps" :key="item.title">
        <div style="display: grid; gap: 8px; padding: 32px; max-width: 420px; text-align: center">
          <strong style="font-size: 1.25rem">{{ item.title }}</strong>
          <span style="opacity: 0.75">{{ item.text }}</span>
        </div>
      </MsCarouselSlide>
    </MsCarousel>
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px">
      <MsButton variant="outline" tone="neutral" :disabled="step === 0" @click="step--">
        {{ t.back }}
      </MsButton>
      <span style="font-variant-numeric: tabular-nums">{{ step + 1 }} / {{ steps.length }}</span>
      <MsButton :disabled="step === steps.length - 1" @click="step++">{{ t.next }}</MsButton>
    </div>
  </div>
</template>
