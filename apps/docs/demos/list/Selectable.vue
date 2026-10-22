<script setup lang="ts">
import { computed, ref } from "vue";
import { MsList, MsListItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const shipping = ref("standard");
const options = computed(() => [
  { value: "standard", title: t.standard, description: t.standardDesc, price: t.standardPrice },
  { value: "express", title: t.express, description: t.expressDesc, price: t.expressPrice },
  { value: "pickup", title: t.pickup, description: t.pickupDesc, price: t.pickupPrice },
]);
</script>

<template>
  <div style="width: 100%; max-width: 380px">
    <MsList selectable variant="bordered" :aria-label="t.shippingLabel">
      <MsListItem
        v-for="option in options"
        :key="option.value"
        :title="option.title"
        :description="option.description"
        :active="shipping === option.value"
        @click="shipping = option.value"
      >
        <template #trailing>
          <span class="ms-u-font-semibold">{{ option.price }}</span>
        </template>
      </MsListItem>
      <MsListItem :title="t.drone" :description="t.droneDesc" disabled />
    </MsList>
  </div>
</template>
