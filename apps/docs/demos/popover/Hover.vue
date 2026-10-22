<script setup lang="ts">
import { MsBadge, MsPopover } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsPopover trigger="hover" placement="top" width="sm" :title="t.proPlan">
    <template #trigger>
      <MsBadge tone="accent">{{ t.pro }}</MsBadge>
    </template>
    {{ t.proBody }}
  </MsPopover>
</template>
