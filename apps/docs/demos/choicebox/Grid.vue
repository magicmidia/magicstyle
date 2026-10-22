<script setup lang="ts">
import { computed, ref } from "vue";
import { MsChoicebox, type MsChoiceboxItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const region = ref<string | number | (string | number)[]>("gru");

const regions = computed<MsChoiceboxItemData[]>(() => [
  { value: "gru", icon: "🇧🇷", title: t.saoPaulo, description: "sa-east-1" },
  { value: "iad", icon: "🇺🇸", title: t.virginia, description: "us-east-1" },
  { value: "fra", icon: "🇩🇪", title: t.frankfurt, description: "eu-central-1" },
  {
    value: "nrt",
    icon: "🇯🇵",
    title: t.tokyo,
    description: "ap-northeast-1",
    disabled: true,
    badge: t.soon,
  },
]);
</script>

<template>
  <div style="width: 100%; max-width: 520px">
    <MsChoicebox
      v-model="region"
      :items="regions"
      layout="grid"
      :columns="2"
      size="sm"
      :aria-label="t.regionLabel"
    />
  </div>
</template>
