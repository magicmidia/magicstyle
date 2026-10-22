<script setup lang="ts">
import { MsButton, MsLink, MsNavbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 760px">
    <MsNavbar tone="primary">
      <template #brand>{{ t.brand }}</template>
      <MsLink href="#" variant="subtle" underline="hover">{{ t.dashboard }}</MsLink>
      <MsLink href="#" variant="subtle" underline="hover">{{ t.projects }}</MsLink>
      <template #actions>
        <MsButton size="sm" variant="outline" tone="neutral">{{ t.logOut }}</MsButton>
      </template>
    </MsNavbar>
    <MsNavbar tone="neutral">
      <template #brand>{{ t.adminConsole }}</template>
      <MsLink href="#" variant="subtle" underline="hover">{{ t.users }}</MsLink>
      <MsLink href="#" variant="subtle" underline="hover">{{ t.audit }}</MsLink>
      <template #actions>
        <MsButton size="sm" variant="soft" tone="neutral">{{ t.logOut }}</MsButton>
      </template>
    </MsNavbar>
  </div>
</template>
