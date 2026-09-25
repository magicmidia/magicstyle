<script setup lang="ts">
import { computed, ref } from "vue";
import { MsStep, MsStepper } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const step = ref(0);
const sections = computed(() => [
  { title: t.company, subtitle: t.companyHint, body: t.companyBody },
  { title: t.team, subtitle: t.teamHint, body: t.teamBody },
  { title: t.integrations, subtitle: t.integrationsHint, body: t.integrationsBody },
]);
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 640px">
    <MsStepper v-model="step" clickable>
      <MsStep
        v-for="(section, index) in sections"
        :key="section.title"
        :index="index"
        :title="section.title"
        :subtitle="section.subtitle"
      />
    </MsStepper>
    <p class="ms-u-p-4 ms-u-rounded-md ms-u-border ms-u-m-0">{{ sections[step]?.body }}</p>
  </div>
</template>
