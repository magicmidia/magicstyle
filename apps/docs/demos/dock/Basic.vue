<script setup lang="ts">
import { computed, ref } from "vue";
import { MsCanvas, MsDock, MsDockItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const active = ref("finder");
const apps = computed(() => [
  {
    id: "finder",
    label: t.files,
    paths: [
      "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
    ],
  },
  {
    id: "mail",
    label: t.mail,
    paths: [
      "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
      "m22 6-10 7L2 6",
    ],
  },
  {
    id: "calendar",
    label: t.calendar,
    paths: [
      "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
      "M16 2v4",
      "M8 2v4",
      "M3 10h18",
    ],
  },
  {
    id: "music",
    label: t.music,
    paths: [
      "M9 18V5l12-2v13",
      "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
      "M18 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    ],
  },
  {
    id: "settings",
    label: t.settings,
    paths: [
      "M4 21v-7",
      "M4 10V3",
      "M12 21v-9",
      "M12 8V3",
      "M20 21v-5",
      "M20 12V3",
      "M2 14h4",
      "M10 8h4",
      "M18 16h4",
    ],
  },
]);
</script>

<template>
  <!-- The dock is position: fixed; the transform turns the canvas into its containing block. -->
  <MsCanvas pattern="dots" style="max-width: 640px; transform: translateZ(0)">
    <MsDock>
      <MsDockItem
        v-for="app in apps"
        :key="app.id"
        :label="app.label"
        :active="active === app.id"
        @click="active = app.id"
      >
        <svg
          width="22"
          height="22"
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
</template>
