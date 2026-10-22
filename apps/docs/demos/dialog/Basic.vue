<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsDialog } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref(false);
</script>

<template>
  <MsButton @click="open = true">{{ t.inviteOpen }}</MsButton>
  <MsDialog v-model:open="open" :title="t.inviteTitle" :description="t.inviteDescription">
    <p style="margin: 0">{{ t.inviteBody }}</p>
    <template #footer>
      <MsButton variant="outline" tone="neutral" @click="open = false">{{ t.notNow }}</MsButton>
      <MsButton @click="open = false">{{ t.accept }}</MsButton>
    </template>
  </MsDialog>
</template>
