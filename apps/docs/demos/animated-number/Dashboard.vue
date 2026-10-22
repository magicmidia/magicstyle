<script setup lang="ts">
import { computed, ref } from "vue";
import { MsAnimatedNumber, MsBadge, MsButton, MsCard } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const period = ref<"week" | "month">("week");

const data = {
  week: { orders: 342, ticket: 187.4, churn: 1.8 },
  month: { orders: 1498, ticket: 203.9, churn: 2.3 },
};

const current = computed(() => data[period.value]);

function toggle() {
  period.value = period.value === "week" ? "month" : "week";
}
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 640px">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px">
      <MsBadge variant="soft" tone="neutral">
        {{ period === "week" ? t.lastWeek : t.lastMonth }}
      </MsBadge>
      <MsButton variant="outline" tone="neutral" size="sm" @click="toggle">
        {{ t.switchPeriod }}
      </MsButton>
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px"
    >
      <MsCard :title="t.orders">
        <MsAnimatedNumber :value="current.orders" style="font-size: 1.75rem; font-weight: 700" />
      </MsCard>
      <MsCard :title="t.averageTicket">
        <MsAnimatedNumber
          :value="current.ticket"
          :decimals="2"
          :prefix="t.currencySymbol"
          style="font-size: 1.75rem; font-weight: 700"
        />
      </MsCard>
      <MsCard :title="t.churn">
        <MsAnimatedNumber
          :value="current.churn"
          :decimals="1"
          suffix="%"
          style="font-size: 1.75rem; font-weight: 700"
        />
      </MsCard>
    </div>
  </div>
</template>
