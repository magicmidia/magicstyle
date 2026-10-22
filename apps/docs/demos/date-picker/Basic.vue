<script setup lang="ts">
import { ref } from "vue";
import { MsDatePicker, type MsDatePickerModelValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const birthday = ref<MsDatePickerModelValue>("");
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 280px">
    <MsDatePicker v-model="birthday" :placeholder="t.birthday" />
    <p style="margin: 0">
      {{ t.value }} <code>{{ birthday || "—" }}</code>
    </p>
  </div>
</template>
