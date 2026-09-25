<script setup lang="ts">
import { computed, ref } from "vue";
import {
  MsAppShell,
  MsAppShellSidebar,
  MsAvatar,
  MsCard,
  MsContent,
  MsIconButton,
  MsSearchField,
  MsSidebarMenu,
  MsStatusBar,
  MsTopbar,
  type MsSidebarMenuItemData,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const collapsed = ref(false);
const active = ref("overview");
const search = ref("");
const menu = computed<MsSidebarMenuItemData[]>(() => [
  { id: "overview", label: t.overview },
  { id: "orders", label: t.orders, badge: 5 },
  { id: "products", label: t.products },
  { id: "customers", label: t.customers },
  { id: "settings", label: t.settings },
]);
const stats = computed(() => [
  { label: t.revenue, value: t.revenueValue, delta: t.revenueDelta },
  { label: t.newOrders, value: t.ordersValue, delta: t.ordersDelta },
  { label: t.activeUsers, value: t.usersValue, delta: t.usersDelta },
]);
</script>

<template>
  <div
    style="
      width: 100%;
      max-width: 880px;
      height: 420px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-subtle);
      border-radius: 12px;
    "
  >
    <!-- :full-height="false" + a fixed height keeps the shell inside its frame instead of the viewport. -->
    <MsAppShell
      v-model:sidebar-collapsed="collapsed"
      :full-height="false"
      style="height: 100%; min-height: 0"
    >
      <template #topbar>
        <MsTopbar>
          <template #leading>
            <MsIconButton
              variant="ghost"
              tone="neutral"
              size="sm"
              :label="collapsed ? t.expandMenu : t.collapseMenu"
              @click="collapsed = !collapsed"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </MsIconButton>
            <strong>{{ t.brand }}</strong>
          </template>
          <MsSearchField v-model="search" size="sm" :placeholder="t.searchPlaceholder" />
          <template #trailing>
            <MsAvatar size="sm" :name="t.userName" />
          </template>
        </MsTopbar>
      </template>

      <template #sidebar>
        <MsAppShellSidebar style="min-block-size: 0">
          <MsSidebarMenu v-model="active" :items="menu" :collapsed="collapsed" density="compact" />
        </MsAppShellSidebar>
      </template>

      <MsContent>
        <h3 style="margin: 0 0 16px">{{ t.overview }}</h3>
        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 12px;
          "
        >
          <MsCard v-for="stat in stats" :key="stat.label" variant="outline" padding="sm">
            <div class="ms-u-text-muted" style="font-size: var(--ms-typography-size-sm)">
              {{ stat.label }}
            </div>
            <div
              class="ms-u-font-bold ms-text-numeric"
              style="font-size: var(--ms-typography-size-xl)"
            >
              {{ stat.value }}
            </div>
            <div class="ms-u-text-success" style="font-size: var(--ms-typography-size-sm)">
              {{ stat.delta }}
            </div>
          </MsCard>
        </div>
      </MsContent>

      <template #statusbar>
        <MsStatusBar>
          <span>{{ t.synced }}</span>
          <span>{{ t.version }}</span>
        </MsStatusBar>
      </template>
    </MsAppShell>
  </div>
</template>
