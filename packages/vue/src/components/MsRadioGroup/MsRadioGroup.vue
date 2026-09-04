<script setup lang="ts">
import { provide } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsRadioGroupContext, MsRadioGroupProps } from "./types.ts";

const props = defineProps<MsRadioGroupProps>();

const emit = defineEmits<{
  "update:modelValue": [value: unknown];
}>();

defineSlots<{
  default?(): unknown;
}>();

const groupName = useMsId("ms-radio");

provide<MsRadioGroupContext>("ms-radio-group", {
  name: props.name ?? groupName,
  disabled: props.disabled === true,
  modelValue: props.modelValue,
  select: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="ms-radio-group" role="radiogroup">
    <slot />
  </div>
</template>
