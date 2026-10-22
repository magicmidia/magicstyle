<script setup lang="ts">
import { ref } from "vue";
import { MsColorPicker } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const color = ref("#3b82f6");
</script>

<template>
  <div style="display: grid; gap: 8px">
    <MsColorPicker v-model="color" />
    <p style="margin: 0">
      {{ t.selected }} <code>{{ color }}</code>
    </p>
  </div>
</template>
