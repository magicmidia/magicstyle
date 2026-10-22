<script setup lang="ts">
import { MsButton, MsButtonGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 420px">
    <MsButtonGroup full-width :aria-label="t.exportAs">
      <MsButton variant="outline" tone="neutral">PDF</MsButton>
      <MsButton variant="outline" tone="neutral">CSV</MsButton>
      <MsButton variant="outline" tone="neutral">XLSX</MsButton>
    </MsButtonGroup>
  </div>
</template>
