<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsEmojiPicker, MsInput, type MsEmojiItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const message = ref("");
const emoji = ref("");

function insert(item: MsEmojiItem) {
  message.value += item.emoji;
  emoji.value = "";
}
</script>

<template>
  <div style="display: flex; align-items: center; gap: 8px; width: 100%; max-width: 440px">
    <MsEmojiPicker v-model="emoji" placeholder="🙂" @select="insert" />
    <MsInput
      v-model="message"
      :placeholder="t.messagePlaceholder"
      :aria-label="t.message"
      style="flex: 1"
    />
    <MsButton :disabled="!message">{{ t.send }}</MsButton>
  </div>
</template>
