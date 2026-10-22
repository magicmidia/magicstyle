<script setup lang="ts">
import { MsScrollbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const variants = [
  { size: "thin", tone: "default", visibility: "auto" },
  { size: "normal", tone: "primary", visibility: "always" },
  { size: "thick", tone: "accent", visibility: "always" },
] as const;
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center">
    <MsScrollbar
      v-for="v in variants"
      :key="v.size"
      :size="v.size"
      :tone="v.tone"
      :visibility="v.visibility"
      :max-height="180"
      class="ms-u-border ms-u-rounded-md"
      style="width: 200px"
      tabindex="0"
      role="region"
      :aria-label="t.terms"
    >
      <div class="ms-u-p-3">
        <code>{{ `size="${v.size}"` }}</code>
        <p style="margin: 8px 0 0; line-height: 1.6">{{ t.termsBody }}</p>
      </div>
    </MsScrollbar>
  </div>
</template>
