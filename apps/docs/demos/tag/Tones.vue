<script setup lang="ts">
import { MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 8px">
    <MsTag>{{ t.design }}</MsTag>
    <MsTag tone="primary">{{ t.frontend }}</MsTag>
    <MsTag tone="secondary">{{ t.backend }}</MsTag>
    <MsTag tone="accent">{{ t.research }}</MsTag>
    <MsTag tone="info">{{ t.docs }}</MsTag>
    <MsTag tone="success">{{ t.done }}</MsTag>
    <MsTag tone="warning">{{ t.review }}</MsTag>
    <MsTag tone="danger">{{ t.bug }}</MsTag>
  </div>
</template>
