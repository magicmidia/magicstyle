<script setup lang="ts">
import { MsButton, MsSwitch, MsThemeScope } from "@magic-style/vue";
import { ref } from "vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const modes = ["light", "dark"] as const;
const autoRenew = ref(true);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      width: 100%;
      max-width: 640px;
    "
  >
    <MsThemeScope
      v-for="mode in modes"
      :key="mode"
      theme="linear"
      :color-mode="mode"
      class="ms-u-p-4 ms-u-rounded-lg ms-u-border"
      style="display: grid; gap: 12px"
    >
      <strong>{{ t.plan }}</strong>
      <span class="ms-u-text-muted">{{ t.planDesc }}</span>
      <MsSwitch v-model="autoRenew" :label="t.autoRenew" size="sm" />
      <MsButton size="sm">{{ t.manage }}</MsButton>
    </MsThemeScope>
  </div>
</template>
