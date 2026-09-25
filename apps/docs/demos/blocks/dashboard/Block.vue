<script setup lang="ts">
import { computed, ref, useId } from "vue";
import {
  MsAnimatedNumber,
  MsAvatar,
  MsBadge,
  MsButton,
  MsCard,
  MsIconButton,
  MsList,
  MsListItem,
  MsMenu,
  MsSearchField,
  MsSidebarMenu,
  MsSidebarMenuItem,
  MsTable,
  MsTableBody,
  MsTableCell,
  MsTableHead,
  MsTableHeaderCell,
  MsTableRow,
  type MsMenuItem,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const titleId = useId();
const navId = useId();
const active = ref("overview");
const navOpen = ref(false);
const search = ref("");

// Icons are 24×24 stroke paths, rendered by the same <svg> template.
const nav = computed(() => [
  {
    id: "overview",
    label: t.navOverview,
    icon: ["M3 3h7v9H3z", "M14 3h7v5h-7z", "M14 12h7v9h-7z", "M3 16h7v5H3z"],
  },
  {
    id: "orders",
    label: t.navOrders,
    badge: 12,
    icon: ["M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"],
  },
  {
    id: "products",
    label: t.navProducts,
    icon: ["M21 8 12 3 3 8v8l9 5 9-5Z", "m3 8 9 5 9-5", "M12 13v8"],
  },
  {
    id: "customers",
    label: t.navCustomers,
    icon: [
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      "M22 21v-2a4 4 0 0 0-3-3.87",
      "M16 3.13a4 4 0 0 1 0 7.75",
    ],
  },
  { id: "reports", label: t.navReports, icon: ["M3 3v18h18", "m7 14 4-4 4 4 5-5"] },
  {
    id: "settings",
    label: t.navSettings,
    icon: [
      "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z",
    ],
  },
]);

// Intl formatters follow the page locale; fixed UTC dates keep SSR and hydration in sync.
const currency = computed(
  () => new Intl.NumberFormat(t.locale, { style: "currency", currency: t.currency }),
);
const compactCurrency = computed(
  () =>
    new Intl.NumberFormat(t.locale, {
      style: "currency",
      currency: t.currency,
      maximumFractionDigits: 0,
    }),
);
const integer = computed(() => new Intl.NumberFormat(t.locale, { maximumFractionDigits: 0 }));
const percent = computed(
  () =>
    new Intl.NumberFormat(t.locale, {
      style: "percent",
      maximumFractionDigits: 1,
      signDisplay: "always",
    }),
);
const shortDate = computed(
  () => new Intl.DateTimeFormat(t.locale, { day: "numeric", month: "short", timeZone: "UTC" }),
);
const relative = computed(() => new Intl.RelativeTimeFormat(t.locale, { numeric: "auto" }));
const today = computed(() =>
  new Intl.DateTimeFormat(t.locale, { dateStyle: "full", timeZone: "UTC" }).format(
    new Date("2026-09-25T12:00:00Z"),
  ),
);

const kpis = computed(() => [
  {
    label: t.kpiRevenue,
    value: 48294.5,
    format: (v: number) => compactCurrency.value.format(v),
    delta: 0.124,
  },
  {
    label: t.kpiOrders,
    value: 1286,
    format: (v: number) => integer.value.format(v),
    delta: 0.082,
  },
  {
    label: t.kpiCustomers,
    value: 342,
    format: (v: number) => integer.value.format(v),
    delta: 0.031,
  },
  {
    label: t.kpiRefunds,
    value: 1840,
    format: (v: number) => compactCurrency.value.format(v),
    delta: -0.046,
  },
]);

type Status = "paid" | "processing" | "refunded" | "failed";
const statusTone: Record<Status, "success" | "info" | "neutral" | "danger"> = {
  paid: "success",
  processing: "info",
  refunded: "neutral",
  failed: "danger",
};
const statusLabel = computed<Record<Status, string>>(() => ({
  paid: t.statusPaid,
  processing: t.statusProcessing,
  refunded: t.statusRefunded,
  failed: t.statusFailed,
}));

const orders: {
  id: string;
  customer: string;
  avatar?: string;
  status: Status;
  date: string;
  amount: number;
}[] = [
  {
    id: "#3210",
    customer: "Ana Ribeiro",
    avatar: "/demo/avatar-ana-ribeiro.svg",
    status: "paid",
    date: "2026-09-25",
    amount: 1249.9,
  },
  {
    id: "#3209",
    customer: "Pedro Nunes",
    status: "processing",
    date: "2026-09-24",
    amount: 389,
  },
  {
    id: "#3208",
    customer: "Clara Mendes",
    avatar: "/demo/avatar-clara-mendes.svg",
    status: "paid",
    date: "2026-09-24",
    amount: 72.5,
  },
  {
    id: "#3207",
    customer: "Diego Martins",
    status: "refunded",
    date: "2026-09-23",
    amount: 215,
  },
  {
    id: "#3206",
    customer: "Carolina Vieira",
    avatar: "/demo/avatar-carolina-vieira.svg",
    status: "failed",
    date: "2026-09-22",
    amount: 540.3,
  },
];

const activity = computed(() => [
  {
    id: 1,
    name: "Marina Costa",
    avatar: "/demo/avatar-marina-costa.svg",
    text: t.activity1,
    when: relative.value.format(-8, "minute"),
  },
  { id: 2, name: "Pedro Nunes", text: t.activity2, when: relative.value.format(-42, "minute") },
  {
    id: 3,
    name: "Clara Mendes",
    avatar: "/demo/avatar-clara-mendes.svg",
    text: t.activity3,
    when: relative.value.format(-3, "hour"),
  },
  { id: 4, name: "Diego Martins", text: t.activity4, when: relative.value.format(-1, "day") },
]);

// Account menu
const menuOpen = ref(false);
const menuAnchor = ref<HTMLElement | null>(null);
const accountItems = computed<MsMenuItem[]>(() => [
  { label: t.menuProfile, value: "profile" },
  { label: t.menuBilling, value: "billing" },
  { label: t.menuTeam, value: "team" },
  { label: t.menuSignOut, value: "sign-out", tone: "danger", divider: true },
]);

function onMenuDismiss(reason: string) {
  menuOpen.value = false;
  if (reason === "escape" || reason === "select")
    menuAnchor.value?.querySelector("button")?.focus();
}
</script>

<template>
  <div class="dash" :class="{ 'dash--nav-open': navOpen }">
    <aside :id="navId" class="dash__aside">
      <div class="dash__brand">
        <span class="dash__logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3 3 8l9 5 9-5-9-5Z" />
            <path d="m3 16 9 5 9-5" />
            <path d="m3 12 9 5 9-5" />
          </svg>
        </span>
        {{ t.brand }}
      </div>
      <MsSidebarMenu v-model="active" :aria-label="t.navLabel" density="compact">
        <MsSidebarMenuItem
          v-for="item in nav"
          :id="item.id"
          :key="item.id"
          :label="item.label"
          :badge="item.badge"
        >
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
              <path v-for="d in item.icon" :key="d" :d="d" />
            </svg>
          </template>
        </MsSidebarMenuItem>
      </MsSidebarMenu>
      <MsCard class="dash__upgrade" variant="flat" padding="sm">
        <strong>{{ t.upgradeTitle }}</strong>
        <p>{{ t.upgradeText }}</p>
        <MsButton size="sm" full-width>{{ t.upgradeCta }}</MsButton>
      </MsCard>
    </aside>

    <div class="dash__main">
      <header class="dash__topbar">
        <MsIconButton
          class="dash__nav-toggle"
          variant="ghost"
          tone="neutral"
          size="sm"
          :label="t.toggleNav"
          :aria-expanded="navOpen"
          :aria-controls="navId"
          @click="navOpen = !navOpen"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </MsIconButton>
        <MsSearchField
          v-model="search"
          class="dash__search"
          size="sm"
          :placeholder="t.searchPlaceholder"
        />
        <MsIconButton variant="ghost" tone="neutral" size="sm" :label="t.notifications">
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </MsIconButton>
        <div ref="menuAnchor" class="ms-dropdown">
          <MsButton
            variant="ghost"
            tone="neutral"
            size="sm"
            aria-haspopup="menu"
            :aria-label="t.accountMenu"
            :open="menuOpen"
            @click="menuOpen = !menuOpen"
          >
            <MsAvatar src="/demo/avatar-marina-costa.svg" name="Marina Costa" size="xs" />
          </MsButton>
          <MsMenu
            v-if="menuOpen"
            class="ms-menu--right"
            :items="accountItems"
            :open="menuOpen"
            :anchor="menuAnchor"
            @dismiss="onMenuDismiss"
          />
        </div>
      </header>

      <section class="dash__content" :aria-labelledby="titleId">
        <div class="dash__heading">
          <div>
            <h3 :id="titleId" class="dash__title">{{ t.title }}</h3>
            <p class="dash__muted">{{ today }}</p>
          </div>
          <MsButton variant="outline" tone="neutral" size="sm">{{ t.export }}</MsButton>
        </div>

        <ul class="dash__kpis">
          <li v-for="kpi in kpis" :key="kpi.label">
            <MsCard variant="outline" padding="md" class="dash__kpi">
              <span class="dash__muted">{{ kpi.label }}</span>
              <MsAnimatedNumber class="dash__kpi-value" :value="kpi.value" :format="kpi.format" />
              <span class="dash__kpi-trend">
                <MsBadge :tone="kpi.delta >= 0 ? 'success' : 'danger'" size="sm" pill>
                  {{ percent.format(kpi.delta) }}
                </MsBadge>
                <span class="dash__muted">{{ t.vsLastMonth }}</span>
              </span>
            </MsCard>
          </li>
        </ul>

        <div class="dash__grid">
          <MsCard variant="outline" padding="none" class="dash__panel">
            <template #header>
              <div class="dash__panel-header">
                <h4 class="dash__panel-title">{{ t.recentOrders }}</h4>
                <MsButton variant="link" size="sm">{{ t.viewAll }}</MsButton>
              </div>
            </template>
            <MsTable
              variant="flush"
              density="sm"
              hoverable
              :caption="t.recentOrders"
              class="dash__table"
            >
              <MsTableHead>
                <MsTableRow>
                  <MsTableHeaderCell class="dash__col-id">{{ t.colOrder }}</MsTableHeaderCell>
                  <MsTableHeaderCell>{{ t.colCustomer }}</MsTableHeaderCell>
                  <MsTableHeaderCell>{{ t.colStatus }}</MsTableHeaderCell>
                  <MsTableHeaderCell class="dash__col-date">{{ t.colDate }}</MsTableHeaderCell>
                  <MsTableHeaderCell align="right">{{ t.colAmount }}</MsTableHeaderCell>
                </MsTableRow>
              </MsTableHead>
              <MsTableBody>
                <MsTableRow v-for="order in orders" :key="order.id">
                  <MsTableCell class="dash__mono dash__col-id">{{ order.id }}</MsTableCell>
                  <MsTableCell>
                    <span class="dash__customer">
                      <MsAvatar
                        :src="order.avatar ?? ''"
                        tone="primary"
                        :name="order.customer"
                        size="sm"
                      />
                      <strong>{{ order.customer }}</strong>
                    </span>
                  </MsTableCell>
                  <MsTableCell>
                    <MsBadge :tone="statusTone[order.status]" size="sm">
                      {{ statusLabel[order.status] }}
                    </MsBadge>
                  </MsTableCell>
                  <MsTableCell class="dash__col-date dash__mono">
                    {{ shortDate.format(new Date(order.date)) }}
                  </MsTableCell>
                  <MsTableCell align="right" class="dash__mono">
                    {{ currency.format(order.amount) }}
                  </MsTableCell>
                </MsTableRow>
              </MsTableBody>
            </MsTable>
          </MsCard>

          <MsCard variant="outline" padding="none" class="dash__panel">
            <template #header>
              <div class="dash__panel-header">
                <h4 class="dash__panel-title">{{ t.activity }}</h4>
              </div>
            </template>
            <MsList size="sm" class="dash__activity">
              <MsListItem v-for="item in activity" :key="item.id" :description="item.when">
                <template #leading>
                  <MsAvatar :src="item.avatar ?? ''" tone="primary" :name="item.name" size="sm" />
                </template>
                <template #title>
                  <strong>{{ item.name }}</strong>
                  {{ item.text }}
                </template>
              </MsListItem>
            </MsList>
          </MsCard>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.dash {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  min-block-size: 720px;
  background: var(--ms-color-surface-default);
}

.dash__aside {
  display: flex;
  flex-direction: column;
  gap: var(--ms-space-4);
  padding: var(--ms-space-4) var(--ms-space-3);
  background: var(--ms-color-surface-subtle);
  border-inline-end: 1px solid var(--ms-color-border-subtle);
}

.dash__brand {
  display: flex;
  align-items: center;
  gap: var(--ms-space-2);
  padding-inline: var(--ms-space-2);
  font-weight: var(--ms-typography-weight-semibold);
}

.dash__logo {
  display: grid;
  place-items: center;
  inline-size: 28px;
  block-size: 28px;
  border-radius: var(--ms-radius-md);
  background: var(--ms-color-primary);
  color: var(--ms-color-primary-content);
}

.dash__logo svg {
  inline-size: 16px;
  block-size: 16px;
}

.dash__upgrade {
  margin-block-start: auto;
  font-size: var(--ms-typography-size-sm);
}

.dash__upgrade p {
  margin: var(--ms-space-1) 0 var(--ms-space-3);
  color: var(--ms-color-text-muted);
}

.dash__main {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}

.dash__topbar {
  display: flex;
  align-items: center;
  gap: var(--ms-space-2);
  padding: var(--ms-space-3) var(--ms-space-6);
  background: var(--ms-color-surface-default);
  border-block-end: 1px solid var(--ms-color-border-subtle);
}

.dash__nav-toggle {
  display: none;
}

.dash__search {
  flex: 1;
  max-inline-size: 22rem;
  margin-inline-end: auto;
}

.dash__content {
  display: grid;
  gap: var(--ms-space-6);
  padding: var(--ms-space-6);
}

.dash__heading {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--ms-space-3);
}

