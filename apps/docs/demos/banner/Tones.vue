<script setup lang="ts">
import { MsBanner } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%">
    <MsBanner tone="neutral">{{ t.neutralBody }}</MsBanner>
    <MsBanner tone="success">{{ t.successBody }}</MsBanner>
    <MsBanner tone="warning">{{ t.warningBody }}</MsBanner>
    <MsBanner tone="danger">{{ t.dangerBody }}</MsBanner>
  </div>
</template>
