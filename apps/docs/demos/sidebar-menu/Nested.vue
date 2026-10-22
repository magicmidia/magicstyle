<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSidebarMenu, type MsSidebarMenuGroupData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const active = ref("api-keys");
const menu = computed<MsSidebarMenuGroupData[]>(() => [
  {
    title: t.settings,
    items: [
      {
        id: "account",
        label: t.account,
        children: [
          { id: "profile", label: t.profile },
          { id: "preferences", label: t.preferences },
        ],
      },
      {
        id: "developers",
        label: t.developers,
        open: true,
        children: [
          { id: "api-keys", label: t.apiKeys },
          { id: "webhooks", label: t.webhooks },
          { id: "logs", label: t.logs },
        ],
      },
      {
        id: "team",
        label: t.team,
        children: [
          { id: "members", label: t.members },
          { id: "roles", label: t.roles },
        ],
      },
    ],
  },
]);
</script>

<template>
  <div class="ms-u-p-3 ms-u-rounded-lg ms-u-border ms-u-bg-raised" style="width: 260px">
    <MsSidebarMenu v-model="active" :items="menu" accordion />
  </div>
</template>
