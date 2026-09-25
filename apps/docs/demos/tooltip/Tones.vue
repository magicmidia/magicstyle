<script setup lang="ts">
import { MsButton, MsTooltip } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsTooltip tone="primary" :content="t.toneTip">
    <MsButton variant="outline" tone="neutral">primary</MsButton>
  </MsTooltip>
  <MsTooltip tone="dark" :content="t.toneTip">
    <MsButton variant="outline" tone="neutral">dark</MsButton>
  </MsTooltip>
  <MsTooltip tone="light" :content="t.toneTip">
    <MsButton variant="outline" tone="neutral">light</MsButton>
  </MsTooltip>
</template>
