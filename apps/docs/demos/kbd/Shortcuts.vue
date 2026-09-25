<script setup lang="ts">
import { computed } from "vue";
import { MsKbd } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const shortcuts = computed(() => [
  { action: t.search, keys: ["Ctrl", "K"] },
  { action: t.newDoc, keys: ["Ctrl", "Alt", "N"] },
  { action: t.save, keys: ["Ctrl", "S"] },
  { action: t.toggleSidebar, keys: ["Ctrl", "B"] },
  { action: t.help, keys: ["Shift", "?"] },
]);
</script>

<template>
  <dl style="display: grid; gap: 10px; width: 100%; max-width: 420px; margin: 0">
    <div
      v-for="shortcut in shortcuts"
      :key="shortcut.action"
      style="display: flex; align-items: center; justify-content: space-between; gap: 16px"
    >
      <dt>{{ shortcut.action }}</dt>
      <dd style="display: flex; align-items: center; gap: 4px; margin: 0">
        <template v-for="(key, index) in shortcut.keys" :key="key">
          <span v-if="index > 0" style="opacity: 0.6">+</span>
          <MsKbd variant="outline">{{ key }}</MsKbd>
        </template>
      </dd>
    </div>
  </dl>
</template>
