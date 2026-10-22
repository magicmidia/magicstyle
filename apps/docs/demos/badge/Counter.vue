<script setup lang="ts">
import { ref } from "vue";
import { MsAvatar, MsBadge, MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const unread = ref(8);
</script>

<template>
  <div style="display: grid; gap: 24px">
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 32px">
      <MsBadge :count="unread" tone="danger" pill placement="top-right">
        <MsButton variant="outline" tone="neutral">{{ t.inbox }}</MsButton>
      </MsBadge>
      <MsBadge :count="128" tone="primary" pill placement="top-right">
        <MsButton variant="outline" tone="neutral">{{ t.notifications }}</MsButton>
      </MsBadge>
      <MsBadge :count="0" show-zero tone="neutral" pill placement="top-right">
        <MsButton variant="outline" tone="neutral">{{ t.tasks }}</MsButton>
      </MsBadge>
      <MsBadge dot-only tone="success" placement="bottom-right" bordered>
        <MsAvatar name="Marina Costa" tone="primary" />
      </MsBadge>
    </div>
    <div style="display: flex; gap: 8px">
      <MsButton size="sm" variant="soft" @click="unread++">{{ t.receive }}</MsButton>
      <MsButton size="sm" variant="ghost" tone="neutral" @click="unread = 0">
        {{ t.markRead }}
      </MsButton>
    </div>
  </div>
</template>
