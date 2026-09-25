<script setup lang="ts">
import { MsCollapse } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 520px">
    <MsCollapse variant="bordered" :title="t.borderedTitle">
      <p>{{ t.borderedBody }}</p>
    </MsCollapse>
    <MsCollapse variant="card" :title="t.cardTitle">
      <p>{{ t.cardBody }}</p>
    </MsCollapse>
    <MsCollapse variant="ghost" :title="t.ghostTitle">
      <p>{{ t.ghostBody }}</p>
    </MsCollapse>
    <MsCollapse :title="t.disabledTitle" disabled>
      <p>{{ t.disabledBody }}</p>
    </MsCollapse>
  </div>
</template>
