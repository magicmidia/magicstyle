<script setup lang="ts">
import { reactive } from "vue";
import { MsButton, MsField, MsInput, MsMaskedInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const card = reactive({ holder: "", number: "", expiry: "", cvc: "" });
</script>

<template>
  <form style="display: grid; gap: 12px; width: 100%; max-width: 380px" @submit.prevent>
    <MsField :label="t.holder">
      <MsInput v-model="card.holder" autocomplete="cc-name" :placeholder="t.holderPlaceholder" />
    </MsField>
    <MsField :label="t.cardNumber">
      <MsMaskedInput
        v-model="card.number"
        mask="credit-card"
        inputmode="numeric"
        autocomplete="cc-number"
      />
    </MsField>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
      <MsField :label="t.expiry">
        <MsMaskedInput
          v-model="card.expiry"
          mask="99/99"
          :placeholder="t.expiryPlaceholder"
          inputmode="numeric"
          autocomplete="cc-exp"
        />
      </MsField>
      <MsField :label="t.cvc">
        <MsMaskedInput v-model="card.cvc" mask="999" inputmode="numeric" autocomplete="cc-csc" />
      </MsField>
    </div>
    <MsButton type="submit" full-width>{{ t.pay }}</MsButton>
  </form>
</template>
