<script setup lang="ts">
import { MsButton, MsSpinner } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: center">
    <div style="display: flex; align-items: center; gap: 8px; font-size: 14px">
      <MsSpinner size="sm" tone="current" :label="t.syncing" />
      <span aria-hidden="true">{{ t.syncingInbox }}</span>
    </div>
    <MsButton loading>{{ t.saving }}</MsButton>
  </div>
</template>
