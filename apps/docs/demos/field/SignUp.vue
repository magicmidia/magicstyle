<script setup lang="ts">
import { reactive, ref } from "vue";
import { MsButton, MsCheckbox, MsField, MsInput, MsPasswordInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const form = reactive({ name: "", email: "", password: "", terms: false });
const errors = reactive({ name: "", email: "", password: "", terms: "" });
const loading = ref(false);
const success = ref(false);

function validate(): boolean {
  errors.name = form.name.trim().length >= 3 ? "" : t.nameError;
  errors.email = /^\S+@\S+\.\S+$/.test(form.email) ? "" : t.emailError;
  errors.password = form.password.length >= 8 ? "" : t.passwordError;
  errors.terms = form.terms ? "" : t.termsError;
  return !errors.name && !errors.email && !errors.password && !errors.terms;
}

function onSubmit(): void {
  success.value = false;
  if (!validate()) return;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    success.value = true;
  }, 1200);
}
</script>

<template>
  <form
    novalidate
    style="display: grid; gap: 16px; width: 100%; max-width: 380px"
    @submit.prevent="onSubmit"
  >
    <MsField :label="t.fullName" :error="errors.name" required>
      <MsInput v-model="form.name" autocomplete="name" :placeholder="t.fullNamePlaceholder" />
    </MsField>
    <MsField :label="t.email" :error="errors.email" required>
      <MsInput
        v-model="form.email"
        type="email"
        autocomplete="email"
        :placeholder="t.emailPlaceholder"
      />
    </MsField>
    <MsField :label="t.password" :error="errors.password" :description="t.passwordHint" required>
      <MsPasswordInput v-model="form.password" autocomplete="new-password" show-strength-meter />
    </MsField>
    <MsField :error="errors.terms">
      <MsCheckbox v-model="form.terms" :label="t.terms" />
    </MsField>
    <MsButton type="submit" :loading="loading" full-width>{{ t.createAccount }}</MsButton>
    <p v-if="success" role="status">{{ t.success }}</p>
  </form>
</template>
