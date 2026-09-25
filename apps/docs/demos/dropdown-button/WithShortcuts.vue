<script setup lang="ts">
import { computed } from "vue";
import { MsDropdownButton, type MsMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<MsMenuItem[]>(() => [
  { label: t.newFile, value: "new-file", prefix: "📄", suffix: "⌘N" },
  { label: t.newFolder, value: "new-folder", prefix: "📁", suffix: "⇧⌘N" },
  { label: t.upload, value: "upload", prefix: "⬆️", suffix: "⌘U" },
  { label: t.importGithub, value: "import", prefix: "🔗", disabled: true },
]);
</script>

<template>
  <MsDropdownButton :label="t.create" :items="items" />
</template>
