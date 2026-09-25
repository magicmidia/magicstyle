<script setup lang="ts">
import { computed, ref } from "vue";
import { MsSidebarMenu, type MsSidebarMenuItemData } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<MsSidebarMenuItemData[]>(() => [
  { id: "dashboard", label: t.dashboard },
  { id: "orders", label: t.orders },
  { id: "products", label: t.products },
]);
const pill = ref("orders");
const square = ref("orders");
const spacious = ref("orders");
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center">
    <div class="ms-u-p-3 ms-u-rounded-lg ms-u-border ms-u-bg-raised" style="width: 200px">
      <MsSidebarMenu v-model="pill" :items="items" shape="pill" tone="accent" density="compact" />
    </div>
    <div class="ms-u-p-3 ms-u-rounded-lg ms-u-border ms-u-bg-raised" style="width: 200px">
      <MsSidebarMenu v-model="square" :items="items" shape="square" tone="neutral" />
    </div>
    <div class="ms-u-p-3 ms-u-rounded-lg ms-u-border ms-u-bg-raised" style="width: 200px">
      <MsSidebarMenu v-model="spacious" :items="items" tone="success" density="spacious" />
    </div>
  </div>
</template>
