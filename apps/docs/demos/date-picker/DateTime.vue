<script setup lang="ts">
import { ref } from "vue";
import { MsDatePicker, type MsDatePickerModelValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const meeting = ref<MsDatePickerModelValue>("");
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 280px">
    <MsDatePicker v-model="meeting" mode="datetime" :minute-step="15" :placeholder="t.meeting" />
    <p style="margin: 0">
      {{ t.value }} <code>{{ meeting || "—" }}</code>
    </p>
  </div>
</template>
