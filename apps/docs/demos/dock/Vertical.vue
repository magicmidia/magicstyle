<script setup lang="ts">
import { computed, ref } from "vue";
import { MsCanvas, MsDock, MsDockItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const active = ref("select");
const tools = computed(() => [
  { id: "select", label: t.select, paths: ["m4 4 7.07 17 2.51-7.39L21 11.07z"] },
  { id: "frame", label: t.frame, paths: ["M22 6H2", "M22 18H2", "M6 2v20", "M18 2v20"] },
  { id: "pen", label: t.pen, paths: ["M12 20h9", "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"] },
  { id: "text", label: t.text, paths: ["M4 7V4h16v3", "M9 20h6", "M12 4v16"] },
]);
</script>

<template>
  <MsCanvas pattern="blueprint" style="max-width: 640px; transform: translateZ(0)">
    <MsDock position="left" size="sm">
      <MsDockItem
        v-for="tool in tools"
        :key="tool.id"
        :label="tool.label"
        :active="active === tool.id"
        @click="active = tool.id"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path v-for="d in tool.paths" :key="d" :d="d" />
        </svg>
      </MsDockItem>
    </MsDock>
  </MsCanvas>
</template>
