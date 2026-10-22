<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import {
  MsField,
  MsFormWizard,
  MsInput,
  MsNativeSelect,
  type MsWizardStep,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const step = ref(0);
const finished = ref(false);
const form = reactive({ name: "", email: "", company: "", size: "" });

const steps = computed<MsWizardStep[]>(() => [
  { id: "account", title: t.stepAccount, description: t.stepAccountHint },
  { id: "company", title: t.stepCompany, description: t.stepCompanyHint },
  { id: "review", title: t.stepReview, description: t.stepReviewHint },
]);
</script>

<template>
  <div style="width: 100%; max-width: 560px">
    <MsFormWizard v-model="step" :steps="steps" @finish="finished = true">
      <template #account>
        <div style="display: grid; gap: 12px">
          <MsField :label="t.name">
            <MsInput v-model="form.name" :placeholder="t.namePlaceholder" />
          </MsField>
          <MsField :label="t.email">
            <MsInput v-model="form.email" type="email" :placeholder="t.emailPlaceholder" />
          </MsField>
        </div>
      </template>
      <template #company>
        <div style="display: grid; gap: 12px">
          <MsField :label="t.company">
            <MsInput v-model="form.company" :placeholder="t.companyPlaceholder" />
          </MsField>
          <MsField :label="t.teamSize">
            <MsNativeSelect v-model="form.size" :placeholder="t.teamSizePlaceholder">
              <option value="1-10">{{ t.teamSmall }}</option>
              <option value="11-50">{{ t.teamMedium }}</option>
              <option value="51+">{{ t.teamLarge }}</option>
            </MsNativeSelect>
          </MsField>
        </div>
      </template>
      <template #review>
        <p v-if="finished">{{ t.done }}</p>
        <p v-else>{{ t.reviewText }}</p>
      </template>
    </MsFormWizard>
  </div>
</template>
