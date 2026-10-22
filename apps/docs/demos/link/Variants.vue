<script setup lang="ts">
import { MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 20px">
    <MsLink href="#" variant="primary">{{ t.viewInvoice }}</MsLink>
    <MsLink href="#" variant="default">{{ t.editProfile }}</MsLink>
    <MsLink href="#" variant="subtle">{{ t.changelog }}</MsLink>
    <MsLink href="#" variant="muted">{{ t.help }}</MsLink>
    <MsLink href="#" variant="danger">{{ t.deleteAccount }}</MsLink>
  </div>
</template>
