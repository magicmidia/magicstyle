<script setup lang="ts">
import { MsEmojiPicker } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; align-items: center; gap: 12px">
    <MsEmojiPicker model-value="🔒" disabled />
    <span>{{ t.locked }}</span>
  </div>
</template>
