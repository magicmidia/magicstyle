<script setup lang="ts">
import { MsProgressRadial, type MsProgressRadialTone } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const tones: MsProgressRadialTone[] = [
  "primary",
  "info",
  "success",
  "warning",
  "danger",
  "neutral",
];
</script>

<template>
  <MsProgressRadial
    v-for="(tone, i) in tones"
    :key="tone"
    :tone="tone"
    :value="30 + i * 12"
    :aria-label="t.courseProgress"
  />
</template>
