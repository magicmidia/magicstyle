<script setup lang="ts">
import { computed, ref } from "vue";
import { MsAvatar, MsSidebar, MsSidebarMenu, type MsSidebarMenuGroupData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const active = ref("overview");
const menu = computed<MsSidebarMenuGroupData[]>(() => [
  {
    title: t.workspace,
    items: [
      { id: "overview", label: t.overview },
      { id: "projects", label: t.projects, badge: 12 },
      { id: "tasks", label: t.tasks, badge: 3, badgeTone: "warning" },
      { id: "calendar", label: t.calendar },
    ],
  },
  {
    title: t.account,
    items: [
      { id: "billing", label: t.billing },
      { id: "settings", label: t.settings },
    ],
  },
]);
const activeLabel = computed(
  () => menu.value.flatMap((g) => g.items).find((i) => i.id === active.value)?.label,
);
</script>

<template>
  <div
    style="
      display: flex;
      width: 100%;
      max-width: 760px;
      height: 400px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-subtle);
      border-radius: 12px;
    "
  >
    <!-- min-block-size: 0 lets the sidebar fit a fixed-height frame instead of the full viewport. -->
    <MsSidebar position="relative" style="min-block-size: 0">
      <template #header>
        <strong>{{ t.brand }}</strong>
      </template>
      <MsSidebarMenu v-model="active" :items="menu" density="compact" />
      <template #footer>
        <div class="ms-u-flex ms-u-items-center ms-u-gap-2">
          <MsAvatar size="sm" :name="t.userName" status="online" />
          <div style="display: grid; font-size: var(--ms-typography-size-sm)">
            <span class="ms-u-font-medium">{{ t.userName }}</span>
            <span class="ms-u-text-muted">{{ t.userEmail }}</span>
          </div>
        </div>
      </template>
    </MsSidebar>
    <main style="flex: 1; padding: 24px">
      <h3 style="margin: 0 0 8px">{{ activeLabel }}</h3>
      <p class="ms-u-text-muted" style="margin: 0">{{ t.contentHint }}</p>
    </main>
  </div>
</template>
