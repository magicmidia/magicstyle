<script setup lang="ts">
import { computed } from "vue";
import { MsScrollbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const headers = computed(() => [
  t.colDate,
  t.colService,
  t.colRegion,
  t.colRequests,
  t.colLatency,
  t.colErrors,
]);
const services = ["api-gateway", "auth", "billing", "search", "notifications"];
const regions = ["sa-east-1", "us-east-1", "eu-west-1"];
const rows = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  date: `2025-09-${String(24 - (i % 24)).padStart(2, "0")}`,
  service: services[i % services.length],
  region: regions[i % regions.length],
  requests: 12000 + ((i * 7919) % 50000),
  latency: 40 + ((i * 37) % 180),
  errors: (i * 13) % 42,
}));
</script>

<template>
  <MsScrollbar
    orientation="both"
    :max-height="260"
    class="ms-u-border ms-u-rounded-md"
    style="width: 100%; max-width: 520px"
    tabindex="0"
    role="region"
    :aria-label="t.metrics"
  >
    <table
      style="border-collapse: collapse; min-width: 720px; font-size: var(--ms-typography-size-sm)"
    >
      <thead>
        <tr>
          <th
            v-for="h in headers"
            :key="h"
            class="ms-u-p-2 ms-u-text-left ms-u-bg-sunken"
            style="position: sticky; top: 0"
          >
            {{ h }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td class="ms-u-p-2 ms-u-font-mono">{{ row.date }}</td>
          <td class="ms-u-p-2">{{ row.service }}</td>
          <td class="ms-u-p-2">{{ row.region }}</td>
          <td class="ms-u-p-2 ms-text-numeric">{{ row.requests }}</td>
          <td class="ms-u-p-2 ms-text-numeric">{{ row.latency }}</td>
          <td class="ms-u-p-2 ms-text-numeric">{{ row.errors }}</td>
        </tr>
      </tbody>
    </table>
  </MsScrollbar>
</template>
