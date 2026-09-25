<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSegmentedControl } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const cycle = ref<"monthly" | "yearly">("yearly");

const options = computed(() => [
  { label: t.monthly, value: "monthly" as const },
  { label: t.yearly, value: "yearly" as const },
]);

const price = computed(() => (cycle.value === "monthly" ? t.monthlyPrice : t.yearlyPrice));
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 320px; text-align: center">
    <MsSegmentedControl
      v-model="cycle"
      :options="options"
      shape="pill"
      tone="accent"
      full-width
      :aria-label="t.billingCycle"
    />
    <strong style="font-size: 1.5rem">{{ price }}</strong>
  </div>
</template>
