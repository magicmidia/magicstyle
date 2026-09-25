<script setup lang="ts">
import { MsStatus } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsStatus tone="success" :label="t.operational" />
  <MsStatus tone="info" :label="t.maintenance" />
  <MsStatus tone="warning" :label="t.degraded" />
  <MsStatus tone="danger" :label="t.outage" />
  <MsStatus tone="neutral" :label="t.paused" />
</template>
