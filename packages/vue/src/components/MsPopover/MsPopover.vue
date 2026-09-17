<script setup lang="ts">
import { ref, computed, watch, getCurrentInstance, onMounted, onBeforeUnmount } from "vue";
import type { MsPopoverProps, MsPopoverEmits } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";

const props = withDefaults(defineProps<MsPopoverProps>(), {
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

const instance = getCurrentInstance();
const rootRef = ref<HTMLElement | null>(null);
const internalOpen = ref(false);

const isControlled = computed(() => {
  const vnodeProps = instance?.vnode.props;
  return Boolean(vnodeProps && ("open" in vnodeProps || "onUpdate:open" in vnodeProps));
});

watch(
  () => props.open,
  (val) => {
    if (val !== undefined) {
      internalOpen.value = val;
    }
  },
);

const isOpen = computed(() => (isControlled.value ? Boolean(props.open) : internalOpen.value));

const titleId = useMsId("ms-popover-title");

const setOpen = (value: boolean) => {
  if (props.disabled) return;
  internalOpen.value = value;
  emit("update:open", value);
  if (value) {
    emit("open");
  } else {
    emit("close");
  }
};

const toggle = () => {
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

const handleDocumentClick = (event: MouseEvent) => {
  if (!props.closeOnClickOutside || !isOpen.value) return;
  const target = event.target as Node | null;
  if (!target || !rootRef.value) return;
  if (rootRef.value.contains(target)) return;
  setOpen(false);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (props.closeOnEscape && isOpen.value && event.key === "Escape") {
    setOpen(false);
  }
};

onMounted(() => {
  if (typeof document !== "undefined") {
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    document.removeEventListener("click", handleDocumentClick);
    document.removeEventListener("keydown", handleKeydown);
  }
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
    @click.stop
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Trigger slot or wrapper -->
    <div
      class="ms-popover__trigger"
      aria-haspopup="dialog"
      :aria-expanded="isOpen"
      @click="props.trigger === 'click' ? toggle() : undefined"
    >
      <slot name="trigger" :is-open="isOpen" :toggle="toggle" />
    </div>

    <!-- Popover floating panel -->
    <div
      v-if="isOpen"
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
