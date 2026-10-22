<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsCommandPalette, type MsCommandItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);

const items = computed<MsCommandItem[]>(() => [
  { id: "dashboard", label: t.goDashboard, group: t.navigation, shortcut: "G D" },
  { id: "projects", label: t.goProjects, group: t.navigation, shortcut: "G P" },
  { id: "settings", label: t.goSettings, group: t.navigation, shortcut: "G S" },
  { id: "new-project", label: t.newProject, group: t.actionsGroup, shortcut: "⌘N" },
  { id: "deploy", label: t.deploy, group: t.actionsGroup, shortcut: "⌘⇧D" },
  { id: "billing", label: t.billing, group: t.actionsGroup, disabled: true },
]);
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.openPalette }}</MsButton>
  <MsCommandPalette
    v-model="open"
    :items="items"
    :hotkey="false"
    :placeholder="t.placeholder"
    :empty-text="t.empty"
  />
</template>
