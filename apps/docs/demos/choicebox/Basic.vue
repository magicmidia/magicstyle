<script setup lang="ts">
import { computed, ref } from "vue";
import { MsChoicebox, type MsChoiceboxItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const plan = ref<string | number | (string | number)[]>("pro");

const plans = computed<MsChoiceboxItemData[]>(() => [
  { value: "hobby", title: t.hobby, description: t.hobbyDesc, price: t.hobbyPrice },
  { value: "pro", title: t.pro, description: t.proDesc, price: t.proPrice, badge: t.popular },
  {
    value: "enterprise",
    title: t.enterprise,
    description: t.enterpriseDesc,
    price: t.enterprisePrice,
  },
]);
</script>

<template>
  <div style="width: 100%; max-width: 440px">
    <MsChoicebox v-model="plan" :items="plans" :aria-label="t.planLabel" />
  </div>
</template>
