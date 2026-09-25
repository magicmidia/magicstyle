<script setup lang="ts">
import { ref } from "vue";
import { MsAvatar, MsButton, MsDrawer } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref(false);
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.notifications }}</MsButton>
  <MsDrawer v-model:open="open" :title="t.notifications" :description="t.unreadCount">
    <ul style="display: grid; gap: 16px; margin: 0; padding: 0; list-style: none">
      <li style="display: flex; gap: 12px">
        <MsAvatar name="Ana Ribeiro" size="sm" />
        <div>
          <strong>Ana Ribeiro</strong>
          <p style="margin: 2px 0 0">{{ t.notice1 }}</p>
        </div>
      </li>
      <li style="display: flex; gap: 12px">
        <MsAvatar name="Diego Martins" size="sm" />
        <div>
          <strong>Diego Martins</strong>
          <p style="margin: 2px 0 0">{{ t.notice2 }}</p>
        </div>
      </li>
      <li style="display: flex; gap: 12px">
        <MsAvatar name="Júlia Souza" size="sm" />
        <div>
          <strong>Júlia Souza</strong>
          <p style="margin: 2px 0 0">{{ t.notice3 }}</p>
        </div>
      </li>
    </ul>
    <template #footer>
      <MsButton variant="ghost" tone="neutral" @click="open = false">{{ t.markAllRead }}</MsButton>
    </template>
  </MsDrawer>
</template>
