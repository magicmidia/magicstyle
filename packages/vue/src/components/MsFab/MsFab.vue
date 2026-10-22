<script setup lang="ts">
import { ref, computed, useAttrs } from "vue";
import type { MsFabProps, MsFabEmits, MsFabAction } from "./types.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";
import { controlAttrs, rootAttrs } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";

defineOptions({
  name: "MsFab",
  /** class/style stay on the positioned container; aria-label & co. go to the main button. */
  inheritAttrs: false,
});

const props = withDefaults(defineProps<MsFabProps>(), {
  position: "bottom-right",
  label: "",
  icon: "+",
  actions: () => [],
});

const emit = defineEmits<MsFabEmits>();

defineSlots<{
  /** Replaces the glyph of the main button. */
  icon?(): unknown;
}>();

const attrs = useAttrs();
const isSpeedDialOpen = ref(false);
const hasActions = computed(() => props.actions.length > 0);
const containerRef = ref<HTMLElement | null>(null);
const buttonRef = ref<HTMLButtonElement | null>(null);
const dialId = useMsId("ms-fab-dial");

const containerClasses = computed(() => [
  "ms-fab-container",
  `ms-fab-container--${props.position}`,
]);

/** Closes the speed dial; Escape (and action picks) hand focus back to the main button. */
function closeDial(restoreFocus: boolean): void {
  isSpeedDialOpen.value = false;
  if (restoreFocus) buttonRef.value?.focus();
}

useDismissableLayer({
  active: isSpeedDialOpen,
  inside: [containerRef],
  onDismiss: (reason) => closeDial(reason === "escape"),
});

const handleClick = () => {
  if (hasActions.value) {
    isSpeedDialOpen.value = !isSpeedDialOpen.value;
  }
  emit("click");
};

const handleActionClick = (action: MsFabAction) => {
  emit("action-click", action);
  closeDial(true);
};
</script>

<template>
  <div ref="containerRef" :class="containerClasses" v-bind="rootAttrs(attrs)">
    <!-- Speed-Dial Secondary Actions -->
    <div v-if="isSpeedDialOpen && hasActions" :id="dialId" class="ms-fab__speed-dial">
      <button
        v-for="action in props.actions"
        :key="action.id"
        type="button"
        class="ms-fab-action"
        :title="action.label"
        :aria-label="action.label"
        @click="handleActionClick(action)"
      >
        <span>{{ action.icon || "✦" }}</span>
      </button>
    </div>

    <!-- Main FAB Button -->
    <button
      ref="buttonRef"
      type="button"
      class="ms-fab"
      :aria-expanded="hasActions ? (isSpeedDialOpen ? 'true' : 'false') : undefined"
      :aria-controls="hasActions && isSpeedDialOpen ? dialId : undefined"
      v-bind="controlAttrs(attrs)"
      @click="handleClick"
    >
      <slot name="icon">
        <span class="ms-fab__icon">{{ props.icon }}</span>
      </slot>
      <span v-if="props.label" class="ms-fab__label">{{ props.label }}</span>
    </button>
  </div>
</template>
