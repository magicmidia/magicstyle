<script setup lang="ts">
import { computed, ref } from "vue";
import { MsContextMenu, type MsContextMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const lastId = ref<string>();

const items = computed<MsContextMenuItem[]>(() => [
  { id: "open", label: t.open, icon: "📂", shortcut: "Enter" },
  { id: "rename", label: t.rename, icon: "✏️", shortcut: "F2" },
  { id: "download", label: t.download, icon: "⬇️" },
  { divider: true },
  { id: "delete", label: t.moveToTrash, icon: "🗑️", shortcut: "Del", danger: true },
]);

const lastAction = computed(() => items.value.find((item) => item.id === lastId.value)?.label);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center">
    <MsContextMenu :items="items" @select="lastId = $event.id">
      <div
        tabindex="0"
        style="
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid var(--ms-color-border-default);
          border-radius: 8px;
          font-size: 14px;
        "
      >
        <span aria-hidden="true" style="font-size: 24px">📊</span>
        <div>
          <strong>{{ t.fileName }}</strong>
          <div style="color: var(--ms-color-text-muted); font-size: 12px">{{ t.fileMeta }}</div>
        </div>
      </div>
    </MsContextMenu>
    <p v-if="lastAction" style="margin: 0; font-size: 14px">{{ t.lastAction }} {{ lastAction }}</p>
  </div>
</template>
