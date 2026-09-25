<script setup lang="ts">
import { MsProgress } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 420px">
    <MsProgress indeterminate :label="t.preparingExport" />
    <MsProgress :model-value="64" striped animated tone="success" :label="t.deploying" show-value />
  </div>
</template>
