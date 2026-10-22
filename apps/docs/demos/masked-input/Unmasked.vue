<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsMaskedInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const phone = ref("");
const digits = ref("");
const complete = ref(false);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsField :label="t.phone">
      <MsMaskedInput
        v-model="phone"
        v-model:unmasked="digits"
        mask="phone"
        clearable
        @update:model-value="complete = false"
        @complete="complete = true"
      />
    </MsField>
    <dl style="display: grid; grid-template-columns: auto 1fr; gap: 4px 12px; margin: 0">
      <dt>{{ t.masked }}</dt>
      <dd style="margin: 0">
        <code>{{ phone || "—" }}</code>
      </dd>
      <dt>{{ t.unmasked }}</dt>
      <dd style="margin: 0">
        <code>{{ digits || "—" }}</code>
      </dd>
      <dt>{{ t.completeLabel }}</dt>
      <dd style="margin: 0">{{ complete ? t.yes : t.no }}</dd>
    </dl>
  </div>
</template>
