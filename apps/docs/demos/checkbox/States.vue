<script setup lang="ts">
import { ref } from "vue";
import { MsCheckbox, MsField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const locked = ref(true);
const terms = ref(false);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 380px">
    <MsCheckbox v-model="locked" disabled :label="t.lockedLabel" :description="t.lockedHint" />
    <MsCheckbox disabled :label="t.unavailable" />
    <MsField :error="terms ? undefined : t.termsError">
      <MsCheckbox v-model="terms" :label="t.terms" />
    </MsField>
  </div>
</template>
