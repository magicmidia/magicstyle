<script setup lang="ts">
import { computed, ref } from "vue";
import { MsAnimatedNumber, MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const revenue = ref(48250.9);
const conversion = ref(3.4);
const weight = ref(12.5);

const formatCurrency = computed(() => {
  const currency = new Intl.NumberFormat(t.numberLocale, {
    style: "currency",
    currency: t.currencyCode,
  });
  return (value: number) => currency.format(value);
});

function update() {
  revenue.value = Math.round((30000 + Math.random() * 40000) * 100) / 100;
  conversion.value = Math.round((1 + Math.random() * 6) * 10) / 10;
  weight.value = Math.round((5 + Math.random() * 20) * 10) / 10;
}
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: start">
    <div style="display: flex; flex-wrap: wrap; gap: 32px; font-size: 1.5rem; font-weight: 600">
      <div style="display: grid; gap: 4px">
        <span style="font-size: 0.8125rem; font-weight: 400; opacity: 0.7">{{ t.revenue }}</span>
        <MsAnimatedNumber :value="revenue" :format="formatCurrency" />
      </div>
      <div style="display: grid; gap: 4px">
        <span style="font-size: 0.8125rem; font-weight: 400; opacity: 0.7">{{ t.conversion }}</span>
        <MsAnimatedNumber :value="conversion" :decimals="1" suffix="%" />
      </div>
      <div style="display: grid; gap: 4px">
        <span style="font-size: 0.8125rem; font-weight: 400; opacity: 0.7">{{ t.shipment }}</span>
        <MsAnimatedNumber :value="weight" :decimals="1" suffix=" kg" :duration="1600" />
      </div>
    </div>
    <MsButton size="sm" @click="update">{{ t.refresh }}</MsButton>
  </div>
</template>
