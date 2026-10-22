<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsCommandPalette, type MsCommandItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const last = ref("");

const items = computed<MsCommandItem[]>(() => [
  { id: "copy-link", label: t.copyLink, group: t.shareGroup },
  { id: "export-pdf", label: t.exportPdf, group: t.shareGroup },
  { id: "duplicate", label: t.duplicate, group: t.pageGroup },
  { id: "archive", label: t.archive, group: t.pageGroup },
]);

function run(command: MsCommandItem) {
  last.value = command.label;
}
</script>

<template>
  <div style="display: grid; justify-items: center; gap: 12px">
    <MsButton @click="open = true">{{ t.pageActions }}</MsButton>
    <p style="margin: 0">{{ t.lastCommand }} {{ last || "—" }}</p>
  </div>
  <MsCommandPalette v-model="open" :items="items" :hotkey="false" @select="run" />
</template>
