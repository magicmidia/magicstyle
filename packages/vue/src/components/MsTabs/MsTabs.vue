<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import {
  TABS_CONTEXT_KEY,
  type MsTabsActivationMode,
  type MsTabsContext,
  type MsTabsEmits,
  type MsTabsOrientation,
  type MsTabsProps,
  type MsTabsSize,
  type MsTabsVariant,
  type TabRegistryItem,
} from "./types.ts";

defineOptions({
  name: "MsTabs",
});

const props = withDefaults(defineProps<MsTabsProps>(), {
  variant: "pill",
  size: "md",
  orientation: "horizontal",
  fitted: false,
  activationMode: "automatic",
  scrollable: true,
  showArrows: true,
});

const emit = defineEmits<MsTabsEmits>();

const baseId = useMsId("tabs");
const isControlled = computed(() => props.modelValue !== undefined);
const internalActiveTab = ref<string | number | undefined>(
  props.modelValue !== undefined ? props.modelValue : props.defaultValue,
);

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined) {
      internalActiveTab.value = val;
    }
  },
);

const registeredTabs = ref<TabRegistryItem[]>([]);

function registerTab(item: TabRegistryItem) {
  const existing = registeredTabs.value.find((t) => t.value === item.value);
  if (!existing) {
    registeredTabs.value.push(item);
    // If no active tab set yet and this tab is enabled, activate it
    if (internalActiveTab.value === undefined && !item.disabled) {
      setActiveTab(item.value);
    }
  }
}

function unregisterTab(value: string | number) {
  registeredTabs.value = registeredTabs.value.filter((t) => t.value !== value);
}

const registeredPanels = ref(new Map<string | number, { lazy: boolean }>());

function registerPanel(value: string | number, lazy: boolean) {
  registeredPanels.value.set(value, { lazy });
}

function unregisterPanel(value: string | number) {
  registeredPanels.value.delete(value);
}

function hasPanel(value: string | number): boolean {
  const panel = registeredPanels.value.get(value);
  if (!panel) return false;
  return !panel.lazy || internalActiveTab.value === value;
}

function updateTabElement(value: string | number, el: HTMLElement | null, disabled: boolean) {
  const item = registeredTabs.value.find((t) => t.value === value);
  if (item) {
    item.element = el;
    item.disabled = disabled;
  }
}

function setActiveTab(value: string | number) {
  if (!isControlled.value) {
    internalActiveTab.value = value;
  }
  emit("update:modelValue", value);
  emit("change", value);
}

function getTabId(value: string | number): string {
  return `${baseId}-tab-${String(value)}`;
}

function getPanelId(value: string | number): string {
  return `${baseId}-panel-${String(value)}`;
}

function getEnabledTabs(): TabRegistryItem[] {
  return registeredTabs.value.filter((t) => !t.disabled);
}

function onKeyDown(event: KeyboardEvent, currentValue: string | number) {
  const enabled = getEnabledTabs();
  if (enabled.length === 0) return;

  const currentIndex = enabled.findIndex((t) => t.value === currentValue);
  let nextTab: TabRegistryItem | undefined;

  const isHorizontal = props.orientation === "horizontal";
  const isVertical = props.orientation === "vertical";

  const isNext =
    (isHorizontal && event.key === "ArrowRight") || (isVertical && event.key === "ArrowDown");
  const isPrev =
    (isHorizontal && event.key === "ArrowLeft") || (isVertical && event.key === "ArrowUp");

  if (isNext) {
    event.preventDefault();
    const nextIdx = (currentIndex + 1) % enabled.length;
    nextTab = enabled[nextIdx];
  } else if (isPrev) {
    event.preventDefault();
    const prevIdx = (currentIndex - 1 + enabled.length) % enabled.length;
    nextTab = enabled[prevIdx];
  } else if (event.key === "Home") {
    event.preventDefault();
    nextTab = enabled[0];
  } else if (event.key === "End") {
    event.preventDefault();
    nextTab = enabled[enabled.length - 1];
  }

  if (nextTab) {
    nextTab.element?.focus();
    if (props.activationMode === "automatic") {
      setActiveTab(nextTab.value);
    }
  }
}

const variantComputed = computed<MsTabsVariant>(() => props.variant);
const sizeComputed = computed<MsTabsSize>(() => props.size);
const orientationComputed = computed<MsTabsOrientation>(() => props.orientation);
const activationModeComputed = computed<MsTabsActivationMode>(() => props.activationMode);
const fittedComputed = computed<boolean>(() => props.fitted);
const scrollableComputed = computed<boolean>(() => props.scrollable ?? true);
const showArrowsComputed = computed<boolean>(() => props.showArrows ?? true);

const context: MsTabsContext = {
  activeTab: internalActiveTab,
  setActiveTab,
  variant: variantComputed,
  size: sizeComputed,
  orientation: orientationComputed,
  activationMode: activationModeComputed,
  fitted: fittedComputed,
  scrollable: scrollableComputed,
  showArrows: showArrowsComputed,
  getTabId,
  getPanelId,
  registerTab,
  unregisterTab,
  updateTabElement,
  registerPanel,
  unregisterPanel,
  hasPanel,
  onKeyDown,
};

provide(TABS_CONTEXT_KEY, context);

const classes = computed(() => {
  return [
    "ms-tabs",
    `ms-tabs--${props.variant}`,
    `ms-tabs--${props.size}`,
    `ms-tabs--${props.orientation}`,
    {
      "ms-tabs--fitted": props.fitted,
    },
  ];
});
</script>
