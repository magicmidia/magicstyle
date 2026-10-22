<script setup lang="ts">
import { ref } from "vue";
import { MsAccordion, MsAccordionItem, MsBadge, type MsAccordionValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref<MsAccordionValue | MsAccordionValue[]>("notifications");
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsAccordion v-model="open" variant="bordered">
      <MsAccordionItem value="notifications" :title="t.notificationsTitle">
        <template #trailing>
          <MsBadge variant="soft" pill>{{ t.notificationsCount }}</MsBadge>
        </template>
        <p>{{ t.notificationsBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="integrations" :title="t.integrationsTitle">
        <template #trailing>
          <MsBadge variant="soft" tone="success" pill>{{ t.integrationsStatus }}</MsBadge>
        </template>
        <p>{{ t.integrationsBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="sso" :title="t.ssoTitle" :subtitle="t.ssoSubtitle" disabled>
        <p>{{ t.ssoBody }}</p>
      </MsAccordionItem>
    </MsAccordion>
  </div>
</template>
