<script setup lang="ts">
import { ref } from "vue";
import { MsCard, MsField, MsIconPicker, MsInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const label = ref(t.defaultLabel);
const icon = ref("calendar");
</script>

<template>
  <MsCard
    variant="outline"
    padding="md"
    :title="t.cardTitle"
    :description="t.cardDescription"
    style="width: 100%; max-width: 420px"
  >
    <div style="display: grid; grid-template-columns: auto 1fr; align-items: end; gap: 12px">
      <MsIconPicker v-model="icon" />
      <MsField :label="t.labelField">
        <MsInput v-model="label" />
      </MsField>
    </div>
  </MsCard>
</template>
