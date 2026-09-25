<script setup lang="ts">
import { computed } from "vue";
import { MsStatus, type MsStatusTone } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const services = computed<{ name: string; tone: MsStatusTone; status: string }[]>(() => [
  { name: "API", tone: "success", status: t.operational },
  { name: t.dashboard, tone: "success", status: t.operational },
  { name: t.webhooks, tone: "warning", status: t.degraded },
  { name: t.emailDelivery, tone: "danger", status: t.outage },
  { name: t.cdn, tone: "info", status: t.maintenance },
]);
</script>

<template>
  <ul
    style="
      width: 100%;
      max-width: 420px;
      margin: 0;
      padding: 0;
      list-style: none;
      border: 1px solid var(--ms-color-border-default);
      border-radius: 8px;
    "
  >
    <li
      v-for="(service, i) in services"
      :key="service.name"
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '12px 16px',
        fontSize: '14px',
        borderTop: i === 0 ? 'none' : '1px solid var(--ms-color-border-default)',
      }"
    >
      <span>{{ service.name }}</span>
      <MsStatus
        size="sm"
        :tone="service.tone"
        :pulse="service.tone === 'danger'"
        :label="service.status"
      />
    </li>
  </ul>
</template>
