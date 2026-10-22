<script setup lang="ts">
import { MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <div style="display: flex; flex-wrap: wrap; gap: 8px">
      <MsButton pill>{{ t.subscribe }}</MsButton>
      <MsButton shape="square" variant="outline" tone="neutral">{{ t.filters }}</MsButton>
      <MsButton wide>{{ t.getStarted }}</MsButton>
    </div>
    <MsButton block>{{ t.signIn }}</MsButton>
  </div>
</template>
