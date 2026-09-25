<script setup lang="ts">
import { ref } from "vue";
import { MsDatePicker, type MsDatePickerModelValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const stay = ref<MsDatePickerModelValue>(null);
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 320px">
    <MsDatePicker v-model="stay" mode="range" :placeholder="t.checkInOut" />
    <p style="margin: 0">
      {{ t.value }} <code>{{ stay ? JSON.stringify(stay) : "—" }}</code>
    </p>
  </div>
</template>
