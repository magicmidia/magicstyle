<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsPasswordInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const password = ref("");
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.password">
      <MsPasswordInput v-model="password" autocomplete="current-password" />
    </MsField>
  </div>
</template>
