<script setup lang="ts">
import { MsButton, MsTooltip } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsTooltip :content="t.addToLibrary">
    <MsButton variant="outline" tone="neutral">{{ t.save }}</MsButton>
  </MsTooltip>
</template>
