<script setup lang="ts">
import { MsFooter } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const tones = ["primary", "accent", "neutral"] as const;
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%">
    <div v-for="tone in tones" :key="tone" class="ms-u-rounded-lg" style="overflow: hidden">
      <MsFooter :tone="tone" :copyright="t.copyright">
        <template #social>
          <span>{{ t.madeIn }}</span>
        </template>
      </MsFooter>
    </div>
  </div>
</template>
