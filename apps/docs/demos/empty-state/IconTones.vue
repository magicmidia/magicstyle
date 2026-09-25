<script setup lang="ts">
import { MsButton, MsEmptyState } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      width: 100%;
    "
  >
    <MsEmptyState
      variant="card"
      icon-tone="success"
      :title="t.inboxZeroTitle"
      :description="t.inboxZeroDescription"
    >
      <template #icon><span aria-hidden="true">✓</span></template>
    </MsEmptyState>
    <MsEmptyState
      variant="card"
      icon-tone="danger"
      :title="t.loadErrorTitle"
      :description="t.loadErrorDescription"
    >
      <template #icon><span aria-hidden="true">!</span></template>
      <MsButton size="sm" variant="outline" tone="neutral">{{ t.tryAgain }}</MsButton>
    </MsEmptyState>
  </div>
</template>
