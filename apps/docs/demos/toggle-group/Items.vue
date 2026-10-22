<script setup lang="ts">
import { computed, ref } from "vue";
import { MsToggleGroup, type MsToggleGroupItemOption } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const days = ref<string | string[]>(["mon", "wed", "fri"]);

const items = computed<MsToggleGroupItemOption[]>(() => [
  { value: "mon", label: t.mon },
  { value: "tue", label: t.tue },
  { value: "wed", label: t.wed },
  { value: "thu", label: t.thu },
  { value: "fri", label: t.fri },
  { value: "sat", label: t.sat, disabled: true },
  { value: "sun", label: t.sun, disabled: true },
]);
</script>

<template>
  <MsToggleGroup
    v-model="days"
    :items="items"
    multiple
    mandatory
    size="sm"
    :aria-label="t.workDays"
  />
</template>
