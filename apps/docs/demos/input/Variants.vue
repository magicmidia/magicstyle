<script setup lang="ts">
import { MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsInput :placeholder="t.outline" :aria-label="t.outline" />
    <MsInput variant="filled" :placeholder="t.filled" :aria-label="t.filled" />
    <MsInput variant="flushed" :placeholder="t.flushed" :aria-label="t.flushed" />
    <MsInput pill :placeholder="t.pill" :aria-label="t.pill" />
  </div>
</template>
