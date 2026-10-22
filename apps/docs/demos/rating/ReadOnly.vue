<script setup lang="ts">
import { MsRating } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 360px">
    <div style="display: flex; align-items: center; gap: 8px">
      <MsRating :model-value="4" readonly size="sm" :aria-label="t.averageRating" />
      <strong>{{ t.average }}</strong>
      <span>{{ t.reviewCount }}</span>
    </div>
    <p style="margin: 0">{{ t.review }}</p>
    <small>{{ t.reviewAuthor }}</small>
  </div>
</template>
