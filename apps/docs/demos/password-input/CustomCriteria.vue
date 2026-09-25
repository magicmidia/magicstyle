<script setup lang="ts">
import { computed, ref } from "vue";
import { MsField, MsPasswordInput, type MsPasswordCriterion } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const password = ref("");

const criteria = computed<MsPasswordCriterion[]>(() => [
  { id: "length", label: t.ruleLength, validator: (p) => p.length >= 12 },
  { id: "upper", label: t.ruleUpper, validator: (p) => /[A-Z]/.test(p) },
  { id: "number", label: t.ruleNumber, validator: (p) => /\d/.test(p) },
  { id: "symbol", label: t.ruleSymbol, validator: (p) => /[^A-Za-z0-9]/.test(p) },
  { id: "no-name", label: t.ruleNoName, validator: (p) => !!p && !/acme/i.test(p) },
]);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.adminPassword" :description="t.adminHint">
      <MsPasswordInput
        v-model="password"
        :criteria="criteria"
        show-criteria
        show-strength-meter
        autocomplete="new-password"
      />
    </MsField>
  </div>
</template>
