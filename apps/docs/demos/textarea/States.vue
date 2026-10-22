<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsTextarea } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const reason = ref("");
const terms = ref(t.termsValue);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 420px">
    <MsField :label="t.reason" :error="reason.trim().length < 20 ? t.reasonError : undefined">
      <MsTextarea v-model="reason" :placeholder="t.reasonPlaceholder" />
    </MsField>
    <MsField :label="t.terms">
      <MsTextarea v-model="terms" readonly :rows="2" />
    </MsField>
    <MsField :label="t.notes" :description="t.notesHint">
      <MsTextarea disabled :rows="2" />
    </MsField>
  </div>
</template>
