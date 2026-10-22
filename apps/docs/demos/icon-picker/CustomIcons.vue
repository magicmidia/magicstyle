<script setup lang="ts">
import { computed, ref } from "vue";
import { MsIconPicker, type MsIconItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const icon = ref("rocket");

const icons = computed<MsIconItem[]>(() => [
  {
    id: "rocket",
    name: t.rocket,
    category: t.projects,
    svg: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>',
  },
  {
    id: "flask",
    name: t.lab,
    category: t.projects,
    svg: '<path d="M9 3h6M10 3v6L4 20a1 1 0 0 0 .9 1.5h14.2A1 1 0 0 0 20 20L14 9V3"/>',
  },
  {
    id: "briefcase",
    name: t.work,
    category: t.projects,
    svg: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
  },
  {
    id: "book",
    name: t.docs,
    category: t.content,
    svg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z"/><path d="M6.5 17A2.5 2.5 0 0 0 4 19.5 2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  },
  {
    id: "megaphone",
    name: t.announcements,
    category: t.content,
    svg: '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  },
]);
</script>

<template>
  <MsIconPicker v-model="icon" :icons="icons" />
</template>
