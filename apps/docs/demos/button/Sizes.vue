<script setup lang="ts">
import { MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
    <MsButton size="xs">{{ t.sizeXs }}</MsButton>
    <MsButton size="sm">{{ t.sizeSm }}</MsButton>
    <MsButton size="md">{{ t.sizeMd }}</MsButton>
    <MsButton size="lg">{{ t.sizeLg }}</MsButton>
    <MsButton size="xl">{{ t.sizeXl }}</MsButton>
  </div>
</template>
