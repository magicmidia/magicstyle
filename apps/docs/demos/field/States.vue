<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const company = ref("");
const website = ref("");
const email = ref(t.emailInvalidValue);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <MsField :label="t.company" required>
      <MsInput v-model="company" :placeholder="t.companyPlaceholder" />
    </MsField>
    <MsField :label="t.website" optional :description="t.websiteHint">
      <MsInput v-model="website" placeholder="https://" />
    </MsField>
    <MsField :label="t.email" :error="t.emailInvalid">
      <MsInput v-model="email" type="email" />
    </MsField>
  </div>
</template>
