<script setup lang="ts">
import { MsButton, MsButtonGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsButtonGroup :attached="false" :aria-label="t.reviewActions">
    <MsButton variant="ghost" tone="neutral">{{ t.discard }}</MsButton>
    <MsButton variant="outline" tone="neutral">{{ t.requestChanges }}</MsButton>
    <MsButton tone="success">{{ t.approve }}</MsButton>
  </MsButtonGroup>
</template>
