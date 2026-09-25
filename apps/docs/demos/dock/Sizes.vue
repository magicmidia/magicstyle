<script setup lang="ts">
import { computed } from "vue";
import { MsCanvas, MsDock, MsDockItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const apps = computed(() => [
  {
    id: "home",
    label: t.home,
    paths: ["m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M9 22V12h6v10"],
  },
  {
    id: "photos",
    label: t.photos,
    paths: [
      "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      "m21 15-5-5L5 21",
    ],
  },
  {
    id: "notes",
    label: t.notes,
    paths: [
      "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      "M14 2v5h5",
      "M16 13H8",
      "M16 17H8",
    ],
  },
  {
    id: "maps",
    label: t.maps,
    paths: ["M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z", "M9 3v15", "M15 6v15"],
  },
]);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 640px">
    <MsCanvas pattern="grid" style="min-height: 120px; transform: translateZ(0)">
      <MsDock size="sm" position="top">
        <MsDockItem v-for="app in apps" :key="app.id" :label="app.label">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path v-for="d in app.paths" :key="d" :d="d" />
          </svg>
        </MsDockItem>
      </MsDock>
    </MsCanvas>
    <MsCanvas pattern="grid" style="min-height: 150px; transform: translateZ(0)">
      <MsDock size="lg">
        <MsDockItem v-for="app in apps" :key="app.id" :label="app.label">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path v-for="d in app.paths" :key="d" :d="d" />
          </svg>
        </MsDockItem>
      </MsDock>
    </MsCanvas>
  </div>
</template>
