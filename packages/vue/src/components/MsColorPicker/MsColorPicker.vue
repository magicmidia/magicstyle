<script setup lang="ts">
import { computed } from "vue";
import type { MsColorPickerProps, MsColorPickerEmits } from "./types.ts";
import { useFieldControl } from "../../composables/use-field-context.ts";

const defaultSwatches = [
  "#6366f1", // Indigo
  "#3b82f6", // Blue
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#ec4899", // Pink
  "#8b5cf6", // Purple
  "#06b6d4", // Cyan
  "#84cc16", // Lime
  "#f97316", // Orange
  "#64748b", // Slate
  "#0f172a", // Dark
];

const props = withDefaults(defineProps<MsColorPickerProps>(), {
  modelValue: "#6366f1",
  showInput: true,
  disabled: false,
});

const emit = defineEmits<MsColorPickerEmits>();

const fieldControl = useFieldControl("ms-color-picker");

const activeSwatches = computed(() => props.swatches || defaultSwatches);

const updateColor = (newColor: string) => {
  if (props.disabled) return;
  emit("update:modelValue", newColor);
  emit("change", newColor);
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  updateColor(target.value);
};
</script>

<template>
  <div
    class="ms-color-picker"
    :class="{ 'ms-color-picker--disabled': props.disabled }"
    data-ms-color-picker
  >
    <div class="ms-color-picker__control">
      <!-- Native color trigger button -->
      <div class="ms-color-picker__preview-button" :style="{ backgroundColor: props.modelValue }">
        <input
          :id="fieldControl.id"
          type="color"
          class="ms-color-picker__native-input"
          :aria-label="fieldControl.field ? undefined : 'Selecionar cor'"
          :aria-describedby="fieldControl.describedBy.value"
          :value="props.modelValue"
          :disabled="props.disabled"
          @input="handleInput"
        />
      </div>

      <!-- Hex string input -->
      <input
        v-if="props.showInput"
        type="text"
        class="ms-color-picker__input"
        aria-label="Código hexadecimal da cor"
        :value="props.modelValue"
        :disabled="props.disabled"
        maxlength="9"
        @change="handleInput"
      />
    </div>

    <!-- Palette Swatches -->
    <div class="ms-color-picker__swatches">
      <button
        v-for="color in activeSwatches"
        :key="color"
        type="button"
        class="ms-color-picker__swatch"
        :class="{
          'ms-color-picker__swatch--active': props.modelValue.toLowerCase() === color.toLowerCase(),
        }"
        :style="{ backgroundColor: color }"
        :aria-label="`Selecionar cor ${color}`"
        :disabled="props.disabled"
        @click="updateColor(color)"
      />
    </div>
  </div>
</template>
