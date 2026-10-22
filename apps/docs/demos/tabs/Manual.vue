<script setup lang="ts">
import { MsTab, MsTabList, MsTabPanel, MsTabPanels, MsTabs } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsTabs default-value="open" activation-mode="manual" variant="enclosed">
      <MsTabList :aria-label="t.issues">
        <MsTab value="open">{{ t.openIssues }}</MsTab>
        <MsTab value="closed">{{ t.closedIssues }}</MsTab>
        <MsTab value="archived" disabled>{{ t.archivedIssues }}</MsTab>
      </MsTabList>
      <MsTabPanels>
        <MsTabPanel value="open" lazy>
          <p style="margin: 16px 0 0">{{ t.openBody }}</p>
        </MsTabPanel>
        <MsTabPanel value="closed" lazy>
          <p style="margin: 16px 0 0">{{ t.closedBody }}</p>
        </MsTabPanel>
      </MsTabPanels>
    </MsTabs>
  </div>
</template>
