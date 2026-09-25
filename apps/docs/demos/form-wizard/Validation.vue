<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { MsField, MsFormWizard, MsInput, MsMaskedInput, type MsWizardStep } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const step = ref(0);
const submitted = ref(false);
const form = reactive({ email: "", phone: "", city: "" });
const errors = reactive({ email: "", phone: "", city: "" });

const steps = computed<MsWizardStep[]>(() => [
  { id: "contact", title: t.stepContact },
  { id: "address", title: t.stepAddress },
  { id: "confirm", title: t.stepConfirm },
]);

function validate(index: number): boolean {
  if (index === 0) {
    errors.email = /^\S+@\S+\.\S+$/.test(form.email) ? "" : t.emailError;
    errors.phone = form.phone.length === 15 ? "" : t.phoneError;
    return !errors.email && !errors.phone;
  }
  if (index === 1) {
    errors.city = form.city.trim() ? "" : t.cityError;
    return !errors.city;
  }
  return true;
}

// Going back is always allowed; moving forward requires the current step to be valid.
function beforeChange(from: number, to: number): boolean {
  return to < from || validate(from);
}
</script>

<template>
  <div style="width: 100%; max-width: 560px">
    <MsFormWizard
      v-model="step"
      :steps="steps"
      :before-change="beforeChange"
      :finish-text="t.submit"
      @finish="submitted = true"
    >
      <template #contact>
        <div style="display: grid; gap: 12px">
          <MsField :label="t.email" :error="errors.email" required>
            <MsInput v-model="form.email" type="email" :placeholder="t.emailPlaceholder" />
          </MsField>
          <MsField :label="t.phone" :error="errors.phone" required>
            <MsMaskedInput v-model="form.phone" mask="phone" />
          </MsField>
        </div>
      </template>
      <template #address>
        <MsField :label="t.city" :error="errors.city" required>
          <MsInput v-model="form.city" :placeholder="t.cityPlaceholder" />
        </MsField>
      </template>
      <template #confirm>
        <p v-if="submitted">{{ t.submitted }}</p>
        <p v-else>{{ t.confirmText }}</p>
      </template>
    </MsFormWizard>
  </div>
</template>
