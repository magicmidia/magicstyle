<script setup lang="ts">
import { MsBlockquote } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="max-width: 560px">
    <MsBlockquote author="Fernanda Lopes" :author-role="t.designLead">
      <p>{{ t.quoteDesign }}</p>
      <template #cite>{{ t.sourceTalk }}</template>
    </MsBlockquote>
  </div>
</template>
