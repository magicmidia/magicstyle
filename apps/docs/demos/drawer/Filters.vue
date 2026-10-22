<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { MsButton, MsCheckbox, MsDrawer, MsField, MsNativeSelect } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const filters = reactive({ status: "open", assignedToMe: true, highPriority: false });

const statusOptions = computed(() => [
  { label: t.statusOpen, value: "open" },
  { label: t.statusInProgress, value: "in-progress" },
  { label: t.statusDone, value: "done" },
]);

function reset() {
  Object.assign(filters, { status: "open", assignedToMe: false, highPriority: false });
}
</script>

<template>
  <MsButton variant="outline" tone="neutral" @click="open = true">{{ t.filters }}</MsButton>
  <MsDrawer
    v-model:open="open"
    placement="left"
    size="sm"
    :title="t.filters"
    :description="t.filtersDescription"
  >
    <div style="display: grid; gap: 16px">
      <MsField :label="t.status">
        <MsNativeSelect v-model="filters.status" :options="statusOptions" />
      </MsField>
      <MsCheckbox v-model="filters.assignedToMe" :label="t.assignedToMe" />
      <MsCheckbox v-model="filters.highPriority" :label="t.highPriority" />
    </div>
    <template #footer>
      <MsButton variant="ghost" tone="neutral" @click="reset">{{ t.clear }}</MsButton>
      <MsButton @click="open = false">{{ t.apply }}</MsButton>
    </template>
  </MsDrawer>
</template>
