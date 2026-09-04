<script setup lang="ts">
import { computed, inject } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsRadioGroupContext } from "../MsRadioGroup/types.ts";

const props = defineProps<{
  value: unknown;
  label?: string;
  disabled?: boolean;
}>();

const group = inject<MsRadioGroupContext>("ms-radio-group");

const fallbackName = useMsId("ms-radio");
const name = computed(() => group?.name ?? fallbackName);
const isChecked = computed(() => group?.modelValue === props.value);
const isDisabled = computed(() => group?.disabled === true || props.disabled === true);
const resolvedId = useMsId("ms-radio");
</script>

<template>
  <label class="ms-radio" :data-disabled="isDisabled || undefined">
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
    <span v-if="props.label">{{ props.label }}</span>
  </label>
</template>
