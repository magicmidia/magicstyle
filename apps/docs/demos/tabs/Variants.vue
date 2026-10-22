<script setup lang="ts">
import { MsTab, MsTabList, MsTabs } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const variants = ["pill", "line", "enclosed", "solid"] as const;
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 460px">
    <MsTabs v-for="variant in variants" :key="variant" default-value="week" :variant="variant">
      <MsTabList :aria-label="t.period">
        <MsTab value="day">{{ t.day }}</MsTab>
        <MsTab value="week">{{ t.week }}</MsTab>
        <MsTab value="month">{{ t.month }}</MsTab>
        <MsTab value="year">{{ t.year }}</MsTab>
      </MsTabList>
    </MsTabs>
  </div>
</template>
