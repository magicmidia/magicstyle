<script setup lang="ts">
import { ref } from "vue";
import { MsNativeSelect } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const outline = ref("week");
const filled = ref("week");
const flushed = ref("week");
const pill = ref("week");
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 320px">
    <MsNativeSelect v-model="outline" :aria-label="t.outline">
      <option value="week">{{ t.lastWeek }}</option>
      <option value="month">{{ t.lastMonth }}</option>
      <option value="year">{{ t.lastYear }}</option>
    </MsNativeSelect>
    <MsNativeSelect v-model="filled" variant="filled" :aria-label="t.filled">
      <option value="week">{{ t.lastWeek }}</option>
      <option value="month">{{ t.lastMonth }}</option>
      <option value="year">{{ t.lastYear }}</option>
    </MsNativeSelect>
    <MsNativeSelect v-model="flushed" variant="flushed" :aria-label="t.flushed">
      <option value="week">{{ t.lastWeek }}</option>
      <option value="month">{{ t.lastMonth }}</option>
      <option value="year">{{ t.lastYear }}</option>
    </MsNativeSelect>
    <MsNativeSelect v-model="pill" pill :aria-label="t.pill">
      <option value="week">{{ t.lastWeek }}</option>
      <option value="month">{{ t.lastMonth }}</option>
      <option value="year">{{ t.lastYear }}</option>
    </MsNativeSelect>
  </div>
</template>
