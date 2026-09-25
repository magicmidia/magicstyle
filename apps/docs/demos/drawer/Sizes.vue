<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsDrawer, type MsDrawerSize } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const sizes: MsDrawerSize[] = ["sm", "md", "lg", "xl", "full"];
const open = ref(false);
const size = ref<MsDrawerSize>("md");

function show(next: MsDrawerSize) {
  size.value = next;
  open.value = true;
}
</script>

<template>
  <MsButton v-for="s in sizes" :key="s" variant="outline" tone="neutral" @click="show(s)">
    {{ s }}
  </MsButton>
  <MsDrawer
    v-model:open="open"
    :size="size"
    :title="t.sizeTitle"
    :description="t.sizeDescription"
  />
</template>
