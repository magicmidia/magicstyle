<script setup lang="ts">
import { computed, ref } from "vue";
import {
  MsSegmentedControl,
  MsTable,
  MsTableBody,
  MsTableCell,
  MsTableHead,
  MsTableHeaderCell,
  MsTableRow,
  type MsTableDensity,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const density = ref<MsTableDensity>("sm");

const regions = [
  { name: "São Paulo", orders: 1284, growth: 0.124 },
  { name: "Rio de Janeiro", orders: 842, growth: 0.081 },
  { name: "Belo Horizonte", orders: 511, growth: 0.037 },
  { name: "Curitiba", orders: 397, growth: -0.012 },
];

const integer = computed(() => new Intl.NumberFormat(t.locale));
const percent = computed(
  () =>
    new Intl.NumberFormat(t.locale, {
      style: "percent",
      maximumFractionDigits: 1,
      signDisplay: "exceptZero",
    }),
);
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%">
    <MsSegmentedControl
      v-model="density"
      :options="[
        { label: 'xs', value: 'xs' },
        { label: 'sm', value: 'sm' },
        { label: 'md', value: 'md' },
        { label: 'lg', value: 'lg' },
      ]"
      :aria-label="t.density"
      size="sm"
    />
    <MsTable :density="density" bordered :hoverable="false">
      <MsTableHead>
        <MsTableRow>
          <MsTableHeaderCell>{{ t.region }}</MsTableHeaderCell>
          <MsTableHeaderCell align="right">{{ t.orders }}</MsTableHeaderCell>
          <MsTableHeaderCell align="right">{{ t.growth }}</MsTableHeaderCell>
        </MsTableRow>
      </MsTableHead>
      <MsTableBody>
        <MsTableRow v-for="region in regions" :key="region.name">
          <MsTableCell>{{ region.name }}</MsTableCell>
          <MsTableCell align="right" class="ms-text-numeric">{{
            integer.format(region.orders)
          }}</MsTableCell>
          <MsTableCell align="right" class="ms-text-numeric">{{
            percent.format(region.growth)
          }}</MsTableCell>
        </MsTableRow>
      </MsTableBody>
    </MsTable>
  </div>
</template>
