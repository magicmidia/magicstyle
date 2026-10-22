<script setup lang="ts">
import { ref } from "vue";
import { MsCode } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const lastCopied = ref("");
</script>

<template>
  <div style="display: grid; gap: 12px; max-width: 560px">
    <div style="display: grid; gap: 4px">
      <small>{{ t.apiKeyLabel }}</small>
      <MsCode copyable variant="outline" @copy="lastCopied = $event"
        >sk_live_51Nx8QaT2v9Lm4Rz</MsCode
      >
    </div>
    <div style="display: grid; gap: 4px">
      <small>{{ t.webhookLabel }}</small>
      <MsCode copyable variant="outline" @copy="lastCopied = $event">
        https://api.acme.dev/webhooks/orders
      </MsCode>
    </div>
    <small v-if="lastCopied" style="opacity: 0.7">{{ t.copiedHint }}</small>
  </div>
</template>
