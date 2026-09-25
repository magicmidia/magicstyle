<script setup lang="ts">
import { computed, ref } from "vue";
import { MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const filters = computed(() => [
  { id: "open", label: t.filterOpen },
  { id: "mine", label: t.filterMine },
  { id: "urgent", label: t.filterUrgent },
  { id: "archived", label: t.filterArchived },
]);

const active = ref<string[]>(["open"]);

function toggle(id: string) {
  active.value = active.value.includes(id)
    ? active.value.filter((item) => item !== id)
    : [...active.value, id];
}
</script>

<template>
  <div role="group" :aria-label="t.filtersLabel" style="display: flex; flex-wrap: wrap; gap: 8px">
    <MsTag
      v-for="filter in filters"
      :key="filter.id"
      clickable
      shape="pill"
      :variant="active.includes(filter.id) ? 'solid' : 'outline'"
      :tone="active.includes(filter.id) ? 'primary' : 'neutral'"
      :aria-pressed="active.includes(filter.id)"
      @click="toggle(filter.id)"
    >
      {{ filter.label }}
    </MsTag>
  </div>
</template>
