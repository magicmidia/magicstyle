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
const activeIndex = ref(0);

function onSelect(item: MsMenuItem): void {
  if (item.disabled === true) return;
  emit("select", item);
}

function onKeydown(event: KeyboardEvent): void {
  const enabled = props.items.filter((i) => i.disabled !== true);
  if (event.key === "ArrowDown") {
    event.preventDefault();
    activeIndex.value = (activeIndex.value + 1) % Math.max(enabled.length, 1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    activeIndex.value =
      (activeIndex.value - 1 + Math.max(enabled.length, 1)) % Math.max(enabled.length, 1);
  } else if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const item = enabled[activeIndex.value];
    if (item !== undefined) onSelect(item);
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
    if (open) activeIndex.value = 0;
  },
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
    <div
      v-for="(item, index) in props.items"
      :key="index"
      class="ms-menu-item"
      role="menuitem"
      :data-disabled="item.disabled || undefined"
      :data-active="index === activeIndex || undefined"
      @click="onSelect(item)"
    >
      {{ item.label }}
      <span v-if="item.suffix" class="ms-button-suffix">{{ item.suffix }}</span>
    </div>
  </div>
</template>
