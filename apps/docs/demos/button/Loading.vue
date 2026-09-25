<script setup lang="ts">
import { ref } from "vue";
import { MsButton } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const saving = ref(false);

function save() {
  saving.value = true;
  setTimeout(() => (saving.value = false), 2000);
}
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px">
    <MsButton :loading="saving" @click="save">
      {{ saving ? t.saving : t.saveChanges }}
    </MsButton>
    <MsButton variant="outline" tone="neutral" loading>{{ t.syncing }}</MsButton>
  </div>
</template>
