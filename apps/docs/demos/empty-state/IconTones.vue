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
      icon-tone="neutral"
      :title="t.archiveTitle"
      :description="t.archiveDescription"
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
          <path d="M21 8v13H3V8" />
          <path d="M1 3h22v5H1z" />
          <path d="M10 12h4" />
        </svg>
      </template>
    </MsEmptyState>
    <MsEmptyState
      variant="card"
      icon-tone="primary"
      :title="t.inviteTitle"
      :description="t.inviteDescription"
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6M22 11h-6" />
        </svg>
      </template>
      <MsButton size="sm">{{ t.invite }}</MsButton>
    </MsEmptyState>
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
      icon-tone="warning"
      :title="t.storageTitle"
      :description="t.storageDescription"
    >
      <template #icon><span aria-hidden="true">!</span></template>
    </MsEmptyState>
    <MsEmptyState
      variant="card"
      icon-tone="danger"
      :title="t.loadErrorTitle"
      :description="t.loadErrorDescription"
    >
      <template #icon><span aria-hidden="true">×</span></template>
      <MsButton size="sm" variant="outline" tone="neutral">{{ t.tryAgain }}</MsButton>
    </MsEmptyState>
  </div>
</template>
