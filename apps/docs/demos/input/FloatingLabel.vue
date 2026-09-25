<script setup lang="ts">
import { ref } from "vue";
import { MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const name = ref("");
const password = ref("");
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsInput v-model="name" autocomplete="name" :floating-label="t.fullName" />
    <MsInput
      v-model="password"
      type="password"
      password-toggle
      autocomplete="current-password"
      :floating-label="t.password"
    />
  </div>
</template>
