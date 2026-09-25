<template>
  <div
    ref="rootRef"
    :class="classes"
    :role="type === 'radio' ? 'radiogroup' : 'group'"
    :aria-disabled="disabled ? 'true' : undefined"
    @keydown="onKeydown"
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
    <!-- Native form submission: the items are ARIA widgets, not inputs. -->
    <template v-if="props.name && !props.disabled">
      <input
        v-for="value in submittedValues"
        :key="String(value)"
        type="hidden"
        :name="props.name"
        :value="value"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref } from "vue";
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

/** Values posted with a surrounding <form> (only when `name` is set). */
const submittedValues = computed<(string | number)[]>(() => {
  if (Array.isArray(props.modelValue)) return props.modelValue;
  return props.modelValue === undefined ? [] : [props.modelValue];
});

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

/** Items in registration (= render) order, for the radio group's single tab stop. */
const registered = reactive<{ value: string | number; disabled: () => boolean }[]>([]);

function register(value: string | number, disabled: () => boolean): () => void {
  const entry = { value, disabled };
  registered.push(entry);
  return () => {
    const index = registered.indexOf(entry);
    if (index !== -1) registered.splice(index, 1);
  };
}

/** Radio mode (APG radio group): Tab enters on the checked item, else the first enabled one. */
const tabbableValue = computed<string | number | undefined>(() => {
  const enabled = registered.filter((entry) => !entry.disabled());
  const checked = enabled.find((entry) => entry.value === props.modelValue);
  return (checked ?? enabled[0])?.value;
});

/** Radio mode: arrow keys move focus and selection to the previous/next enabled item (wrapping). */
function onKeydown(event: KeyboardEvent): void {
  if (props.type !== "radio" || props.disabled || !rootRef.value) return;
  const keys: Record<string, number> = {
    ArrowDown: 1,
    ArrowRight: 1,
    ArrowUp: -1,
    ArrowLeft: -1,
  };
  if (!(event.key in keys) && event.key !== "Home" && event.key !== "End") return;
  const radios = Array.from(
    rootRef.value.querySelectorAll<HTMLElement>('[role="radio"]:not([aria-disabled="true"])'),
  );
  if (radios.length === 0) return;
  const current = radios.findIndex((radio) => radio.contains(event.target as Node));
  let next: number;
  if (event.key === "Home") next = 0;
  else if (event.key === "End") next = radios.length - 1;
  else {
    const rtl = getComputedStyle(rootRef.value).direction === "rtl";
    let delta = keys[event.key]!;
    if (rtl && (event.key === "ArrowLeft" || event.key === "ArrowRight")) delta = -delta;
    next = current === -1 ? 0 : (current + delta + radios.length) % radios.length;
  }
  event.preventDefault();
  const target = radios[next]!;
  target.focus();
  target.click();
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
  register,
  isTabbable: (value) => props.type !== "radio" || tabbableValue.value === value,
};

provide(MS_CHOICEBOX_KEY, context);
</script>
