<script setup lang="ts">
import { ref } from "vue";
import { MsBanner, MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const visible = ref(true);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center; width: 100%">
    <MsBanner
      v-if="visible"
      tone="primary"
      dismissible
      :title="t.eventTitle"
      style="width: 100%"
      @dismiss="visible = false"
    >
      {{ t.eventBody }}
      <template #actions>
        <MsButton size="sm" tone="primary">{{ t.register }}</MsButton>
      </template>
    </MsBanner>
    <MsButton v-else variant="outline" tone="neutral" size="sm" @click="visible = true">
      {{ t.showAgain }}
    </MsButton>
  </div>
</template>
