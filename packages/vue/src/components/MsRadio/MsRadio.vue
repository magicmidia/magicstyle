<script setup lang="ts">
import { computed, getCurrentInstance, inject } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsRadioGroupContext, MsRadioSize, MsRadioTone } from "../MsRadioGroup/types.ts";

const props = defineProps<{
  value: unknown;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: MsRadioSize;
  tone?: MsRadioTone;
  card?: boolean;
}>();

defineSlots<{
  default?(): unknown;
  description?(): unknown;
}>();

const instance = getCurrentInstance();
const hasProp = (name: string) =>
  Boolean(
    instance?.vnode.props &&
    (name in instance.vnode.props || name.toLowerCase() in instance.vnode.props),
  );

const group = inject<MsRadioGroupContext>("ms-radio-group");

const fallbackName = useMsId("ms-radio");
const name = computed(() => group?.name ?? fallbackName);
const isChecked = computed(() => group?.modelValue === props.value);
const isDisabled = computed(() => group?.disabled === true || props.disabled === true);
const resolvedId = useMsId("ms-radio");

const resolvedSize = computed(() => (hasProp("size") ? props.size : group?.size) ?? "md");
const resolvedTone = computed(() => (hasProp("tone") ? props.tone : group?.tone) ?? "primary");
const resolvedCard = computed(() => (hasProp("card") ? props.card : group?.card) ?? false);

const rootClasses = computed(() => [
  "ms-radio",
  `ms-radio--${resolvedSize.value}`,
  `ms-radio--${resolvedTone.value}`,
  {
    "ms-radio--card": resolvedCard.value,
  },
]);
</script>

<template>
  <label
    :class="rootClasses"
    :data-disabled="isDisabled || undefined"
    :data-checked="isChecked || undefined"
  >
    <input
      :id="resolvedId"
      class="ms-radio-native"
      type="radio"
      :name="name"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="group?.select(props.value)"
    />
    <span class="ms-radio-dot" aria-hidden="true" />
    <div v-if="props.description || $slots.description" class="ms-radio-label-group">
      <span
        ><slot>{{ props.label }}</slot></span
      >
      <span class="ms-radio-description">
        <slot name="description">{{ props.description }}</slot>
      </span>
    </div>
    <span v-else-if="props.label || $slots.default">
      <slot>{{ props.label }}</slot>
    </span>
  </label>
</template>
