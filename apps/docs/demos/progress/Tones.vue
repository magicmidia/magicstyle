<script setup lang="ts">
import { MsProgress } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 420px">
    <MsProgress :model-value="45" tone="primary" :label="t.sprint" show-value />
    <MsProgress :model-value="100" tone="success" :label="t.backup" show-value />
    <MsProgress :model-value="82" tone="warning" :label="t.storage" show-value />
    <MsProgress :model-value="97" tone="danger" :label="t.apiQuota" show-value />
    <MsProgress :model-value="30" tone="neutral" :label="t.onboarding" show-value />
    <MsProgress :model-value="60" tone="accent" gradient :label="t.goal" show-value />
  </div>
</template>
