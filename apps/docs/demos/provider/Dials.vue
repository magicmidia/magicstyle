<script setup lang="ts">
import { MsButton, MsCard, MsProvider, MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsProvider
    color-mode="dark"
    density="compact"
    radius="sharp"
    style="width: 100%; max-width: 380px"
  >
    <MsCard :title="t.deployTitle" :description="t.deployDesc">
      <template #actions>
        <MsTag tone="success" size="sm" dot>{{ t.ready }}</MsTag>
      </template>
      <template #footer>
        <MsButton variant="outline" tone="neutral" size="sm">{{ t.viewLogs }}</MsButton>
        <MsButton size="sm">{{ t.visit }}</MsButton>
      </template>
    </MsCard>
  </MsProvider>
</template>
