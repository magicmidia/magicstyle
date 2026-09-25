<script setup lang="ts">
import { computed, ref } from "vue";
import { MsField, MsSelect, type MsSelectOption } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const nationality = ref<string | number | (string | number)[] | null>(null);

const countries = computed<MsSelectOption[]>(() => [
  { value: "DE", label: t.germany },
  { value: "AR", label: t.argentina },
  { value: "BR", label: t.brazil },
  { value: "CA", label: t.canada },
  { value: "CL", label: t.chile },
  { value: "CO", label: t.colombia },
  { value: "ES", label: t.spain },
  { value: "US", label: t.unitedStates },
  { value: "FR", label: t.france },
  { value: "IT", label: t.italy },
  { value: "JP", label: t.japan },
  { value: "MX", label: t.mexico },
  { value: "PE", label: t.peru },
  { value: "PT", label: t.portugal },
  { value: "GB", label: t.unitedKingdom },
  { value: "UY", label: t.uruguay },
]);
</script>

<template>
  <div style="width: 100%; max-width: 320px">
    <MsField :label="t.nationality">
      <MsSelect
        v-model="nationality"
        :options="countries"
        searchable
        clearable
        :placeholder="t.selectCountry"
        :search-placeholder="t.searchCountry"
      />
    </MsField>
  </div>
</template>
