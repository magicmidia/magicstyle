<script setup lang="ts">
import { MsButton, MsButtonGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsButtonGroup :aria-label="t.calendarNav">
    <MsButton variant="outline" tone="neutral">{{ t.previous }}</MsButton>
    <MsButton variant="outline" tone="neutral">{{ t.today }}</MsButton>
    <MsButton variant="outline" tone="neutral">{{ t.next }}</MsButton>
  </MsButtonGroup>
</template>
