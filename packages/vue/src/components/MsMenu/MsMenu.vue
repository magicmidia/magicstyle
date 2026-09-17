<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { MsMenuItem } from "./types.ts";

const props = withDefaults(
  defineProps<{
    items: readonly MsMenuItem[];
    open?: boolean;
  }>(),
  { open: false },
);

const emit = defineEmits<{
  select: [item: MsMenuItem];
  "update:open": [open: boolean];
}>();

const root = ref<HTMLElement | null>(null);

function getFirstEnabledIndex(): number {
  const first = props.items.findIndex((i) => i.disabled !== true);
  return first >= 0 ? first : 0;
}

const activeIndex = ref(getFirstEnabledIndex());

function onSelect(item: MsMenuItem): void {
  if (item.disabled === true) return;
  emit("select", item);
}

function onKeydown(event: KeyboardEvent): void {
  const enabled = props.items.filter((i) => i.disabled !== true);
  if (enabled.length === 0) return;
  if (event.key === "ArrowDown") {
    event.preventDefault();
    const currentEnabledIndex = enabled.findIndex(
      (item) => props.items.indexOf(item) === activeIndex.value,
    );
    const nextEnabledIndex = (currentEnabledIndex + 1) % enabled.length;
    activeIndex.value = props.items.indexOf(enabled[nextEnabledIndex]!);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    const currentEnabledIndex = enabled.findIndex(
      (item) => props.items.indexOf(item) === activeIndex.value,
    );
    const prevEnabledIndex = (currentEnabledIndex - 1 + enabled.length) % enabled.length;
    activeIndex.value = props.items.indexOf(enabled[prevEnabledIndex]!);
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const item = props.items[activeIndex.value];
    if (item !== undefined && item.disabled !== true) onSelect(item);
  } else if (event.key === "Escape") {
    emit("update:open", false);
  }
}

function onOutsideClick(event: MouseEvent): void {
  if (root.value !== null && !root.value.contains(event.target as Node)) {
    emit("update:open", false);
  }
}

function onOutsideKeydown(event: KeyboardEvent): void {
  if (event.key === "Tab") emit("update:open", false);
}

watch(
  () => props.open,
  (open) => {
    if (open) {
      activeIndex.value = getFirstEnabledIndex();
    }
  },
  { immediate: true },
);

onMounted(() => {
  document.addEventListener("click", onOutsideClick, true);
  document.addEventListener("keydown", onOutsideKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onOutsideClick, true);
  document.removeEventListener("keydown", onOutsideKeydown);
});
</script>

<template>
  <div ref="root" class="ms-menu" role="menu" tabindex="-1" @keydown="onKeydown">
    <template v-for="(item, index) in props.items" :key="index">
      <div v-if="item.divider" class="ms-menu-divider" role="separator" />
      <div
        class="ms-menu-item"
        role="menuitem"
        :data-disabled="item.disabled || undefined"
        :data-active="index === activeIndex || undefined"
        :data-tone="item.tone || undefined"
        @click="onSelect(item)"
      >
        <span v-if="item.prefix" class="ms-menu-item__prefix" aria-hidden="true">{{
          item.prefix
        }}</span>
        <span class="ms-menu-item__label">{{ item.label }}</span>
        <span v-if="item.suffix" class="ms-button-suffix">{{ item.suffix }}</span>
      </div>
    </template>
  </div>
</template>
