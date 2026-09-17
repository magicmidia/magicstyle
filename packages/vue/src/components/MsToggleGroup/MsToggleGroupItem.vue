<script setup lang="ts">
import { computed, inject } from "vue";
import { MsToggleGroupKey } from "./types.ts";

export interface MsToggleGroupItemProps {
  value: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<MsToggleGroupItemProps>(), {
  disabled: false,
});

const group = inject(MsToggleGroupKey, null);

const isSelected = computed(() => {
  if (!group) return false;
  const current = group.modelValue.value;
  if (Array.isArray(current)) {
    return current.includes(props.value);
  }
  return current === props.value;
});

const isDisabled = computed(() => {
  return props.disabled || group?.disabled.value || false;
});

const handleClick = () => {
  if (isDisabled.value || !group) return;
  group.selectItem(props.value);
};
</script>

<template>
  <button
    type="button"
    class="ms-toggle-group-item"
    :aria-pressed="isSelected ? 'true' : 'false'"
    :disabled="isDisabled"
    :data-value="props.value"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