.dash__title {
  margin: 0;
  font-size: var(--ms-typography-size-2xl);
  font-weight: var(--ms-typography-weight-semibold);
}

.dash__muted {
  margin: 0;
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

.dash__kpis {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--ms-space-4);
  margin: 0;
  padding: 0;
  list-style: none;
}

.dash__kpi {
  block-size: 100%;
}

.dash__kpi :deep(.ms-card-content) {
  display: grid;
  gap: var(--ms-space-2);
}

.dash__kpi-value {
  font-size: var(--ms-typography-size-2xl);
  font-weight: var(--ms-typography-weight-semibold);
  font-variant-numeric: tabular-nums;
}

.dash__kpi-trend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ms-space-2);
}

.dash__grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: var(--ms-space-4);
  align-items: start;
}

.dash__panel {
  min-inline-size: 0;
}

.dash__panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-space-3);
  padding: var(--ms-space-4) var(--ms-space-4) var(--ms-space-2);
}

.dash__panel-title {
  margin: 0;
  font-size: var(--ms-typography-size-md);
  font-weight: var(--ms-typography-weight-semibold);
}

.dash__table :deep(caption) {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.dash__customer {
  display: flex;
  align-items: center;
  gap: var(--ms-space-2);
}

.dash__mono {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.dash__activity {
  padding: 0 var(--ms-space-2) var(--ms-space-2);
}

@container (width < 960px) {
  .dash {
    grid-template-columns: minmax(0, 1fr);
  }

  .dash__aside {
    display: none;
    border-inline-end: 0;
    border-block-end: 1px solid var(--ms-color-border-subtle);
  }

  .dash--nav-open .dash__aside {
    display: flex;
  }

  .dash__upgrade {
    display: none;
  }

  .dash__nav-toggle {
    display: inline-flex;
  }

  .dash__kpis {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .dash__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@container (width < 640px) {
  .dash {
    min-block-size: 0;
  }

  .dash__topbar,
  .dash__content {
    padding-inline: var(--ms-space-4);
  }

  .dash__content {
    padding-block: var(--ms-space-4);
  }

  .dash__kpis {
    gap: var(--ms-space-3);
  }

  .dash__kpi-value {
    font-size: var(--ms-typography-size-xl);
  }

  .dash__col-id,
  .dash__col-date {
    display: none;
  }
}
</style>
