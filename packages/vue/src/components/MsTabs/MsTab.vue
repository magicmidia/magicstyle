<template>
  <button
    :id="tabId"
    ref="buttonRef"
    type="button"
    role="tab"
    :aria-selected="isSelected"
    :aria-controls="panelId"
    :tabindex="isSelected ? 0 : -1"
    :disabled="disabled"
    :class="classes"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch } from "vue";
import { TABS_CONTEXT_KEY, type MsTabProps } from "./types.ts";

defineOptions({
  name: "MsTab",
});

const props = withDefaults(defineProps<MsTabProps>(), {
  disabled: false,
});

const context = inject(TABS_CONTEXT_KEY, undefined);
const buttonRef = ref<HTMLButtonElement | null>(null);

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
    "ms-tab",
    context ? `ms-tab--${context.variant.value}` : "",
    context ? `ms-tab--${context.size.value}` : "",
    {
      "ms-tab--selected": isSelected.value,
      "ms-tab--disabled": props.disabled,
    },
  ];
});

onMounted(() => {
  if (context) {
    context.registerTab({
      value: props.value,
      disabled: props.disabled,
      element: buttonRef.value,
    });
  }
});

watch(
  () => [props.disabled, buttonRef.value],
  () => {
    if (context) {
      context.updateTabElement(props.value, buttonRef.value, props.disabled);
    }
  },
);

onUnmounted(() => {
  if (context) {
    context.unregisterTab(props.value);
  }
});

function handleClick() {
  if (props.disabled) return;
  context?.setActiveTab(props.value);
}

function handleKeyDown(event: KeyboardEvent) {
  if (!context) return;

  if (props.disabled) return;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    context.setActiveTab(props.value);
  } else {
    context.onKeyDown(event, props.value);
  }
}
</script>
