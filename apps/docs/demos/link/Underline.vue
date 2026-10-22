<script setup lang="ts">
import { MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 24px">
    <MsLink href="#" underline="none">{{ t.underlineNone }}</MsLink>
    <MsLink href="#" underline="hover">{{ t.underlineHover }}</MsLink>
    <MsLink href="#" underline="always">{{ t.underlineAlways }}</MsLink>
  </div>
</template>
