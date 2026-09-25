<script setup lang="ts">
import { MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
    <MsButton disabled>{{ t.primary }}</MsButton>
    <MsButton variant="outline" tone="neutral" disabled>{{ t.outline }}</MsButton>
    <MsButton variant="soft" disabled>{{ t.soft }}</MsButton>
    <MsButton variant="ghost" tone="neutral" disabled>{{ t.ghost }}</MsButton>
  </div>
</template>
