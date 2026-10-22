<script setup lang="ts">
import { reactive } from "vue";
import { MsField, MsMaskedInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const form = reactive({ cpf: "", cnpj: "", phone: "", cep: "", birth: "" });
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsField :label="t.cpf">
      <MsMaskedInput v-model="form.cpf" mask="cpf" />
    </MsField>
    <MsField :label="t.cnpj">
      <MsMaskedInput v-model="form.cnpj" mask="cnpj" />
    </MsField>
    <MsField :label="t.phone">
      <MsMaskedInput v-model="form.phone" mask="phone" />
    </MsField>
    <MsField :label="t.cep">
      <MsMaskedInput v-model="form.cep" mask="cep" />
    </MsField>
    <MsField :label="t.birth">
      <MsMaskedInput v-model="form.birth" mask="date" />
    </MsField>
  </div>
</template>
