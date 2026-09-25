<script setup lang="ts">
import { computed, ref } from "vue";
import { MsDropdownButton, type MsMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const status = ref("");

const items = computed<MsMenuItem[]>(() => [
  { label: t.markTodo, value: "todo", prefix: "○" },
  { label: t.markInProgress, value: "in-progress", prefix: "◐" },
  { label: t.markDone, value: "done", prefix: "●", tone: "success" },
  { label: t.markCanceled, value: "canceled", prefix: "✕", tone: "danger", divider: true },
]);

function onSelect(item: MsMenuItem) {
  status.value = item.label;
}
</script>

<template>
  <div style="display: grid; justify-items: end; gap: 12px; width: 100%; max-width: 360px">
    <MsDropdownButton
      :label="t.changeStatus"
      :items="items"
      variant="outline"
      tone="neutral"
      align="right"
      @select="onSelect"
    />
    <p v-if="status" style="margin: 0">{{ t.statusChanged }} {{ status }}</p>
  </div>
</template>
