<script setup lang="ts">
import { ref } from "vue";
import { MsEmojiPicker } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const status = ref("🎯");
</script>

<template>
  <div style="display: flex; align-items: center; gap: 12px">
    <MsEmojiPicker v-model="status" />
    <span>{{ t.statusHint }}</span>
  </div>
</template>
