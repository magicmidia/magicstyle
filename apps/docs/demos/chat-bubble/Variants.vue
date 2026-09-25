<script setup lang="ts">
import { MsChatBubble } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 520px">
    <MsChatBubble variant="soft">{{ t.soft }}</MsChatBubble>
    <MsChatBubble variant="solid" tone="primary" placement="end">{{ t.solid }}</MsChatBubble>
    <MsChatBubble variant="outline">{{ t.outline }}</MsChatBubble>
    <MsChatBubble variant="soft" tone="success">{{ t.successMsg }}</MsChatBubble>
    <MsChatBubble variant="soft" tone="warning">{{ t.warningMsg }}</MsChatBubble>
    <MsChatBubble variant="soft" tone="danger">{{ t.dangerMsg }}</MsChatBubble>
    <MsChatBubble variant="outline" tone="info">{{ t.infoMsg }}</MsChatBubble>
  </div>
</template>
