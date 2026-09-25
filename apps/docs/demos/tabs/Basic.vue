<script setup lang="ts">
import { ref } from "vue";
import {
  MsButton,
  MsCard,
  MsField,
  MsInput,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTabPanels,
  MsTabs,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const tab = ref("account");
const name = ref(t.defaultName);
const username = ref(t.defaultUsername);
const current = ref("");
const next = ref("");
</script>

<template>
  <div style="width: 100%; max-width: 420px">
    <MsTabs v-model="tab" fitted>
      <MsTabList :aria-label="t.settingsLabel">
        <MsTab value="account">{{ t.account }}</MsTab>
        <MsTab value="password">{{ t.password }}</MsTab>
      </MsTabList>
      <MsTabPanels>
        <MsTabPanel value="account">
          <MsCard :title="t.account" :description="t.accountDesc" variant="outline">
            <div style="display: grid; gap: 12px">
              <MsField :label="t.name">
                <MsInput v-model="name" />
              </MsField>
              <MsField :label="t.username">
                <MsInput v-model="username" />
              </MsField>
            </div>
            <template #footer>
              <MsButton>{{ t.saveChanges }}</MsButton>
            </template>
          </MsCard>
        </MsTabPanel>
        <MsTabPanel value="password">
          <MsCard :title="t.password" :description="t.passwordDesc" variant="outline">
            <div style="display: grid; gap: 12px">
              <MsField :label="t.currentPassword">
                <MsInput v-model="current" type="password" autocomplete="current-password" />
              </MsField>
              <MsField :label="t.newPassword">
                <MsInput v-model="next" type="password" autocomplete="new-password" />
              </MsField>
            </div>
            <template #footer>
              <MsButton>{{ t.savePassword }}</MsButton>
            </template>
          </MsCard>
        </MsTabPanel>
      </MsTabPanels>
    </MsTabs>
  </div>
</template>
