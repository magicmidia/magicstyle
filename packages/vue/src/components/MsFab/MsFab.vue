<script setup lang="ts">
import { ref, computed } from "vue";
import type { MsFabProps, MsFabEmits, MsFabAction } from "./types.ts";

const props = withDefaults(defineProps<MsFabProps>(), {
  position: "bottom-right",
  label: "",
  icon: "+",
  actions: () => [],
});

const emit = defineEmits<MsFabEmits>();

const isSpeedDialOpen = ref(false);

const containerClasses = computed(() => [
  "ms-fab-container",
  `ms-fab-container--${props.position}`,
]);

const handleClick = () => {
  if (props.actions.length > 0) {
    isSpeedDialOpen.value = !isSpeedDialOpen.value;
  }
  emit("click");
};

const handleActionClick = (action: MsFabAction) => {
  emit("action-click", action);
  isSpeedDialOpen.value = false;
};
</script>

<template>
  <div :class="containerClasses">
    <!-- Speed-Dial Secondary Actions -->
    <div v-if="isSpeedDialOpen && props.actions.length > 0" class="ms-fab__speed-dial">
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
      type="button"
      class="ms-fab"
      :aria-expanded="props.actions.length > 0 ? (isSpeedDialOpen ? 'true' : 'false') : undefined"
      @click="handleClick"
    >
      <slot name="icon">
        <span class="ms-fab__icon">{{ props.icon }}</span>
      </slot>
      <span v-if="props.label" class="ms-fab__label">{{ props.label }}</span>
    </button>
  </div>
</template>
