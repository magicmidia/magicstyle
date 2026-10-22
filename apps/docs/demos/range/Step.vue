<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsRange } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const budget = ref(2500);
const seats = ref(10);
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 360px">
    <MsField :label="t.budget" :description="t.budgetHint">
      <MsRange v-model="budget" :min="500" :max="10000" :step="250">
        <template #value="{ value }">{{ t.currency }} {{ value }}</template>
      </MsRange>
    </MsField>
    <MsField :label="t.seats">
      <MsRange v-model="seats" :min="1" :max="50" show-value />
    </MsField>
  </div>
</template>
