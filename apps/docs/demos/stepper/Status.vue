<script setup lang="ts">
import { MsStep, MsStepper } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="width: 100%; max-width: 640px">
    <MsStepper :model-value="2">
      <MsStep :index="0" :title="t.build" :subtitle="t.buildTime" />
      <MsStep :index="1" :title="t.tests" :subtitle="t.testsTime" />
      <MsStep :index="2" status="error" :title="t.deploy" :subtitle="t.deployFailed">
        <template #indicator>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </template>
      </MsStep>
      <MsStep :index="3" disabled :title="t.notify" />
    </MsStepper>
  </div>
</template>
