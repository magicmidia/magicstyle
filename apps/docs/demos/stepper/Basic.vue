<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsStep, MsStepper } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const step = ref(1);
const steps = computed(() => [t.cart, t.shipping, t.payment, t.review]);
</script>

<template>
  <div style="display: grid; gap: 24px; width: 100%; max-width: 640px">
    <MsStepper v-model="step">
      <MsStep v-for="(title, index) in steps" :key="title" :index="index" :title="title" />
    </MsStepper>
    <div class="ms-u-flex ms-u-justify-between">
      <MsButton variant="outline" tone="neutral" :disabled="step === 0" @click="step--">
        {{ t.back }}
      </MsButton>
      <MsButton :disabled="step === steps.length - 1" @click="step++">{{ t.next }}</MsButton>
    </div>
  </div>
</template>
