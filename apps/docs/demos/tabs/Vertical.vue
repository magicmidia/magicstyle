<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSwitch, MsTab, MsTabList, MsTabPanel, MsTabPanels, MsTabs } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const tab = ref("email");
const prefs = ref({ mentions: true, digest: false, push: true, sms: false });
const channels = computed(() => [
  { value: "email", label: t.email },
  { value: "push", label: t.push },
  { value: "sms", label: t.sms },
]);
</script>

<template>
  <div style="width: 100%; max-width: 560px">
    <MsTabs v-model="tab" orientation="vertical" variant="line">
      <MsTabList :aria-label="t.channels">
        <MsTab v-for="c in channels" :key="c.value" :value="c.value">{{ c.label }}</MsTab>
      </MsTabList>
      <MsTabPanels style="flex: 1">
        <MsTabPanel value="email">
          <div style="display: grid; gap: 16px">
            <MsSwitch v-model="prefs.mentions" :label="t.mentions" :description="t.mentionsHint" />
            <MsSwitch v-model="prefs.digest" :label="t.digest" :description="t.digestHint" />
          </div>
        </MsTabPanel>
        <MsTabPanel value="push">
          <MsSwitch v-model="prefs.push" :label="t.pushAll" :description="t.pushHint" />
        </MsTabPanel>
        <MsTabPanel value="sms">
          <MsSwitch v-model="prefs.sms" :label="t.smsSecurity" :description="t.smsHint" />
        </MsTabPanel>
      </MsTabPanels>
    </MsTabs>
  </div>
</template>
