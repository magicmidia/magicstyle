<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsSelect, type MsSelectOption } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const stack = ref<string | number | (string | number)[] | null>(["vue", "typescript"]);

const technologies: MsSelectOption[] = [
  { value: "vue", label: "Vue" },
  { value: "react", label: "React" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "typescript", label: "TypeScript" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "vite", label: "Vite" },
];
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.stack" :description="t.stackHelp">
      <MsSelect
        v-model="stack"
        :options="technologies"
        multiple
        clearable
        :max-tag-count="3"
        :placeholder="t.selectTech"
      />
    </MsField>
  </div>
</template>
