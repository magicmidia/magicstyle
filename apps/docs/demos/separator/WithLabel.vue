<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsField, MsInput, MsSeparator } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const email = ref("");
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 340px">
    <MsButton variant="outline" tone="neutral" block>{{ t.continueGoogle }}</MsButton>
    <MsButton variant="outline" tone="neutral" block>{{ t.continueGithub }}</MsButton>
    <MsSeparator :label="t.or" spacing="sm" />
    <MsField :label="t.email">
      <MsInput v-model="email" type="email" :placeholder="t.emailPlaceholder" />
    </MsField>
    <MsButton block>{{ t.sendLink }}</MsButton>
  </div>
</template>
