<script setup lang="ts">
import { computed, ref } from "vue";
import {
  MsAvatar,
  MsBadge,
  MsCheckbox,
  MsTable,
  MsTableBody,
  MsTableCell,
  MsTableHead,
  MsTableHeaderCell,
  MsTableRow,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const users = computed(() => [
  { email: "ana.ribeiro@acme.com", name: "Ana Ribeiro", role: t.roleAdmin, active: true },
  { email: "bruno.tavares@acme.com", name: "Bruno Tavares", role: t.roleEditor, active: true },
  { email: "clara.mendes@acme.com", name: "Clara Mendes", role: t.roleViewer, active: false },
  { email: "diego.martins@acme.com", name: "Diego Martins", role: t.roleEditor, active: true },
]);

const selected = ref<string[]>(["bruno.tavares@acme.com"]);

function toggle(email: string, checked: boolean) {
  selected.value = checked
    ? [...selected.value, email]
    : selected.value.filter((item) => item !== email);
}
</script>

<template>
  <MsTable striped>
    <MsTableHead>
      <MsTableRow>
        <MsTableHeaderCell width="48px">
          <span class="ms-visually-hidden">{{ t.select }}</span>
        </MsTableHeaderCell>
        <MsTableHeaderCell>{{ t.user }}</MsTableHeaderCell>
        <MsTableHeaderCell>{{ t.role }}</MsTableHeaderCell>
        <MsTableHeaderCell>{{ t.status }}</MsTableHeaderCell>
      </MsTableRow>
    </MsTableHead>
    <MsTableBody>
      <MsTableRow v-for="user in users" :key="user.email" :selected="selected.includes(user.email)">
        <MsTableCell>
          <MsCheckbox
            :model-value="selected.includes(user.email)"
            :aria-label="user.name"
            @update:model-value="toggle(user.email, $event)"
          />
        </MsTableCell>
        <MsTableCell>
          <div style="display: flex; align-items: center; gap: 12px">
            <MsAvatar :name="user.name" size="sm" />
            <div style="display: grid">
              <strong>{{ user.name }}</strong>
              <small style="opacity: 0.7">{{ user.email }}</small>
            </div>
          </div>
        </MsTableCell>
        <MsTableCell>{{ user.role }}</MsTableCell>
        <MsTableCell>
          <MsBadge v-if="user.active" variant="soft" tone="success" pill>{{ t.active }}</MsBadge>
          <MsBadge v-else variant="outline" tone="neutral" pill>{{ t.inactive }}</MsBadge>
        </MsTableCell>
      </MsTableRow>
    </MsTableBody>
  </MsTable>
</template>
