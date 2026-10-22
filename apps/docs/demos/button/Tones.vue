<script setup lang="ts">
import { MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsButton tone="primary">{{ t.publish }}</MsButton>
      <MsButton tone="secondary">{{ t.share }}</MsButton>
      <MsButton tone="accent">{{ t.upgrade }}</MsButton>
      <MsButton tone="success">{{ t.approve }}</MsButton>
      <MsButton tone="warning">{{ t.review }}</MsButton>
      <MsButton tone="danger">{{ t.danger }}</MsButton>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsButton variant="soft" tone="primary">{{ t.publish }}</MsButton>
      <MsButton variant="soft" tone="secondary">{{ t.share }}</MsButton>
      <MsButton variant="soft" tone="accent">{{ t.upgrade }}</MsButton>
      <MsButton variant="soft" tone="success">{{ t.approve }}</MsButton>
      <MsButton variant="soft" tone="warning">{{ t.review }}</MsButton>
      <MsButton variant="soft" tone="danger">{{ t.danger }}</MsButton>
    </div>
  </div>
</template>
