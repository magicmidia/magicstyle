<script setup lang="ts">
import { computed, provide, toRef } from "vue";
import { type MsToggleGroupProps, type MsToggleGroupEmits, MsToggleGroupKey } from "./types.ts";
import MsToggleGroupItem from "./MsToggleGroupItem.vue";

const props = withDefaults(defineProps<MsToggleGroupProps>(), {
  multiple: false,
  mandatory: false,
  variant: "solid",
  size: "md",
  disabled: false,
  items: () => [],
});

const emit = defineEmits<MsToggleGroupEmits>();

const selectItem = (val: string) => {
  if (props.disabled) return;

  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const index = current.indexOf(val);
    if (index > -1) {
      if (props.mandatory && current.length === 1) return;
      current.splice(index, 1);
    } else {
      current.push(val);
    }
    emit("update:modelValue", current);
    emit("change", current);
  } else {
    if (props.modelValue === val) {
      if (props.mandatory) return;
      emit("update:modelValue", "");
      emit("change", "");
    } else {
      emit("update:modelValue", val);
      emit("change", val);
    }
  }
};

provide(MsToggleGroupKey, {
  modelValue: toRef(props, "modelValue"),
  multiple: toRef(props, "multiple"),
  disabled: toRef(props, "disabled"),
  size: toRef(props, "size"),
  selectItem,
});

const classes = computed(() => [
  "ms-toggle-group",
  `ms-toggle-group--${props.variant}`,
  `ms-toggle-group--${props.size}`,
]);
</script>

<template>
  <div :class="classes" role="group" :data-variant="props.variant" :data-size="props.size">
    <slot>
      <MsToggleGroupItem
        v-for="item in props.items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled ?? false"
      >
        {{ item.label || item.value }}
      </MsToggleGroupItem>
    </slot>
  </div>
</template>
