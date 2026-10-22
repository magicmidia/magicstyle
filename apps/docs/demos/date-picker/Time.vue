<script setup lang="ts">
import { ref } from "vue";
import { MsDatePicker, type MsDatePickerModelValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const opens = ref<MsDatePickerModelValue>("09:00");
const closes = ref<MsDatePickerModelValue>("18:30");
</script>

<template>
  <div
    style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; max-width: 360px"
  >
    <MsDatePicker v-model="opens" mode="time" :minute-step="30" :placeholder="t.opensAt" />
    <MsDatePicker
      v-model="closes"
      mode="time"
      :minute-step="30"
      :format24h="false"
      :placeholder="t.closesAt"
    />
  </div>
</template>
