<script setup lang="ts">
import { computed, ref } from "vue";
import { MsField, MsSelect, type MsSelectOption } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const country = ref<string | number | (string | number)[] | null>("BR");

const countries = computed<MsSelectOption[]>(() => [
  { value: "BR", label: t.brazil },
  { value: "AR", label: t.argentina },
  { value: "CL", label: t.chile },
  { value: "MX", label: t.mexico },
  { value: "PT", label: t.portugal },
  { value: "US", label: t.unitedStates },
]);
</script>

<template>
  <div style="width: 100%; max-width: 320px">
    <MsField :label="t.shippingCountry">
      <MsSelect v-model="country" :options="countries" :placeholder="t.selectCountry" />
    </MsField>
  </div>
</template>
