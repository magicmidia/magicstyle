<script setup lang="ts">
import { MsDatePicker } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 280px">
    <p style="margin: 0">{{ t.lockedDate }}</p>
    <MsDatePicker model-value="2026-03-15" disabled />
    <p style="margin: 0">{{ t.requiredDate }}</p>
    <MsDatePicker model-value="2026-03-15" :clearable="false" />
  </div>
</template>
