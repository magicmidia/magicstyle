<script setup lang="ts">
import { ref } from "vue";
import { MsRating, type MsRatingProps } from "@magic-style/vue";

type Tone = NonNullable<MsRatingProps["tone"]>;
const tones: Tone[] = ["warning", "primary", "accent", "success", "info", "danger"];
const values = ref<Record<Tone, number>>({
  primary: 4,
  secondary: 4,
  accent: 3,
  neutral: 3,
  success: 5,
  info: 4,
  warning: 4,
  danger: 2,
});
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: max-content max-content;
      gap: 12px 24px;
      align-items: center;
    "
  >
    <template v-for="tone in tones" :key="tone">
      <code :id="`rating-tone-${tone}`">{{ tone }}</code>
      <MsRating v-model="values[tone]" :tone="tone" :aria-labelledby="`rating-tone-${tone}`" />
    </template>
  </div>
</template>
