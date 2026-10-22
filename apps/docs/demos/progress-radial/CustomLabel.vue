<script setup lang="ts">
import { MsProgressRadial } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; align-items: center; gap: 16px">
    <MsProgressRadial size="xl" tone="success" :value="18" :max="24" :aria-label="t.tasksDone">
      <div style="display: grid; justify-items: center; line-height: 1.2">
        <strong style="font-size: 20px">18/24</strong>
        <span style="font-size: 11px">{{ t.tasks }}</span>
      </div>
    </MsProgressRadial>
    <div style="display: grid; gap: 4px; font-size: 14px">
      <strong>{{ t.sprintTitle }}</strong>
      <span>{{ t.sprintDetail }}</span>
    </div>
  </div>
</template>
