<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsPinInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const cardPin = ref("");
</script>

<template>
  <MsField :label="t.cardPin" :description="t.cardPinHint">
    <MsPinInput v-model="cardPin" mask />
  </MsField>
</template>
