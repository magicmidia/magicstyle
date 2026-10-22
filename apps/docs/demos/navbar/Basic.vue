<script setup lang="ts">
import { MsAvatar, MsButton, MsLink, MsNavbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 760px">
    <MsNavbar variant="bordered">
      <template #brand>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 2 7l10 5 10-5-10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5" />
        </svg>
        {{ t.brand }}
      </template>
      <nav :aria-label="t.mainNav" style="display: flex; gap: 20px">
        <MsLink href="#" underline="none" aria-current="page">{{ t.dashboard }}</MsLink>
        <MsLink href="#" variant="subtle" underline="none">{{ t.projects }}</MsLink>
        <MsLink href="#" variant="subtle" underline="none">{{ t.team }}</MsLink>
        <MsLink href="#" variant="subtle" underline="none">{{ t.reports }}</MsLink>
      </nav>
      <template #actions>
        <MsButton size="sm" variant="ghost" tone="neutral">{{ t.feedback }}</MsButton>
        <MsAvatar size="sm" :name="t.userName" />
      </template>
    </MsNavbar>
  </div>
</template>
