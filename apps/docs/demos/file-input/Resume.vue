<script setup lang="ts">
import { reactive, ref } from "vue";
import { MsButton, MsField, MsFileInput, MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const form = reactive<{ name: string; resume: File | File[] | null }>({ name: "", resume: null });
const errors = reactive({ name: "", resume: "" });
const sent = ref(false);

function onSubmit(): void {
  errors.name = form.name.trim() ? "" : t.nameError;
  errors.resume = form.resume ? "" : t.resumeError;
  sent.value = !errors.name && !errors.resume;
}
</script>

<template>
  <form
    novalidate
    style="display: grid; gap: 16px; width: 100%; max-width: 440px"
    @submit.prevent="onSubmit"
  >
    <MsField :label="t.name" :error="errors.name" required>
      <MsInput v-model="form.name" autocomplete="name" />
    </MsField>
    <MsField :label="t.resume" :error="errors.resume" required>
      <MsFileInput
        v-model="form.resume"
        accept=".pdf"
        :label="t.resumePrompt"
        :hint="t.resumeHint"
      />
    </MsField>
    <MsButton type="submit">{{ t.apply }}</MsButton>
    <p v-if="sent" role="status">{{ t.sent }}</p>
  </form>
</template>
