<script setup lang="ts">
import { ref } from "vue";
import { MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const email = ref("");
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsInput
      v-model="email"
      type="email"
      autocomplete="email"
      :placeholder="t.emailPlaceholder"
      :aria-label="t.email"
    />
  </div>
</template>
