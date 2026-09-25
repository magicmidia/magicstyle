<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsMaskedInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const invalidCep = ref("01310-");
const readonlyCpf = ref("123.456.789-09");
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsField :label="t.cep" :error="t.cepError">
      <MsMaskedInput v-model="invalidCep" mask="cep" invalid />
    </MsField>
    <MsField :label="t.cpf" :description="t.readonlyHint">
      <MsMaskedInput v-model="readonlyCpf" mask="cpf" readonly />
    </MsField>
    <MsField :label="t.phone">
      <MsMaskedInput mask="phone" disabled />
    </MsField>
    <MsField size="sm" :label="t.small">
      <MsMaskedInput mask="date" size="sm" />
    </MsField>
    <MsField size="lg" :label="t.large">
      <MsMaskedInput mask="date" size="lg" />
    </MsField>
  </div>
</template>
