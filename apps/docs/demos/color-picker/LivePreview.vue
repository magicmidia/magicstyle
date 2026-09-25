<script setup lang="ts">
import { ref } from "vue";
import { MsCard, MsColorPicker } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const label = ref("#10b981");
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 360px">
    <MsCard variant="outline" padding="md">
      <div style="display: flex; align-items: center; gap: 12px">
        <span
          :style="{ width: '12px', height: '12px', borderRadius: '999px', background: label }"
        />
        <strong>{{ t.labelName }}</strong>
        <span style="margin-inline-start: auto">{{ t.issues }}</span>
      </div>
    </MsCard>
    <MsColorPicker v-model="label" />
  </div>
</template>
