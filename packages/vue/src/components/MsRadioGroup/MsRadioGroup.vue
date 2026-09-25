<script setup lang="ts">
import { provide } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsRadioGroupContext, MsRadioGroupProps } from "./types.ts";
import { useFieldControl } from "../../composables/use-field-context.ts";

const props = defineProps<MsRadioGroupProps>();

const emit = defineEmits<{
  "update:modelValue": [value: unknown];
}>();

defineSlots<{
  default?(): unknown;
}>();

const groupName = useMsId("ms-radio");
const fieldControl = useFieldControl("ms-radio-group");

provide<MsRadioGroupContext>("ms-radio-group", {
  get name() {
    return props.name ?? groupName;
  },
  get disabled() {
    return props.disabled === true;
  },
  get modelValue() {
    return props.modelValue;
  },
  get size() {
    return props.size;
  },
  get tone() {
    return props.tone;
  },
  get card() {
    return props.card;
  },
  select: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div
    :id="fieldControl.id"
    :class="['ms-radio-group', `ms-radio-group--${props.orientation ?? 'horizontal'}`]"
    role="radiogroup"
    :aria-labelledby="fieldControl.labelledBy.value"
    :aria-describedby="fieldControl.describedBy.value"
    :aria-invalid="fieldControl.fieldInvalid.value || undefined"
  >
    <slot />
  </div>
</template>
