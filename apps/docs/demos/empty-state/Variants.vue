<script setup lang="ts">
import { MsEmptyState } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      width: 100%;
    "
  >
    <MsEmptyState variant="dashed" size="sm" :title="t.dashed" :description="t.noFiles" />
    <MsEmptyState variant="card" size="sm" :title="t.card" :description="t.noFiles" />
    <MsEmptyState variant="plain" size="sm" :title="t.plain" :description="t.noFiles" />
  </div>
</template>
