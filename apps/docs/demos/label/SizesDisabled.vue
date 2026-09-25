<script setup lang="ts">
import { MsLabel } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: start">
    <MsLabel size="sm">{{ t.small }}</MsLabel>
    <MsLabel>{{ t.medium }}</MsLabel>
    <MsLabel size="lg">{{ t.large }}</MsLabel>
    <MsLabel disabled>{{ t.disabled }}</MsLabel>
  </div>
</template>
