<script setup lang="ts">
import { nextTick, ref } from "vue";
import MsButton from "../MsButton/MsButton.vue";
import MsMenu, { type MsMenuDismissReason } from "../MsMenu/MsMenu.vue";
import type { MsMenuItem } from "../MsMenu/types.ts";
import type { MsDropdownButtonProps } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";

const props = withDefaults(defineProps<MsDropdownButtonProps>(), {
  variant: "solid",
  tone: "primary",
  size: "md",
  align: "left",
  fullWidth: false,
});

const emit = defineEmits<{
  select: [item: MsMenuItem];
}>();

const open = ref(false);
const initialFocus = ref<"first" | "last">("first");
const wrapperRef = ref<HTMLElement | null>(null);
const menuId = useMsId("ms-dropdown-menu");

function focusTrigger(): void {
  void nextTick(() => wrapperRef.value?.querySelector<HTMLElement>("button")?.focus());
}

function toggle(): void {
  initialFocus.value = "first";
  open.value = !open.value;
}

/** APG menu button: ArrowDown/ArrowUp open the menu and focus the first/last item. */
function onTriggerKeydown(event: KeyboardEvent): void {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
  event.preventDefault();
  initialFocus.value = event.key === "ArrowDown" ? "first" : "last";
  open.value = true;
}

function onSelect(item: MsMenuItem): void {
  open.value = false;
  emit("select", item);
}

function onDismiss(reason: MsMenuDismissReason): void {
  open.value = false;
  if (reason === "escape" || reason === "select") focusTrigger();
}
</script>

<template>
  <div ref="wrapperRef" class="ms-dropdown">
    <MsButton
      :variant="props.variant"
      :tone="props.tone"
      :size="props.size"
      :pill="props.pill"
      :full-width="props.fullWidth"
      :caret="true"
      :open="open"
      aria-haspopup="menu"
      :aria-controls="open ? menuId : undefined"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      {{ props.label }}
    </MsButton>
    <MsMenu
      v-if="open"
      :id="menuId"
      :items="props.items"
      :open="open"
      :anchor="wrapperRef"
      :initial-focus="initialFocus"
      :class="{ 'ms-menu--right': props.align === 'right' }"
      @select="onSelect"
      @dismiss="onDismiss"
    />
  </div>
</template>
