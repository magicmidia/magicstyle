<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsNativeSelect } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const country = ref("");
</script>

<template>
  <div style="width: 100%; max-width: 320px">
    <MsField :label="t.country">
      <MsNativeSelect v-model="country" :placeholder="t.countryPlaceholder" autocomplete="country">
        <option value="BR">{{ t.brazil }}</option>
        <option value="AR">{{ t.argentina }}</option>
        <option value="MX">{{ t.mexico }}</option>
        <option value="PT">{{ t.portugal }}</option>
        <option value="ES">{{ t.spain }}</option>
        <option value="US">{{ t.usa }}</option>
      </MsNativeSelect>
    </MsField>
  </div>
</template>
