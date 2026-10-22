<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsDialog, type MsDialogPlacement } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const placement = ref<MsDialogPlacement>("center");

function show(next: MsDialogPlacement) {
  placement.value = next;
  open.value = true;
}
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="show('top')">{{ t.top }}</MsButton>
  <MsButton variant="outline" tone="neutral" @click="show('center')">{{ t.center }}</MsButton>
  <MsButton variant="outline" tone="neutral" @click="show('bottom')">{{ t.bottomSheet }}</MsButton>
  <MsDialog
    v-model:open="open"
    :placement="placement"
    :title="t.shareTitle"
    :description="t.shareDescription"
  >
    <template #footer>
      <MsButton variant="outline" tone="neutral" @click="open = false">{{ t.cancel }}</MsButton>
      <MsButton @click="open = false">{{ t.copyLink }}</MsButton>
    </template>
  </MsDialog>
</template>
