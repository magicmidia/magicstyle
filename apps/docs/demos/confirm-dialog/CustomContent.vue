<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsConfirmDialog } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref(false);
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.resetWorkspace }}</MsButton>
  <MsConfirmDialog v-model:open="open" tone="warning" :title="t.resetTitle">
    <template #icon>↺</template>
    <p style="margin: 0 0 8px">{{ t.resetIntro }}</p>
    <ul style="margin: 0; padding-inline-start: 20px">
      <li>{{ t.resetItem1 }}</li>
      <li>{{ t.resetItem2 }}</li>
      <li>{{ t.resetItem3 }}</li>
    </ul>
    <template #footer>
      <MsButton variant="ghost" tone="neutral" size="sm" @click="open = false">
        {{ t.keepAsIs }}
      </MsButton>
      <MsButton tone="warning" size="sm" @click="open = false">{{ t.resetConfirm }}</MsButton>
    </template>
  </MsConfirmDialog>
</template>
