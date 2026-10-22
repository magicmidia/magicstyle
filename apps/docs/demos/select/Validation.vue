<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsField, MsSelect, type MsSelectOption } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const plan = ref<string | number | (string | number)[] | null>(null);
const submitted = ref(false);

const plans = computed<MsSelectOption[]>(() => [
  { value: "starter", label: t.starter, description: t.starterDesc },
  { value: "business", label: t.business, description: t.businessDesc },
  { value: "legacy", label: t.legacy, description: t.legacyDesc, disabled: true },
]);

const error = computed(() => (submitted.value && !plan.value ? t.planRequired : undefined));
</script>

<template>
  <form
    style="display: grid; gap: 12px; width: 100%; max-width: 320px"
    @submit.prevent="submitted = true"
  >
    <MsField :label="t.plan" :error="error" required>
      <MsSelect v-model="plan" :options="plans" :placeholder="t.selectPlan" />
    </MsField>
    <MsButton type="submit">{{ t.continue }}</MsButton>
  </form>
</template>
