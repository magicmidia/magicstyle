<script setup lang="ts">
import { MsButton, useToast } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const toast = useToast();

function showPersistent() {
  toast.warning(t.offlineMessage, { title: t.offlineTitle, duration: 0 });
}

function showQuick() {
  toast.neutral(t.copiedMessage, { duration: 1500, dismissible: false });
}
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="showPersistent">{{ t.persistent }}</MsButton>
  <MsButton variant="outline" tone="neutral" @click="showQuick">{{ t.quick }}</MsButton>
  <MsButton variant="ghost" tone="neutral" @click="toast.clear()">{{ t.clearAll }}</MsButton>
</template>
