<script setup lang="ts">
import { ref } from "vue";
import { MsSidebarMenu, MsSidebarMenuGroup, MsSidebarMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const active = ref("inbox");
</script>

<template>
  <div class="ms-u-p-3 ms-u-rounded-lg ms-u-border ms-u-bg-raised" style="width: 260px">
    <MsSidebarMenu v-model="active">
      <MsSidebarMenuGroup :title="t.mail">
        <MsSidebarMenuItem id="inbox" :label="t.inbox" :badge="24">
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
              <path d="M22 12h-6l-2 3h-4l-2-3H2" />
              <path
                d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              />
            </svg>
          </template>
        </MsSidebarMenuItem>
        <MsSidebarMenuItem id="sent" :label="t.sent">
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
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </template>
        </MsSidebarMenuItem>
        <MsSidebarMenuItem id="drafts" :label="t.drafts" :badge="2" badge-tone="neutral">
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
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </template>
        </MsSidebarMenuItem>
        <MsSidebarMenuItem id="trash" :label="t.trash">
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
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </template>
        </MsSidebarMenuItem>
      </MsSidebarMenuGroup>
      <MsSidebarMenuGroup :title="t.labels">
        <MsSidebarMenuItem id="clients" :label="t.clients" />
        <MsSidebarMenuItem id="invoices" :label="t.invoices" />
      </MsSidebarMenuGroup>
    </MsSidebarMenu>
  </div>
</template>
