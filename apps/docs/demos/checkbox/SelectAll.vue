<script setup lang="ts">
import { computed, reactive } from "vue";
import { MsCheckbox } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const permissions = reactive({ read: true, write: true, delete: false });

const checkedCount = computed(() => Object.values(permissions).filter(Boolean).length);
const allChecked = computed(() => checkedCount.value === 3);
const someChecked = computed(() => checkedCount.value > 0 && !allChecked.value);

function toggleAll(checked: boolean): void {
  permissions.read = checked;
  permissions.write = checked;
  permissions.delete = checked;
}
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 320px">
    <MsCheckbox
      :model-value="allChecked"
      :indeterminate="someChecked"
      :label="t.allPermissions"
      @update:model-value="toggleAll"
    />
    <div style="display: grid; gap: 10px; padding-inline-start: 28px">
      <MsCheckbox v-model="permissions.read" :label="t.read" />
      <MsCheckbox v-model="permissions.write" :label="t.write" />
      <MsCheckbox v-model="permissions.delete" :label="t.delete" tone="danger" />
    </div>
  </div>
</template>
