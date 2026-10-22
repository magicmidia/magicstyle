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
      icon-tone="secondary"
      ring
      :title="t.calendarTitle"
      :description="t.calendarDescription"
    >
      <template #icon>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </template>
      <MsButton size="sm" variant="soft" tone="secondary">{{ t.schedule }}</MsButton>
    </MsEmptyState>
    <MsEmptyState
      variant="card"
      icon-tone="accent"
      ring
      :title="t.favoritesTitle"
      :description="t.favoritesDescription"
    >
      <template #icon>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path
            d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
          />
        </svg>
      </template>
    </MsEmptyState>
    <MsEmptyState
      variant="card"
      icon-tone="info"
      ring
      :title="t.updatesTitle"
      :description="t.updatesDescription"
    >
      <template #icon>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      </template>
    </MsEmptyState>
  </div>
</template>
