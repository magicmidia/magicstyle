<script setup lang="ts">
import { MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsButton>{{ t.primary }}</MsButton>
  <MsButton variant="outline" tone="neutral">{{ t.outline }}</MsButton>
  <MsButton variant="soft">{{ t.soft }}</MsButton>
  <MsButton variant="ghost" tone="neutral">{{ t.ghost }}</MsButton>
  <MsButton variant="link">{{ t.link }}</MsButton>
  <MsButton tone="danger">{{ t.danger }}</MsButton>
</template>
