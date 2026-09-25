<script setup lang="ts">
import { MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsInput size="xs" :placeholder="t.sizeXs" :aria-label="t.sizeXs" />
    <MsInput size="sm" :placeholder="t.sizeSm" :aria-label="t.sizeSm" />
    <MsInput :placeholder="t.sizeMd" :aria-label="t.sizeMd" />
    <MsInput size="lg" :placeholder="t.sizeLg" :aria-label="t.sizeLg" />
    <MsInput size="xl" :placeholder="t.sizeXl" :aria-label="t.sizeXl" />
  </div>
</template>
