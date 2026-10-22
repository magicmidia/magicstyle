<script setup lang="ts">
import { computed, ref } from "vue";
import { MsField, MsNativeSelect, type MsNativeSelectOption } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const plan = ref("pro");

const plans = computed<MsNativeSelectOption[]>(() => [
  { label: t.planFree, value: "free" },
  { label: t.planPro, value: "pro" },
  { label: t.planTeam, value: "team" },
  { label: t.planEnterprise, value: "enterprise", disabled: true },
]);
</script>

<template>
  <div style="width: 100%; max-width: 320px">
    <MsField :label="t.plan" :description="t.planHint">
      <MsNativeSelect v-model="plan" :options="plans" />
    </MsField>
  </div>
</template>
