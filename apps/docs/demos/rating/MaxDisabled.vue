<script setup lang="ts">
import { ref } from "vue";
import { MsRating } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const nps = ref(8);
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: center">
    <MsRating v-model="nps" :max="10" size="sm" :aria-label="t.recommend" />
    <MsRating :model-value="2" disabled :aria-label="t.disabled" />
  </div>
</template>
