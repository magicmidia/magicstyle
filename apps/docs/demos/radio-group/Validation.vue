<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsField, MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const reason = ref<string>();
const error = ref("");
const sent = ref(false);

function onSubmit(): void {
  error.value = reason.value ? "" : t.reasonError;
  sent.value = !error.value;
}
</script>

<template>
  <form style="display: grid; gap: 16px; justify-items: start" @submit.prevent="onSubmit">
    <MsField :label="t.reason" :error="error" required>
      <MsRadioGroup v-model="reason" orientation="vertical">
        <MsRadio value="price" :label="t.price" />
        <MsRadio value="features" :label="t.features" />
        <MsRadio value="other" :label="t.otherReason" />
      </MsRadioGroup>
    </MsField>
    <MsButton type="submit" tone="danger">{{ t.cancelPlan }}</MsButton>
    <p v-if="sent" role="status">{{ t.sent }}</p>
  </form>
</template>
