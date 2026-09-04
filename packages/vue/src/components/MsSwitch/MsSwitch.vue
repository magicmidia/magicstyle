<script setup lang="ts">
import { computed } from "vue";
import { useFieldContext } from "../../composables/use-field-context.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsSwitchProps } from "./types.ts";

const props = defineProps<MsSwitchProps>();

const emit = defineEmits<{
  "update:checked": [checked: boolean];
}>();

const field = useFieldContext();
const resolvedId = useMsId("ms-switch");
const controlId = computed(() => field?.controlId ?? resolvedId);

function onChange(event: Event): void {
  emit("update:checked", (event.target as HTMLInputElement).checked);
}
</script>

<template>
  <label class="ms-switch" :data-disabled="props.disabled || undefined">
    <input
      :id="controlId"
      class="ms-switch-native"
      type="checkbox"
      role="switch"
      :checked="props.checked"
      :disabled="props.disabled"
      :name="props.name"
      :aria-checked="props.checked"
      @change="onChange"
    />
    <span class="ms-switch-track" aria-hidden="true" />
    <span v-if="props.label">{{ props.label }}</span>
  </label>
</template>
