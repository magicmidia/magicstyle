<script setup lang="ts">
import { ref } from "vue";
import { MsAlert, MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const visible = ref(true);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center; width: 100%; max-width: 560px">
    <MsAlert
      v-if="visible"
      tone="warning"
      dismissible
      :title="t.trialTitle"
      :description="t.trialDescription"
      @close="visible = false"
    >
      <template #actions>
        <MsButton size="sm" tone="warning">{{ t.upgrade }}</MsButton>
        <MsButton size="sm" variant="ghost" tone="neutral">{{ t.comparePlans }}</MsButton>
      </template>
    </MsAlert>
    <MsButton v-else variant="outline" tone="neutral" size="sm" @click="visible = true">
      {{ t.showAgain }}
    </MsButton>
  </div>
</template>
