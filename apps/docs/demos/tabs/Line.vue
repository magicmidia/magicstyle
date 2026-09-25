<script setup lang="ts">
import { computed, ref } from "vue";
import { MsTab, MsTabList, MsTabPanel, MsTabPanels, MsTabs } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const tab = ref("overview");
const tabs = computed(() => [
  { value: "overview", label: t.overview, body: t.overviewBody },
  { value: "analytics", label: t.analytics, body: t.analyticsBody },
  { value: "reports", label: t.reports, body: t.reportsBody },
  { value: "notifications", label: t.notifications, body: t.notificationsBody },
]);
</script>

<template>
  <div style="width: 100%; max-width: 560px">
    <MsTabs v-model="tab" variant="line">
      <MsTabList :aria-label="t.projectSections">
        <MsTab v-for="item in tabs" :key="item.value" :value="item.value">{{ item.label }}</MsTab>
      </MsTabList>
      <MsTabPanels>
        <MsTabPanel v-for="item in tabs" :key="item.value" :value="item.value">
          <p style="margin: 16px 0 0; line-height: 1.6">{{ item.body }}</p>
        </MsTabPanel>
      </MsTabPanels>
    </MsTabs>
  </div>
</template>
