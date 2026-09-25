<script setup lang="ts">
import { ref } from "vue";
import { MsAvatar, MsButton, MsChatBubble } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const typing = ref(true);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsChatBubble placement="end" variant="solid" tone="primary" timestamp="14:02" status="read">
      {{ t.typingQuestion }}
    </MsChatBubble>
    <MsChatBubble name="Rafael Lima" :typing="typing">
      <template #avatar>
        <MsAvatar name="Rafael Lima" tone="success" size="sm" />
      </template>
      {{ t.typingAnswer }}
    </MsChatBubble>
    <div>
      <MsButton size="sm" variant="outline" tone="neutral" @click="typing = !typing">
        {{ typing ? t.showReply : t.showTyping }}
      </MsButton>
    </div>
  </div>
</template>
