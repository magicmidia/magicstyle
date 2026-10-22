<script setup lang="ts">
import { ref } from "vue";
import { MsAccordion, MsAccordionItem, type MsAccordionValue } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const separated = ref<MsAccordionValue | MsAccordionValue[]>("plans");
const flush = ref<MsAccordionValue | MsAccordionValue[]>("");
</script>

<template>
  <div style="display: grid; gap: 32px; width: 100%; max-width: 520px">
    <MsAccordion v-model="separated" variant="separated" size="sm">
      <MsAccordionItem value="plans" :title="t.plansTitle">
        <p>{{ t.plansBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="trial" :title="t.trialTitle">
        <p>{{ t.trialBody }}</p>
      </MsAccordionItem>
    </MsAccordion>
    <MsAccordion v-model="flush" variant="flush" size="lg">
      <MsAccordionItem value="api" :title="t.apiTitle">
        <p>{{ t.apiBody }}</p>
      </MsAccordionItem>
      <MsAccordionItem value="limits" :title="t.limitsTitle">
        <p>{{ t.limitsBody }}</p>
      </MsAccordionItem>
    </MsAccordion>
  </div>
</template>
