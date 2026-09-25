<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSidebar, MsSidebarMenu, MsSidebarMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const collapsed = ref(false);
const active = ref("inbox");
const items = computed(() => [
  {
    id: "inbox",
    label: t.inbox,
    paths: [
      "M22 12h-6l-2 3h-4l-2-3H2",
      "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    ],
  },
  { id: "analytics", label: t.analytics, paths: ["M3 3v18h18", "m19 9-5 5-4-4-3 3"] },
  {
    id: "customers",
    label: t.customers,
    paths: [
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      "M22 21v-2a4 4 0 0 0-3-3.87",
      "M16 3.13a4 4 0 0 1 0 7.75",
    ],
  },
  {
    id: "settings",
    label: t.settings,
    paths: [
      "M4 21v-7",
      "M4 10V3",
      "M12 21v-9",
      "M12 8V3",
      "M20 21v-5",
      "M20 12V3",
      "M2 14h4",
      "M10 8h4",
      "M18 16h4",
    ],
  },
]);
</script>

<template>
  <div
    style="
      display: flex;
      width: 100%;
      max-width: 760px;
      height: 360px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-subtle);
      border-radius: 12px;
    "
  >
    <MsSidebar
      v-model:collapsed="collapsed"
      position="relative"
      show-toggle
      style="min-block-size: 0"
    >
      <template #header>
        <strong class="ms-sidebar-hide-on-collapse">{{ t.brand }}</strong>
      </template>
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
              <!-- Keeps an accessible name when the label is hidden in collapsed mode. -->
              <span v-if="collapsed" class="ms-visually-hidden">{{ item.label }}</span>
            </template>
          </MsSidebarMenuItem>
        </ul>
      </MsSidebarMenu>
    </MsSidebar>
    <main style="flex: 1; padding: 24px">
      <p class="ms-u-text-muted" style="margin: 0">{{ t.collapseHint }}</p>
    </main>
  </div>
</template>
