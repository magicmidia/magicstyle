<script setup lang="ts">
import { reactive, ref } from "vue";
import { MsButton, MsField, MsPasswordInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const form = reactive({ current: "", next: "", confirm: "" });
const errors = reactive({ current: "", next: "", confirm: "" });
const saved = ref(false);

function onSubmit(): void {
  errors.current = form.current ? "" : t.currentError;
  errors.next = form.next.length >= 8 ? "" : t.nextError;
  errors.confirm = form.confirm === form.next && form.confirm ? "" : t.confirmError;
  saved.value = !errors.current && !errors.next && !errors.confirm;
}
</script>

<template>
  <form
    novalidate
    style="display: grid; gap: 16px; width: 100%; max-width: 360px"
    @submit.prevent="onSubmit"
  >
    <MsField :label="t.currentPassword" :error="errors.current">
      <MsPasswordInput v-model="form.current" autocomplete="current-password" />
    </MsField>
    <MsField :label="t.newPassword" :error="errors.next">
      <MsPasswordInput v-model="form.next" autocomplete="new-password" show-strength-meter />
    </MsField>
    <MsField :label="t.confirmPassword" :error="errors.confirm">
      <MsPasswordInput v-model="form.confirm" autocomplete="new-password" :show-toggle="false" />
    </MsField>
    <MsButton type="submit">{{ t.save }}</MsButton>
    <p v-if="saved" role="status">{{ t.saved }}</p>
  </form>
</template>
