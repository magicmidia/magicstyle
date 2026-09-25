<script setup lang="ts">
import { MsAvatar, MsChatBubble } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsChatBubble name="Juliana Prado" timestamp="09:41">
      <template #avatar>
        <MsAvatar name="Juliana Prado" tone="accent" size="sm" />
      </template>
      {{ t.msg1 }}
    </MsChatBubble>
    <MsChatBubble
      placement="end"
      variant="solid"
      tone="primary"
      :name="t.you"
      timestamp="09:42"
      status="read"
    >
      {{ t.msg2 }}
    </MsChatBubble>
    <MsChatBubble name="Juliana Prado" timestamp="09:44">
      <template #avatar>
        <MsAvatar name="Juliana Prado" tone="accent" size="sm" />
      </template>
      {{ t.msg3 }}
    </MsChatBubble>
    <MsChatBubble placement="end" variant="solid" tone="primary" status="sent">
      {{ t.msg4 }}
    </MsChatBubble>
  </div>
</template>
