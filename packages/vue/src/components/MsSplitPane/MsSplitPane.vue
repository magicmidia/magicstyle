<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from "vue";
import type { MsSplitPaneProps, MsSplitPaneEmits } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

const props = withDefaults(defineProps<MsSplitPaneProps>(), {
  direction: "horizontal",
  split: 50,
  min: 15,
  max: 85,
});

const emit = defineEmits<MsSplitPaneEmits>();

const t = useMsMessages();

const currentSplit = ref(props.split);
const isDragging = ref(false);
const containerRef = ref<HTMLElement | null>(null);
let rafId: number | null = null;

watch(
  () => props.split,
  (val) => {
    currentSplit.value = val;
  },
);

const setSplit = (value: number) => {
  const clamped = Math.max(props.min, Math.min(props.max, Math.round(value)));
  if (clamped === currentSplit.value) return;
  currentSplit.value = clamped;
  emit("update:split", clamped);
  emit("resize", clamped);
};

const isRtl = () =>
  props.direction === "horizontal" &&
  containerRef.value !== null &&
  getComputedStyle(containerRef.value).direction === "rtl";

// Pointer events cover mouse, touch and pen; capture keeps the drag alive outside the gutter.
const onPointerDown = (e: PointerEvent) => {
  if (e.button !== 0) return;
  e.preventDefault();
  isDragging.value = true;
  (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
};

const onPointerMove = (e: PointerEvent) => {
  if (!isDragging.value || !containerRef.value) return;
  if (rafId !== null) cancelAnimationFrame(rafId);

  const clientX = e.clientX;
  const clientY = e.clientY;

  rafId = requestAnimationFrame(() => {
    rafId = null;
    if (!containerRef.value) return;
    const rect = containerRef.value.getBoundingClientRect();
    if (props.direction === "horizontal") {
      const offset = isRtl() ? rect.right - clientX : clientX - rect.left;
      setSplit((offset / rect.width) * 100);
    } else {
      setSplit(((clientY - rect.top) / rect.height) * 100);
    }
  });
};

const onPointerUp = (e: PointerEvent) => {
  isDragging.value = false;
  (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
};

/** APG window splitter: arrows move by 1% (Shift: 10%), Home/End jump to min/max. */
const onKeydown = (e: KeyboardEvent) => {
  const step = e.shiftKey ? 10 : 1;
  const horizontal = props.direction === "horizontal";
  const forward = horizontal ? (isRtl() ? "ArrowLeft" : "ArrowRight") : "ArrowDown";
  const backward = horizontal ? (isRtl() ? "ArrowRight" : "ArrowLeft") : "ArrowUp";
  if (e.key === forward) setSplit(currentSplit.value + step);
  else if (e.key === backward) setSplit(currentSplit.value - step);
  else if (e.key === "Home") setSplit(props.min);
  else if (e.key === "End") setSplit(props.max);
  else return;
  e.preventDefault();
};

onBeforeUnmount(() => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
});

const classes = computed(() => ["ms-split-pane", `ms-split-pane--${props.direction}`]);

const firstPaneStyle = computed(() => {
  const size = `${currentSplit.value}%`;
  return props.direction === "horizontal"
    ? { width: size, flexShrink: 0 }
    : { height: size, flexShrink: 0 };
});

const secondPaneStyle = computed(() => ({
  flex: 1,
}));
</script>

<template>
  <div ref="containerRef" :class="classes" :data-split="currentSplit">
    <div class="ms-split-pane__pane" :style="firstPaneStyle">
      <slot name="first" />
    </div>

    <div
      class="ms-split-pane__gutter"
      :class="{ 'ms-split-pane__gutter--dragging': isDragging }"
      role="separator"
      tabindex="0"
      :aria-label="t.splitPane.resize"
      :aria-orientation="props.direction === 'horizontal' ? 'vertical' : 'horizontal'"
      :aria-valuenow="currentSplit"
      :aria-valuemin="props.min"
      :aria-valuemax="props.max"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @keydown="onKeydown"
    >
      <div class="ms-split-pane__gutter-handle" />
    </div>

    <div class="ms-split-pane__pane" :style="secondPaneStyle">
      <slot name="second" />
    </div>
  </div>
</template>
