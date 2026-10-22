<script setup lang="ts">
import { MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 24px">
    <MsLink href="#">{{ t.resendCode }}</MsLink>
    <MsLink href="#" disabled>{{ t.resendIn }}</MsLink>
  </div>
</template>
