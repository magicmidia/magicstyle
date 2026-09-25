<script setup lang="ts">
import { MsIconButton, MsTooltip } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div role="group" :aria-label="t.messageActions" style="display: flex; gap: 4px">
    <MsTooltip :content="t.reply">
      <MsIconButton variant="ghost" tone="neutral" size="sm" :ariaLabel="t.reply">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m9 17-5-5 5-5" />
          <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
        </svg>
      </MsIconButton>
    </MsTooltip>
    <MsTooltip :content="t.forward">
      <MsIconButton variant="ghost" tone="neutral" size="sm" :ariaLabel="t.forward">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m15 17 5-5-5-5" />
          <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
        </svg>
      </MsIconButton>
    </MsTooltip>
    <MsTooltip :content="t.archive">
      <MsIconButton variant="ghost" tone="neutral" size="sm" :ariaLabel="t.archive">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <rect width="20" height="5" x="2" y="3" rx="1" />
          <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4" />
        </svg>
      </MsIconButton>
    </MsTooltip>
    <MsTooltip :content="t.delete">
      <MsIconButton variant="ghost" tone="danger" size="sm" :ariaLabel="t.delete">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path
            d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          />
        </svg>
      </MsIconButton>
    </MsTooltip>
  </div>
</template>
