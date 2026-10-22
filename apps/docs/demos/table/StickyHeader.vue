<script setup lang="ts">
import {
  MsTable,
  MsTableBody,
  MsTableCell,
  MsTableHead,
  MsTableHeaderCell,
  MsTableRow,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const events = [
  { time: "14:32:08", service: "api-gateway", code: 200, latency: "84 ms" },
  { time: "14:32:07", service: "auth", code: 401, latency: "12 ms" },
  { time: "14:32:05", service: "billing", code: 200, latency: "231 ms" },
  { time: "14:32:02", service: "api-gateway", code: 502, latency: "3012 ms" },
  { time: "14:31:58", service: "search", code: 200, latency: "46 ms" },
  { time: "14:31:55", service: "billing", code: 200, latency: "198 ms" },
  { time: "14:31:51", service: "notifications", code: 202, latency: "33 ms" },
  { time: "14:31:47", service: "auth", code: 200, latency: "15 ms" },
  { time: "14:31:40", service: "search", code: 429, latency: "5 ms" },
  { time: "14:31:36", service: "api-gateway", code: 200, latency: "91 ms" },
];
</script>

<template>
  <MsTable sticky-header density="sm" variant="surface" style="max-height: 260px; overflow-y: auto">
    <MsTableHead>
      <MsTableRow>
        <MsTableHeaderCell>{{ t.time }}</MsTableHeaderCell>
        <MsTableHeaderCell>{{ t.service }}</MsTableHeaderCell>
        <MsTableHeaderCell align="right">{{ t.statusCode }}</MsTableHeaderCell>
        <MsTableHeaderCell align="right">{{ t.latency }}</MsTableHeaderCell>
      </MsTableRow>
    </MsTableHead>
    <MsTableBody>
      <MsTableRow v-for="event in events" :key="event.time">
        <MsTableCell class="ms-text-numeric">{{ event.time }}</MsTableCell>
        <MsTableCell
          ><code>{{ event.service }}</code></MsTableCell
        >
        <MsTableCell align="right" class="ms-text-numeric">{{ event.code }}</MsTableCell>
        <MsTableCell align="right" class="ms-text-numeric">{{ event.latency }}</MsTableCell>
      </MsTableRow>
    </MsTableBody>
  </MsTable>
</template>
