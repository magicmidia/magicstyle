<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsConfirmDialog } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref(false);
</script>

<template>
  <MsButton tone="danger" variant="outline" @click="open = true">{{ t.deleteProject }}</MsButton>
  <MsConfirmDialog
    v-model:open="open"
    :title="t.deleteTitle"
    :message="t.deleteMessage"
    :confirm-label="t.deleteConfirm"
    :cancel-label="t.cancel"
    @confirm="open = false"
  />
</template>
