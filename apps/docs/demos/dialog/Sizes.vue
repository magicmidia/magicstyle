<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsDialog, type MsDialogSize } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const sizes: MsDialogSize[] = ["sm", "md", "lg", "xl", "full"];
const open = ref(false);
const size = ref<MsDialogSize>("md");

function show(next: MsDialogSize) {
  size.value = next;
  open.value = true;
}
</script>

<template>
  <MsButton v-for="s in sizes" :key="s" variant="outline" tone="neutral" @click="show(s)">
    {{ s }}
  </MsButton>
  <MsDialog v-model:open="open" :size="size" :title="t.sizeTitle" :description="t.sizeDescription">
    <template #footer>
      <MsButton @click="open = false">{{ t.close }}</MsButton>
    </template>
  </MsDialog>
</template>
