<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { MsField, MsNativeSelect, MsPagination } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const customers = [
  "Ana Ribeiro",
  "Bruno Lima",
  "Carla Mendes",
  "Diego Alves",
  "Elisa Rocha",
  "Felipe Souza",
  "Gabriela Nunes",
  "Heitor Prado",
];
const invoices = Array.from({ length: 57 }, (_, i) => ({
  id: `INV-${String(1042 + i).padStart(5, "0")}`,
  customer: customers[i % customers.length],
  amount: ((i * 137) % 900) + 49.9,
}));

const page = ref(1);
const pageSize = ref(5);
watch(pageSize, () => (page.value = 1));

const rows = computed(() =>
  invoices.slice((page.value - 1) * pageSize.value, page.value * pageSize.value),
);
const sizeOptions = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
];
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 560px">
    <ul style="list-style: none; margin: 0; padding: 0; display: grid; gap: 8px">
      <li
        v-for="row in rows"
        :key="row.id"
        class="ms-u-flex ms-u-justify-between ms-u-p-3 ms-u-rounded-md ms-u-border"
      >
        <span class="ms-u-font-mono">{{ row.id }}</span>
        <span>{{ row.customer }}</span>
        <span class="ms-text-numeric">{{ row.amount.toFixed(2) }}</span>
      </li>
    </ul>
    <div class="ms-u-flex ms-u-flex-wrap ms-u-items-center ms-u-justify-between ms-u-gap-3">
      <MsField :label="t.perPage" orientation="horizontal" size="sm">
        <MsNativeSelect v-model="pageSize" :options="sizeOptions" size="sm" />
      </MsField>
      <MsPagination
        v-model:current-page="page"
        :total="invoices.length"
        :page-size="pageSize"
        size="sm"
        :show-edges="false"
      />
    </div>
  </div>
</template>
