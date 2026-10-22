<script setup lang="ts">
import { MsKbd } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <p style="max-width: 520px; line-height: 2">
    {{ t.pressBefore }} <MsKbd>⌘</MsKbd> <MsKbd>K</MsKbd> {{ t.pressMiddle }} <MsKbd>Esc</MsKbd>
    {{ t.pressAfter }}
  </p>
</template>
