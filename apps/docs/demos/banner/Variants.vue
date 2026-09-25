<script setup lang="ts">
import { MsBanner } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%">
    <MsBanner tone="primary" variant="soft" :title="t.soft">{{ t.variantBody }}</MsBanner>
    <MsBanner tone="primary" variant="outline" :title="t.outline">{{ t.variantBody }}</MsBanner>
    <MsBanner tone="primary" variant="solid" :title="t.solid">{{ t.variantBody }}</MsBanner>
  </div>
</template>
