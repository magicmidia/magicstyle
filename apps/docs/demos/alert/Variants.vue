<script setup lang="ts">
import { MsAlert } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsAlert variant="soft" tone="primary" :title="t.soft" :description="t.variantDescription" />
    <MsAlert
      variant="outline"
      tone="primary"
      :title="t.outline"
      :description="t.variantDescription"
    />
    <MsAlert variant="solid" tone="primary" :title="t.solid" :description="t.variantDescription" />
  </div>
</template>
