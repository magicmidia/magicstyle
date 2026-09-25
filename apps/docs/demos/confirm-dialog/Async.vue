<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsConfirmDialog } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const loading = ref(false);
const revoked = ref(false);

async function revoke() {
  loading.value = true;
  // Simulates the API call.
  await new Promise((resolve) => setTimeout(resolve, 1500));
  loading.value = false;
  open.value = false;
  revoked.value = true;
}
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center">
    <MsButton tone="danger" :disabled="revoked" @click="open = true">
      {{ t.revokeKey }}
    </MsButton>
    <p v-if="revoked" style="margin: 0; font-size: 14px">{{ t.revokedNotice }}</p>
  </div>
  <MsConfirmDialog
    v-model:open="open"
    :loading="loading"
    :title="t.revokeTitle"
    :message="t.revokeMessage"
    :confirm-label="t.revokeConfirm"
    :cancel-label="t.cancel"
    :close-on-backdrop="false"
    @confirm="revoke"
  />
</template>
