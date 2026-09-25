<script setup lang="ts">
import { MsButton, MsButtonGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsButtonGroup orientation="vertical" :aria-label="t.accountActions">
    <MsButton variant="outline" tone="neutral">{{ t.profile }}</MsButton>
    <MsButton variant="outline" tone="neutral">{{ t.billing }}</MsButton>
    <MsButton variant="outline" tone="neutral">{{ t.team }}</MsButton>
    <MsButton variant="outline" tone="danger">{{ t.signOut }}</MsButton>
  </MsButtonGroup>
</template>
