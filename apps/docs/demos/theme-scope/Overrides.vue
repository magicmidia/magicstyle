<script setup lang="ts">
import { MsButton, MsProgress, MsTag, MsThemeScope } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <MsThemeScope
    :overrides="{
      'color-primary': '#e11d48',
      'color-primary-content': '#ffffff',
      'radius-field': '999px',
    }"
    class="ms-u-p-4 ms-u-rounded-lg ms-u-border"
    style="display: grid; gap: 12px; width: 100%; max-width: 360px"
  >
    <div class="ms-u-flex ms-u-items-center ms-u-justify-between">
      <strong>{{ t.campaign }}</strong>
      <MsTag tone="primary" size="sm">{{ t.live }}</MsTag>
    </div>
    <MsProgress :model-value="68" :label="t.goal" show-value />
    <MsButton>{{ t.donate }}</MsButton>
  </MsThemeScope>
</template>
