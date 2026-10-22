<script setup lang="ts">
import { ref } from "vue";
import { MsDatePicker, type MsDatePickerModelValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

function isoDate(daysFromToday: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

const appointment = ref<MsDatePickerModelValue>("");
const minDate = isoDate(1);
const maxDate = isoDate(30);
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 280px">
    <MsDatePicker
      v-model="appointment"
      :min-date="minDate"
      :max-date="maxDate"
      :placeholder="t.appointment"
    />
    <p style="margin: 0">{{ t.bookingWindow }}</p>
  </div>
</template>
