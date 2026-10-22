<script setup lang="ts">
import { MsChatBubble } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsChatBubble placement="end" variant="solid" tone="primary" status="read">
      {{ t.statusRead }}
    </MsChatBubble>
    <MsChatBubble placement="end" variant="solid" tone="primary" status="sent">
      {{ t.statusSent }}
    </MsChatBubble>
    <MsChatBubble placement="end" variant="solid" tone="primary" status="sending">
      {{ t.statusSending }}
    </MsChatBubble>
  </div>
</template>
