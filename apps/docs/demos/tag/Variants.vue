<script setup lang="ts">
import { MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px">
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
      <MsTag variant="soft" tone="primary">{{ t.soft }}</MsTag>
      <MsTag variant="solid" tone="primary">{{ t.solid }}</MsTag>
      <MsTag variant="outline" tone="primary">{{ t.outline }}</MsTag>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
      <MsTag shape="square" tone="accent">{{ t.square }}</MsTag>
      <MsTag shape="rounded" tone="accent">{{ t.rounded }}</MsTag>
      <MsTag shape="pill" tone="accent">{{ t.pill }}</MsTag>
    </div>
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
      <MsTag size="sm" tone="success" dot>{{ t.online }}</MsTag>
      <MsTag size="md" tone="success" dot>{{ t.online }}</MsTag>
      <MsTag size="lg" tone="success" dot>{{ t.online }}</MsTag>
    </div>
  </div>
</template>
