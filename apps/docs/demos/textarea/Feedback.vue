<script setup lang="ts">
import { reactive, ref } from "vue";
import { MsButton, MsField, MsInput, MsNativeSelect, MsTextarea } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const form = reactive({ subject: "", topic: "", details: "" });
const errors = reactive({ subject: "", details: "" });
const sent = ref(false);

function onSubmit(): void {
  errors.subject = form.subject.trim() ? "" : t.subjectError;
  errors.details = form.details.trim().length >= 30 ? "" : t.detailsError;
  sent.value = !errors.subject && !errors.details;
}
</script>

<template>
  <form
    novalidate
    style="display: grid; gap: 16px; width: 100%; max-width: 440px"
    @submit.prevent="onSubmit"
  >
    <MsField :label="t.subject" :error="errors.subject" required>
      <MsInput v-model="form.subject" :placeholder="t.subjectPlaceholder" />
    </MsField>
    <MsField :label="t.topic" optional>
      <MsNativeSelect v-model="form.topic" :placeholder="t.topicPlaceholder">
        <option value="billing">{{ t.billing }}</option>
        <option value="bug">{{ t.bug }}</option>
        <option value="feature">{{ t.feature }}</option>
      </MsNativeSelect>
    </MsField>
    <MsField :label="t.details" :error="errors.details" :description="t.detailsHint" required>
      <MsTextarea v-model="form.details" :rows="5" :max-length="1000" show-count />
    </MsField>
    <MsButton type="submit">{{ t.openTicket }}</MsButton>
    <p v-if="sent" role="status">{{ t.sent }}</p>
  </form>
</template>
