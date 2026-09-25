<script setup lang="ts">
import { MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <MsLink href="https://vuejs.org">{{ t.vueDocs }}</MsLink>
    <MsLink href="https://github.com" :external="false">{{ t.sameTab }}</MsLink>
    <MsLink href="/files/relatorio-anual.pdf" download="relatorio-anual.pdf">
      {{ t.downloadReport }}
    </MsLink>
  </div>
</template>
