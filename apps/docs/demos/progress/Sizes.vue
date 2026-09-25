<script setup lang="ts">
import { MsProgress } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 420px">
    <MsProgress :model-value="40" size="xs" :label="t.sizeXs" />
    <MsProgress :model-value="55" size="sm" :label="t.sizeSm" />
    <MsProgress :model-value="70" size="md" :label="t.sizeMd" />
    <MsProgress :model-value="85" size="xl" shape="rounded" inline-value :label="t.sizeXl" />
  </div>
</template>
