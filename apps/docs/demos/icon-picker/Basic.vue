<script setup lang="ts">
import { ref } from "vue";
import { MsIconPicker } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const icon = ref("");
</script>

<template>
  <div style="display: grid; gap: 8px; justify-items: start">
    <MsIconPicker v-model="icon" :placeholder="t.choose" />
    <p style="margin: 0">
      {{ t.value }} <code>{{ icon || "—" }}</code>
    </p>
  </div>
</template>
