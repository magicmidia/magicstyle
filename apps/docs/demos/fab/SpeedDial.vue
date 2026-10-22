<script setup lang="ts">
import { computed, ref } from "vue";
import { MsFab, type MsFabAction } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const last = ref("");

const actions = computed<MsFabAction[]>(() => [
  { id: "photo", label: t.uploadPhoto, icon: "📷" },
  { id: "note", label: t.writeNote, icon: "📝" },
  { id: "event", label: t.scheduleEvent, icon: "📅" },
]);

function onAction(action: MsFabAction) {
  last.value = action.label ?? "";
}
</script>

<template>
  <!-- In an app the FAB is fixed to the viewport; the transform keeps it inside this frame. -->
  <div
    style="
      position: relative;
      transform: translateZ(0);
      width: 100%;
      max-width: 380px;
      height: 260px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-default);
      border-radius: 12px;
    "
  >
    <p style="margin: 16px">{{ last || t.hint }}</p>
    <MsFab :actions="actions" @action-click="onAction" />
  </div>
</template>
