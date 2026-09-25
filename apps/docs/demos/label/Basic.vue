<script setup lang="ts">
import { ref } from "vue";
import { MsInput, MsLabel } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const email = ref("");
</script>

<template>
  <div style="display: grid; gap: 6px; width: 100%; max-width: 360px">
    <MsLabel for="label-demo-email">{{ t.email }}</MsLabel>
    <MsInput id="label-demo-email" v-model="email" type="email" :placeholder="t.emailPlaceholder" />
  </div>
</template>
