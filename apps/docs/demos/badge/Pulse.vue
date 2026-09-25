<script setup lang="ts">
import { MsBadge } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
    <MsBadge tone="danger" dot pulse pill>{{ t.live }}</MsBadge>
    <MsBadge tone="success" variant="soft" dot pulse pill>{{ t.systemsOk }}</MsBadge>
    <MsBadge tone="warning" variant="outline" dot pill>{{ t.maintenance }}</MsBadge>
  </div>
</template>
