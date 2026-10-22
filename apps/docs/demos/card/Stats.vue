<script setup lang="ts">
import { computed } from "vue";
import { MsCard } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const stats = computed(() => [
  { label: t.totalRevenue, value: t.totalRevenueValue, hint: t.totalRevenueHint, up: true },
  { label: t.subscriptions, value: t.subscriptionsValue, hint: t.subscriptionsHint, up: true },
  { label: t.sales, value: t.salesValue, hint: t.salesHint, up: true },
  { label: t.churn, value: t.churnValue, hint: t.churnHint, up: false },
]);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 820px;
    "
  >
    <MsCard v-for="stat in stats" :key="stat.label" variant="outline" padding="md">
      <template #title>
        <span
          class="ms-u-text-muted ms-u-font-medium"
          style="font-size: var(--ms-typography-size-sm)"
        >
          {{ stat.label }}
        </span>
      </template>
      <div class="ms-u-font-bold ms-text-numeric" style="font-size: var(--ms-typography-size-2xl)">
        {{ stat.value }}
      </div>
      <div :class="stat.up ? 'ms-u-text-success' : 'ms-u-text-danger'">{{ stat.hint }}</div>
    </MsCard>
  </div>
</template>
