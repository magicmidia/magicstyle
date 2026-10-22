<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsMenu, type MsMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const wrapper = ref<HTMLElement | null>(null);

const items = computed<MsMenuItem[]>(() => [
  { label: t.newFile, value: "new", prefix: "📄", suffix: "Ctrl N" },
  { label: t.duplicate, value: "duplicate", prefix: "⧉", suffix: "Ctrl D" },
  { label: t.share, value: "share", prefix: "↗", suffix: "Ctrl S" },
  { label: t.moveToTeam, value: "move", prefix: "📁", disabled: true },
  { label: t.delete, value: "delete", prefix: "🗑", suffix: "Del", tone: "danger", divider: true },
]);

function onDismiss(reason: string) {
  open.value = false;
  // Return focus to the trigger after Escape or a selection.
  if (reason === "escape" || reason === "select") wrapper.value?.querySelector("button")?.focus();
}
</script>

<template>
  <div ref="wrapper" class="ms-dropdown">
    <MsButton
      variant="outline"
      tone="neutral"
      caret
      :open="open"
      aria-haspopup="menu"
      @click="open = !open"
    >
      {{ t.file }}
    </MsButton>
    <MsMenu v-if="open" :items="items" :open="open" :anchor="wrapper" @dismiss="onDismiss" />
  </div>
</template>
