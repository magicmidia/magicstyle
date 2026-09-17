<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { MsSplitPaneProps, MsSplitPaneEmits } from "./types.ts";

const props = withDefaults(defineProps<MsSplitPaneProps>(), {
  direction: "horizontal",
  split: 50,
  min: 15,
  max: 85,
});

const emit = defineEmits<MsSplitPaneEmits>();

const currentSplit = ref(props.split);
const isDragging = ref(false);
const containerRef = ref<HTMLElement | null>(null);

watch(
  () => props.split,
  (val) => {
    currentSplit.value = val;
  },
);

const onMouseDown = (e: MouseEvent) => {
  e.preventDefault();
  isDragging.value = true;
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || !containerRef.value) return;
  const rect = containerRef.value.getBoundingClientRect();
  let percentage: number;

  if (props.direction === "horizontal") {
    percentage = ((e.clientX - rect.left) / rect.width) * 100;
  } else {
    percentage = ((e.clientY - rect.top) / rect.height) * 100;
  }

  const clamped = Math.max(props.min, Math.min(props.max, Math.round(percentage)));
  currentSplit.value = clamped;
  emit("update:split", clamped);
  emit("resize", clamped);
};

const onMouseUp = () => {
  isDragging.value = false;
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseup", onMouseUp);
};

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
      :aria-valuenow="currentSplit"
      @mousedown="onMouseDown"
    >
      <div class="ms-split-pane__gutter-handle" />
    </div>

    <div class="ms-split-pane__pane" :style="secondPaneStyle">
      <slot name="second" />
    </div>
  </div>
</template>
