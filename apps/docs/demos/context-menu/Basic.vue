<script setup lang="ts">
import { computed } from "vue";
import { MsContextMenu, type MsContextMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<MsContextMenuItem[]>(() => [
  { id: "back", label: t.back, shortcut: "Alt ←" },
  { id: "forward", label: t.forward, shortcut: "Alt →", disabled: true },
  { id: "reload", label: t.reload, shortcut: "Ctrl R" },
  { divider: true },
  { id: "save", label: t.savePage, shortcut: "Ctrl S" },
  { id: "print", label: t.print, shortcut: "Ctrl P" },
]);
</script>

<template>
  <MsContextMenu :items="items">
    <div
      tabindex="0"
      style="
        display: grid;
        place-items: center;
        width: 320px;
        max-width: 100%;
        height: 160px;
        border: 2px dashed var(--ms-color-border-default);
        border-radius: 12px;
        font-size: 14px;
      "
    >
      {{ t.rightClickHere }}
    </div>
  </MsContextMenu>
</template>
