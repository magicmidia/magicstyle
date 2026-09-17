<template>
  <div
    ref="rootRef"
    :class="classes"
    :role="type === 'radio' ? 'radiogroup' : 'group'"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <slot>
      <!-- Render items prop if no slot provided -->
      <MsChoiceboxItem
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :title="item.title"
        :description="item.description"
        :badge="item.badge"
        :price="item.price"
        :icon="item.icon"
        :disabled="item.disabled"
        :tone="item.tone"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import MsChoiceboxItem from "./MsChoiceboxItem.vue";
import {
  MS_CHOICEBOX_KEY,
  type MsChoiceboxProps,
  type MsChoiceboxEmits,
  type MsChoiceboxContext,
} from "./types.ts";

defineOptions({
  name: "MsChoicebox",
});

const props = withDefaults(defineProps<MsChoiceboxProps>(), {
  items: () => [],
  type: "radio",
  layout: "vertical",
  columns: 2,
  size: "md",
  tone: "primary",
  indicatorPlacement: "left",
  disabled: false,
});

const emit = defineEmits<MsChoiceboxEmits>();

const rootRef = ref<HTMLElement | null>(null);
const generatedName = useMsId("choicebox");
const groupName = computed(() => props.name || generatedName);

const classes = computed(() => [
  "ms-choicebox",
  `ms-choicebox--${props.layout}`,
  props.layout === "grid" ? `ms-choicebox--cols-${props.columns}` : undefined,
]);

function isSelected(value: string | number): boolean {
  if (props.type === "radio") {
    return props.modelValue === value;
  }
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value);
  }
  return false;
}

function toggleValue(value: string | number) {
  if (props.disabled) return;

  if (props.type === "radio") {
    emit("update:modelValue", value);
    emit("change", value);
  } else {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const index = current.indexOf(value);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(value);
    }
    emit("update:modelValue", current);
    emit("change", current);
  }
}

const context: MsChoiceboxContext = {
  get type() {
    return props.type;
  },
  get size() {
    return props.size;
  },
  get tone() {
    return props.tone;
  },
  get indicatorPlacement() {
    return props.indicatorPlacement;
  },
  get disabled() {
    return props.disabled;
  },
  get name() {
    return groupName.value;
  },
  isSelected,
  toggleValue,
};

provide(MS_CHOICEBOX_KEY, context);
</script>
