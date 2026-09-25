<script setup lang="ts">
import { MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <p style="max-width: 460px; margin: 0; line-height: 1.6">
    {{ t.termsBefore }}
    <MsLink href="#">{{ t.terms }}</MsLink>
    {{ t.and }}
    <MsLink href="#">{{ t.privacy }}</MsLink
    >{{ t.end }}
  </p>
</template>
