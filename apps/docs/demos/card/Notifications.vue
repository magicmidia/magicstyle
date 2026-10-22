<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsCard, MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const push = ref(true);
const notifications = computed(() => [
  { id: 1, title: t.notif1, time: t.notif1Time },
  { id: 2, title: t.notif2, time: t.notif2Time },
  { id: 3, title: t.notif3, time: t.notif3Time },
]);
</script>

<template>
  <MsCard
    :title="t.notificationsTitle"
    :description="t.notificationsDesc"
    style="width: 100%; max-width: 380px"
  >
    <div style="display: grid; gap: 16px">
      <div class="ms-u-p-3 ms-u-rounded-md ms-u-border">
        <MsSwitch v-model="push" :label="t.pushLabel" :description="t.pushDesc" />
      </div>
      <ul style="list-style: none; margin: 0; padding: 0; display: grid; gap: 14px">
        <li v-for="n in notifications" :key="n.id" class="ms-u-flex ms-u-gap-3 ms-u-items-start">
          <span
            aria-hidden="true"
            style="
              width: 8px;
              height: 8px;
              margin-top: 6px;
              border-radius: 999px;
              background: var(--ms-color-primary);
              flex: none;
            "
          />
          <div>
            <div class="ms-u-font-medium">{{ n.title }}</div>
            <div class="ms-u-text-muted">{{ n.time }}</div>
          </div>
        </li>
      </ul>
    </div>
    <template #footer>
      <MsButton block>{{ t.markAllRead }}</MsButton>
    </template>
  </MsCard>
</template>
