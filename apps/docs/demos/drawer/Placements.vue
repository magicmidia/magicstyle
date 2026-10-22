<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsDrawer, type MsDrawerPlacement } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const placement = ref<MsDrawerPlacement>("right");

function show(next: MsDrawerPlacement) {
  placement.value = next;
  open.value = true;
}
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="show('left')">{{ t.left }}</MsButton>
  <MsButton variant="outline" tone="neutral" @click="show('right')">{{ t.right }}</MsButton>
  <MsButton variant="outline" tone="neutral" @click="show('top')">{{ t.top }}</MsButton>
  <MsButton variant="outline" tone="neutral" @click="show('bottom')">{{ t.bottom }}</MsButton>
  <MsDrawer
    v-model:open="open"
    :placement="placement"
    :title="t.placementTitle"
    :description="t.placementDescription"
  />
</template>
