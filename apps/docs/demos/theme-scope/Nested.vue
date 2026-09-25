<script setup lang="ts">
import { MsButton, MsThemeScope } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsThemeScope
    theme="nord"
    class="ms-u-p-4 ms-u-rounded-lg ms-u-border"
    style="display: grid; gap: 12px; width: 100%; max-width: 520px"
  >
    <strong>{{ t.outerTitle }}</strong>
    <MsButton size="sm" style="justify-self: start">{{ t.primaryAction }}</MsButton>
    <MsThemeScope
      density="compact"
      radius="sharp"
      class="ms-u-p-3 ms-u-rounded-md ms-u-border"
      style="display: grid; gap: 8px"
    >
      <span>{{ t.innerTitle }}</span>
      <MsButton size="sm" variant="soft" style="justify-self: start">{{
        t.secondaryAction
      }}</MsButton>
    </MsThemeScope>
  </MsThemeScope>
</template>
