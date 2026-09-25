<script setup lang="ts">
import { MsProgressRadial } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; align-items: center; gap: 12px; font-size: 14px">
    <MsProgressRadial indeterminate size="sm" :stroke-width="4" :aria-label="t.syncing" />
    <span>{{ t.syncingPhotos }}</span>
  </div>
</template>
