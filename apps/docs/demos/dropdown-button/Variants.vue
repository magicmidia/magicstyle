<script setup lang="ts">
import { computed } from "vue";
import { MsDropdownButton, type MsMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<MsMenuItem[]>(() => [
  { label: t.lastWeek, value: "7d" },
  { label: t.lastMonth, value: "30d" },
  { label: t.lastQuarter, value: "90d" },
]);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
    <MsDropdownButton :label="t.period" :items="items" size="sm" />
    <MsDropdownButton :label="t.period" :items="items" variant="soft" />
    <MsDropdownButton :label="t.period" :items="items" variant="outline" tone="neutral" pill />
    <MsDropdownButton :label="t.period" :items="items" variant="ghost" tone="neutral" size="lg" />
  </div>
</template>
