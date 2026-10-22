<script setup lang="ts">
import { computed, ref } from "vue";
import { MsContextMenu, MsSwitch, type MsContextMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const locked = ref(true);

const items = computed<MsContextMenuItem[]>(() => [
  { id: "copy", label: t.copy, shortcut: "Ctrl C" },
  { id: "paste", label: t.paste, shortcut: "Ctrl V" },
  { id: "select-all", label: t.selectAll, shortcut: "Ctrl A" },
]);
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: center">
    <MsSwitch v-model="locked" :label="t.lockMenu" />
    <MsContextMenu :items="items" :disabled="locked">
      <div
        tabindex="0"
        style="
          display: grid;
          place-items: center;
          width: 320px;
          max-width: 100%;
          height: 120px;
          border: 2px dashed var(--ms-color-border-default);
          border-radius: 12px;
          font-size: 14px;
        "
      >
        {{ locked ? t.nativeMenu : t.customMenu }}
      </div>
    </MsContextMenu>
  </div>
</template>
