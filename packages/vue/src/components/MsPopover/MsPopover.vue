<script setup lang="ts">
import { ref, computed, watch, watchPostEffect, onBeforeUnmount } from "vue";
import type { MsPopoverProps, MsPopoverEmits } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";

const props = withDefaults(defineProps<MsPopoverProps>(), {
  // Explicit undefined keeps Vue from casting an absent boolean prop to false (uncontrolled mode).
  open: undefined,
  placement: "bottom",
  trigger: "click",
  width: "auto",
  disabled: false,
  closeOnClickOutside: true,
  closeOnEscape: true,
});

const emit = defineEmits<MsPopoverEmits>();

defineSlots<{
  default?(): unknown;
  trigger?(props: { isOpen: boolean; toggle: () => void }): unknown;
  title?(): unknown;
  footer?(): unknown;
}>();

const rootRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const internalOpen = ref(false);

/** Controlled only when the parent passes `open`; listening to update:open alone stays uncontrolled. */
const isControlled = computed(() => props.open !== undefined);
const isOpen = computed(() => (isControlled.value ? Boolean(props.open) : internalOpen.value));

const titleId = useMsId("ms-popover-title");
const panelId = useMsId("ms-popover-panel");

const setOpen = (value: boolean) => {
  if (props.disabled || value === isOpen.value) return;
  internalOpen.value = value;
  emit("update:open", value);
  if (value) {
    emit("open");
  } else {
    emit("close");
  }
};

/*
 * The wrapper toggles on click, and the slot also receives `toggle`. When a
 * slotted button calls toggle() itself, skip the wrapper's toggle for that
 * same click so the two do not cancel out.
 */
let toggledBySlot = false;
const toggle = () => {
  toggledBySlot = true;
  setTimeout(() => (toggledBySlot = false), 0);
  setOpen(!isOpen.value);
};

const onTriggerClick = () => {
  if (props.trigger !== "click") return;
  if (toggledBySlot) {
    toggledBySlot = false;
    return;
  }
  setOpen(!isOpen.value);
};

let hoverTimer: ReturnType<typeof setTimeout> | null = null;

const handleMouseEnter = () => {
  if (props.trigger !== "hover" || props.disabled) return;
  if (hoverTimer) clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => setOpen(true), 120);
};

const handleMouseLeave = () => {
  if (props.trigger !== "hover" || props.disabled) return;
  if (hoverTimer) clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => setOpen(false), 200);
};

/** The focusable element rendered in the trigger slot (falls back to the wrapper). */
const triggerElement = (): HTMLElement | null =>
  triggerRef.value?.querySelector<HTMLElement>(
    "button, a[href], input, [tabindex]:not([tabindex='-1'])",
  ) ?? triggerRef.value;

useDismissableLayer({
  active: isOpen,
  inside: [rootRef],
  closeOnEscape: () => props.closeOnEscape,
  closeOnOutside: () => props.closeOnClickOutside,
  onDismiss: (reason) => {
    setOpen(false);
    if (reason === "escape") triggerElement()?.focus();
  },
});

// ARIA belongs on the real control inside the trigger slot, not on the wrapper div.
watchPostEffect(() => {
  const element = triggerElement();
  if (!element) return;
  element.setAttribute("aria-haspopup", "dialog");
  element.setAttribute("aria-expanded", String(isOpen.value));
  if (isOpen.value) element.setAttribute("aria-controls", panelId);
  else element.removeAttribute("aria-controls");
});

watch(
  () => props.disabled,
  (disabled) => disabled && isOpen.value && setOpen(false),
);

onBeforeUnmount(() => {
  if (hoverTimer) clearTimeout(hoverTimer);
});

const panelClasses = computed(() => [
  "ms-popover-panel",
  `ms-popover-panel--placement-${props.placement}`,
  `ms-popover-panel--width-${props.width}`,
]);
</script>

<template>
  <div
    ref="rootRef"
    class="ms-popover-wrapper"
    data-ms-popover
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Trigger slot or wrapper -->
    <div ref="triggerRef" class="ms-popover__trigger" @click="onTriggerClick">
      <slot name="trigger" :is-open="isOpen" :toggle="toggle" />
    </div>

    <!-- Popover floating panel -->
    <div
      v-if="isOpen"
      :id="panelId"
      :class="panelClasses"
      role="dialog"
      :aria-labelledby="props.title || $slots.title ? titleId : undefined"
      tabindex="-1"
    >
      <div v-if="props.title || $slots.title" :id="titleId" class="ms-popover__header">
        <slot name="title">{{ props.title }}</slot>
      </div>

      <div class="ms-popover__body">
        <slot />
      </div>

      <div v-if="$slots.footer" class="ms-popover__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
