<script setup lang="ts">
import { MsAlert } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 560px">
    <MsAlert size="lg" tone="success" icon-style="featured" align="start" :title="t.paymentTitle">
      <p style="margin: 0 0 4px">{{ t.paymentLine1 }}</p>
      <p style="margin: 0">{{ t.paymentLine2 }}</p>
    </MsAlert>
    <MsAlert size="sm" tone="info" :description="t.smallDescription" />
  </div>
</template>
