<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsFormWizard, MsSwitch, type MsWizardStep } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const step = ref(0);
const newsletter = ref(true);
const productUpdates = ref(false);

const steps = computed<MsWizardStep[]>(() => [
  { id: "welcome", title: t.stepWelcome },
  { id: "preferences", title: t.stepPreferences },
  { id: "ready", title: t.stepReady },
]);
</script>

<template>
  <div style="width: 100%; max-width: 560px">
    <MsFormWizard v-model="step" :steps="steps">
      <template #welcome>
        <p>{{ t.welcomeText }}</p>
      </template>
      <template #preferences>
        <div style="display: grid; gap: 12px">
          <MsSwitch v-model="newsletter" :label="t.newsletter" />
          <MsSwitch v-model="productUpdates" :label="t.productUpdates" />
        </div>
      </template>
      <template #ready>
        <p>{{ t.readyText }}</p>
      </template>
      <template #footer="{ prev, next, isFirst, isLast }">
        <MsButton variant="ghost" tone="neutral" :disabled="isFirst" @click="prev">
          {{ t.back }}
        </MsButton>
        <MsButton v-if="isLast" tone="success" @click="step = 0">{{ t.startOver }}</MsButton>
        <MsButton v-else @click="next">{{ t.continue }}</MsButton>
      </template>
    </MsFormWizard>
  </div>
</template>
