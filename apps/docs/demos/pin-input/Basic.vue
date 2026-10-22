<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsPinInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const pin = ref("");
</script>

<template>
  <MsField :label="t.pin">
    <MsPinInput v-model="pin" />
  </MsField>
</template>
