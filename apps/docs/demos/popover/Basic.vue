<script setup lang="ts">
import { MsButton, MsPopover } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsPopover :title="t.shippingTitle" width="md">
    <template #trigger>
      <MsButton variant="outline" tone="neutral">{{ t.shippingTrigger }}</MsButton>
    </template>
    <p style="margin: 0">{{ t.shippingBody }}</p>
  </MsPopover>
</template>
