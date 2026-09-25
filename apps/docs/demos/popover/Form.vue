<script setup lang="ts">
import { reactive, ref } from "vue";
import { MsButton, MsField, MsInput, MsPopover } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const size = reactive({ width: "1280", height: "720" });
</script>

<template>
  <MsPopover v-model:open="open" :title="t.dimensions" width="md" placement="bottom-start">
    <template #trigger>
      <MsButton variant="outline" tone="neutral">{{ t.resize }}</MsButton>
    </template>
    <div style="display: grid; gap: 12px">
      <MsField :label="t.width" orientation="horizontal" size="sm">
        <MsInput v-model="size.width" size="sm" type="number" />
      </MsField>
      <MsField :label="t.height" orientation="horizontal" size="sm">
        <MsInput v-model="size.height" size="sm" type="number" />
      </MsField>
    </div>
    <template #footer>
      <MsButton size="sm" variant="ghost" tone="neutral" @click="open = false">
        {{ t.cancel }}
      </MsButton>
      <MsButton size="sm" @click="open = false">{{ t.apply }}</MsButton>
    </template>
  </MsPopover>
</template>
