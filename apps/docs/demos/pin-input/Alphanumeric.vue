<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsPinInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const voucher = ref("");
</script>

<template>
  <MsField :label="t.voucher" :description="t.voucherHint">
    <MsPinInput v-model="voucher" type="alphanumeric" :length="6" separator="-" />
  </MsField>
</template>
