<script setup lang="ts">
import { computed } from "vue";
import { MsCol, MsRow } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const metrics = computed(() => [
  { label: t.visitors, value: t.visitorsValue },
  { label: t.signups, value: t.signupsValue },
  { label: t.conversion, value: t.conversionValue },
  { label: t.avgTicket, value: t.avgTicketValue },
]);
</script>

<template>
  <div class="ms-u-w-full ms-u-border ms-u-rounded-lg ms-u-bg-raised" style="max-width: 760px">
    <MsRow :gutter="[0, 0]">
      <MsCol v-for="metric in metrics" :key="metric.label" :span="6" :md="3">
        <div class="ms-u-p-4">
          <div class="ms-u-text-muted" style="font-size: var(--ms-typography-size-sm)">
            {{ metric.label }}
          </div>
          <div
            class="ms-u-font-bold ms-text-numeric"
            style="font-size: var(--ms-typography-size-xl)"
          >
            {{ metric.value }}
          </div>
        </div>
      </MsCol>
    </MsRow>
  </div>
</template>
