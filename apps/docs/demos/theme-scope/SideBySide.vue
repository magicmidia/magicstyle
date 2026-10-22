<script setup lang="ts">
import { MsButton, MsInput, MsTag, MsThemeScope } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const themes = ["magic", "shadcn", "material", "github"] as const;
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 820px;
    "
  >
    <MsThemeScope
      v-for="theme in themes"
      :key="theme"
      :theme="theme"
      class="ms-u-p-4 ms-u-rounded-lg ms-u-border"
      style="display: grid; gap: 12px"
    >
      <div class="ms-u-flex ms-u-items-center ms-u-justify-between">
        <strong class="ms-u-font-mono">{{ theme }}</strong>
        <MsTag size="sm" tone="primary">{{ t.beta }}</MsTag>
      </div>
      <MsInput :placeholder="t.searchPlaceholder" size="sm" />
      <div class="ms-u-flex ms-u-gap-2">
        <MsButton size="sm">{{ t.save }}</MsButton>
        <MsButton size="sm" variant="outline" tone="neutral">{{ t.cancel }}</MsButton>
      </div>
    </MsThemeScope>
  </div>
</template>
