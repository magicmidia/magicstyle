<template>
  <template v-if="lazy">
    <div
      v-if="isSelected"
      :id="panelId"
      role="tabpanel"
      :aria-labelledby="tabId"
      tabindex="0"
      :class="classes"
    >
      <slot />
    </div>
  </template>
  <template v-else>
    <div
      v-show="isSelected"
      :id="panelId"
      role="tabpanel"
      :aria-labelledby="tabId"
      tabindex="0"
      :class="classes"
    >
      <slot />
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { TABS_CONTEXT_KEY, type MsTabPanelProps } from "./types.ts";

defineOptions({
  name: "MsTabPanel",
});

const props = withDefaults(defineProps<MsTabPanelProps>(), {
  lazy: false,
});

const context = inject(TABS_CONTEXT_KEY, undefined);

const isSelected = computed(() => {
  return context?.activeTab.value === props.value;
});

const tabId = computed(() => {
  return context ? context.getTabId(props.value) : undefined;
});

const panelId = computed(() => {
  return context ? context.getPanelId(props.value) : undefined;
});

const classes = computed(() => {
  return [
    "ms-tab-panel",
    {
      "ms-tab-panel--active": isSelected.value,
    },
  ];
});
</script>
