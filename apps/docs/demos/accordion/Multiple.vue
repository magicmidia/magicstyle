<script setup lang="ts">
import { ref } from "vue";
import { MsAccordion, MsAccordionItem, type MsAccordionValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const open = ref<MsAccordionValue | MsAccordionValue[]>(["profile", "security"]);
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsAccordion v-model="open" multiple variant="bordered">
      <MsAccordionItem value="profile" :title="t.profileTitle" :subtitle="t.profileSubtitle">
        <p>{{ t.profileBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="security" :title="t.securityTitle" :subtitle="t.securitySubtitle">
        <p>{{ t.securityBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="billing" :title="t.billingTitle" :subtitle="t.billingSubtitle">
        <p>{{ t.billingBody }}</p>
      </MsAccordionItem>
    </MsAccordion>
  </div>
</template>
