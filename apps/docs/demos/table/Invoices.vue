<script setup lang="ts">
import { computed, ref } from "vue";
import {
  MsBadge,
  MsTable,
  MsTableBody,
  MsTableCell,
  MsTableFooter,
  MsTableHead,
  MsTableHeaderCell,
  MsTableRow,
  type MsBadgeProps,
  type MsTableSortDirection,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

type Status = "paid" | "pending" | "overdue";
type SortKey = "dueDate" | "amount";

const invoices: {
  id: string;
  customer: string;
  status: Status;
  dueDate: string;
  amount: number;
}[] = [
  {
    id: "INV-2041",
    customer: "Padaria Bom Grão",
    status: "paid",
    dueDate: "2026-09-05",
    amount: 1250,
  },
  {
    id: "INV-2042",
    customer: "Studio Onda",
    status: "pending",
    dueDate: "2026-09-28",
    amount: 3890.5,
  },
  {
    id: "INV-2043",
    customer: "Clínica Vida Plena",
    status: "overdue",
    dueDate: "2026-08-30",
    amount: 780,
  },
  {
    id: "INV-2044",
    customer: "Rota Logística",
    status: "paid",
    dueDate: "2026-09-12",
    amount: 12400,
  },
  {
    id: "INV-2045",
    customer: "Café Aurora",
    status: "pending",
    dueDate: "2026-10-03",
    amount: 460.9,
  },
];

const sortKey = ref<SortKey>("dueDate");
const sortDirection = ref<MsTableSortDirection>("asc");

function sortBy(key: SortKey) {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortDirection.value = "asc";
  }
}

const direction = (key: SortKey): MsTableSortDirection =>
  sortKey.value === key ? sortDirection.value : "none";

const rows = computed(() => {
  const factor = sortDirection.value === "asc" ? 1 : -1;
  return [...invoices].sort((a, b) =>
    sortKey.value === "amount"
      ? (a.amount - b.amount) * factor
      : a.dueDate.localeCompare(b.dueDate) * factor,
  );
});

const total = computed(() => invoices.reduce((sum, invoice) => sum + invoice.amount, 0));

const currency = computed(
  () => new Intl.NumberFormat(t.locale, { style: "currency", currency: t.currency }),
);
const date = computed(
  () => new Intl.DateTimeFormat(t.locale, { dateStyle: "medium", timeZone: "UTC" }),
);

const statusMeta = computed<
  Record<Status, { label: string; tone: NonNullable<MsBadgeProps["tone"]> }>
>(() => ({
  paid: { label: t.paid, tone: "success" },
  pending: { label: t.pending, tone: "warning" },
  overdue: { label: t.overdue, tone: "danger" },
}));
</script>

<template>
  <MsTable :caption="t.invoicesCaption" variant="surface">
    <MsTableHead>
      <MsTableRow>
        <MsTableHeaderCell width="120px">{{ t.invoice }}</MsTableHeaderCell>
        <MsTableHeaderCell>{{ t.customer }}</MsTableHeaderCell>
        <MsTableHeaderCell>{{ t.status }}</MsTableHeaderCell>
        <MsTableHeaderCell
          sortable
          :sort-direction="direction('dueDate')"
          @click="sortBy('dueDate')"
        >
          {{ t.dueDate }}
        </MsTableHeaderCell>
        <MsTableHeaderCell
          align="right"
          sortable
          :sort-direction="direction('amount')"
          @click="sortBy('amount')"
        >
          {{ t.amount }}
        </MsTableHeaderCell>
      </MsTableRow>
    </MsTableHead>
    <MsTableBody>
      <MsTableRow v-for="invoice in rows" :key="invoice.id">
        <MsTableCell
          ><strong>{{ invoice.id }}</strong></MsTableCell
        >
        <MsTableCell>{{ invoice.customer }}</MsTableCell>
        <MsTableCell>
          <MsBadge variant="soft" :tone="statusMeta[invoice.status].tone" dot pill>
            {{ statusMeta[invoice.status].label }}
          </MsBadge>
        </MsTableCell>
        <MsTableCell>{{ date.format(new Date(invoice.dueDate)) }}</MsTableCell>
        <MsTableCell align="right" class="ms-text-numeric">
          {{ currency.format(invoice.amount) }}
        </MsTableCell>
      </MsTableRow>
    </MsTableBody>
    <MsTableFooter>
      <MsTableRow>
        <MsTableCell colspan="4"
          ><strong>{{ t.total }}</strong></MsTableCell
        >
        <MsTableCell align="right" class="ms-text-numeric">
          <strong>{{ currency.format(total) }}</strong>
        </MsTableCell>
      </MsTableRow>
    </MsTableFooter>
  </MsTable>
</template>
