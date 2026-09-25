<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsField, MsPinInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const code = ref("");
const status = ref<"idle" | "checking" | "ok" | "error">("idle");

function verify(value: string): void {
  status.value = "checking";
  setTimeout(() => {
    status.value = value === "246810" ? "ok" : "error";
  }, 800);
}

function reset(): void {
  code.value = "";
  status.value = "idle";
}
</script>

<template>
  <div style="display: grid; gap: 16px; justify-items: center; text-align: center">
    <div>
      <strong>{{ t.verifyTitle }}</strong>
      <p style="margin: 4px 0 0">{{ t.verifyText }}</p>
    </div>
    <MsField
      :label="t.code"
      :description="t.demoHint"
      :error="status === 'error' ? t.codeError : undefined"
    >
      <MsPinInput
        v-model="code"
        :length="6"
        :disabled="status === 'checking' || status === 'ok'"
        @complete="verify"
      />
    </MsField>
    <p v-if="status === 'ok'" role="status">{{ t.verified }}</p>
    <MsButton variant="link" @click="reset">{{ t.resend }}</MsButton>
  </div>
</template>
