<script setup lang="ts">
import { computed, ref } from "vue";
import { MsChoicebox, type MsChoiceboxItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const addons = ref<string | number | (string | number)[]>(["backups"]);

const items = computed<MsChoiceboxItemData[]>(() => [
  { value: "backups", title: t.backups, description: t.backupsDesc, price: t.backupsPrice },
  { value: "cdn", title: t.cdn, description: t.cdnDesc, price: t.cdnPrice },
  { value: "support", title: t.support, description: t.supportDesc, price: t.supportPrice },
]);
</script>

<template>
  <div style="width: 100%; max-width: 440px">
    <MsChoicebox
      v-model="addons"
      type="checkbox"
      :items="items"
      indicator-placement="right"
      :aria-label="t.addonsLabel"
    />
  </div>
</template>
