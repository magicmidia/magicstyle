<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsCommandPalette, MsKbd, type MsCommandItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);

const items = computed<MsCommandItem[]>(() => [
  { id: "new-doc", label: t.newDocument },
  { id: "search", label: t.searchFiles },
  { id: "invite", label: t.inviteMember },
  { id: "theme", label: t.toggleTheme },
]);
</script>

<template>
  <div style="display: flex; align-items: center; gap: 12px">
    <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.openPalette }}</MsButton>
    <span><MsKbd>Ctrl</MsKbd> + <MsKbd>K</MsKbd></span>
  </div>
  <MsCommandPalette v-model="open" :items="items" />
</template>
