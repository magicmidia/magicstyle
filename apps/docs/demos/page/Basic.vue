<script setup lang="ts">
import { computed } from "vue";
import { MsAvatar, MsButton, MsCard, MsPage, MsPageHeader, MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const customers = computed(() => [
  { name: t.c1Name, email: t.c1Email, plan: t.planPro, active: true },
  { name: t.c2Name, email: t.c2Email, plan: t.planTeam, active: true },
  { name: t.c3Name, email: t.c3Email, plan: t.planFree, active: false },
]);
</script>

<template>
  <MsPage compact>
    <MsPageHeader :title="t.customers" :description="t.customersDesc">
      <template #actions>
        <MsButton variant="outline" tone="neutral">{{ t.export }}</MsButton>
        <MsButton>{{ t.newCustomer }}</MsButton>
      </template>
    </MsPageHeader>
    <MsCard variant="outline" padding="none">
      <ul style="list-style: none; margin: 0; padding: 0">
        <li
          v-for="c in customers"
          :key="c.email"
          class="ms-u-flex ms-u-items-center ms-u-gap-3 ms-u-p-3"
          style="border-bottom: 1px solid var(--ms-color-border-subtle)"
        >
          <MsAvatar size="sm" :name="c.name" />
          <div style="flex: 1; min-width: 0">
            <div class="ms-u-font-medium">{{ c.name }}</div>
            <div class="ms-u-text-muted ms-truncate">{{ c.email }}</div>
          </div>
          <MsTag size="sm" :tone="c.active ? 'success' : 'neutral'">{{ c.plan }}</MsTag>
        </li>
      </ul>
    </MsCard>
  </MsPage>
</template>
