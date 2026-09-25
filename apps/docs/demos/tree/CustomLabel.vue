<script setup lang="ts">
import { computed, ref } from "vue";
import { MsBadge, MsTree, type MsTreeKey, type MsTreeNodeData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const counts: Record<string, number> = { inbox: 12, sales: 4, support: 8, archive: 0 };

const folders = computed<MsTreeNodeData[]>(() => [
  {
    key: "inbox",
    label: t.inbox,
    children: [
      { key: "sales", label: t.sales },
      { key: "support", label: t.support },
    ],
  },
  { key: "archive", label: t.archive },
]);
const expanded = ref<MsTreeKey[]>(["inbox"]);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsTree v-model:expanded-keys="expanded" :items="folders" :aria-label="t.foldersLabel">
      <template #default="{ node }">
        <span style="display: inline-flex; align-items: center; gap: 8px">
          {{ node.label }}
          <MsBadge v-if="counts[node.key]" variant="soft" size="xs" pill>
            {{ counts[node.key] }}
          </MsBadge>
        </span>
      </template>
    </MsTree>
  </div>
</template>
