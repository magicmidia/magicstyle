<script setup lang="ts">
import { MsBlockquote } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; max-width: 560px">
    <MsBlockquote tone="primary" size="sm">
      <p>{{ t.notePrimary }}</p>
    </MsBlockquote>
    <MsBlockquote tone="accent" size="sm">
      <p>{{ t.noteAccent }}</p>
    </MsBlockquote>
    <MsBlockquote tone="info" size="sm">
      <p>{{ t.noteInfo }}</p>
    </MsBlockquote>
    <MsBlockquote tone="warning" size="sm">
      <p>{{ t.noteWarning }}</p>
    </MsBlockquote>
  </div>
</template>
