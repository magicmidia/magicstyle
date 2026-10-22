<script setup lang="ts">
import { MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
    <MsButton href="#pricing">{{ t.viewPricing }}</MsButton>
    <MsButton
      href="https://vuejs.org/guide/introduction.html"
      target="_blank"
      rel="noopener noreferrer"
      variant="outline"
      tone="neutral"
    >
      {{ t.readDocs }}
      <template #icon-end>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </template>
    </MsButton>
    <MsButton as="a" href="#invoices" variant="soft">{{ t.invoices }}</MsButton>
    <MsButton href="#billing" variant="ghost" tone="neutral" disabled>{{ t.billing }}</MsButton>
  </div>
</template>
