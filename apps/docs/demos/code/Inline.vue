<script setup lang="ts">
import { MsCode } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <p style="max-width: 560px; line-height: 1.7">
    {{ t.inlineBefore }} <MsCode>pnpm dev</MsCode> {{ t.inlineMiddle }}
    <MsCode>http://localhost:5173</MsCode>{{ t.inlineAfter }} <MsCode>.env.local</MsCode>.
  </p>
</template>
