<script setup lang="ts">
import { MsButton, MsKbd, MsTooltip } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; gap: 4px">
    <MsTooltip size="sm" tone="dark" :show-delay="0">
      <MsButton variant="ghost" tone="neutral" size="sm" :aria-label="t.bold">
        <strong>B</strong>
      </MsButton>
      <template #content>{{ t.bold }} <MsKbd size="xs">Ctrl B</MsKbd></template>
    </MsTooltip>
    <MsTooltip size="sm" tone="dark" :show-delay="0">
      <MsButton variant="ghost" tone="neutral" size="sm" :aria-label="t.italic">
        <em>I</em>
      </MsButton>
      <template #content>{{ t.italic }} <MsKbd size="xs">Ctrl I</MsKbd></template>
    </MsTooltip>
    <MsTooltip size="sm" tone="dark" :show-delay="0">
      <MsButton variant="ghost" tone="neutral" size="sm" :aria-label="t.underline">
        <u>U</u>
      </MsButton>
      <template #content>{{ t.underline }} <MsKbd size="xs">Ctrl U</MsKbd></template>
    </MsTooltip>
    <MsTooltip size="sm" tone="dark" disabled :content="t.link">
      <MsButton variant="ghost" tone="neutral" size="sm" disabled :aria-label="t.link">
        🔗
      </MsButton>
    </MsTooltip>
  </div>
</template>
