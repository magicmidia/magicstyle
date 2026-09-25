<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsTextarea } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const message = ref("");
</script>

<template>
  <div style="display: grid; gap: 8px; width: 100%; max-width: 420px">
    <MsTextarea
      v-model="message"
      auto-grow
      :rows="1"
      resize="none"
      :placeholder="t.messagePlaceholder"
      :aria-label="t.message"
    />
    <div style="display: flex; justify-content: flex-end">
      <MsButton size="sm" :disabled="!message.trim()">{{ t.send }}</MsButton>
    </div>
  </div>
</template>
