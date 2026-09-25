<script setup lang="ts">
import { MsBlockquote } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 24px; max-width: 560px">
    <MsBlockquote variant="card" author="Renato Dias" :author-role="t.ctoRole" icon>
      <p>{{ t.quoteShip }}</p>
    </MsBlockquote>
    <MsBlockquote variant="filled" tone="info" author="Júlia Campos" :author-role="t.supportRole">
      <p>{{ t.quoteSupport }}</p>
    </MsBlockquote>
    <MsBlockquote variant="minimal" size="lg">
      <p>{{ t.quoteMinimal }}</p>
    </MsBlockquote>
  </div>
</template>
