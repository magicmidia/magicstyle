<script setup lang="ts">
import { ref } from "vue";
import { MsAvatar, MsButton, MsChatBubble, MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const draft = ref("");
const sent = ref<string[]>([]);

function send() {
  const text = draft.value.trim();
  if (!text) return;
  sent.value.push(text);
  draft.value = "";
}
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 520px">
    <div style="display: grid; gap: 12px">
      <MsChatBubble :name="t.botName" timestamp="14:02" tone="info">
        <template #avatar>
          <MsAvatar :name="t.botName" tone="primary" size="sm" />
        </template>
        {{ t.botGreeting }}
      </MsChatBubble>
      <MsChatBubble
        v-for="(message, index) in sent"
        :key="index"
        placement="end"
        variant="solid"
        tone="primary"
        status="sent"
      >
        {{ message }}
      </MsChatBubble>
    </div>
    <form style="display: flex; gap: 8px" @submit.prevent="send">
      <MsInput
        v-model="draft"
        :placeholder="t.placeholder"
        :aria-label="t.placeholder"
        style="flex: 1"
      />
      <MsButton type="submit">{{ t.send }}</MsButton>
    </form>
  </div>
</template>
