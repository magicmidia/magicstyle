<script setup lang="ts">
import { MsTimeline, MsTimelineItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsTimeline>
      <MsTimelineItem
        tone="success"
        solid
        title-tag="p"
        :title="t.orderPlaced"
        :timestamp="t.orderPlacedAt"
      >
        {{ t.orderPlacedDesc }}
      </MsTimelineItem>
      <MsTimelineItem
        tone="success"
        solid
        title-tag="p"
        :title="t.paymentApproved"
        :timestamp="t.paymentApprovedAt"
      >
        {{ t.paymentApprovedDesc }}
      </MsTimelineItem>
      <MsTimelineItem
        tone="warning"
        active
        title-tag="p"
        :title="t.delayed"
        :timestamp="t.delayedAt"
      >
        {{ t.delayedDesc }}
      </MsTimelineItem>
      <MsTimelineItem
        tone="neutral"
        title-tag="p"
        :title="t.outForDelivery"
        :timestamp="t.expected"
      >
        {{ t.outForDeliveryDesc }}
      </MsTimelineItem>
    </MsTimeline>
  </div>
</template>
