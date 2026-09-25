<script setup lang="ts">
import { MsButton, MsButtonGroup, MsIconButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
    <MsButtonGroup :aria-label="t.history">
      <MsIconButton variant="outline" tone="neutral" :ariaLabel="t.undo">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M9 14 4 9l5-5" />
          <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
        </svg>
      </MsIconButton>
      <MsIconButton variant="outline" tone="neutral" :ariaLabel="t.redo">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m15 14 5-5-5-5" />
          <path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13" />
        </svg>
      </MsIconButton>
    </MsButtonGroup>
    <MsButtonGroup :aria-label="t.publishing">
      <MsButton variant="outline" tone="neutral">{{ t.preview }}</MsButton>
      <MsButton>{{ t.publish }}</MsButton>
    </MsButtonGroup>
  </div>
</template>
