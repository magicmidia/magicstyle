<script setup lang="ts">
import { ref } from "vue";
import { MsTree, type MsTreeKey, type MsTreeNodeData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const files: MsTreeNodeData[] = [
  {
    key: "src",
    label: "src",
    children: [
      {
        key: "src/components",
        label: "components",
        children: [
          { key: "src/components/InvoiceTable.vue", label: "InvoiceTable.vue" },
          { key: "src/components/UserMenu.vue", label: "UserMenu.vue" },
        ],
      },
      { key: "src/App.vue", label: "App.vue" },
      { key: "src/main.ts", label: "main.ts" },
    ],
  },
  {
    key: "public",
    label: "public",
    children: [{ key: "public/favicon.svg", label: "favicon.svg" }],
  },
  { key: "package.json", label: "package.json" },
  { key: "vite.config.ts", label: "vite.config.ts" },
];

const selected = ref<MsTreeKey>("src/main.ts");
const expanded = ref<MsTreeKey[]>(["src"]);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 360px">
    <MsTree
      v-model:selected-key="selected"
      v-model:expanded-keys="expanded"
      :items="files"
      :aria-label="t.filesLabel"
    />
    <small style="opacity: 0.7">
      {{ t.selectedLabel }} <code>{{ selected }}</code>
    </small>
  </div>
</template>
