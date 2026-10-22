<script setup lang="ts">
import { MsButton, MsLink, MsNavbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 760px">
    <MsNavbar floating size="lg" variant="glass">
      <template #brand>{{ t.brand }}</template>
      <MsLink href="#" variant="subtle" underline="none">{{ t.product }}</MsLink>
      <MsLink href="#" variant="subtle" underline="none">{{ t.customers }}</MsLink>
      <MsLink href="#" variant="subtle" underline="none">{{ t.pricing }}</MsLink>
      <template #actions>
        <MsButton size="sm" variant="ghost" tone="neutral">{{ t.signIn }}</MsButton>
        <MsButton size="sm">{{ t.startFree }}</MsButton>
      </template>
    </MsNavbar>
  </div>
</template>
