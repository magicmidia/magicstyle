<script setup lang="ts">
import { ref } from "vue";
import { MsInput, MsLabel } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const company = ref("");
const vat = ref("");
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <div style="display: grid; gap: 6px">
      <MsLabel for="label-demo-company" required>{{ t.company }}</MsLabel>
      <MsInput id="label-demo-company" v-model="company" required />
    </div>
    <div style="display: grid; gap: 6px">
      <MsLabel for="label-demo-vat" optional>{{ t.taxId }}</MsLabel>
      <MsInput id="label-demo-vat" v-model="vat" />
    </div>
    <div style="display: grid; gap: 6px">
      <MsLabel for="label-demo-ref" optional :optional-text="t.ifApplicable">
        {{ t.reference }}
      </MsLabel>
      <MsInput id="label-demo-ref" />
    </div>
  </div>
</template>
