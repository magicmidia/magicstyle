<script setup lang="ts">
import { computed } from "vue";
import { MsStep, MsStepper } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const tracking = computed(() => [
  { title: t.orderPlaced, subtitle: t.orderPlacedAt },
  { title: t.paymentConfirmed, subtitle: t.paymentConfirmedAt },
  { title: t.outForDelivery, subtitle: t.outForDeliveryAt },
  { title: t.delivered, subtitle: t.deliveredEta },
]);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsStepper :model-value="2" direction="vertical">
      <MsStep
        v-for="(item, index) in tracking"
        :key="item.title"
        :index="index"
        :title="item.title"
        :subtitle="item.subtitle"
      />
    </MsStepper>
  </div>
</template>
