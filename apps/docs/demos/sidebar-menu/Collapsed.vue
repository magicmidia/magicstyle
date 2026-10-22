<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsSidebarMenu, MsSidebarMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const collapsed = ref(true);
const active = ref("dashboard");
const items = computed(() => [
  {
    id: "dashboard",
    label: t.dashboard,
    paths: ["M3 3h7v9H3z", "M14 3h7v5h-7z", "M14 12h7v9h-7z", "M3 16h7v5H3z"],
  },
  {
    id: "orders",
    label: t.orders,
    paths: [
      "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
      "M3 6h18",
      "M16 10a4 4 0 0 1-8 0",
    ],
  },
  {
    id: "customers",
    label: t.customers,
    paths: [
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      "M22 21v-2a4 4 0 0 0-3-3.87",
    ],
  },
  { id: "reports", label: t.reports, paths: ["M3 3v18h18", "m19 9-5 5-4-4-3 3"] },
]);
</script>

<template>
  <div style="display: grid; gap: 12px; justify-items: center">
    <div class="ms-u-p-2 ms-u-rounded-lg ms-u-border ms-u-bg-raised">
      <MsSidebarMenu v-model="active" :collapsed="collapsed">
        <ul class="ms-sidebar-menu-list">
          <MsSidebarMenuItem v-for="item in items" :id="item.id" :key="item.id" :label="item.label">
            <template #icon>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path v-for="d in item.paths" :key="d" :d="d" />
              </svg>
              <!-- Keeps an accessible name when the label is hidden. -->
              <span v-if="collapsed" class="ms-visually-hidden">{{ item.label }}</span>
            </template>
          </MsSidebarMenuItem>
        </ul>
      </MsSidebarMenu>
    </div>
    <MsButton size="sm" variant="outline" tone="neutral" @click="collapsed = !collapsed">
      {{ collapsed ? t.expand : t.collapse }}
    </MsButton>
  </div>
</template>
