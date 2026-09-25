<script setup lang="ts">
import { computed, ref } from "vue";
import { MsTree, type MsTreeKey, type MsTreeNodeData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const settings = computed<MsTreeNodeData[]>(() => [
  {
    key: "account",
    label: t.account,
    icon: "👤",
    children: [
      { key: "profile", label: t.profile, icon: "🪪" },
      { key: "security", label: t.security, icon: "🔒" },
    ],
  },
  {
    key: "workspace",
    label: t.workspace,
    icon: "🏢",
    children: [
      { key: "members", label: t.members, icon: "👥" },
      { key: "billing", label: t.billing, icon: "💳" },
      { key: "sso", label: t.sso, icon: "🔑", disabled: true },
    ],
  },
]);
const expanded = ref<MsTreeKey[]>(["account", "workspace"]);
const selected = ref<MsTreeKey>("profile");
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsTree
      v-model:expanded-keys="expanded"
      v-model:selected-key="selected"
      :items="settings"
      :aria-label="t.settingsLabel"
    />
  </div>
</template>
